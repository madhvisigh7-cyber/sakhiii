import React from 'react';
import { Sparkles, Heart, Award, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#F0EAE1]">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="About Sakhi Shringar Artistry"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Decorative Brand Emblem Badge */}
              <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-[#68132B] text-white shadow-xl border-2 border-[#E6C280] max-w-[220px] text-center hidden sm:block">
                <p className="font-serif text-lg font-bold text-[#E6C280]">
                  Sakhi Shringar 🌷
                </p>
                <p className="text-[11px] text-[#FAF7F2]/90 mt-1 uppercase tracking-wider">
                  Handcrafted with Indian Soul
                </p>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8860B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Brand Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
              About Sakhi Shringar
            </h2>

            <div className="w-20 h-0.5 bg-[#C59B27]" />

            <div className="space-y-4 text-base text-[#4A3B3E] leading-relaxed">
              <p className="text-lg font-medium text-[#1F1617]">
                Sakhi Shringar is a jewellery brand created for women and girls who love elegant, ethnic and trendy accessories. Our goal is to bring beautiful jewellery that helps you express your personal style and complete every look.
              </p>

              <p>
                Born from a deep reverence for Indian cultural heritage and the sheer joy of festive adornment, "Sakhi" represents the trusted friend who accompanies you to every special milestone. From delicate everyday college accents to regal wedding reception jewels, our curated collections blend timeless antique aesthetics with modern comfort.
              </p>

              <p className="italic font-serif text-xl text-[#68132B] font-semibold pt-2">
                "Jewellery that completes your look."
              </p>
            </div>

            {/* Core Values 3 Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E8DFD8]">
              <div className="p-4 rounded-xl bg-white border border-[#E8DFD8] text-center sm:text-left">
                <Heart className="w-5 h-5 text-[#68132B] mb-2 mx-auto sm:mx-0" />
                <h4 className="font-serif font-bold text-[#1F1617] text-sm">Feminine & Empowering</h4>
                <p className="text-xs text-[#7A6F6D] mt-1">Designs made to bring out your inner grace.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8DFD8] text-center sm:text-left">
                <Award className="w-5 h-5 text-[#C59B27] mb-2 mx-auto sm:mx-0" />
                <h4 className="font-serif font-bold text-[#1F1617] text-sm">Finest Finish</h4>
                <p className="text-xs text-[#7A6F6D] mt-1">Carefully inspected for stones and polish.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8DFD8] text-center sm:text-left">
                <ShieldCheck className="w-5 h-5 text-[#2B4C3F] mb-2 mx-auto sm:mx-0" />
                <h4 className="font-serif font-bold text-[#1F1617] text-sm">Skin Conscious</h4>
                <p className="text-xs text-[#7A6F6D] mt-1">Non-allergic, lightweight on earlobes.</p>
              </div>
            </div>

            {/* Brand Logo Presentation */}
            <div className="pt-4 flex items-center gap-4">
              <BrandLogo size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
