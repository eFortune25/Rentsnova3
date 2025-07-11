import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function RentsNovaLogo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-6 h-6', text: 'text-lg' },
    md: { icon: 'w-8 h-8', text: 'text-xl' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl' },
    xl: { icon: 'w-16 h-16', text: 'text-3xl' }
  };

  const sizeClasses = sizes[size];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses.icon} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* House Outline */}
          <path
            d="M15 85 V45 L50 15 L85 45 V85 H70 V55 H30 V85 H15 Z"
            fill="currentColor"
            className="text-primary"
            stroke="none"
          />

          {/* House Inner Area (White) */}
          <path
            d="M25 75 V50 L50 25 L75 50 V75 H25 Z"
            fill="white"
            stroke="none"
          />

          {/* Globe */}
          <circle
            cx="50"
            cy="50"
            r="18"
            fill="currentColor"
            className="text-primary"
          />

          {/* Globe Grid Lines */}
          <g fill="white" stroke="white" strokeWidth="1.5">
            {/* Vertical lines */}
            <line x1="50" y1="32" x2="50" y2="68" />
            <line x1="42" y1="35" x2="42" y2="65" />
            <line x1="58" y1="35" x2="58" y2="65" />

            {/* Horizontal lines */}
            <line x1="32" y1="50" x2="68" y2="50" />
            <line x1="35" y1="42" x2="65" y2="42" />
            <line x1="35" y1="58" x2="65" y2="58" />

            {/* Curved longitude lines */}
            <path d="M 38 32 Q 46 40 38 68" fill="none" />
            <path d="M 62 32 Q 54 40 62 68" fill="none" />
          </g>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <span className={`font-bold text-foreground ${sizeClasses.text}`}>
          RentsNova
        </span>
      )}
    </div>
  );
}

interface LogoWithTaglineProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function RentsNovaLogoWithTagline({ className = '', size = 'lg' }: LogoWithTaglineProps) {
  const taglineSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`text-center ${className}`}>
      <RentsNovaLogo size={size} showText={true} className="justify-center mb-2" />
      <p className={`text-primary font-medium ${taglineSizes[size]}`}>
        Rent Smarter. Live Anywhere.
      </p>
    </div>
  );
}
