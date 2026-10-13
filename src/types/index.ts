export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  discountPercent?: number;
  category: string;
  categorySlug: string;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  material: string;
  colour: string;
  size: string;
  careInstructions: string[];
  inStock: boolean;
  stockCount: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFestive?: boolean;
  isSakhiCollection?: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
  verifiedPurchase: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  itemCount: number;
  tagline: string;
}

export interface OrderCustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
}

export interface OrderRecord {
  orderId: string;
  date: string;
  customer: OrderCustomerInfo;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  paymentMethod: 'upi' | 'cod' | 'card';
  status: 'Confirmed' | 'Processing';
}
