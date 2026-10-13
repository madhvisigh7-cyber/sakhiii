import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SpecialCollectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const SpecialCollection: React.FC<SpecialCollectionProps> = ({
  onSelectCategory,
}) => {
  const collections = [
    {
      title: 'Royal Rajputana Oxidised',
      tagline: 'Antique German Silver Finish',
      description: 'Heavy carved kadas, coin haslis, and rustic tribal ornaments celebrating royal desert heritage.',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
      category: 'Oxidised Jewellery',
      badge: 'Heritage Classic',
    },
    {
      title: 'Meenakari & Kundan Grandeur',
      tagline: 'Bridal & Festive Elegance',
      description: 'Hand-enameled lotus motifs and lustrous champagne kundan stones fringed with pearls.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      category: 'Ethnic Jewellery',
      badge: 'Festive Luxury',
    },
    {
      title: 'The Bell Silhouette: Jhumka Edit',
      tagline: 'Melody in Motion',
      description: 'Chandbali jhumkas, multi-tier domes, and peacock drops with soft resonant ghungroos.',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
      category: 'Jhumkas',
      badge: 'Most Coveted',
    },
    {
      title: 'Modern Everyday Minimalist',
      tagline: 'Chic Daily Accents',
      description: 'Dainty evil eye bracelets, sleek paperclip necklaces, and subtle accessories for girls.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      category: 'Trending Jewellery',
      badge: 'Daily Glow',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-2">
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>Signature Series</span>
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
            ✨ The Sakhi Collection ✨
          </h2>

          <div className="w-24 h-0.5 bg-[#C59B27] mx-auto my-3" />

          <p className="text-base sm:text-lg text-[#5A4F51] font-normal leading-relaxed">
            "Timeless designs, ethnic charm and modern elegance — jewellery made to complete every special look."
          </p>
        </div>

        {/* 4 Premium Collection Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-[#1F1617] shadow-xl border border-[#D4AF37]/30 min-h-[340px] flex flex-col justify-end"
            >
              {/* Background Photography */}
              <img
                src={col.image}
                alt={col.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-75 group-hover:opacity-85"
                loading="lazy"
              />

              {/* Rich Gradient Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1617] via-[#1F1617]/60 to-transparent" />

              {/* Content Box */}
              <div className="relative p-6 sm:p-8 z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#68132B] text-white rounded-md border border-[#E6C280]/40">
                    {col.badge}
                  </span>
                  <span className="text-xs text-[#E6C280] font-medium tracking-wide">
                    {col.tagline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {col.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 max-w-lg">
                  {col.description}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(col.category)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF7F2] hover:bg-white text-[#68132B] font-semibold text-xs tracking-wider uppercase rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <span>Explore {col.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
