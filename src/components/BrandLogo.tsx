import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'inverted';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  // Size calculations
  const iconSize = {
    sm: 36,
    md: 46,
    lg: 60,
    xl: 78,
  }[size];

  const titleSize = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl',
  }[size];

  const taglineSize = {
    sm: 'text-[9px]',
    md: 'text-[10px] md:text-xs',
    lg: 'text-xs md:text-sm',
    xl: 'text-xs md:text-sm tracking-widest',
  }[size];

  const isDarkBg = variant === 'inverted';

  return (
    <div className={`flex items-center gap-2.5 md:gap-3.5 select-none ${className}`}>
      {/* Luxury Brand Emblem SVG */}
      <div
        className="relative shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer ornate gold circle */}
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            opacity="0.85"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill={isDarkBg ? '#480C1C' : '#FAF7F2'}
            stroke="url(#goldGradient)"
            strokeWidth="1.8"
          />

          {/* Woman profile & traditional jewellery silhouette in burgundy/gold */}
          <g transform="translate(14, 12) scale(0.72)">
            {/* Graceful neck and shoulder drape */}
            <path
              d="M32 78 C35 70, 42 62, 48 58 C53 55, 60 54, 66 58 C72 62, 75 70, 80 82 C82 86, 78 89, 72 89 L24 89 C20 89, 18 86, 22 83 C26 80, 29 80, 32 78 Z"
              fill={isDarkBg ? '#E6C280' : '#68132B'}
              opacity="0.9"
            />
            {/* Woman head profile */}
            <path
              d="M48 24 C45 22, 42 24, 40 27 C38 30, 39 34, 40 37 C41 40, 44 42, 45 44 C46 46, 44 49, 45 52 C46 54, 49 56, 52 56 C57 56, 61 52, 62 46 C63 41, 64 36, 62 31 C60 26, 55 24, 48 24 Z"
              fill={isDarkBg ? '#FAF7F2' : '#68132B'}
            />
            {/* Hair bun with floral gajra outline */}
            <path
              d="M36 29 C32 26, 28 30, 26 35 C24 40, 26 46, 30 50 C34 54, 40 54, 42 50 C38 46, 35 41, 36 29 Z"
              fill="url(#goldGradient)"
            />
            {/* Gajra / Flower petal touches */}
            <circle cx="26" cy="33" r="2.5" fill="#FAF7F2" stroke="#B8860B" strokeWidth="0.8" />
            <circle cx="24" cy="39" r="2.5" fill="#FAF7F2" stroke="#B8860B" strokeWidth="0.8" />
            <circle cx="27" cy="45" r="2.5" fill="#FAF7F2" stroke="#B8860B" strokeWidth="0.8" />

            {/* Bindi dot */}
            <circle cx="48" cy="31" r="1.5" fill="#C59B27" />

            {/* Traditional ornate hanging Jhumka earring */}
            {/* Stud */}
            <circle cx="44" cy="45" r="2" fill="#D4AF37" stroke="#68132B" strokeWidth="0.6" />
            {/* Hanging connector */}
            <line x1="44" y1="47" x2="44" y2="50" stroke="#D4AF37" strokeWidth="1" />
            {/* Bell/Dome shape of Jhumka */}
            <path
              d="M39 54 C39 50, 49 50, 49 54 Z"
              fill="url(#goldGradient)"
              stroke="#68132B"
              strokeWidth="0.6"
            />
            {/* Hanging pearls/beads under jhumka */}
            <circle cx="40" cy="56.5" r="1" fill="#FAF7F2" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="44" cy="57" r="1.2" fill="#FAF7F2" stroke="#D4AF37" strokeWidth="0.5" />
            <circle cx="48" cy="56.5" r="1" fill="#FAF7F2" stroke="#D4AF37" strokeWidth="0.5" />

            {/* Delicate gold necklace line on neck */}
            <path
              d="M44 65 C50 70, 56 69, 62 65"
              stroke="url(#goldGradient)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Necklace pendant drop */}
            <circle cx="53" cy="69" r="1.5" fill="#68132B" stroke="#D4AF37" strokeWidth="0.8" />
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBA68" />
              <stop offset="45%" stopColor="#C59B27" />
              <stop offset="80%" stopColor="#EAD295" />
              <stop offset="100%" stopColor="#9C751A" />
            </linearGradient>
            <linearGradient id="maroonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E1834" />
              <stop offset="100%" stopColor="#4A0E1C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif tracking-wide font-bold leading-none ${titleSize} ${
              isDarkBg ? 'text-[#FAF7F2]' : 'text-[#68132B]'
            }`}
          >
            Sakhi Shringar
          </span>
          <span className="text-sm md:text-base leading-none text-[#B8860B]" title="Tulip">
            🌷
          </span>
        </div>

        {showTagline && (
          <span
            className={`font-medium tracking-wider uppercase mt-1 leading-tight ${taglineSize} ${
              isDarkBg ? 'text-[#D4AF37]/90' : 'text-[#B8860B]'
            }`}
          >
            Jewellery that completes your look
          </span>
        )}
      </div>
    </div>
  );
};
