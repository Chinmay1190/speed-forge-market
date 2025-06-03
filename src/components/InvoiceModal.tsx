
import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Printer, X } from 'lucide-react';
import Invoice from './Invoice';
import { useReactToPrint } from 'react-to-print';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  customerDetails?: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

const InvoiceModal = ({ isOpen, onClose, orderNumber, customerDetails }: InvoiceModalProps) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: `Invoice-${orderNumber}`,
  });

  const handleDownload = () => {
    if (invoiceRef.current) {
      const element = invoiceRef.current;
      const opt = {
        margin: 0.5,
        filename: `Invoice-${orderNumber}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      
      // Simple download functionality - in a real app, you'd use html2pdf or similar
      window.print();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>Invoice #{orderNumber}</DialogTitle>
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
