import { useState } from 'react';

interface CTAButtonProps {
  onClick?: () => void;
}

export default function CTAButton({ onClick }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/URPbFbTC4XIyAVOMEe44';
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full max-w-2xl mx-auto py-5 px-6 rounded-md text-lg font-black uppercase tracking-wide text-white relative overflow-hidden group transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #FF6B35 0%, #FFB347 50%, #FF6B35 100%)',
        backgroundSize: '200% 100%',
        animation: 'pulse-glow 2s ease-in-out infinite',
        boxShadow: isHovered 
          ? '0 0 40px rgba(255, 107, 53, 0.8), 0 0 80px rgba(255, 179, 71, 0.6)' 
          : '0 0 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(255, 179, 71, 0.3)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
      data-testid="button-cta-primary"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="text-xl">💪</span>
        QUERO O PACK ESSENCIAL POR R$4,99
      </span>
      
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </button>
  );
}
