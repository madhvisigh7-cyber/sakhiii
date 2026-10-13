import React from 'react';
import { Heart, MessageCircle, ExternalLink, Instagram } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80',
      caption: 'The Royal Mayur Jhumkas in antique oxidised finish ✨ Perfect pairing with your favourite saree. 🌷 #thesakhishringar #jhumkalove',
      likes: 128,
      comments: 18,
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
      caption: 'Antique Hasli choker detailing ✨ Jewellery that completes your look. DM or WhatsApp on 8815785692 to order! 📦',
      likes: 145,
      comments: 24,
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
      caption: 'Festive Chandbalis for wedding season ✨ Kundan & pearl elegance. Tap to shop! 🌸 #ethnicjewellery',
      likes: 194,
      comments: 31,
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
      caption: 'Mirror work statement rings ✨ Free size adjustable fit. Must-have for bohemian looks! 💎',
      likes: 89,
      comments: 12,
    },
    {
      id: 'ig-5',
      image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=600&q=80',
      caption: 'Set of 2 Rajputana carved openable kadas ✨ Pure vintage charm with easy screw lock. 🌷 #bangles',
      likes: 162,
      comments: 22,
    },
    {
      id: 'ig-6',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
      caption: 'Trending dual paperclip chains for modern everyday chic ✨ Skin-friendly & anti-tarnish. 💖',
      likes: 110,
      comments: 15,
    },
    {
      id: 'ig-7',
      image: 'https://images.unsplash.com/photo-1611591475819-79b8b73c2c31?auto=format&fit=crop&w=600&q=80',
      caption: 'Evil eye protection charm bracelet ✨ Protect your peace in style. 🧿 #trendyjewellery',
      likes: 173,
      comments: 27,
    },
    {
      id: 'ig-8',
      image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=600&q=80',
      caption: 'Pastel Meenakari hair pins & satin scrunchie hampers 🎀 For cute everyday hair styling. 🌷',
      likes: 98,
      comments: 14,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card & Header */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD8] shadow-sm mb-12 text-center">
          <div className="flex flex-col items-center">
            {/* Instagram Avatar */}
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-md mb-3">
              <div className="w-full h-full rounded-full bg-[#68132B] flex items-center justify-center text-white border-2 border-white">
                <span className="font-serif text-xl font-bold">SS</span>
              </div>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#1F1617] flex items-center gap-1.5">
              <span>Sakhi Shringar</span>
              <span className="text-base">🌷</span>
            </h3>

            <a
              href="https://www.instagram.com/thesakhishringar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#68132B] hover:text-[#B8860B] transition-colors mt-0.5"
            >
              @thesakhishringar
            </a>

            {/* Profile Bio Details */}
            <div className="text-xs text-[#5A4F51] my-3 space-y-0.5 max-w-sm">
              <p>💎 Jewellery that completes your look</p>
              <p>✨ Oxidised | Ethnic | Trendy</p>
              <p>🎀 Jewellery & Girls Accessories</p>
              <p>📦 Shipping Available | 📞 8815785692</p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 py-2 border-y border-[#F0EAE1] w-full justify-center text-xs">
              <div>
                <strong className="text-[#1F1617] font-bold">55</strong>{' '}
                <span className="text-[#7A6F6D]">posts</span>
              </div>
              <div>
                <strong className="text-[#1F1617] font-bold">35</strong>{' '}
                <span className="text-[#7A6F6D]">followers</span>
              </div>
              <div>
                <strong className="text-[#1F1617] font-bold">7</strong>{' '}
                <span className="text-[#7A6F6D]">following</span>
              </div>
            </div>

            {/* Follow Button */}
            <a
              href="https://www.instagram.com/thesakhishringar/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] hover:from-[#C13584] hover:to-[#5851DB] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 8-Card Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/thesakhishringar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#F0EAE1] block shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with likes and comments */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-end">
                  <Instagram className="w-4 h-4 text-white/80" />
                </div>

                <div className="flex items-center justify-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    {post.comments}
                  </span>
                </div>

                <p className="text-[11px] text-white/90 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
