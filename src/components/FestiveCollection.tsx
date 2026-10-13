import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FestiveCollectionProps {
  onShopFestive: () => void;
}

export const FestiveCollection: React.FC<FestiveCollectionProps> = ({
  onShopFestive,
}) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#4A0E1C] text-white border-b border-[#D4AF37]/30">
      {/* Background with warm ambient lighting & deep rich red glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80"
          alt="Indian Festive Jewellery Celebration"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A0E1C] via-[#68132B]/90 to-[#4A0E1C]" />
      </div>

      {/* Decorative floral & gold sparkles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#E5C578]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#E5C578]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6C280]/20 border border-[#E6C280]/40 text-[#E6C280] text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Navratri, Diwali & Wedding Season Special</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
          Festive Looks Start Here ✨
        </h2>

        <p className="text-base sm:text-xl text-[#FAF7F2]/90 max-w-2xl mx-auto font-light leading-relaxed">
          Add a little sparkle to every celebration. Radiate ethnic elegance with statement jhumkas, chokers, and festive bangles.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onShopFestive}
            className="w-full sm:w-auto px-9 py-4 bg-[#E6C280] hover:bg-[#D4AF37] text-[#4A0E1C] font-bold text-xs sm:text-sm tracking-widest uppercase rounded-md shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>SHOP FESTIVE COLLECTION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/918815785692?text=Hi%20Sakhi%20Shringar%2C%20I%20am%20interested%20in%20your%20Festive%20Jewellery%20Collection"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-[#E6C280]/60 hover:border-white font-medium text-xs sm:text-sm tracking-widest uppercase rounded-md transition-all duration-300 flex items-center justify-center"
          >
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
