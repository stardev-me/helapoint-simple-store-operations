const HelaPointLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Main gradient for the background */}
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        
        {/* Highlight gradient for 3D effect */}
        <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        
        {/* Shadow gradient for depth */}
        <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3730a3" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        
        {/* H letter gradient */}
        <linearGradient id="letterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
        
        {/* Shine effect */}
        <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        
        {/* Drop shadow filter */}
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#1e1b4b" floodOpacity="0.4" />
        </filter>
        
        {/* Inner shadow for H */}
        <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#ffffff" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background rounded square with 3D effect */}
      {/* Bottom shadow layer */}
      <rect
        x="6"
        y="8"
        width="52"
        height="52"
        rx="14"
        fill="url(#shadowGrad)"
      />
      
      {/* Main background */}
      <rect
        x="4"
        y="4"
        width="52"
        height="52"
        rx="14"
        fill="url(#bgGrad)"
        filter="url(#dropShadow)"
      />
      
      {/* Top highlight edge for 3D */}
      <rect
        x="4"
        y="4"
        width="52"
        height="26"
        rx="14"
        fill="url(#highlightGrad)"
        clipPath="inset(0 0 50% 0)"
      />
      
      {/* Shine overlay */}
      <ellipse
        cx="22"
        cy="18"
        rx="18"
        ry="12"
        fill="url(#shineGrad)"
      />

      {/* 3D "H" Letter */}
      {/* Back shadow of H */}
      <g transform="translate(2, 2)">
        <path
          d="M18 16 L18 44 L24 44 L24 33 L36 33 L36 44 L42 44 L42 16 L36 16 L36 27 L24 27 L24 16 Z"
          fill="#3730a3"
          opacity="0.5"
        />
      </g>
      
      {/* Main H with gradient */}
      <g filter="url(#innerGlow)">
        <path
          d="M17 15 L17 45 L24 45 L24 33 L36 33 L36 45 L43 45 L43 15 L36 15 L36 27 L24 27 L24 15 Z"
          fill="url(#letterGrad)"
        />
      </g>
      
      {/* Subtle inner highlight on H */}
      <path
        d="M18 16 L18 26 L23 26 L23 16 Z"
        fill="#ffffff"
        opacity="0.3"
      />
      <path
        d="M37 16 L37 26 L42 26 L42 16 Z"
        fill="#ffffff"
        opacity="0.3"
      />
      
      {/* Small accent dot for modern feel */}
      <circle
        cx="50"
        cy="14"
        r="4"
        fill="#22d3ee"
      />
      <circle
        cx="50"
        cy="14"
        r="2"
        fill="#ffffff"
        opacity="0.8"
      />
    </svg>
  );
};

export default HelaPointLogo;
