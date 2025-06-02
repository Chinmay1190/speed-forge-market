
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Gift, Truck, Star, Home, ShoppingBag, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PaymentSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [orderNumber] = useState(() => 
    'SB' + Math.random().toString(36).substr(2, 9).toUpperCase()
  );

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Your superbike will be delivered for free',
      delay: '0.2s'
    },
    {
      icon: Gift,
      title: 'Welcome Gift',
      description: 'Complimentary helmet and accessories',
      delay: '0.4s'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: '24/7 customer support for 1 year',
      delay: '0.6s'
    }
  ];

  return (
    <div className="min-h-screen py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-6">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                <div className="relative bg-green-500 w-24 h-24 rounded-full flex items-center justify-center animate-zoom-in">
                  <Check className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-slide-in">
              Payment Successful!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Thank you for your purchase! Your superbike order has been confirmed.
            </p>
            
            <Badge variant="secondary" className="text-lg px-4 py-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Order #{orderNumber}
            </Badge>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Order Confirmed</h3>
                  <p className="text-sm text-muted-foreground">Your order has been successfully placed and is being processed</p>
                </div>
                
                <div className="animate-scale-in" style={{ animationDelay: '1s' }}>
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Processing</h3>
                  <p className="text-sm text-muted-foreground">We're preparing your superbike for shipment</p>
                </div>
                
                <div className="animate-scale-in" style={{ animationDelay: '1.2s' }}>
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Delivery</h3>
                  <p className="text-sm text-muted-foreground">Expected delivery within 7-14 business days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: benefit.delay }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <Button asChild size="lg" className="min-w-[200px]">
              <Link to="/" className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <Download className="w-4 h-4 mr-2" />
              Download Invoice
            </Button>
            
            <Button variant="secondary" asChild size="lg" className="min-w-[200px]">
              <Link to="/products" className="flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Continue Shopping</span>
              </Link>
            </Button>
          </div>

          {/* Follow-up Message */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none animate-fade-in" style={{ animationDelay: '1.6s' }}>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">What's Next?</h3>
              <p className="text-muted-foreground mb-4">
                We'll send you a confirmation email with tracking details. You can also track your order status in your account dashboard.
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <span className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Email confirmation sent</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>SMS updates enabled</span>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
