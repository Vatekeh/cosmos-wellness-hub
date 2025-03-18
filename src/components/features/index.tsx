
import React from 'react';
import { Moon, Sun, Heart, Brain, CloudRain, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FloatingShape from './FloatingShape';
import CollageVisual from './CollageVisual';
import FeatureTitle from './FeatureTitle';

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
      
      {/* Decorative elements */}
      <FloatingShape 
        className="w-64 h-64 rounded-full bg-cosmos-purple/20 blur-3xl top-20 -left-20 z-0" 
        duration={15}
      />
      <FloatingShape 
        className="w-96 h-96 rounded-full bg-cosmos-coral/10 blur-3xl bottom-20 -right-32 z-0" 
        delay={2}
        duration={18}
      />
      <FloatingShape 
        className="w-48 h-48 rounded-full bg-cosmos-lightCoral/10 blur-3xl top-1/2 left-1/4 z-0" 
        delay={1}
        duration={12}
      />
      
      <div className="cosmos-container relative z-10">
        <FeatureTitle />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
        
        {/* Collage-style visual element */}
        <CollageVisual features={features} />
      </div>
    </section>
  );
};

export default Features;
