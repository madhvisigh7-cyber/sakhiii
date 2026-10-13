import React from 'react';
import { Home, ShoppingBag, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MobileStickyBarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  currentTab,
  onNavigate,
}) => {
  const { totalCartItems, wishlist, setIsCartOpen, setIsWishlistOpen, getWhatsAppOrderLink } = useCart();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E8DFD8] shadow-2xl py-2 px-4">
      <div className="flex items-center justify-around">
        {/* Home */}
        <button
          type="button"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 text-[10px] font-medium transition-colors ${
            currentTab === 'home' ? 'text-[#68132B]' : 'text-[#7A6F6D]'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        {/* Shop */}
        <button
          type="button"
          onClick={() => {
            onNavigate('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 text-[10px] font-medium transition-colors ${
            currentTab === 'shop' ? 'text-[#68132B]' : 'text-[#7A6F6D]'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span>Shop</span>
        </button>

        {/* WhatsApp Chat */}
        <a
          href={getWhatsAppOrderLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-1 text-[10px] font-medium text-[#25D366]"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setIsWishlistOpen(true)}
          className="relative flex flex-col items-center gap-1 py-1 text-[10px] font-medium text-[#7A6F6D] hover:text-[#68132B]"
        >
          <Heart className="w-5 h-5" />
          <span>Wishlist</span>
          {wishlist.length > 0 && (
            <span className="absolute top-0 right-1 w-4 h-4 rounded-full bg-[#68132B] text-white text-[9px] font-bold flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </button>

        {/* Bag */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-1 py-1 text-[10px] font-medium text-[#68132B] font-bold"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Bag</span>
          {totalCartItems > 0 && (
            <span className="absolute top-0 right-1 w-4 h-4 rounded-full bg-[#C59B27] text-white text-[9px] font-bold flex items-center justify-center animate-pulse">
              {totalCartItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
