import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  Star,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Phone,
  Share2,
} from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onOpenProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenProduct,
}) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCheckoutOpen,
    showToast,
    getWhatsAppOrderLink,
  } = useCart();

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const isFavorited = isInWishlist(product.id);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // If no same category, pick others
  const recommendations =
    relatedProducts.length > 0
      ? relatedProducts
      : PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    onClose();
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Look at this beautiful ${product.name} at Sakhi Shringar!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard! 📋');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div className="relative bg-[#FAF7F2] rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden border border-[#D4AF37]/30 my-8">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#1F1617] hover:text-[#68132B] shadow-md transition-colors"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Product Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 p-4 sm:p-6 md:p-8">
            {/* Gallery Column (md: 6 cols) */}
            <div className="md:col-span-6 space-y-4">
              {/* Big Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F0EAE1] shadow-xs border border-[#E8DFD8]">
                <img
                  src={product.images[selectedImgIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                  {product.discountPercent && (
                    <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#68132B] text-white rounded-md shadow-xs">
                      {product.discountPercent}% OFF
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#C59B27] text-white rounded-md shadow-xs">
                      Most Loved
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails row */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImgIndex === idx
                          ? 'border-[#68132B] scale-105 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust badges below images */}
              <div className="pt-3 border-t border-[#E8DFD8] grid grid-cols-3 gap-2 text-center text-[11px] text-[#5A4F51]">
                <div className="p-2 rounded-lg bg-white/70 border border-[#E8DFD8]">
                  <Truck className="w-4 h-4 mx-auto text-[#68132B] mb-1" />
                  <span>Pan-India Shipping</span>
                </div>
                <div className="p-2 rounded-lg bg-white/70 border border-[#E8DFD8]">
                  <ShieldCheck className="w-4 h-4 mx-auto text-[#C59B27] mb-1" />
                  <span>Quality Assured</span>
                </div>
                <div className="p-2 rounded-lg bg-white/70 border border-[#E8DFD8]">
                  <RotateCcw className="w-4 h-4 mx-auto text-[#2B4C3F] mb-1" />
                  <span>Damages Covered</span>
                </div>
              </div>
            </div>

            {/* Details Column (md: 6 cols) */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-5 pt-4 md:pt-0">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold uppercase tracking-wider text-[#B8860B]">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#C59B27]">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-xs text-[#1F1617]">
                      {product.rating}
                    </span>
                    <span className="text-[#7A6F6D]">
                      ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Product Name */}
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1617] leading-tight">
                  {product.name}
                </h2>

                {/* Pricing & Stock */}
                <div className="flex items-baseline gap-3 my-3">
                  <span className="font-serif text-3xl font-bold text-[#68132B]">
                    ₹{product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  {product.discountPercent && (
                    <span className="text-xs font-semibold text-[#2E7D32]">
                      Save ₹{product.originalPrice - product.price} ({product.discountPercent}% OFF)
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2E7D32]/10 text-[#2E7D32] text-xs font-semibold mb-4">
                  <Check className="w-3.5 h-3.5" />
                  <span>In Stock — Dispatches within 24 Hours</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4A3B3E] leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Technical Specifications */}
                <div className="bg-white rounded-xl p-4 border border-[#E8DFD8] space-y-2 text-xs mb-4">
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#7A6F6D]">Material</span>
                    <span className="font-medium text-[#1F1617]">{product.material}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#7A6F6D]">Colour / Finish</span>
                    <span className="font-medium text-[#1F1617]">{product.colour}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#7A6F6D]">Size / Dimensions</span>
                    <span className="font-medium text-[#1F1617]">{product.size}</span>
                  </div>
                </div>

                {/* Care Instructions Accordion-style */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#68132B] mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C59B27]" />
                    <span>Care Instructions</span>
                  </h4>
                  <ul className="text-[11px] text-[#5A4F51] space-y-1 list-disc list-inside">
                    {product.careInstructions.map((care, i) => (
                      <li key={i}>{care}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Area */}
              <div className="space-y-3 pt-3 border-t border-[#E8DFD8]">
                {/* Quantity and Wishlist */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#E8DFD8] rounded-lg bg-white overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-sm text-[#4A3B3E] hover:bg-[#F2EAE1] transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-xs font-bold text-[#1F1617]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-sm text-[#4A3B3E] hover:bg-[#F2EAE1] transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Wishlist toggle */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className={`flex-1 py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      isFavorited
                        ? 'bg-[#68132B]/10 border-[#68132B] text-[#68132B]'
                        : 'border-[#E8DFD8] bg-white text-[#4A3B3E] hover:border-[#68132B]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? 'fill-[#68132B]' : ''}`} />
                    <span>{isFavorited ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                  </button>

                  {/* Share button */}
                  <button
                    type="button"
                    onClick={handleShare}
                    className="p-2.5 rounded-lg border border-[#E8DFD8] bg-white text-[#4A3B3E] hover:text-[#68132B] transition-colors"
                    title="Share product"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart & Buy Now Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`py-3 px-4 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isAddedRecently
                        ? 'bg-[#2E7D32] text-white shadow-xs'
                        : 'bg-[#68132B] hover:bg-[#520d20] text-white shadow-md'
                    }`}
                  >
                    {isAddedRecently ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="py-3 px-4 bg-[#C59B27] hover:bg-[#B38728] text-white rounded-lg font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>BUY NOW</span>
                  </button>
                </div>

                {/* WhatsApp Direct Enquiry */}
                <a
                  href={getWhatsAppOrderLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg font-semibold text-xs uppercase tracking-wider shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Order or Enquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* "You May Also Like" Section */}
          <div className="p-6 md:p-8 bg-[#F5EFEB] border-t border-[#E8DFD8]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <h3 className="font-serif text-xl font-bold text-[#1F1617]">
                You May Also Like
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => {
                    onOpenProduct(rec);
                    setSelectedImgIndex(0);
                    setQuantity(1);
                  }}
                  className="bg-white rounded-xl p-3 border border-[#E8DFD8] hover:border-[#D4AF37] shadow-xs cursor-pointer group transition-all"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-[#F0EAE1] mb-2">
                    <img
                      src={rec.images[0]}
                      alt={rec.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-serif text-xs font-semibold text-[#1F1617] group-hover:text-[#68132B] truncate">
                    {rec.name}
                  </h4>
                  <p className="text-xs font-bold text-[#68132B] mt-0.5">
                    ₹{rec.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
