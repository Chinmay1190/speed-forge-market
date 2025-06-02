
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
          alt="Hero Superbike"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Feel the <span className="gradient-text">Power</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover India's most exclusive collection of superbikes from world-renowned brands
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/products">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
            <Link to="/about">
              Learn More
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
