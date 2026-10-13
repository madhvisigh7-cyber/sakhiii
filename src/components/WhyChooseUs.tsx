import React from 'react';
import { Sparkles, Gem, Package, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: '✨ Elegant Designs',
      description: 'Carefully selected designs for every style, balancing centuries of Indian craftsmanship with contemporary charm.',
      accent: 'border-[#C59B27]/40',
    },
    {
      icon: Gem,
      title: '💎 Premium Look',
      description: 'Jewellery that gives your outfit a beautiful finishing touch — designed to look regal and luxurious at accessible prices.',
      accent: 'border-[#68132B]/30',
    },
    {
      icon: Package,
      title: '📦 Shipping Available',
      description: 'Safe and secure delivery across India with moisture-proof protective packaging to keep your jewels gleaming.',
      accent: 'border-[#C59B27]/40',
    },
    {
      icon: Heart,
      title: '❤️ Made for Every You',
      description: 'Jewellery for everyday college looks, office wear, festive pujas, and wedding celebrations that celebrate your beauty.',
      accent: 'border-[#68132B]/30',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-2 block">
            The Sakhi Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
            Why Choose Sakhi Shringar
          </h2>
          <div className="w-20 h-0.5 bg-[#C59B27] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6E6365]">
            Our commitment to quality, authenticity, and creating jewellery that truly completes your look.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-xl bg-white border border-[#E8DFD8] hover:border-[#D4AF37] shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-[#68132B]/8 group-hover:bg-[#68132B] flex items-center justify-center text-[#68132B] group-hover:text-[#E6C280] mb-5 transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1F1617] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E6365] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
