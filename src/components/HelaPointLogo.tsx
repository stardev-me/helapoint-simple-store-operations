const HelaPointLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background gradient circle with 3D effect */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.7)" />
        </linearGradient>
        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="shadowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="black" stopOpacity="0.3" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Main circle background */}
      <circle cx="32" cy="32" r="30" fill="url(#bgGradient)" filter="url(#dropShadow)" />
      
      {/* 3D highlight on top */}
      <ellipse cx="26" cy="20" rx="16" ry="10" fill="url(#shineGradient)" />
      
      {/* Shopping cart base */}
      <g filter="url(#dropShadow)">
        {/* Cart body */}
        <path
          d="M18 24L21 40H43L47 26H23"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Cart handle */}
        <path
          d="M18 24L15 20"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Cart wheels */}
        <circle cx="25" cy="45" r="3" fill="hsl(var(--primary-foreground))" />
        <circle cx="39" cy="45" r="3" fill="hsl(var(--primary-foreground))" />
        
        {/* POS/checkmark inside cart */}
        <path
          d="M27 32L31 36L39 28"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      
      {/* Credit/money indicator - top right */}
      <g transform="translate(42, 14)">
        <circle cx="6" cy="6" r="8" fill="hsl(var(--primary-foreground))" />
        <text
          x="6"
          y="10"
          textAnchor="middle"
          fill="hsl(var(--primary))"
          fontSize="10"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          $
        </text>
      </g>
      
      {/* Bottom shadow for 3D effect */}
      <ellipse cx="32" cy="60" rx="20" ry="3" fill="black" opacity="0.15" />
    </svg>
  );
};

export default HelaPointLogo;
