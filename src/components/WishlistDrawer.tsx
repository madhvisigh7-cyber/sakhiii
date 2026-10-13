import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    setIsCartOpen,
  } = useCart();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/30">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E8DFD8] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#68132B]/10 text-[#68132B]">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F1617]">
                  Your Wishlist
                </h3>
                <span className="text-xs text-[#7A6F6D]">
                  {wishlistProducts.length} saved item{wishlistProducts.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#68132B]/8 text-[#68132B] flex items-center justify-center">
                  <Heart className="w-10 h-10 stroke-1" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1F1617]">
                  No saved pieces yet
                </h4>
                <p className="text-xs text-[#7A6F6D] max-w-xs">
                  Tap the heart icon on any jewellery piece to save it to your wishlist for later.
                </p>
                <button
                  type="button"
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 bg-[#68132B] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-xs hover:bg-[#520d20] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-xl bg-white border border-[#E8DFD8] flex gap-3 shadow-2xs"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F0EAE1] shrink-0 border border-[#E8DFD8]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-semibold text-[#1F1617] line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#99888B] hover:text-[#C53030] transition-colors"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#B8860B] font-medium block">
                        {product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F0EAE1]">
                      <span className="font-bold text-sm text-[#68132B]">
                        ₹{product.price}
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product, 1);
                          toggleWishlist(product.id);
                        }}
                        className="py-1 px-3 bg-[#68132B] hover:bg-[#520d20] text-white text-[11px] font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#E8DFD8]">
              <button
                type="button"
                onClick={() => {
                  wishlistProducts.forEach((p) => addToCart(p, 1));
                  setIsWishlistOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3 bg-[#68132B] hover:bg-[#520d20] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Move All to Bag</span>
                <ArrowRight className="w-4 h-4 text-[#E6C280]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
