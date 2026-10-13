import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onExploreCollection }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F2EC] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#E8DFD8]">
      {/* Decorative luxury background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E5C578]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#68132B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left z-10">
            {/* Top Tagline Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#68132B]/8 border border-[#68132B]/15 text-[#68132B] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Sakhi Shringar Couture & Daily Wear</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F1617] leading-[1.12]">
              Jewellery That <br className="hidden sm:inline" />
              <span className="text-[#68132B] italic">Completes</span> Your Look
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#5A4F51] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover elegant oxidised, ethnic and trendy jewellery designed to make every look special. Handcrafted for modern women who cherish timeless heritage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#68132B] hover:bg-[#520d20] text-white font-medium text-sm tracking-wider uppercase rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#E6C280]" />
              </button>

              <button
                type="button"
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-[#68132B]/5 text-[#68132B] border border-[#68132B]/40 hover:border-[#68132B] font-medium text-sm tracking-wider uppercase rounded-md transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <span>EXPLORE COLLECTION</span>
              </button>
            </div>

            {/* Quick Metrics & Trust indicators */}
            <div className="pt-6 border-t border-[#E8DFD8] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-[#68132B]">50+</p>
                <p className="text-xs text-[#7A6F6D] mt-0.5">Artisanal Designs</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-[#68132B]">100%</p>
                <p className="text-xs text-[#7A6F6D] mt-0.5">Skin Friendly</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold text-[#68132B]">PAN India</p>
                <p className="text-xs text-[#7A6F6D] mt-0.5">Fast Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Luxury Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#F0EAE1]">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85"
                  alt="Sakhi Shringar Indian Ethnic Jewellery Showcase"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating Badge in corner */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#E8DFD8] shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-[#C59B27] uppercase tracking-wider block">
                      New Festive Edit 2026
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1F1617] leading-tight">
                      Handcrafted Jhumkas & Chokers
                    </h3>
                  </div>
                  <button
                    onClick={onShopClick}
                    className="shrink-0 px-3.5 py-1.5 text-xs font-semibold bg-[#68132B] text-white rounded-md hover:bg-[#520d20] transition-colors"
                  >
                    View Pieces
                  </button>
                </div>
              </div>

              {/* Secondary Floating Accent Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-8 p-3.5 rounded-xl bg-white/95 shadow-xl border border-[#D4AF37]/40 items-center gap-3 max-w-[240px]">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=200&q=80"
                    alt="Mayur Jhumka"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1F1617] truncate">Peacock Jhumka</p>
                  <p className="text-[11px] text-[#68132B] font-semibold">₹499 <span className="line-through text-gray-400 font-normal">₹899</span></p>
                  <div className="text-[10px] text-[#C59B27]">★★★★★ 4.9</div>
                </div>
              </div>

              {/* Gold Ornament Stamp */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-tr from-[#68132B] to-[#9B2342] text-white flex flex-col items-center justify-center p-2 shadow-lg border-2 border-[#E6C280] text-center transform rotate-12">
                <span className="text-[9px] uppercase tracking-wider font-semibold">Hand</span>
                <span className="text-[10px] font-bold text-[#E6C280]">CRAFTED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-[#E8DFD8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-white/60 border border-[#E8DFD8]">
            <div className="p-2.5 rounded-full bg-[#68132B]/10 text-[#68132B]">
              <Sparkles className="w-5 h-5 text-[#C59B27]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1617]">Handcrafted Finish</h4>
              <p className="text-xs text-[#7A6F6D]">Intricate Indian artisanal details</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-white/60 border border-[#E8DFD8]">
            <div className="p-2.5 rounded-full bg-[#68132B]/10 text-[#68132B]">
              <Truck className="w-5 h-5 text-[#C59B27]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1617]">All India Shipping</h4>
              <p className="text-xs text-[#7A6F6D]">Safe insured doorstep delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-white/60 border border-[#E8DFD8]">
            <div className="p-2.5 rounded-full bg-[#68132B]/10 text-[#68132B]">
              <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1617]">100% Skin Friendly</h4>
              <p className="text-xs text-[#7A6F6D]">Lead & nickel compliant metals</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-white/60 border border-[#E8DFD8]">
            <div className="p-2.5 rounded-full bg-[#68132B]/10 text-[#68132B]">
              <RefreshCw className="w-5 h-5 text-[#C59B27]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F1617]">Easy WhatsApp Support</h4>
              <p className="text-xs text-[#7A6F6D]">Chat directly for custom orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
