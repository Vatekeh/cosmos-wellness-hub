
import React, { useEffect, useRef } from 'react';
import { Moon, Sun, Heart, Brain, CloudRain, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Moon className="w-8 h-8 text-cosmos-coral" />,
    title: "Guided Sleep",
    description: "Fall asleep peacefully with our calming sleep stories and gentle soundscapes designed for restful nights."
  },
  {
    icon: <Sun className="w-8 h-8 text-cosmos-coral" />,
    title: "Daily Mindfulness",
    description: "Short, effective mindfulness exercises to help you stay grounded and present throughout your day."
  },
  {
    icon: <Heart className="w-8 h-8 text-cosmos-coral" />,
    title: "Mood Tracking",
    description: "Understand your emotional patterns with our intuitive mood tracking and personalized insights."
  },
  {
    icon: <Brain className="w-8 h-8 text-cosmos-coral" />,
    title: "Cognitive Exercises",
    description: "Strengthen your mental resilience with science-backed cognitive behavioral exercises."
  },
  {
    icon: <CloudRain className="w-8 h-8 text-cosmos-coral" />,
    title: "Ambient Sounds",
    description: "Immerse yourself in peaceful environments with our library of ambient soundscapes."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-cosmos-coral" />,
    title: "Personalized Growth",
    description: "Receive tailored recommendations that evolve with your progress and mental health journey."
  }
];

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (featuresRef.current) {
      const featureCards = featuresRef.current.querySelectorAll('.feature-card');
      featureCards.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
        
        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 glass-panel p-8 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
