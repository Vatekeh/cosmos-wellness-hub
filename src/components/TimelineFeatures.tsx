
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
          <p className="text-white opacity-80 text-xs md:text-sm font-normal mb-8">
            We launched Cosmos with our foundational mindfulness tools, bringing ancient meditation 
            techniques to the digital age.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-panel p-5 flex items-center gap-3 text-white">
              <Moon className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Guided Sleep</h4>
                <p className="text-xs text-white opacity-70">Peaceful sleep stories</p>
              </div>
            </Card>
            <Card className="glass-panel p-5 flex items-center gap-3 text-white">
              <Sun className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Daily Mindfulness</h4>
                <p className="text-xs text-white opacity-70">Short exercises</p>
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
          <p className="text-white opacity-80 text-xs md:text-sm font-normal mb-8">
            Expanded our platform with advanced cognitive tools and personalized emotional tracking to help users 
            understand their mental patterns.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-panel p-5 flex items-center gap-3 text-white">
              <Heart className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Mood Tracking</h4>
                <p className="text-xs text-white opacity-70">Emotional insights</p>
              </div>
            </Card>
            <Card className="glass-panel p-5 flex items-center gap-3 text-white">
              <Brain className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold">Cognitive Exercises</h4>
                <p className="text-xs text-white opacity-70">Build resilience</p>
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
          <p className="text-white opacity-80 text-xs md:text-sm font-normal mb-4">
            Introducing our most immersive features to date, connecting the cosmos with your personal journey.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white opacity-80 text-xs md:text-sm mb-2">
              ✨ Conversational AI Companion for daily check-ins
            </div>
            <div className="flex gap-2 items-center text-white opacity-80 text-xs md:text-sm mb-2">
              ✨ Multi-mode journaling system (Gratitude, Dreams, Mindfulness)
            </div>
            <div className="flex gap-2 items-center text-white opacity-80 text-xs md:text-sm mb-2">
              ✨ Auto-logging timeline of activities and insights
            </div>
            <div className="flex gap-2 items-center text-white opacity-80 text-xs md:text-sm mb-2">
              ✨ AI-generated patterns and emotional insights
            </div>
            <div className="flex gap-2 items-center text-white opacity-80 text-xs md:text-sm">
              ✨ Professional support and community connections
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-panel p-5 flex items-center gap-3 text-white">
              <CloudRain className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold text-white">Ambient Sounds</h4>
                <p className="text-xs text-white opacity-70">Peaceful environments</p>
              </div>
            </Card>
            <Card className="glass-panel p-5 flex items-center gap-3 text-white">
              <Sparkles className="w-8 h-8 text-cosmos-coral" />
              <div>
                <h4 className="font-semibold text-white">Personalized Growth</h4>
                <p className="text-xs text-white opacity-70">Tailored recommendations</p>
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
