
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const moodData = [
  { date: "Mon", mood: 6, energy: 7 },
  { date: "Tue", mood: 8, energy: 6 },
  { date: "Wed", mood: 5, energy: 4 },
  { date: "Thu", mood: 7, energy: 8 },
  { date: "Fri", mood: 9, energy: 9 },
  { date: "Sat", mood: 8, energy: 7 },
  { date: "Sun", mood: 7, energy: 6 },
];

interface ChartProps {
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ className }) => {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 5L12 12L9 9L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

const WellnessOverview: React.FC = () => {
  return (
    <Card className="glass-panel">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Chart className="h-5 w-5 mr-2 text-cosmos-coral" />
          Wellness Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer 
          className="h-[180px] w-full"
          config={{
            mood: { label: "Mood", color: "#FF6B6B" },
            energy: { label: "Energy", color: "#4ECDC4" }
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={moodData}>
              <defs>
                <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} />
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="mood" stroke="#FF6B6B" fillOpacity={1} fill="url(#colorMood)" />
              <Area type="monotone" dataKey="energy" stroke="#4ECDC4" fillOpacity={1} fill="url(#colorEnergy)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ChartLegend className="mt-2" />
        <div className="mt-4 text-sm text-white opacity-70">
          <p>Recent insight: You tend to have higher energy levels on weekends</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessOverview;
