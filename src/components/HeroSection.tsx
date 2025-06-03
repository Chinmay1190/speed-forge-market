
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Zap, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop", // Superbike
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1920&h=1080&fit=crop", // Racing bike
    "https://images.unsplash.com/photo-1558623252-e0271863affb?w=1920&h=1080&fit=crop", // Sport motorcycle
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1920&h=1080&fit=crop", // Custom bike
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Create particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 10 + 10}s`,
      }}
    />
  ));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Multiple Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero Superbike ${index + 1}`}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-purple-900/40"></div>
        
        {/* Particles */}
        <div className="particles">
          {particles}
        </div>

        {/* Dynamic Background Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(102, 126, 234, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Image Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Floating Icons */}
        <div className="absolute -top-20 -left-10 opacity-20">
          <Zap className="w-16 h-16 text-yellow-400 float" />
        </div>
        <div className="absolute -top-16 -right-8 opacity-20">
          <Star className="w-12 h-12 text-blue-400 float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute top-10 left-20 opacity-20">
          <Sparkles className="w-10 h-10 text-pink-400 float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-bounce-in">
            Feel the <span className="gradient-text neon-text">Power</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-3xl mb-8 text-gray-200 animate-slide-up glass p-6 rounded-2xl" style={{ animationDelay: '0.2s' }}>
            Discover India's most exclusive collection of superbikes from world-renowned brands
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 mb-8 animate-fade-in glass p-6 rounded-2xl" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-shimmer">60+</div>
              <div className="text-sm text-gray-300">Premium Bikes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-shimmer">12</div>
              <div className="text-sm text-gray-300">Top Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-shimmer">5★</div>
              <div className="text-sm text-gray-300">Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="magnetic-btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto">
              <Link to="/products">
                <Zap className="mr-2 w-6 h-6" />
                Shop Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="magnetic-btn glass border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
              <Link to="/about">
                <Star className="mr-2 w-6 h-6" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-2 glass p-3 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Authorized Dealer</span>
            </div>
            <div className="flex items-center space-x-2 glass p-3 rounded-lg">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm">Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2 glass p-3 rounded-lg">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-300">Scroll to explore</span>
            <ChevronDown className="w-8 h-8 glow-blue" />
          </div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse glow-blue"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse glow-purple" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-full animate-pulse glow-pink" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default HeroSection;
