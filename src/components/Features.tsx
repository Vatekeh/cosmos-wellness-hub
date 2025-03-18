
import React from 'react';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
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
        
        <BentoGrid className="mx-auto">
          {features.map((feature, i) => (
            <BentoGridItem
              key={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={`glass-panel transition-all duration-300 hover:translate-y-[-5px] 
                ${i === 0 || i === 3 ? "md:col-span-2" : ""}`}
            />
          ))}
        </BentoGrid>
        
        {/* Static decorative elements */}
        <div className="absolute top-1/4 left-0 w-6 h-6 rounded-full bg-cosmos-coral/20"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 rounded-full bg-cosmos-lightCoral/20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 right-12 w-10 h-10 rounded-full bg-cosmos-coral/10"></div>
      </div>
    </section>
  );
};

export default Features;
