import React, { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Phone,
  Sparkles,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const {
    totalCartItems,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
  } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'collections', label: 'Collections' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'best-sellers', label: 'Best Sellers' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#581125] text-[#FAF7F2] text-[11px] md:text-xs py-2 px-4 transition-all border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C280] animate-pulse shrink-0" />
            <span className="tracking-wide">
              <strong className="text-[#E6C280] font-semibold">Free Shipping</strong> across India on orders above ₹999
            </span>
            <span className="hidden sm:inline text-[#E6C280]/60">·</span>
            <span className="hidden sm:inline text-white/90">Handcrafted Ethnic & Oxidised Designs</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs text-[#FAF7F2]/90">
            <a
              href="https://wa.me/918815785692?text=Hi%20Sakhi%20Shringar%2C%20I%20have%20an%20order%20enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#E6C280] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#E6C280]" />
              <span>WhatsApp: 8815785692</span>
            </a>
            <span className="text-[#E6C280]/40">|</span>
            <a
              href="https://www.instagram.com/thesakhishringar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6C280] transition-colors font-medium"
            >
              @thesakhishringar
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#D4AF37]/25'
            : 'bg-[#FAF7F2] py-3.5 border-b border-[#E8DFD8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-lg text-[#68132B] hover:bg-[#68132B]/5 transition-colors focus:outline-none"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Left: Brand Logo */}
            <div
              className="cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <BrandLogo size="md" />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1 text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? 'text-[#68132B] font-semibold'
                        : 'text-[#4A3B3E] hover:text-[#68132B]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59B27] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Wishlist, Bag, Instagram) */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full text-[#4A3B3E] hover:text-[#68132B] hover:bg-[#68132B]/5 transition-colors"
                title="Search jewellery"
                aria-label="Search jewellery"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button with Counter */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 rounded-full text-[#4A3B3E] hover:text-[#68132B] hover:bg-[#68132B]/5 transition-colors"
                title="Wishlist"
                aria-label="Saved items in wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#68132B] rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button with Counter */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full text-[#4A3B3E] hover:text-[#68132B] hover:bg-[#68132B]/5 transition-colors"
                title="Shopping Bag"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCartItems > 0 && (
                  <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#C59B27] rounded-full shadow-sm animate-pulse">
                    {totalCartItems}
                  </span>
                )}
              </button>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/thesakhishringar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center p-2 rounded-full text-[#4A3B3E] hover:text-[#E1306C] hover:bg-[#E1306C]/10 transition-colors"
                title="Follow @thesakhishringar on Instagram"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-r border-[#D4AF37]/30 z-50">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between p-4 border-b border-[#E8DFD8]">
                <BrandLogo size="sm" />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#68132B] hover:bg-[#68132B]/10 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentTab === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#68132B] text-white'
                          : 'text-[#4A3B3E] hover:bg-[#F2EAE1]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="text-xs text-[#E6C280]">●</span>}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Footer inside mobile drawer */}
            <div className="p-4 border-t border-[#E8DFD8] bg-[#F7F2EC] space-y-3">
              <a
                href="https://wa.me/918815785692?text=Hi%20Sakhi%20Shringar%2C%20I%20have%20an%20enquiry%20from%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] text-white rounded-lg flex items-center justify-center gap-2 text-sm font-medium shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Chat on WhatsApp (8815785692)</span>
              </a>

              <a
                href="https://www.instagram.com/thesakhishringar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#68132B] text-white rounded-lg flex items-center justify-center gap-2 text-sm font-medium shadow-xs"
              >
                <span>Follow @thesakhishringar</span>
              </a>
              <p className="text-[11px] text-center text-[#7A6F6D]">
                © 2026 Sakhi Shringar. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
