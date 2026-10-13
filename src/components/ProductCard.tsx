import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
}) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
  } = useCart();

  const isFavorited = isInWishlist(product.id);
  const [isAddedRecently, setIsAddedRecently] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1800);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleCardClick = () => {
    if (onOpenDetail) {
      onOpenDetail(product);
    } else {
      setQuickViewProduct(product);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-[#E8DFD8] hover:border-[#D4AF37] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => {
        if (product.images.length > 1) setCurrentImgIndex(1);
      }}
      onMouseLeave={() => setCurrentImgIndex(0)}
    >
      {/* Image Wrap */}
      <div className="relative aspect-square overflow-hidden bg-[#F0EAE1]">
        <img
          src={product.images[currentImgIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10">
          {product.discountPercent && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#68132B] text-white rounded-md shadow-xs">
              {product.discountPercent}% OFF
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#C59B27] text-white rounded-md shadow-xs">
              Most Loved
            </span>
          )}
          {product.isNewArrival && !product.isBestSeller && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#2B4C3F] text-white rounded-md shadow-xs">
              New
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={handleToggleWishlist}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 z-10 shadow-sm ${
            isFavorited
              ? 'bg-[#68132B] text-white'
              : 'bg-white/90 text-[#4A3B3E] hover:text-[#68132B] hover:bg-white'
          }`}
          title={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label="Wishlist heart"
        >
          <Heart
            className={`w-4 h-4 ${isFavorited ? 'fill-current text-white' : ''}`}
          />
        </button>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-x-0 bottom-2.5 px-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            type="button"
            onClick={handleQuickView}
            className="w-full py-2 bg-white/95 hover:bg-white text-[#68132B] text-xs font-semibold uppercase tracking-wider rounded-md shadow-md backdrop-blur-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#B8860B]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#C59B27]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-[11px] font-semibold text-[#1F1617]">
                {product.rating}
              </span>
              <span className="text-[10px] text-[#7A6F6D]">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1F1617] group-hover:text-[#68132B] transition-colors line-clamp-1 leading-snug">
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-bold text-base sm:text-lg text-[#68132B]">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-[#8F8385] line-through">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-[11px] text-[#2E7D32] font-semibold ml-auto">
              In Stock
            </span>
          </div>
        </div>

        {/* Add to Bag CTA Button */}
        <div className="mt-4 pt-3 border-t border-[#F0EAE1]">
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-2 px-3 text-xs font-semibold tracking-wider uppercase rounded-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
              isAddedRecently
                ? 'bg-[#2E7D32] text-white shadow-xs'
                : 'bg-[#68132B] hover:bg-[#520d20] text-white shadow-xs hover:shadow-md'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
