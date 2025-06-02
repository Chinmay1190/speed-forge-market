
import React, { useState } from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Arjun Sharma',
    rating: 5,
    comment: 'Absolutely amazing bike! The performance is outstanding and the build quality is top-notch.',
    date: '2024-05-15',
    verified: true,
    helpful: 12
  },
  {
    id: '2',
    author: 'Priya Patel',
    rating: 4,
    comment: 'Great bike overall. The only minor issue is the seat comfort on long rides.',
    date: '2024-05-10',
    verified: true,
    helpful: 8
  },
  {
    id: '3',
    author: 'Rajesh Kumar',
    rating: 5,
    comment: 'Best investment I made this year. The acceleration is incredible!',
    date: '2024-05-05',
    verified: false,
    helpful: 15
  }
];

const ReviewSection = () => {
  const [reviews] = useState<Review[]>(mockReviews);

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

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Customer Reviews</h3>
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(Math.round(averageRating))}</div>
          <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
          <span className="text-muted-foreground">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="animate-fade-in">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold">{review.author}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">{review.comment}</p>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ThumbsUp className="w-4 h-4 mr-1" />
                Helpful ({review.helpful})
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
