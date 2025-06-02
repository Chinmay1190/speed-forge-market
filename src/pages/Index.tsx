
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Shield, Truck, CreditCard } from 'lucide-react';
import { brands, getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">SuperBikes</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Authentic Products</h3>
                <p className="text-muted-foreground">100% genuine superbikes from authorized dealers</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">Free nationwide delivery on all orders</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Easy Financing</h3>
                <p className="text-muted-foreground">Flexible payment options and EMI available</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                <p className="text-muted-foreground">24/7 customer support and maintenance services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="gradient-text">Superbikes</span>
            </h2>
            <Button asChild variant="outline">
              <Link to="/products">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Premium <span className="gradient-text">Brands</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <Link
                key={brand.id}
                to={`/brand/${brand.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{brand.logo}</div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {brand.country}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">60+</div>
              <div className="text-muted-foreground">Premium Superbikes</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">World-Class Brands</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and superbike news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
