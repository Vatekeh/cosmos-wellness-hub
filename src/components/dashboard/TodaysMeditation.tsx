
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wind } from 'lucide-react';

const TodaysMeditation: React.FC = () => {
  return (
    <Card className="glass-panel">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Wind className="h-5 w-5 mr-2 text-cosmos-coral" />
          Today's Meditation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white/5 rounded-lg p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-cosmos-coral/20 flex items-center justify-center mr-4 text-cosmos-coral">
            <Wind className="h-6 w-6 text-cosmos-coral" />
          </div>
          <div className="text-white">
            <h4 className="font-medium">Calm Clarity</h4>
            <p className="text-sm opacity-70">10 min guided meditation</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodaysMeditation;
