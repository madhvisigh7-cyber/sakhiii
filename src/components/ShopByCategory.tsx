import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface ShopByCategoryProps {
  onSelectCategory: (categoryName: string) => void;
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collections</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
            Shop By Category
          </h2>
          <div className="w-20 h-0.5 bg-[#C59B27] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6E6365]">
            Explore our handcrafted array of oxidised silver, royal Kundan heritage, and modern everyday essentials.
          </p>
        </div>

        {/* 10 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer flex flex-col rounded-xl overflow-hidden bg-white border border-[#E8DFD8] hover:border-[#C59B27] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#F0EAE1]">
                <img
                  src={cat.image}
                  alt={`Sakhi Shringar ${cat.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Item count tag */}
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 text-[10px] font-medium bg-white/90 backdrop-blur-xs text-[#68132B] rounded-full shadow-xs">
                  {cat.itemCount}+ designs
                </span>
              </div>

              {/* Text & Action */}
              <div className="p-3.5 sm:p-4 text-center flex flex-col items-center justify-between flex-1 bg-white">
                <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1F1617] group-hover:text-[#68132B] transition-colors leading-snug">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-[#7A6F6D] line-clamp-1 mt-0.5 mb-3 hidden sm:block">
                  {cat.tagline}
                </p>

                <button
                  type="button"
                  className="w-full py-1.5 px-2 text-xs font-semibold tracking-wider uppercase text-[#68132B] group-hover:bg-[#68132B] group-hover:text-white border border-[#68132B]/30 rounded-md transition-all duration-200 flex items-center justify-center gap-1"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
