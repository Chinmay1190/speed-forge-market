
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="gradient-text">SuperBikes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our superbikes? Need expert advice? Our team is here to help you 
            find your perfect ride.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Visit Our Showroom</h3>
                      <p className="text-muted-foreground text-sm">
                        123 MG Road, Bandra West<br />
                        Mumbai, Maharashtra 400050<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground text-sm">
                        +91 98765 43210<br />
                        +91 98765 43211 (Sales)<br />
                        +91 98765 43212 (Support)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm">
                        info@superbikes.in<br />
                        sales@superbikes.in<br />
                        support@superbikes.in
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Saturday: 9:00 AM - 8:00 PM<br />
                        Sunday: 10:00 AM - 6:00 PM<br />
                        Holidays: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Headphones className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Book Test Ride
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What can we help you with?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Do you offer financing options?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we partner with leading banks and NBFCs to offer attractive financing options 
                  with flexible EMI plans starting from 12 to 60 months.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Is delivery available nationwide?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! We provide free delivery across India. Our logistics team ensures 
                  your superbike reaches you safely and on time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Can I test ride before buying?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we encourage test rides! Schedule an appointment with us, and our experts 
                  will arrange a test ride for your preferred motorcycle.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What about after-sales service?</h3>
                <p className="text-muted-foreground text-sm">
                  We provide comprehensive after-sales support including maintenance, genuine parts, 
                  and 24/7 roadside assistance across India.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 animate-fade-in">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Bike?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our experts are standing by to help you choose the perfect superbike. 
                Get personalized recommendations based on your riding style and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Browse Our Collection
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
