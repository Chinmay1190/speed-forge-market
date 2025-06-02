
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">SuperBikes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's premier destination for world-class superbikes. We bring you the finest motorcycles 
            from legendary brands, combining passion, performance, and precision.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, SuperBikes emerged from a simple passion: to make the world's most 
                incredible motorcycles accessible to Indian riders. Our journey began when our founder, 
                a lifelong motorcycle enthusiast, realized the lack of a comprehensive platform for 
                premium superbikes in India.
              </p>
              <p>
                Today, we partner with 12+ world-renowned brands to offer over 60 premium superbikes, 
                from track-focused sport bikes to comfortable touring machines. Every bike in our 
                collection is carefully selected for its engineering excellence, performance capabilities, 
                and riding experience.
              </p>
              <p>
                We believe that every rider deserves to experience the thrill of premium motorcycles, 
                which is why we offer comprehensive financing options, expert guidance, and unparalleled 
                after-sales support.
              </p>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="SuperBikes Showroom"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center animate-fade-in">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">60+</div>
              <div className="text-muted-foreground">Premium Models</div>
            </CardContent>
          </Card>
          <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Global Brands</div>
            </CardContent>
          </Card>
          <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </CardContent>
          </Card>
          <Card className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We curate only the finest motorcycles that meet our stringent quality standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Building a passionate community of motorcycle enthusiasts across India.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Trust</h3>
                <p className="text-muted-foreground text-sm">
                  Transparent pricing, authentic products, and reliable service you can count on.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Embracing technology to enhance your motorcycle buying experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AK</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Arjun Kumar</h3>
                <p className="text-primary mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  20+ years in automotive industry. Passionate rider and motorcycle engineer.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PS</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Priya Sharma</h3>
                <p className="text-primary mb-2">Head of Operations</p>
                <p className="text-muted-foreground text-sm">
                  Expert in logistics and customer experience. Ensures smooth delivery nationwide.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">RG</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">Rajesh Gupta</h3>
                <p className="text-primary mb-2">Technical Director</p>
                <p className="text-muted-foreground text-sm">
                  Motorcycle technician with deep knowledge of all major brands and models.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To democratize access to premium motorcycles in India while building a community of 
                passionate riders. We envision a future where every motorcycle enthusiast can experience 
                the thrill of world-class superbikes, supported by exceptional service and expertise.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
