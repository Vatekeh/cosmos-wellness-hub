
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Mic, MicOff } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

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

const AICompanion: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [currentMessage, setCurrentMessage] = useState('');
  const [voiceMode, setVoiceMode] = useState(false);

  const sendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user' as const,
        text: currentMessage,
        timestamp: new Date().toISOString()
      };
      
      setMessages([...messages, newMessage]);
      setCurrentMessage('');
      
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          sender: 'ai' as const,
          text: "Thanks for sharing! I've noted this in your activity log. Would you like to explore a short mindfulness exercise based on your current mood?",
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const toggleVoiceMode = () => {
    setVoiceMode(!voiceMode);
  };

  return (
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
  );
};

export default AICompanion;
