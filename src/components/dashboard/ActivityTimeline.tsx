
import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Brain, MessageCircle, Heart, Moon } from 'lucide-react';

const timelineData = [
  {
    title: "Today",
    content: (
      <div>
        <p className="text-white/80 text-xs md:text-sm font-normal mb-2">
          You had a productive day focusing on mindfulness exercises
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Card className="glass-panel p-4 flex items-center gap-3">
            <Brain className="w-6 h-6 text-cosmos-coral" />
            <div>
              <h4 className="font-semibold">Mindfulness Session</h4>
              <p className="text-xs text-white/70">10 minutes of focused breathing</p>
            </div>
          </Card>
          <Card className="glass-panel p-4 flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-cosmos-coral" />
            <div>
              <h4 className="font-semibold">AI Chat Session</h4>
              <p className="text-xs text-white/70">Discussed stress management techniques</p>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "Yesterday",
    content: (
      <div>
        <p className="text-white/80 text-xs md:text-sm font-normal mb-2">
          You wrote in your gratitude journal and completed an evening meditation
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Card className="glass-panel p-4 flex items-center gap-3">
            <Heart className="w-6 h-6 text-cosmos-coral" />
            <div>
              <h4 className="font-semibold">Gratitude Journal</h4>
              <p className="text-xs text-white/70">3 things you were grateful for</p>
            </div>
          </Card>
          <Card className="glass-panel p-4 flex items-center gap-3">
            <Moon className="w-6 h-6 text-cosmos-coral" />
            <div>
              <h4 className="font-semibold">Evening Meditation</h4>
              <p className="text-xs text-white/70">15 minutes before sleep</p>
            </div>
          </Card>
        </div>
      </div>
    ),
  }
];

const ActivityTimeline: React.FC = () => {
  return (
    <div className="mt-12">
      <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Your Activity Timeline</h2>
      <Timeline data={timelineData} />
    </div>
  );
};

export default ActivityTimeline;
