
import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="download" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos-gradient z-0"></div>
      
      <div className="relative z-10 cosmos-container">
        <div className="glass-panel p-12 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cosmos-coral/10 filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cosmos-purple/10 filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
              Begin your journey to
              <span className="cosmos-gradient-text block"> inner harmony today</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 mx-auto max-w-2xl">
              Download Cosmos now and take the first step towards a more mindful, 
              peaceful, and balanced life. Your mental wellness journey awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="cosmos-button-primary flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </a>
              
              <a 
                href="#" 
                className="cosmos-button-secondary flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
