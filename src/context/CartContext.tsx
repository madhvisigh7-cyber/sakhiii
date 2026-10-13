import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  totalCartItems: number;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  freeShippingThreshold: number;
  finalTotal: number;
  couponCode: string | null;
  appliedCouponDiscount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  activeProductDetail: Product | null;
  setActiveProductDetail: (product: Product | null) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
  getWhatsAppOrderLink: (product?: Product) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'sakhi_shringar_cart';
const WISHLIST_STORAGE_KEY = 'sakhi_shringar_wishlist';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [couponPercent, setCouponPercent] = useState<number>(0);
  const [flatCouponDiscount, setFlatCouponDiscount] = useState<number>(0);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const addToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, selectedSize: selectedSize || item.selectedSize }
            : item
        );
      }
      return [...prev, { product, quantity, selectedSize }];
    });
    showToast(`Added "${product.name.slice(0, 24)}..." to bag! 🛍️`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Free shipping threshold ₹999
  const freeShippingThreshold = 999;
  const shippingFee = subtotal === 0 ? 0 : subtotal >= freeShippingThreshold ? 0 : 49;

  let calculatedDiscount = 0;
  if (couponPercent > 0) {
    calculatedDiscount = Math.round((subtotal * couponPercent) / 100);
  } else if (flatCouponDiscount > 0) {
    calculatedDiscount = Math.min(flatCouponDiscount, subtotal);
  }

  const finalTotal = Math.max(0, subtotal - calculatedDiscount + shippingFee);

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SAKHI10') {
      setCouponCode('SAKHI10');
      setCouponPercent(10);
      setFlatCouponDiscount(0);
      return { success: true, message: '🎉 10% Festive Discount applied!' };
    }
    if (clean === 'FIRSTLOOK') {
      setCouponCode('FIRSTLOOK');
      setCouponPercent(0);
      setFlatCouponDiscount(150);
      return { success: true, message: '🎉 ₹150 Welcome Discount applied!' };
    }
    if (clean === 'FESTIVE') {
      setCouponCode('FESTIVE');
      setCouponPercent(15);
      setFlatCouponDiscount(0);
      return { success: true, message: '🎉 15% Festive Special applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try SAKHI10 or FIRSTLOOK' };
  };

  const removeCoupon = () => {
    setCouponCode(null);
    setCouponPercent(0);
    setFlatCouponDiscount(0);
    showToast('Coupon removed');
  };

  const getWhatsAppOrderLink = (singleProduct?: Product) => {
    const phoneNumber = '918815785692';
    let text = '';

    if (singleProduct) {
      text = `Hi Sakhi Shringar! 🌷\nI would like to order:\n- *${singleProduct.name}*\nPrice: ₹${singleProduct.price}\nCategory: ${singleProduct.category}\nCould you please share availability and delivery details?`;
    } else if (cart.length > 0) {
      const itemsList = cart
        .map((item, idx) => `${idx + 1}. ${item.product.name} (Qty: ${item.quantity}) - ₹${item.product.price * item.quantity}`)
        .join('\n');
      text = `Hi Sakhi Shringar! 🌷\nI would like to place an order from your website:\n\n${itemsList}\n\n*Total Amount:* ₹${finalTotal}\n*Shipping:* ${shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}\n\nPlease let me know how to proceed with payment and shipping. Thank you!`;
    } else {
      text = `Hi Sakhi Shringar! 🌷\nI am browsing your jewellery collection on your website and would like to enquire about your designs!`;
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        totalCartItems,
        subtotal,
        discountAmount: calculatedDiscount,
        shippingFee,
        freeShippingThreshold,
        finalTotal,
        couponCode,
        appliedCouponDiscount: calculatedDiscount,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        activeProductDetail,
        setActiveProductDetail,
        isCheckoutOpen,
        setIsCheckoutOpen,
        toastMessage,
        showToast,
        getWhatsAppOrderLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
