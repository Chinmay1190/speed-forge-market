
import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '@/data/products';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-xl gradient-text">SuperBikes</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              India's premier superbike destination. Discover the world's most powerful and beautiful motorcycles.
            </p>
            <div className="flex space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              <div className="w-6 h-6 bg-pink-600 rounded-full"></div>
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-muted-foreground hover:text-foreground transition-colors">
                All Products
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-foreground transition-colors">
                Shopping Cart
              </Link>
            </div>
          </div>

          {/* Top Brands */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Top Brands</h3>
            <div className="space-y-2">
              {brands.slice(0, 6).map((brand) => (
                <Link 
                  key={brand.id}
                  to={`/brand/${brand.id}`} 
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>📍 Mumbai, Maharashtra, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@superbikes.in</p>
              <p>🕒 Mon-Sat: 9:00 AM - 8:00 PM</p>
              <p>🕒 Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SuperBikes India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms & Conditions
            </Link>
            <Link to="/warranty" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Warranty
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
