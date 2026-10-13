import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface NewArrivalsProps {
  onOpenDetail: (product: Product) => void;
  onViewAll: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  onOpenDetail,
  onViewAll,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const filterTabs = ['All', 'Jhumkas', 'Oxidised Jewellery', 'Ethnic Jewellery', 'Girls Accessories'];

  const displayedProducts = PRODUCTS.filter((p) => {
    if (!p.isNewArrival) return false;
    if (filterCategory === 'All') return true;
    return p.category === filterCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Freshly Crafted</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
              New Arrivals
            </h2>
            <p className="text-sm sm:text-base text-[#6E6365] mt-1.5">
              Handpicked trendy additions and festive season masterpieces.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilterCategory(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  filterCategory === tab
                    ? 'bg-[#68132B] text-white shadow-xs'
                    : 'bg-white text-[#5A4F51] hover:text-[#68132B] border border-[#E8DFD8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-white hover:bg-[#68132B] text-[#68132B] hover:text-white border border-[#68132B]/30 hover:border-[#68132B] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>View All New Arrivals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
