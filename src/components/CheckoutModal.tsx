import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Phone,
  QrCode,
  CreditCard,
  Banknote,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderCustomerInfo } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    subtotal,
    discountAmount,
    shippingFee,
    finalTotal,
    couponCode,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
  } = useCart();

  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');

  const [customer, setCustomer] = useState<OrderCustomerInfo>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Madhya Pradesh',
    pincode: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [upiId, setUpiId] = useState('');
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const indianStates = [
    'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  ];

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.fullName || !customer.phone || !customer.address || !customer.pincode) {
      alert('Please fill in all mandatory fields.');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrderId = `SS-${new Date().getFullYear()}-${randomNum}`;
    setConfirmedOrderId(newOrderId);
    setStep('success');
    clearCart();
  };

  const handleWhatsAppOrderConfirmation = () => {
    const text = `Hi Sakhi Shringar! 🌷\nI have just placed an order on your website!\n\n*Order ID:* ${confirmedOrderId}\n*Name:* ${customer.fullName}\n*Phone:* ${customer.phone}\n*City:* ${customer.city}, ${customer.state} - ${customer.pincode}\n*Payment Method:* ${paymentMethod.toUpperCase()}\n*Total Amount:* ₹${finalTotal}\n\nPlease share tracking updates once dispatched. Thank you!`;
    const url = `https://wa.me/918815785692?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={() => step !== 'success' && setIsCheckoutOpen(false)}
      />

      <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div className="relative bg-[#FAF7F2] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-[#D4AF37]/30 my-8">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-[#E8DFD8] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-lg font-bold text-[#68132B]">
                Sakhi Shringar
              </span>
              <span className="text-[#C59B27]">|</span>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#5A4F51]">
                {step === 'details' && 'Step 1: Shipping Details'}
                {step === 'payment' && 'Step 2: Payment Method'}
                {step === 'success' && 'Order Confirmed!'}
              </span>
            </div>

            {step !== 'success' && (
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto">
            {/* STEP 1: Shipping Details */}
            {step === 'details' && (
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFD8] text-xs text-[#68132B] font-medium flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>Orders dispatched within 24 hours via express insured courier.</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F1617] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={customer.fullName}
                      onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8DFD8] bg-white outline-none focus:border-[#68132B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F1617] mb-1">
                      10-Digit Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8DFD8] bg-white outline-none focus:border-[#68132B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F1617] mb-1">
                    Email Address (for invoice & tracking updates)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. radhika@gmail.com"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8DFD8] bg-white outline-none focus:border-[#68132B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F1617] mb-1">
                    Complete Street Address (House No, Building, Street) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flat 302, Lotus Residency, MG Road"
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8DFD8] bg-white outline-none focus:border-[#68132B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F1617] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Indore"
                      value={customer.city}
                      onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8DFD8] bg-white outline-none focus:border-[#68132B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F1617] mb-1">
                      State *
                    </label>
                    <select
                      value={customer.state}
                      onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8DFD8] bg-white outline-none focus:border-[#68132B]"
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F1617] mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 452001"
                      value={customer.pincode}
                      onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#E8DFD8] bg-white outline-none focus:border-[#68132B]"
                    />
                  </div>
                </div>

                {/* Order Summary Snapshot */}
                <div className="p-4 rounded-xl bg-white border border-[#E8DFD8] space-y-2 text-xs">
                  <div className="flex justify-between text-[#7A6F6D]">
                    <span>Items in Bag ({cart.length})</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#2E7D32]">
                      <span>Discount ({couponCode})</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#7A6F6D]">
                    <span>Shipping</span>
                    <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#1F1617] pt-2 border-t border-[#F0EAE1]">
                    <span>Total Payable</span>
                    <span className="text-[#68132B]">₹{finalTotal}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#68132B] hover:bg-[#520d20] text-white font-semibold text-xs tracking-wider uppercase rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4 h-4 text-[#E6C280]" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Payment Selection */}
            {step === 'payment' && (
              <div className="space-y-5">
                <div className="text-xs text-[#7A6F6D]">
                  Select your preferred secure payment method for <strong>₹{finalTotal}</strong>:
                </div>

                {/* Payment Options */}
                <div className="space-y-3">
                  {/* UPI */}
                  <label
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#68132B] bg-[#68132B]/5 shadow-xs'
                        : 'border-[#E8DFD8] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'upi'}
                          onChange={() => setPaymentMethod('upi')}
                          className="text-[#68132B] focus:ring-[#68132B]"
                        />
                        <div className="flex items-center gap-2">
                          <QrCode className="w-5 h-5 text-[#68132B]" />
                          <span className="font-semibold text-sm text-[#1F1617]">
                            UPI (Google Pay, PhonePe, Paytm, QR)
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded-full">
                        Instant
                      </span>
                    </div>

                    {paymentMethod === 'upi' && (
                      <div className="mt-3.5 pt-3 border-t border-[#E8DFD8] text-xs space-y-2">
                        <p className="text-[#5A4F51]">
                          Scan QR or enter UPI ID linked to <strong>8815785692@upi</strong>:
                        </p>
                        <input
                          type="text"
                          placeholder="Enter your UPI ID (e.g. mobile@upi)"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-md border border-[#E8DFD8] bg-white outline-none"
                        />
                      </div>
                    )}
                  </label>

                  {/* Cash on Delivery */}
                  <label
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#68132B] bg-[#68132B]/5 shadow-xs'
                        : 'border-[#E8DFD8] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="text-[#68132B] focus:ring-[#68132B]"
                        />
                        <div className="flex items-center gap-2">
                          <Banknote className="w-5 h-5 text-[#C59B27]" />
                          <span className="font-semibold text-sm text-[#1F1617]">
                            Cash on Delivery (COD)
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#7A6F6D]">
                        Pay at doorstep
                      </span>
                    </div>
                  </label>

                  {/* Debit / Credit Cards */}
                  <label
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#68132B] bg-[#68132B]/5 shadow-xs'
                        : 'border-[#E8DFD8] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="text-[#68132B] focus:ring-[#68132B]"
                        />
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-[#2B4C3F]" />
                          <span className="font-semibold text-sm text-[#1F1617]">
                            Credit / Debit Card / Net Banking
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="pt-3 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="w-1/3 py-3 border border-[#E8DFD8] bg-white text-[#1F1617] text-xs font-semibold rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="w-2/3 py-3 bg-[#68132B] hover:bg-[#520d20] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Place Order (₹{finalTotal})</span>
                    <Sparkles className="w-4 h-4 text-[#E6C280]" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Order Confirmation */}
            {step === 'success' && (
              <div className="py-6 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#2E7D32]/15 text-[#2E7D32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs font-bold text-[#C59B27] uppercase tracking-widest block mb-1">
                    Order Placed Successfully
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#1F1617]">
                    Thank You, {customer.fullName}! 🌷
                  </h3>
                  <p className="text-sm text-[#5A4F51] mt-1">
                    Your order <strong className="text-[#68132B]">{confirmedOrderId}</strong> has been received by Sakhi Shringar.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="bg-white rounded-xl p-5 border border-[#E8DFD8] text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#7A6F6D]">Order ID</span>
                    <span className="font-bold text-[#1F1617]">{confirmedOrderId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#7A6F6D]">Delivery Address</span>
                    <span className="font-medium text-[#1F1617] text-right truncate max-w-[220px]">
                      {customer.address}, {customer.city}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#7A6F6D]">Contact Phone</span>
                    <span className="font-medium text-[#1F1617]">{customer.phone}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#7A6F6D]">Payment Method</span>
                    <span className="font-semibold uppercase text-[#68132B]">{paymentMethod}</span>
                  </div>
                  <div className="flex justify-between py-1 text-sm font-bold pt-2">
                    <span>Total Amount</span>
                    <span className="text-[#68132B]">₹{finalTotal}</span>
                  </div>
                </div>

                {/* WhatsApp Notification CTA */}
                <div className="pt-2 space-y-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppOrderConfirmation}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Send Order Copy to WhatsApp (8815785692)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      setStep('details');
                    }}
                    className="w-full py-2.5 bg-[#FAF7F2] hover:bg-white text-[#68132B] text-xs font-semibold uppercase tracking-wider rounded-md border border-[#68132B]/30 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
