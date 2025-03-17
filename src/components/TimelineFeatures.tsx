
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
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            Introducing our most immersive features to date, connecting the cosmos with your personal journey.
          </p>
          <div className="grid grid-cols-1 gap-6 mb-8">
            <Card className="glass-panel p-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/a7034284-574f-4b92-8292-694645d220e8.png" 
                    alt="Maya's Journey" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Maya, 34 - Reduced anxiety by 64%</h4>
                  <p className="text-white/80 text-xs md:text-sm">
                    "After using Cosmos for just 3 months, I've noticed a significant decrease in my daily anxiety. 
                    The guided meditations and sleep stories have transformed my evenings, and I'm finally getting 
                    restful sleep. The mood tracking helped me identify specific triggers I wasn't aware of before."
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-panel p-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/a7034284-574f-4b92-8292-694645d220e8.png" 
                    alt="Miles's Journey" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Miles, 28 - Improved focus & productivity</h4>
                  <p className="text-white/80 text-xs md:text-sm">
                    "The cognitive exercises in Cosmos have been game-changing for my work performance. 
                    I'm able to maintain focus for longer periods and actually complete tasks without feeling 
                    overwhelmed. The ambient sounds feature creates the perfect atmosphere for deep work."
                  </p>
                </div>
              </div>
            </Card>
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
