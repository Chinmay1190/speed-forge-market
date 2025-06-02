
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onCompare?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onCompare }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist!`);
    }
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCompare) {
      onCompare(product);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in relative">
        <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
          <Button
            size="icon"
            variant="ghost"
            className="bg-background/80 hover:bg-background"
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`w-4 h-4 ${
                isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''
              }`}
            />
          </Button>
          {onCompare && (
            <Button
              size="icon"
              variant="ghost"
              className="bg-background/80 hover:bg-background"
              onClick={handleCompare}
            >
              <BarChart3 className="w-4 h-4" />
            </Button>
          )}
        </div>

        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          {product.originalPrice && (
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
              SALE
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute bottom-4 left-4">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {product.brand.toUpperCase()}
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-muted-foreground line-through text-sm">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0">
          <Button 
            className="w-full" 
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
