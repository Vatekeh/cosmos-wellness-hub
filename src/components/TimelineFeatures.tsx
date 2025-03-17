
import React from "react";
import { Timeline } from "./ui/timeline";
import { Moon, Sun, Sparkles, Brain, Heart, CloudRain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function TimelineFeatures() {
  const timelineData = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            We launched Cosmos with our foundational mindfulness tools, bringing ancient meditation 
            techniques to the digital age.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-panel p-5 flex items-center gap-3">
              <Moon className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Guided Sleep</h4>
                <p className="text-xs text-white/70">Peaceful sleep stories</p>
              </div>
            </Card>
            <Card className="glass-panel p-5 flex items-center gap-3">
              <Sun className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Daily Mindfulness</h4>
                <p className="text-xs text-white/70">Short exercises</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            Expanded our platform with advanced cognitive tools and personalized emotional tracking to help users 
            understand their mental patterns.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-panel p-5 flex items-center gap-3">
              <Heart className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Mood Tracking</h4>
                <p className="text-xs text-white/70">Emotional insights</p>
              </div>
            </Card>
            <Card className="glass-panel p-5 flex items-center gap-3">
              <Brain className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Cognitive Exercises</h4>
                <p className="text-xs text-white/70">Build resilience</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-4">
            Introducing our most immersive features to date, connecting the cosmos with your personal journey.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white/80 text-xs md:text-sm mb-2">
              ✨ Ambient soundscapes from around the world
            </div>
            <div className="flex gap-2 items-center text-white/80 text-xs md:text-sm mb-2">
              ✨ Personalized growth paths based on your progress
            </div>
            <div className="flex gap-2 items-center text-white/80 text-xs md:text-sm mb-2">
              ✨ Integration with wearable devices for sleep tracking
            </div>
            <div className="flex gap-2 items-center text-white/80 text-xs md:text-sm mb-2">
              ✨ Community challenges and support networks
            </div>
            <div className="flex gap-2 items-center text-white/80 text-xs md:text-sm">
              ✨ AI-powered insights tailored to your journey
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-panel p-5 flex items-center gap-3">
              <CloudRain className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Ambient Sounds</h4>
                <p className="text-xs text-white/70">Peaceful environments</p>
              </div>
            </Card>
            <Card className="glass-panel p-5 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Personalized Growth</h4>
                <p className="text-xs text-white/70">Tailored recommendations</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative min-h-screen w-full">
      <Timeline data={timelineData} />
    </div>
  );
}
