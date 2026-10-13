import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F2EC] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Customer Experiences</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1617] tracking-tight">
            Loved By Our Sakhis
          </h2>

          <div className="w-20 h-0.5 bg-[#C59B27] mx-auto my-3" />

          <p className="text-sm sm:text-base text-[#6E6365]">
            Read what our lovely customers have to say about the quality, finish, and packaging of our jewellery pieces.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative p-7 rounded-2xl bg-white border border-[#E8DFD8] hover:border-[#D4AF37] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C59B27]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#68132B]/15" />
                </div>

                {/* Comment */}
                <p className="text-sm text-[#3E3436] italic leading-relaxed mb-6 font-normal">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-4 border-t border-[#F0EAE1]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1F1617]">
                      {review.author}
                    </h4>
                    <p className="text-xs text-[#7A6F6D]">{review.location}</p>
                  </div>

                  {review.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2E7D32]">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-[#B8860B] font-medium mt-2 truncate">
                  Purchased: {review.productName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
