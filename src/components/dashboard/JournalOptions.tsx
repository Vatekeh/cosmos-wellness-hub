
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Book, Brain, Moon, Plus, Heart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const JournalOptions: React.FC = () => {
  return (
    <Card className="glass-panel">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Book className="h-5 w-5 mr-2 text-cosmos-coral" />
          Journal Options
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="glass-panel bg-white/5 hover:bg-cosmos-coral/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Heart className="h-8 w-8 text-cosmos-coral mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Gratitude</span>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white/10 backdrop-blur-md border-cosmos-coral/30 text-white">
              <div className="flex justify-between space-x-4">
                <div>
                  <h4 className="text-sm font-semibold">Gratitude Journal</h4>
                  <p className="text-sm text-white opacity-70">
                    Record things you're thankful for to boost positive emotions and wellbeing.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="glass-panel bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Brain className="h-8 w-8 text-cosmos-coral mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Mindfulness</span>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white/10 backdrop-blur-md border-cosmos-coral/30 text-white">
              <div className="flex justify-between space-x-4">
                <div>
                  <h4 className="text-sm font-semibold">Mindfulness Journal</h4>
                  <p className="text-sm text-white opacity-70">
                    Practice being present and aware of your thoughts, feelings, and surroundings.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="glass-panel bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Moon className="h-8 w-8 text-cosmos-coral mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Dreams</span>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white/10 backdrop-blur-md border-cosmos-coral/30 text-white">
              <div className="flex justify-between space-x-4">
                <div>
                  <h4 className="text-sm font-semibold">Dream Journal</h4>
                  <p className="text-sm text-white opacity-70">
                    Record and analyze your dreams to gain insights into your subconscious mind.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="glass-panel bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Plus className="h-8 w-8 text-cosmos-coral mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Custom</span>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-white/10 backdrop-blur-md border-cosmos-coral/30 text-white">
              <div className="flex justify-between space-x-4">
                <div>
                  <h4 className="text-sm font-semibold">Custom Journal</h4>
                  <p className="text-sm text-white opacity-70">
                    Create your own personalized journal type to track what matters most to you.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </CardContent>
    </Card>
  );
};

export default JournalOptions;
