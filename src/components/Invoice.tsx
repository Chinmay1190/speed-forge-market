
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCart } from '@/contexts/CartContext';

interface InvoiceProps {
  orderNumber: string;
  customerDetails?: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

const Invoice = ({ orderNumber, customerDetails }: InvoiceProps) => {
  const { items, getTotalPrice } = useCart();
  const invoiceDate = new Date().toLocaleDateString('en-IN');
  const dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN');
  
  const subtotal = getTotalPrice();
  const shippingCharges = 0; // Free shipping for superbikes
  const gst = subtotal * 0.18; // 18% GST
  const total = subtotal + shippingCharges + gst;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const paymentInfo = {
    method: 'Online Payment (Credit/Debit Card)',
    status: 'PAID',
    transactionId: `TXN${orderNumber}${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
    paymentDate: invoiceDate,
    bankReference: `REF${Math.random().toString(36).substr(2, 12).toUpperCase()}`
  };

  return (
    <div className="invoice-container bg-white text-black p-8 max-w-4xl mx-auto font-sans" id="invoice">
      {/* Company Header */}
      <div className="mb-8 border-b-2 border-blue-600 pb-6">
        <div className="flex justify-between items-start">
          <div className="company-info">
            <h1 className="text-4xl font-bold text-blue-600 mb-3">SuperBikes Store</h1>
            <p className="text-lg text-gray-700 mb-4">Premium Superbikes & Racing Accessories</p>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="font-medium">Corporate Office:</p>
              <p>123 Speed Lane, Racing District</p>
              <p>Mumbai, Maharashtra 400001, India</p>
              <p className="mt-2"><span className="font-medium">GST No:</span> 27AAAAA0000A1Z5</p>
              <p><span className="font-medium">PAN No:</span> AAAAA0000A</p>
              <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
              <p><span className="font-medium">Email:</span> sales@superbikes.com</p>
              <p><span className="font-medium">Website:</span> www.superbikes.com</p>
            </div>
          </div>
          <div className="invoice-details text-right">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h2 className="text-3xl font-bold text-blue-800 mb-3">TAX INVOICE</h2>
              <div className="text-sm space-y-1">
                <p><span className="font-semibold">Invoice No:</span> {orderNumber}</p>
                <p><span className="font-semibold">Invoice Date:</span> {invoiceDate}</p>
                <p><span className="font-semibold">Due Date:</span> {dueDate}</p>
                <p><span className="font-semibold">Place of Supply:</span> Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer & Billing Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Bill To */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b border-gray-300 pb-1">Bill To:</h3>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="font-semibold text-lg mb-2">{customerDetails?.name || 'Valued Customer'}</p>
            <p className="text-gray-700">{customerDetails?.email || 'customer@email.com'}</p>
            <p className="text-gray-700">{customerDetails?.phone || '+91 XXXXX XXXXX'}</p>
            <div className="mt-3">
              <p className="font-medium text-gray-800">Billing Address:</p>
              <p className="text-gray-700">{customerDetails?.address || 'Customer Address, City, State, PIN'}</p>
            </div>
          </div>
        </div>

        {/* Ship To */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b border-gray-300 pb-1">Ship To:</h3>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="font-semibold text-lg mb-2">{customerDetails?.name || 'Valued Customer'}</p>
            <div className="mt-3">
              <p className="font-medium text-gray-800">Shipping Address:</p>
              <p className="text-gray-700">{customerDetails?.address || 'Same as billing address'}</p>
            </div>
            <div className="mt-3 text-sm">
              <p><span className="font-medium">Expected Delivery:</span> 7-14 business days</p>
              <p><span className="font-medium">Shipping Method:</span> Free Home Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Items Table */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Order Details</h3>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-bold text-gray-800 border-r">S.No</TableHead>
                <TableHead className="font-bold text-gray-800 border-r">Product Description</TableHead>
                <TableHead className="font-bold text-gray-800 text-center border-r">HSN/SAC</TableHead>
                <TableHead className="font-bold text-gray-800 text-center border-r">Qty</TableHead>
                <TableHead className="font-bold text-gray-800 text-right border-r">Rate (₹)</TableHead>
                <TableHead className="font-bold text-gray-800 text-right border-r">Discount</TableHead>
                <TableHead className="font-bold text-gray-800 text-right">Amount (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={item.id} className="border-b">
                  <TableCell className="border-r">{index + 1}</TableCell>
                  <TableCell className="border-r">
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Brand: {item.brand}</p>
                      <p className="text-xs text-gray-500 mt-1">Premium Superbike with advanced features</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center border-r text-sm">8711</TableCell>
                  <TableCell className="text-center border-r font-medium">{item.quantity}</TableCell>
                  <TableCell className="text-right border-r font-medium">{formatPrice(item.price)}</TableCell>
                  <TableCell className="text-right border-r text-green-600">₹0</TableCell>
                  <TableCell className="text-right font-semibold">{formatPrice(item.price * item.quantity)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Amount Summary */}
      <div className="flex justify-end mb-8">
        <div className="w-96">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-3 border-b">
              <h4 className="font-semibold text-gray-800">Amount Summary</h4>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charges:</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span className="text-green-600">₹0</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between">
                  <span>CGST (9%):</span>
                  <span>{formatPrice(gst / 2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST (9%):</span>
                  <span>{formatPrice(gst / 2)}</span>
                </div>
              </div>
              <div className="border-t-2 border-gray-400 pt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount:</span>
                  <span className="text-blue-600">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Payment Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">Payment Status</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Status:</span> <span className="text-green-700 font-bold">{paymentInfo.status}</span></p>
              <p><span className="font-medium">Payment Method:</span> {paymentInfo.method}</p>
              <p><span className="font-medium">Payment Date:</span> {paymentInfo.paymentDate}</p>
              <p><span className="font-medium">Amount Paid:</span> <span className="font-bold">{formatPrice(total)}</span></p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">Transaction Details</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Transaction ID:</span> {paymentInfo.transactionId}</p>
              <p><span className="font-medium">Bank Reference:</span> {paymentInfo.bankReference}</p>
              <p><span className="font-medium">Payment Gateway:</span> Secure Payment Portal</p>
              <p><span className="font-medium">Authorization:</span> Approved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="border-t-2 border-gray-300 pt-6 mb-6">
        <h3 className="font-semibold mb-4 text-gray-800">Terms & Conditions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-600">
          <div>
            <ul className="space-y-1">
              <li>• Delivery will be completed within 7-14 business days from invoice date.</li>
              <li>• Free shipping is applicable for all superbike purchases above ₹50,000.</li>
              <li>• Product warranty as per manufacturer guidelines (12-24 months).</li>
              <li>• Installation and setup support included in the purchase.</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>• Returns accepted within 7 days of delivery in original packaging.</li>
              <li>• Customer support available 24/7 for first year after purchase.</li>
              <li>• This is a computer-generated invoice and does not require signature.</li>
              <li>• For queries: support@superbikes.com | +91 98765 43210</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
        <h4 className="font-semibold text-yellow-800 mb-2">Declaration:</h4>
        <p className="text-xs text-yellow-700">
          We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct. 
          The goods sold are intended for end use consumption and not for resale.
        </p>
      </div>

      {/* Footer */}
      <div className="text-center border-t pt-6">
        <div className="mb-4">
          <p className="text-lg font-semibold text-blue-600">Thank you for choosing SuperBikes Store!</p>
          <p className="text-sm text-gray-600">Your trust drives our passion for excellence.</p>
        </div>
        <div className="text-xs text-gray-500 space-y-1">
          <p>For support and queries: support@superbikes.com | +91 98765 43210</p>
          <p>Visit us at: www.superbikes.com | Follow us on social media @SuperBikesStore</p>
        </div>
        <div className="mt-4 text-right">
          <div className="inline-block">
            <p className="text-sm font-medium text-gray-700">For SuperBikes Store</p>
            <div className="mt-8 border-t border-gray-400 pt-2">
              <p className="text-xs text-gray-600">Authorized Signatory</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
