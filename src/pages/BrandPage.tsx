
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { getBrandById, getProductsByBrand } from '@/data/products';

const BrandPage = () => {
  const { brandId } = useParams<{ brandId: string }>();
  
  const brand = brandId ? getBrandById(brandId) : null;
  const products = brandId ? getProductsByBrand(brandId) : [];

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Brand Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Products
        </Link>

        {/* Brand Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-8xl mb-4">{brand.logo}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{brand.name}</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {brand.description}
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div>
              <span className="font-semibold">Founded:</span> {brand.founded}
            </div>
            <div>
              <span className="font-semibold">Country:</span> {brand.country}
            </div>
            <div>
              <span className="font-semibold">Products:</span> {products.length}
            </div>
          </div>
        </div>

        {/* Brand Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center animate-fade-in">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{products.length}</div>
              <div className="text-muted-foreground">Models Available</div>
            </CardContent>
          </Card>
          <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                ₹{Math.min(...products.map(p => p.price)).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-muted-foreground">Starting Price</div>
            </CardContent>
          </Card>
          <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)}★
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-8">
            {brand.name} Collection ({products.length} models)
          </h2>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No products available</h3>
              <p className="text-muted-foreground">Check back soon for new arrivals from {brand.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
