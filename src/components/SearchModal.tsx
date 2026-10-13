import React, { useState, useMemo } from 'react';
import { Search, X, Star, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  onOpenProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onOpenProduct }) => {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Jhumkas', 'Oxidised Jewellery', 'Ethnic Jewellery', 'Trending Jewellery', 'Necklaces', 'Bangles', 'Rings'];

  const results = useMemo(() => {
    if (!searchTerm.trim() && selectedCategory === 'All') {
      return PRODUCTS.slice(0, 6);
    }

    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 md:p-10 pt-16 sm:pt-20">
        <div className="relative bg-[#FAF7F2] rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden border border-[#D4AF37]/40 z-10">
          {/* Top Search Bar */}
          <div className="p-4 sm:p-6 bg-white border-b border-[#E8DFD8]">
            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-[#68132B]" />
              <input
                type="text"
                autoFocus
                placeholder="Search jewellery, e.g. 'oxidised jhumka', 'hasli', 'ring', 'kundan'..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-base sm:text-lg outline-none bg-transparent placeholder-gray-400 text-[#1F1617]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="p-1 text-gray-400 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-[#68132B] hover:bg-[#68132B]/5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Categories filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-4 pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#68132B] text-white'
                      : 'bg-[#F2EAE1] text-[#4A3B3E] hover:bg-[#E8DFD8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#7A6F6D] mb-2 px-1">
              <span>Found {results.length} item{results.length === 1 ? '' : 's'}</span>
              <span>Showing handcrafted jewellery</span>
            </div>

            {results.length === 0 ? (
              <div className="py-12 text-center space-y-2">
                <p className="text-base font-semibold text-[#1F1617]">
                  No matching jewellery pieces found
                </p>
                <p className="text-xs text-[#7A6F6D]">
                  Try searching for "Jhumka", "Necklace", "Bangles", "Silver", or clear your filters.
                </p>
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    onOpenProduct(product);
                  }}
                  className="group p-3 rounded-xl bg-white border border-[#E8DFD8] hover:border-[#D4AF37] flex items-center justify-between gap-4 cursor-pointer transition-all shadow-2xs hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#F0EAE1] shrink-0 border border-[#E8DFD8]">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#B8860B] tracking-wider">
                        {product.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-[#1F1617] group-hover:text-[#68132B] transition-colors leading-snug">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-bold text-xs text-[#68132B]">
                          ₹{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-[10px] text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                        <span className="text-[10px] text-[#C59B27] flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-current" /> {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="px-3 py-1.5 bg-[#68132B] hover:bg-[#520d20] text-white text-[11px] font-semibold uppercase tracking-wider rounded-md transition-colors"
                    >
                      Add
                    </button>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#68132B] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
