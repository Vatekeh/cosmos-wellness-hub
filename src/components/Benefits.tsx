
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "Reduce stress and anxiety",
  "Improve sleep quality",
  "Increase self-awareness",
  "Enhance emotional regulation",
  "Boost focus and productivity",
  "Build resilience to life's challenges"
];

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === imageRef.current) {
            entry.target.classList.add('animate-slide-in-right');
          }
          if (entry.target === contentRef.current) {
            entry.target.classList.add('animate-fadeIn');
            
            // Animate each benefit item sequentially
            const items = entry.target.querySelectorAll('.benefit-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-up');
              }, index * 150);
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-cosmos-gradient z-0"></div>
      
      <div className="cosmos-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden opacity-0" ref={imageRef}>
              <div className="absolute inset-0 bg-gradient-to-tr from-cosmos-purple/20 to-cosmos-coral/20 mix-blend-overlay"></div>
              <img 
                src="/lovable-uploads/a7034284-574f-4b92-8292-694645d220e8.png" 
                alt="Cosmos App Interface" 
                className="w-full h-auto rounded-3xl shadow-cosmos-lg"
              />
              
              {/* Floating elements */}
              <div className="absolute top-[-20px] right-[-20px] w-16 h-16 rounded-full bg-cosmos-coral/20 backdrop-blur-xl animate-float"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-24 h-24 rounded-full bg-cosmos-purple/20 backdrop-blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="opacity-0" ref={contentRef}>
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4">
              <span className="text-sm font-medium">Benefits</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
              Transform your 
              <span className="cosmos-gradient-text block">mental wellbeing</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8">
              Cosmos is designed to bring tangible improvements to your daily life, helping you
              cultivate a more peaceful mind and resilient spirit.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="benefit-item opacity-0 flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cosmos-coral/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-cosmos-coral" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a href="#download" className="cosmos-button-primary">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
