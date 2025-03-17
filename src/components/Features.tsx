
import React from 'react';
import TimelineFeatures from './TimelineFeatures';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-50 z-0"></div>
      
      <div className="cosmos-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md mb-4">
            <span className="text-sm font-medium">Our Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Discover a universe of
            <span className="cosmos-gradient-text block">mental wellness tools</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Cosmos combines ancient wisdom with modern psychology to provide a comprehensive 
            approach to mental health and personal growth.
          </p>
        </div>
        
        <TimelineFeatures />
      </div>
    </section>
  );
};

export default Features;
