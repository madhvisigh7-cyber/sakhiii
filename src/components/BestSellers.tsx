import React from 'react';
import { Sparkles, Star, Flame } from 'lucide-react';
import { BEST_SELLERS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface BestSellersProps {
  onOpenDetail: (product: Product) => void;
  onViewAll: () => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  onOpenDetail,
  onViewAll,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F2EC] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/30 text-[#8E6C15] text-xs font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Most Loved Pieces</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
            Customer Favorites
          </h2>

          <div className="flex items-center justify-center gap-1 text-[#C59B27] mt-3 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-semibold text-[#1F1617] ml-1">
              Rated 4.9/5 by 300+ Women
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#6E6365]">
            Our highest-rated, repeat-ordered jewellery creations designed to make heads turn.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {BEST_SELLERS.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#68132B] to-[#480C1C] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4AF37]/30">
          <div className="text-center md:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E6C280]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Looking for styling assistance?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              Need Help Pairing With Your Saree or Lehenga?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/80">
              Send a photo of your outfit to our WhatsApp stylist at 8815785692 for personalized matching suggestions!
            </p>
          </div>

          <div className="shrink-0 flex gap-3">
            <a
              href="https://wa.me/918815785692?text=Hi%20Sakhi%20Shringar%2C%20can%20you%20help%20me%20match%20jewellery%20with%20my%20outfit%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-colors"
            >
              WhatsApp Stylist
            </a>
            <button
              onClick={onViewAll}
              className="px-6 py-3 bg-[#FAF7F2] hover:bg-white text-[#68132B] text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-colors"
            >
              Shop All Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
