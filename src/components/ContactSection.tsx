import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle2, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ContactSection: React.FC = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      showToast('Please fill in your name and message');
      return;
    }

    setIsSubmitted(true);
    showToast('Enquiry received! We will reply on WhatsApp/Email promptly 🌸');
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-2 block">
            We'd Love To Hear From You
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
            Get In Touch With Sakhi Shringar
          </h2>
          <div className="w-20 h-0.5 bg-[#C59B27] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6E6365]">
            Have a question regarding custom jewellery, wedding orders, or shipping? Chat directly with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD8] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#25D366]/15 text-[#25D366] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1F1617]">
                  WhatsApp & Phone Orders
                </h3>
                <p className="text-xs text-[#7A6F6D]">
                  Quickest replies for orders, tracking, & custom requirements:
                </p>
                <p className="text-base font-semibold text-[#68132B]">
                  +91 8815785692
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/918815785692?text=Hi%20Sakhi%20Shringar%2C%20I%20would%20like%20to%20enquire%20about%20your%20jewellery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD8] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#E1306C]/15 text-[#E1306C] shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1F1617]">
                  Official Instagram
                </h3>
                <p className="text-xs text-[#7A6F6D]">
                  Follow our latest drops, customer tags, and live videos:
                </p>
                <p className="text-base font-semibold text-[#68132B]">
                  @thesakhishringar
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.instagram.com/thesakhishringar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#68132B] hover:bg-[#520d20] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition-colors"
                  >
                    <span>Instagram Profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD8] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#68132B]/10 text-[#68132B] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1F1617]">
                  Email Support
                </h3>
                <p className="text-xs text-[#7A6F6D]">
                  For bulk enquiries and collaborations:
                </p>
                <p className="text-sm font-semibold text-[#68132B]">
                  thesakhishringar@gmail.com
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-[#F7F2EC] border border-[#E8DFD8] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#C59B27]/15 text-[#C59B27] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1F1617]">
                  Business Hours
                </h3>
                <p className="text-xs text-[#4A3B3E]">
                  <strong>Monday – Saturday:</strong> 10:00 AM – 8:00 PM IST
                </p>
                <p className="text-xs text-[#4A3B3E]">
                  <strong>Sunday:</strong> 11:00 AM – 5:00 PM IST
                </p>
                <p className="text-[11px] text-[#7A6F6D] mt-1">
                  Online orders accepted 24/7. Despatched within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-2xl border border-[#E8DFD8] shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#1F1617] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#7A6F6D] mb-6">
              Fill in your details below and our team will get in touch shortly.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#2E7D32]/15 text-[#2E7D32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#1F1617]">
                  Thank You, Sakhi! 🌷
                </h4>
                <p className="text-sm text-[#5A4F51] max-w-md mx-auto">
                  We have received your enquiry. We will reach out to you via WhatsApp or Email within a few hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      subject: 'General Enquiry',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-[#68132B] text-white text-xs font-semibold uppercase tracking-wider rounded-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1F1617] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] focus:border-[#68132B] focus:ring-1 focus:ring-[#68132B] outline-none text-sm bg-[#FAF7F2]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1F1617] mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] focus:border-[#68132B] focus:ring-1 focus:ring-[#68132B] outline-none text-sm bg-[#FAF7F2]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1F1617] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] focus:border-[#68132B] focus:ring-1 focus:ring-[#68132B] outline-none text-sm bg-[#FAF7F2]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1F1617] mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] focus:border-[#68132B] focus:ring-1 focus:ring-[#68132B] outline-none text-sm bg-[#FAF7F2]/40"
                    >
                      <option value="General Enquiry">General Jewellery Enquiry</option>
                      <option value="Product Sizing">Product Sizing & Materials</option>
                      <option value="Custom Festive Order">Custom / Festive Bulk Order</option>
                      <option value="Shipping Status">Order Tracking & Shipping</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1F1617] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're looking for or which jewellery pieces you love..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8DFD8] focus:border-[#68132B] focus:ring-1 focus:ring-[#68132B] outline-none text-sm bg-[#FAF7F2]/40"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#68132B] hover:bg-[#520d20] text-white font-semibold text-xs tracking-wider uppercase rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
