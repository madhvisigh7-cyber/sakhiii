import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  Phone,
  Check,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingFee,
    freeShippingThreshold,
    finalTotal,
    couponCode,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    getWhatsAppOrderLink,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError(null);
      setInputCoupon('');
    }
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/30">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E8DFD8] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#68132B]/10 text-[#68132B]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F1617]">
                  Your Shopping Bag
                </h3>
                <span className="text-xs text-[#7A6F6D]">
                  {cart.length} unique item{cart.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="p-3.5 bg-[#F5EFEB] border-b border-[#E8DFD8]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              {amountNeededForFreeShipping > 0 ? (
                <span className="text-[#68132B]">
                  Add <strong className="font-bold">₹{amountNeededForFreeShipping}</strong> more for <strong>FREE Delivery!</strong>
                </span>
              ) : (
                <span className="text-[#2E7D32] flex items-center gap-1 font-bold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Yay! You've unlocked FREE Shipping! 🎉</span>
                </span>
              )}
              <span className="text-[11px] text-[#7A6F6D]">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#E0D5C9] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C59B27] to-[#68132B] transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#68132B]/8 text-[#68132B] flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 stroke-1" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1F1617]">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-[#7A6F6D] max-w-xs">
                  Discover our timeless oxidised and ethnic jewellery collections to find your perfect pieces.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#68132B] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-xs hover:bg-[#520d20] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-xl bg-white border border-[#E8DFD8] flex gap-3 shadow-2xs"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F0EAE1] shrink-0 border border-[#E8DFD8]">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-semibold text-[#1F1617] line-clamp-1 leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#99888B] hover:text-[#C53030] transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#B8860B] font-medium block">
                        {item.product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5 border border-[#E8DFD8] rounded-md bg-[#FAF7F2] px-1 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-xs text-[#68132B] hover:bg-[#E8DFD8] rounded-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1.5 text-[#1F1617]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-xs text-[#68132B] hover:bg-[#E8DFD8] rounded-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-sm text-[#68132B]">
                          ₹{item.product.price * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-[10px] text-[#7A6F6D] block">
                            (₹{item.product.price} each)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations & CTAs */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#E8DFD8] space-y-3.5 shadow-lg">
              {/* Coupon input */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-xs">
                    <div className="flex items-center gap-1.5 text-[#2E7D32] font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Coupon Applied: <strong>{couponCode}</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-xs text-[#C53030] hover:underline font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon (e.g. SAKHI10)"
                      value={inputCoupon}
                      onChange={(e) => {
                        setInputCoupon(e.target.value);
                        setCouponError(null);
                      }}
                      className="flex-1 px-3 py-2 text-xs rounded-md border border-[#E8DFD8] focus:border-[#68132B] outline-none uppercase bg-[#FAF7F2]/50"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#68132B] text-white text-xs font-semibold rounded-md hover:bg-[#520d20] transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-[#C53030] mt-1">{couponError}</p>
                )}
                {!couponCode && (
                  <p className="text-[10px] text-[#7A6F6D] mt-1">
                    Tip: Use <strong>SAKHI10</strong> for 10% off or <strong>FIRSTLOOK</strong> for ₹150 off.
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#4A3B3E] pt-2 border-t border-[#F0EAE1]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#2E7D32] font-medium">
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <strong className="text-[#2E7D32]">FREE</strong>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#1F1617] pt-2 border-t border-[#F0EAE1]">
                  <span>Total Amount</span>
                  <span className="font-serif text-lg text-[#68132B]">
                    ₹{finalTotal}
                  </span>
                </div>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 bg-[#68132B] hover:bg-[#520d20] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C280]" />
                </button>

                <a
                  href={getWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Order Directly via WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
