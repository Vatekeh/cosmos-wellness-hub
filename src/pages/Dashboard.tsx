import React, { useState } from 'react';
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, MessageCircle, Calendar, Sun, Moon, Brain, 
  Heart, Wind, Book, Clock, Plus, Mic, MicOff, Save 
} from 'lucide-react';
import { Timeline } from "@/components/ui/timeline";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import PastEntries from "@/components/PastEntries";

// Sample data for mood chart
const moodData = [
  { date: "Mon", mood: 6, energy: 7 },
  { date: "Tue", mood: 8, energy: 6 },
  { date: "Wed", mood: 5, energy: 4 },
  { date: "Thu", mood: 7, energy: 8 },
  { date: "Fri", mood: 9, energy: 9 },
  { date: "Sat", mood: 8, energy: 7 },
  { date: "Sun", mood: 7, energy: 6 },
];

// Sample timeline activity data
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

// Sample AI chat messages
const initialMessages = [
  { 
    id: 1, 
    sender: 'ai', 
    text: "Hello! How are you feeling today? I noticed your mood has been improving this week.",
    timestamp: new Date(new Date().setHours(new Date().getHours() - 1)).toISOString()
  },
  { 
    id: 2, 
    sender: 'user', 
    text: "I'm feeling pretty good today. Had a productive morning.",
    timestamp: new Date(new Date().setMinutes(new Date().getMinutes() - 50)).toISOString()
  },
  { 
    id: 3, 
    sender: 'ai', 
    text: "That's great to hear! Would you like to record that in your gratitude journal?",
    timestamp: new Date(new Date().setMinutes(new Date().getMinutes() - 48)).toISOString()
  }
];

// Available moods for selection
const moodOptions = [
  { emoji: "😊", label: "Happy", color: "bg-yellow-400 hover:bg-yellow-300" },
  { emoji: "😌", label: "Calm", color: "bg-blue-400 hover:bg-blue-300" },
  { emoji: "😔", label: "Sad", color: "bg-red-400 hover:bg-red-300" },
  { emoji: "😴", label: "Tired", color: "bg-purple-400 hover:bg-purple-300" },
  { emoji: "😰", label: "Anxious", color: "bg-green-400 hover:bg-green-300" },
  { emoji: "😡", label: "Angry", color: "bg-orange-400 hover:bg-orange-300" },
];

const Dashboard = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [currentMessage, setCurrentMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chat');
  const [voiceMode, setVoiceMode] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodNote, setMoodNote] = useState('');
  const [moodDialogOpen, setMoodDialogOpen] = useState(false);
  
  const sendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: currentMessage,
        timestamp: new Date().toISOString()
      };
      
      setMessages([...messages, newMessage]);
      setCurrentMessage('');
      
      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          text: "Thanks for sharing! I've noted this in your activity log. Would you like to explore a short mindfulness exercise based on your current mood?",
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const saveMoodEntry = () => {
    // Here you would save the mood entry to your database
    // For now, we'll just close the dialog and show a toast message
    setMoodDialogOpen(false);
    // Reset mood note for next entry
    setMoodNote('');
    // You could add a toast notification here to confirm the entry was saved
  };

  const toggleVoiceMode = () => {
    setVoiceMode(!voiceMode);
    // Here you would implement voice recognition functionality
    // For now, this just toggles the button state
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="absolute inset-0 bg-cosmos-gradient opacity-50 z-0"></div>
      
      <div className="cosmos-container relative z-10">
        {/* Header with greeting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pt-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-serif font-bold">
              Hi Sarah, ready to check-in?
            </h1>
            <p className="text-white/70 mt-2">
              How are you feeling today?
            </p>
          </div>
          
          {/* Mood selector in a dropdown/popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="mt-4 md:mt-0 flex items-center gap-2">
                {selectedMood ? (
                  <>
                    <span className="text-xl">{selectedMood.emoji}</span>
                    <span>{selectedMood.label}</span>
                  </>
                ) : (
                  <>
                    <Heart className="h-4 w-4" />
                    <span>Select Mood</span>
                  </>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="space-y-4">
                <h4 className="font-medium">How are you feeling?</h4>
                <div className="grid grid-cols-3 gap-2">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.label}
                      onClick={() => {
                        setSelectedMood(mood);
                        setMoodDialogOpen(true);
                      }}
                      className={`${mood.color} h-12 w-full rounded-md transition-colors flex flex-col items-center justify-center`}
                    >
                      <span className="text-xl">{mood.emoji}</span>
                      <span className="text-xs">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Mood entry dialog */}
        <Dialog open={moodDialogOpen} onOpenChange={setMoodDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {selectedMood ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{selectedMood.emoji}</span>
                    <span>I'm feeling {selectedMood.label}</span>
                  </div>
                ) : (
                  "Record your mood"
                )}
              </DialogTitle>
              <DialogDescription>
                Add some notes about why you're feeling this way
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="mood-note">Notes (optional)</Label>
                <Input
                  id="mood-note"
                  placeholder="What's making you feel this way?"
                  value={moodNote}
                  onChange={(e) => setMoodNote(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={saveMoodEntry} className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Save Entry
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* Main bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Chat Companion */}
          <Card className="glass-panel col-span-1 lg:col-span-2 overflow-hidden flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-cosmos-coral" />
                AI Companion
              </CardTitle>
              <CardDescription>Your personal wellness assistant</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden flex flex-col">
              <div className="flex-grow overflow-y-auto mb-4 space-y-4 p-2">
                {messages.map(message => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === 'user' 
                          ? 'bg-cosmos-coral text-white' 
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder={voiceMode ? "Listening..." : "Type your message..."} 
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="bg-white/5"
                  disabled={voiceMode}
                />
                <Button onClick={toggleVoiceMode} variant="outline" className="px-3">
                  {voiceMode ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </Button>
                <Button onClick={sendMessage}>Send</Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Right side panels */}
          <div className="col-span-1 space-y-6">
            {/* Wellness Overview */}
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
                  <ChartLegend className="mt-2" />
                </ChartContainer>
                <div className="mt-4 text-sm text-white/70">
                  <p>Recent insight: You tend to have higher energy levels on weekends</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Journal Options */}
            <Card className="glass-panel">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Book className="h-5 w-5 mr-2 text-cosmos-coral" />
                  Journal Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Card className="glass-panel bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Heart className="h-8 w-8 text-cosmos-coral mb-2" />
                      <span className="text-sm">Gratitude</span>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Brain className="h-8 w-8 text-cosmos-coral mb-2" />
                      <span className="text-sm">Mindfulness</span>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Moon className="h-8 w-8 text-cosmos-coral mb-2" />
                      <span className="text-sm">Dreams</span>
                    </CardContent>
                  </Card>
                  <Card className="glass-panel bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Plus className="h-8 w-8 text-cosmos-coral mb-2" />
                      <span className="text-sm">Custom</span>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
            
            {/* Today's Meditation */}
            <Card className="glass-panel">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-cosmos-coral" />
                  Today's Meditation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-cosmos-coral/20 flex items-center justify-center mr-4">
                    <Wind className="h-6 w-6 text-cosmos-coral" />
                  </div>
                  <div>
                    <h4 className="font-medium">Calm Clarity</h4>
                    <p className="text-sm text-white/70">10 min guided meditation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Past Entries Section */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Your Journal Entries</h2>
          <PastEntries />
        </div>
        
        {/* Activity Timeline Section */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-6">Your Activity Timeline</h2>
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  );
};

// Mock Chart component for the example
const Chart = ({ className }: { className?: string }) => {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 5L12 12L9 9L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

export default Dashboard;
