
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import ProductCard from '@/components/ProductCard';
import { products, brands } from '@/data/products';

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [filters, setFilters] = useState({
    search: searchQuery,
    brands: [] as string[],
    categories: [] as string[],
    priceRange: 'all',
    inStock: false,
    sortBy: 'name'
  });

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand));
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-500k':
          filtered = filtered.filter(product => product.price < 500000);
          break;
        case '500k-1m':
          filtered = filtered.filter(product => product.price >= 500000 && product.price < 1000000);
          break;
        case '1m-2m':
          filtered = filtered.filter(product => product.price >= 1000000 && product.price < 2000000);
          break;
        case 'above-2m':
          filtered = filtered.filter(product => product.price >= 2000000);
          break;
      }
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [filters]);

  const handleBrandChange = (brandId: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      brands: checked 
        ? [...prev.brands, brandId]
        : prev.brands.filter(b => b !== brandId)
    }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      categories: checked 
        ? [...prev.categories, category]
        : prev.categories.filter(c => c !== category)
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      brands: [],
      categories: [],
      priceRange: 'all',
      inStock: false,
      sortBy: 'name'
    });
  };

  const FilterPanel = ({ className = '' }) => (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h3 className="font-semibold mb-3">Search</h3>
        <Input
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
        />
      </div>

      <div>
        <h3 className="font-semibold mb-3">Brands</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox
                id={brand.id}
                checked={filters.brands.includes(brand.id)}
                onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
              />
              <label htmlFor={brand.id} className="text-sm cursor-pointer">
                {brand.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <Select value={filters.priceRange} onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="under-500k">Under ₹5,00,000</SelectItem>
            <SelectItem value="500k-1m">₹5,00,000 - ₹10,00,000</SelectItem>
            <SelectItem value="1m-2m">₹10,00,000 - ₹20,00,000</SelectItem>
            <SelectItem value="above-2m">Above ₹20,00,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="inStock"
          checked={filters.inStock}
          onCheckedChange={(checked) => setFilters(prev => ({ ...prev, inStock: checked as boolean }))}
        />
        <label htmlFor="inStock" className="text-sm cursor-pointer">
          In Stock Only
        </label>
      </div>

      <Button variant="outline" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <FilterPanel className="mt-6" />
                  </SheetContent>
                </Sheet>

                <div className="text-sm text-muted-foreground">
                  {filteredProducts.length} products found
                </div>
              </div>

              <Select value={filters.sortBy} onValueChange={(value) => setFilters(prev => ({ ...prev, sortBy: value }))}>
                <SelectTrigger className="w-48">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {(filters.brands.length > 0 || filters.categories.length > 0 || filters.priceRange !== 'all' || filters.inStock) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.brands.map(brandId => {
                  const brand = brands.find(b => b.id === brandId);
                  return brand ? (
                    <Badge key={brandId} variant="secondary" className="cursor-pointer" onClick={() => handleBrandChange(brandId, false)}>
                      {brand.name} ×
                    </Badge>
                  ) : null;
                })}
                {filters.categories.map(category => (
                  <Badge key={category} variant="secondary" className="cursor-pointer" onClick={() => handleCategoryChange(category, false)}>
                    {category} ×
                  </Badge>
                ))}
                {filters.priceRange !== 'all' && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setFilters(prev => ({ ...prev, priceRange: 'all' }))}>
                    Price Filter ×
                  </Badge>
                )}
                {filters.inStock && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setFilters(prev => ({ ...prev, inStock: false }))}>
                    In Stock Only ×
                  </Badge>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
