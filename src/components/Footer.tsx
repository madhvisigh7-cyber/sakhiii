import React, { useState } from 'react';
import { Phone, Mail, Instagram, Sparkles, X, Shield, Truck, RotateCcw, FileText } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const policyContent: Record<string, { title: string; icon: any; body: string[] }> = {
    shipping: {
      title: 'Shipping & Delivery Policy',
      icon: Truck,
      body: [
        'We ship across all pin codes in India through trusted express courier partners (BlueDart, Delhivery, DTDC).',
        'FREE shipping on all prepaid and COD orders above ₹999. For orders below ₹999, a nominal shipping charge of ₹49 is applied.',
        'Orders are dispatched within 24-48 business hours. Expected delivery time is 3-6 business days depending on location.',
        'Tracking links with live parcel status are automatically sent to your WhatsApp number & Email upon dispatch.',
      ],
    },
    return: {
      title: 'Return & Exchange Policy',
      icon: RotateCcw,
      body: [
        'Due to hygiene standards for personal jewellery items, we accept returns/replacements only for products received in damaged condition or if an incorrect item was delivered.',
        'Please record a 30-second parcel unboxing video when opening the shipment.',
        'Notify us on WhatsApp (+91 8815785692) within 48 hours of delivery with your order ID and unboxing video.',
        'Once verified, we provide an immediate free replacement or full store credit / refund to your original payment mode.',
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      body: [
        'Sakhi Shringar values and respects your personal privacy.',
        'We only collect essential details (Name, Contact Number, Shipping Address, Email) to fulfill your jewellery orders and provide order status updates.',
        'We never sell, rent, or trade your personal data to any third-party marketing brokers.',
        'All online transactions are encrypted via 256-bit SSL banking standards.',
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      body: [
        'By browsing and placing an order on Sakhi Shringar, you agree to our standard customer terms and service policies.',
        'Handcrafted oxidised and ethnic jewellery may exhibit slight artisanal variations, antique patina nuances, and hand-cut facets, which are marks of authenticity.',
        'All prices listed are in Indian Rupees (INR) inclusive of applicable taxes.',
        'For any dispute resolution, our support team at thesakhishringar@gmail.com and WhatsApp 8815785692 is available Mon-Sat.',
      ],
    },
  };

  return (
    <>
      <footer className="bg-[#480C1C] text-[#FAF7F2] border-t border-[#D4AF37]/30">
        {/* Main Footer Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo variant="inverted" size="md" />

              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed max-w-sm pt-2">
                Sakhi Shringar brings you handcrafted oxidised, ethnic, and trendy jewellery designed to elevate every saree, kurti, and celebration.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs text-[#E6C280]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-serif italic text-sm">
                  "Jewellery that completes your look"
                </span>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-3">
                <a
                  href="https://wa.me/918815785692?text=Hi%20Sakhi%20Shringar%2C%20I%20have%20an%20enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Orders: +91 8815785692</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif text-base font-bold text-[#E6C280] tracking-wide uppercase text-xs">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
                <li>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('shop');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Shop All Jewellery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('collections');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    The Sakhi Collection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('new-arrivals');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    New Arrivals
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('best-sellers');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Best Sellers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Care / Policies */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif text-base font-bold text-[#E6C280] tracking-wide uppercase text-xs">
                Customer Care
              </h4>
              <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('shipping')}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Shipping Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('return')}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Return & Exchange Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('privacy')}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setActivePolicy('terms')}
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us & Social */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif text-base font-bold text-[#E6C280] tracking-wide uppercase text-xs">
                Follow Us
              </h4>
              <p className="text-xs text-[#FAF7F2]/75">
                Stay updated with our daily new designs, reel looks, and styling inspiration.
              </p>

              <div className="flex items-center gap-3 pt-1">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/thesakhishringar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors text-white"
                  title="Instagram @thesakhishringar"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Facebook Placeholder */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors text-white"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube Placeholder */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center transition-colors text-white"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              <div className="pt-2 text-xs text-[#FAF7F2]/70 space-y-1">
                <p>📍 India Shipping Hub</p>
                <p>✉️ thesakhishringar@gmail.com</p>
                <p>📱 +91 8815785692</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-4">
            <p>© 2026 Sakhi Shringar. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              <span>Crafted with</span>
              <span className="text-[#E6C280]">♥</span>
              <span>for every Indian woman</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Policy Details Modal */}
      {activePolicy && policyContent[activePolicy] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setActivePolicy(null)}
          />

          <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl text-[#1F1617] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD8]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#68132B]/10 text-[#68132B]">
                  {React.createElement(policyContent[activePolicy].icon, { className: 'w-5 h-5' })}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#68132B]">
                  {policyContent[activePolicy].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="p-1 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-[#4A3B3E] leading-relaxed">
              {policyContent[activePolicy].body.map((para, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#C59B27] font-bold mt-0.5">●</span>
                  <p>{para}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E8DFD8] flex justify-end">
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 bg-[#68132B] text-white text-xs font-semibold rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
