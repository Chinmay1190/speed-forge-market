import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Shield, Truck, CreditCard, Phone, Award, Clock, Zap, Heart, Users, TrendingUp } from 'lucide-react';
import { brands, getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  // Brand logo mapping
  const brandLogos = {
    'kawasaki': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=120&fit=crop',
    'yamaha': 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=200&h=120&fit=crop',
    'honda': 'https://images.unsplash.com/photo-1558623252-e0271863affb?w=200&h=120&fit=crop',
    'ducati': 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=200&h=120&fit=crop',
    'bmw': 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=120&fit=crop',
    'harley-davidson': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=120&fit=crop',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section with Superbike Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Background Superbike"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-muted/80 via-background/90 to-muted/70"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-primary"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">SuperBikes</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the ultimate in superbike shopping with our premium services and unmatched quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover gradient-border text-center group animate-fade-in">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center glow-blue group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-shimmer">Authentic Products</h3>
                <p className="text-muted-foreground">100% genuine superbikes from authorized dealers with warranty</p>
                <Badge className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600">Verified</Badge>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border text-center group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center glow-blue group-hover:scale-110 transition-transform">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-shimmer">Free Delivery</h3>
                <p className="text-muted-foreground">Free nationwide delivery with professional setup and demo</p>
                <Badge className="mt-4 bg-gradient-to-r from-green-500 to-blue-500">Nationwide</Badge>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border text-center group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center glow-purple group-hover:scale-110 transition-transform">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-shimmer">Easy Financing</h3>
                <p className="text-muted-foreground">Flexible payment options and instant EMI approval</p>
                <Badge className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500">0% Interest</Badge>
              </CardContent>
            </Card>

            <Card className="card-hover gradient-border text-center group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center glow-pink group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-shimmer">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock expert support and maintenance services</p>
                <Badge className="mt-4 bg-gradient-to-r from-orange-500 to-red-500">Always Available</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Indicators */}
      <section className="py-20 bg-gradient-to-r from-primary via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in">
              <div className="relative mb-4">
                <Award className="w-20 h-20 mx-auto glow-blue" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-text">Certified Dealer</h3>
              <p className="text-white/80">Authorized dealer for all major superbike brands with official certifications</p>
            </div>

            <div className="animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative mb-4">
                <Clock className="w-20 h-20 mx-auto glow-blue" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-text">Quick Processing</h3>
              <p className="text-white/80">Lightning-fast loan approval and documentation in under 24 hours</p>
            </div>

            <div className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-4">
                <Shield className="w-20 h-20 mx-auto glow-blue" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-blue-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-text">Extended Warranty</h3>
              <p className="text-white/80">Comprehensive warranty packages and premium service plans</p>
            </div>

            <div className="animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-4">
                <Users className="w-20 h-20 mx-auto glow-blue" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-purple-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-text">Expert Team</h3>
              <p className="text-white/80">Professional mechanics and advisors with 10+ years experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="gradient-text">Superbikes</span>
              </h2>
              <p className="text-xl text-muted-foreground">Handpicked premium motorcycles for the ultimate riding experience</p>
            </div>
            <Button asChild variant="outline" size="lg" className="magnetic-btn gradient-border">
              <Link to="/products">
                View All Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Brands Section with Logos */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1920&h=1080&fit=crop"
            alt="Background Motorcycle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="gradient-text">Brands</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with the world's most prestigious motorcycle manufacturers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Link
                key={brand.id}
                to={`/brand/${brand.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="card-hover gradient-border text-center group-hover:glow-blue overflow-hidden">
                  <CardContent className="p-0">
                    {/* Brand Logo Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={brandLogos[brand.id as keyof typeof brandLogos] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=120&fit=crop'}
                        alt={`${brand.name} motorcycle`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Brand Emoji/Logo Overlay */}
                      <div className="absolute top-4 left-4 text-4xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-125 transition-transform">
                        {brand.logo}
                      </div>
                    </div>
                    
                    {/* Brand Info */}
                    <div className="p-6">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors mb-2">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {brand.country}
                      </p>
                      <Badge variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Authorized
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-6 h-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border border-white/10 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
              Our <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-white/80">Numbers that speak for our excellence and customer satisfaction</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in glass p-8 rounded-2xl">
              <div className="text-5xl md:text-6xl font-bold text-shimmer mb-3">60+</div>
              <div className="text-white/80 text-lg">Premium Superbikes</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="animate-bounce-in glass p-8 rounded-2xl" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-bold text-shimmer mb-3">12</div>
              <div className="text-white/80 text-lg">World-Class Brands</div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="animate-bounce-in glass p-8 rounded-2xl" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold text-shimmer mb-3">1000+</div>
              <div className="text-white/80 text-lg">Happy Customers</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="animate-bounce-in glass p-8 rounded-2xl" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-bold text-shimmer mb-3">5★</div>
              <div className="text-white/80 text-lg">Customer Rating</div>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Enhanced Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="particles">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, 
              and the latest superbike news. Join our community of motorcycle enthusiasts!
            </p>
            
            <div className="glass p-8 rounded-2xl max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-black bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/50 text-lg"
                />
                <Button size="lg" className="magnetic-btn bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex justify-center items-center space-x-6 mt-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>Exclusive Offers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>No Spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
