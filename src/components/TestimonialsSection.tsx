
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Vikram Singh',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    comment: 'Exceptional service and genuine products. My Ducati Panigale arrived exactly as promised. The team was professional throughout.',
    bike: 'Ducati Panigale V4'
  },
  {
    id: 2,
    name: 'Anita Reddy',
    location: 'Bangalore, Karnataka',
    rating: 5,
    comment: 'Amazing experience! The financing options made it easy to get my dream bike. Highly recommend SuperBikes India.',
    bike: 'Kawasaki Ninja H2'
  },
  {
    id: 3,
    name: 'Rohit Mehta',
    location: 'Delhi, NCR',
    rating: 5,
    comment: 'Fast delivery, excellent customer support, and the bike is absolutely perfect. Worth every rupee!',
    bike: 'BMW S1000RR'
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with SuperBikes India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs text-primary">{testimonial.bike}</p>
                    </div>
                  </div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
