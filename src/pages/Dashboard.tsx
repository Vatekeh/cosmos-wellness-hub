
import React, { useState } from 'react';
import MoodSelector from '@/components/dashboard/MoodSelector';
import AICompanion from '@/components/dashboard/AICompanion';
import WellnessOverview from '@/components/dashboard/WellnessOverview';
import JournalOptions from '@/components/dashboard/JournalOptions';
import TodaysMeditation from '@/components/dashboard/TodaysMeditation';
import PastEntries from "@/components/PastEntries";
import ActivityTimeline from '@/components/dashboard/ActivityTimeline';
import { Heart } from 'lucide-react';

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodNote, setMoodNote] = useState('');
  const [moodDialogOpen, setMoodDialogOpen] = useState(false);
  
  const saveMoodEntry = () => {
    setMoodDialogOpen(false);
    setMoodNote('');
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-50 z-0"></div>
      
      <div className="cosmos-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pt-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-serif font-bold">
              Hi Sarah, ready to check-in?
            </h1>
            <p className="text-white/70 mt-2">
              How are you feeling today?
            </p>
          </div>
          
          <MoodSelector 
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            moodDialogOpen={moodDialogOpen}
            setMoodDialogOpen={setMoodDialogOpen}
            moodNote={moodNote}
            setMoodNote={setMoodNote}
            saveMoodEntry={saveMoodEntry}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AICompanion />
          
          <div className="col-span-1 space-y-6">
            <WellnessOverview />
            <JournalOptions />
            <TodaysMeditation />
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Your Journal Entries</h2>
          <PastEntries />
        </div>
        
        <ActivityTimeline />
      </div>
    </div>
  );
};

export default Dashboard;
