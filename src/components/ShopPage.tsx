import React, { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ShopPageProps {
  initialCategory?: string;
  onOpenDetail: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  initialCategory,
  onOpenDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'All'
  );
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allCategoryNames = ['All', ...CATEGORIES.map((c) => c.name)];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Price range
      if (priceRange === 'under-500' && p.price >= 500) return false;
      if (priceRange === '500-800' && (p.price < 500 || p.price > 800)) return false;
      if (priceRange === 'above-800' && p.price <= 800) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const match =
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query));
        if (!match) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'bestseller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0; // featured default
    });
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setPriceRange('all');
    setSortBy('featured');
    setSearchQuery('');
  };

  return (
    <div className="py-10 md:py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Catalogue</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
            Shop All Jewellery
          </h1>
          <div className="w-20 h-0.5 bg-[#C59B27] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6E6365]">
            Discover oxidised elegance, bridal ethnic earrings, designer jhumkas, and cute girl accessories.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#E8DFD8] shadow-xs mb-8 space-y-4">
          {/* Top row: search + sort + reset */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search designs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-lg border border-[#E8DFD8] focus:border-[#68132B] outline-none bg-[#FAF7F2]/50"
              />
            </div>

            {/* Sort Dropdown & Price Filter */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="flex items-center gap-1.5 text-xs text-[#5A4F51]">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#68132B]" />
                <span className="hidden sm:inline">Price:</span>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-2.5 py-1.5 text-xs rounded-md border border-[#E8DFD8] bg-[#FAF7F2] outline-none"
                >
                  <option value="all">All Prices</option>
                  <option value="under-500">Under ₹500</option>
                  <option value="500-800">₹500 – ₹800</option>
                  <option value="above-800">Above ₹800</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#5A4F51]">
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2.5 py-1.5 text-xs rounded-md border border-[#E8DFD8] bg-[#FAF7F2] outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="bestseller">Most Loved First</option>
                </select>
              </div>

              {(selectedCategory !== 'All' || priceRange !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="p-1.5 text-xs text-[#68132B] hover:bg-[#68132B]/10 rounded-md flex items-center gap-1"
                  title="Reset filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Chips Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none border-t border-[#F0EAE1]">
            {allCategoryNames.map((catName) => (
              <button
                key={catName}
                type="button"
                onClick={() => setSelectedCategory(catName)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === catName
                    ? 'bg-[#68132B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#4A3B3E] hover:text-[#68132B] hover:bg-[#F0EAE1]'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#7A6F6D] mb-6 px-1">
          <span>
            Showing <strong className="text-[#1F1617]">{filteredProducts.length}</strong> jewellery item{filteredProducts.length === 1 ? '' : 's'}
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
          </span>
          <span className="text-[#B8860B] font-medium">Free Shipping above ₹999</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-white rounded-2xl border border-[#E8DFD8] p-8">
            <h3 className="font-serif text-2xl font-bold text-[#1F1617]">
              No jewellery matched your filter criteria
            </h3>
            <p className="text-xs text-[#7A6F6D] max-w-sm mx-auto">
              Try adjusting your price range, clearing your search query, or selecting another category.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#68132B] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={onOpenDetail}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
