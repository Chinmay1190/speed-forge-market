
import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Printer, X } from 'lucide-react';
import Invoice from './Invoice';
import { useReactToPrint } from 'react-to-print';

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  customerDetails?: CustomerDetails;
}

const InvoiceModal = ({ isOpen, onClose, orderNumber, customerDetails }: InvoiceModalProps) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: `Invoice-${orderNumber}`,
  });

  const handleDownload = () => {
    if (invoiceRef.current) {
      // Simple download functionality - in a real app, you'd use html2pdf or similar
      window.print();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle>Invoice #{orderNumber}</DialogTitle>
              <DialogDescription>
                Detailed invoice for your superbike purchase with complete payment and delivery information.
              </DialogDescription>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleDownload} size="sm" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button onClick={handlePrint} size="sm" variant="outline">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button onClick={onClose} size="sm" variant="ghost">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div ref={invoiceRef}>
          <Invoice orderNumber={orderNumber} customerDetails={customerDetails} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceModal;
