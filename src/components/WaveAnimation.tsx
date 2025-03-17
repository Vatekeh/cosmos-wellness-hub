
import React from 'react';

interface WaveAnimationProps {
  position: 'top' | 'bottom';
  color: string;
  index?: number;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ position, color, index = 0 }) => {
  const positionStyles = position === 'top' 
    ? { top: '-120px' } 
    : { bottom: '-120px', transform: 'rotate(180deg)' };

  return (
    <div 
      className="absolute left-0 right-0 w-full overflow-hidden z-10 h-[120px]"
      style={{ ...positionStyles }}
    >
      <div className={`wave animate-wave`} style={{ 
        animationDelay: `${index * -5}s`,
        opacity: 0.7 - (index * 0.2)
      }}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill={color}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WaveAnimation;
