
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
  const subtotal = getTotalPrice();
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="invoice-container bg-white text-black p-8 max-w-4xl mx-auto" id="invoice">
      {/* Invoice Header */}
      <div className="mb-8 border-b pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 mb-2">SuperBikes Store</h1>
            <p className="text-gray-600">Premium Superbikes & Accessories</p>
            <div className="mt-2 text-sm text-gray-500">
              <p>123 Speed Lane, Racing District</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>GST: 27AAAAA0000A1Z5</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: sales@superbikes.com</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">INVOICE</h2>
            <div className="text-sm">
              <p><span className="font-semibold">Invoice #:</span> {orderNumber}</p>
              <p><span className="font-semibold">Date:</span> {invoiceDate}</p>
              <p><span className="font-semibold">Due Date:</span> Paid</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Bill To:</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold">{customerDetails?.name || 'Valued Customer'}</p>
          <p>{customerDetails?.email || 'customer@email.com'}</p>
          <p>{customerDetails?.phone || '+91 XXXXX XXXXX'}</p>
          <p className="mt-2">{customerDetails?.address || 'Customer Address'}</p>
        </div>
      </div>

      {/* Invoice Items */}
      <div className="mb-8">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-semibold text-gray-800">S.No</TableHead>
              <TableHead className="font-semibold text-gray-800">Product</TableHead>
              <TableHead className="font-semibold text-gray-800 text-center">Qty</TableHead>
              <TableHead className="font-semibold text-gray-800 text-right">Rate</TableHead>
              <TableHead className="font-semibold text-gray-800 text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                  </div>
                </TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-right">{formatPrice(item.price)}</TableCell>
                <TableCell className="text-right font-medium">{formatPrice(item.price * item.quantity)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Invoice Summary */}
      <div className="flex justify-end mb-8">
        <div className="w-80">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>GST (18%):</span>
              <span>{formatPrice(gst)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="mb-8 bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Payment Information</h3>
        <div className="text-sm text-green-700">
          <p><span className="font-medium">Status:</span> Paid</p>
          <p><span className="font-medium">Payment Method:</span> Online Payment</p>
          <p><span className="font-medium">Transaction ID:</span> TXN{orderNumber}#{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="border-t pt-6">
        <h3 className="font-semibold mb-3 text-gray-800">Terms & Conditions:</h3>
        <div className="text-xs text-gray-600 space-y-1">
          <p>• Delivery will be completed within 7-14 business days from the date of invoice.</p>
          <p>• Free shipping is applicable for all superbike purchases.</p>
          <p>• Warranty terms apply as per manufacturer guidelines.</p>
          <p>• For any queries, please contact our customer support.</p>
          <p>• This invoice is computer generated and does not require a signature.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t text-sm text-gray-500">
        <p>Thank you for choosing SuperBikes Store!</p>
        <p>For support: support@superbikes.com | +91 98765 43210</p>
      </div>
    </div>
  );
};

export default Invoice;
