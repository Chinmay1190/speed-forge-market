
import React, { useState } from 'react';
import { X, ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  products
}) => {
  if (products.length !== 2) return null;

  const [product1, product2] = products;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const specs = [
    { label: 'Brand', getValue: (p: Product) => p.brand },
    { label: 'Category', getValue: (p: Product) => p.category },
    { label: 'Price', getValue: (p: Product) => formatPrice(p.price) },
    { label: 'Rating', getValue: (p: Product) => `${p.rating}/5 (${p.reviews} reviews)` },
    { label: 'Availability', getValue: (p: Product) => p.inStock ? 'In Stock' : 'Out of Stock' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center space-x-2">
            <span>Compare Bikes</span>
            <ArrowLeftRight className="w-5 h-5" />
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img
              src={product1.image}
              alt={product1.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold">{product1.name}</h3>
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-muted-foreground">{spec.label}:</span>
                <span className="font-medium">{spec.getValue(product1)}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <img
              src={product2.image}
              alt={product2.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold">{product2.name}</h3>
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-muted-foreground">{spec.label}:</span>
                <span className="font-medium">{spec.getValue(product2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close Comparison</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;
