
import React, { useEffect, useRef } from 'react';
import { MoveDown, Star, Moon } from 'lucide-react';
import WaveAnimation from './WaveAnimation';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current || !moonRef.current || !textRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when hero is in view
      if (scrollPosition < windowHeight) {
        const intensity = 0.05;
        // Move the moon slower than scrolling for parallax effect
        moonRef.current.style.transform = `translateY(${scrollPosition * intensity}px)`;
        // Move text slightly faster for opposite parallax effect
        textRef.current.style.transform = `translateY(${-scrollPosition * intensity * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-cosmos-gradient z-0"></div>
      
      <div className="absolute top-0 right-0 w-full h-[400px] bg-gradient-to-b from-cosmos-coral/20 to-transparent opacity-50 z-0 rounded-b-[50%] transform translate-y-[-50%]"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-cosmos-purple/20 to-transparent opacity-50 z-0 rounded-t-[50%] transform translate-y-[50%]"></div>
      
      {/* Parallax Moon */}
      <div 
        ref={moonRef}
        className="absolute top-[15%] right-[15%] sm:right-[25%] w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 z-10 animate-float"
      >
        <Moon className="w-full h-full text-white opacity-90" />
      </div>
      
      {/* Small stars */}
      <div className="absolute top-[30%] left-[20%] text-white animate-twinkle">
        <Star className="w-5 h-5 fill-white" />
      </div>
      <div className="absolute bottom-[25%] right-[30%] text-white animate-twinkle" style={{ animationDelay: '1s' }}>
        <Star className="w-3 h-3 fill-white" />
      </div>
      <div className="absolute top-[60%] right-[15%] text-white animate-twinkle" style={{ animationDelay: '2s' }}>
        <Star className="w-4 h-4 fill-white" />
      </div>
      
      {/* Main Content */}
      <div 
        ref={textRef}
        className="cosmos-container relative z-20 mt-20 md:mt-0 text-center"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6 animate-fadeIn">
          <span className="text-sm font-medium">Your journey to mental wellness</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Find your inner
          <span className="cosmos-gradient-text block"> peace in Cosmos</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 mb-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          A personalized mental health companion that guides you through mindfulness, 
          meditation, and personal growth with the calming influence of cosmic beauty.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <a href="#download" className="cosmos-button-primary w-full sm:w-auto">
            Get Started
          </a>
          <a href="#features" className="cosmos-button-secondary w-full sm:w-auto">
            Explore Features
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/80">Scroll to explore</span>
          <MoveDown className="w-5 h-5 text-white/80" />
        </div>
      </div>
      
      {/* Wave Animations */}
      <WaveAnimation position="bottom" color="rgba(45, 27, 105, 0.5)" index={0} />
      <WaveAnimation position="bottom" color="rgba(45, 27, 105, 0.3)" index={1} />
    </section>
  );
};

export default Hero;
