
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Heart, Star, Moon, Sun, Brain, CloudRain, Sparkles } from "lucide-react";

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

export function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {features.map((feature, i) => (
        <BentoGridItem
          key={i}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
