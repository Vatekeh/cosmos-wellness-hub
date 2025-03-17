
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, FileText, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Sample data for past entries
const pastEntriesData = [
  {
    id: 1,
    date: "2023-10-12",
    title: "Morning Reflection",
    mood: "Happy",
    excerpt: "Today started on a positive note. I felt energized and motivated...",
    type: "gratitude"
  },
  {
    id: 2,
    date: "2023-10-10",
    title: "Evening Thoughts",
    mood: "Calm",
    excerpt: "Had a peaceful day with some good progress on the project...",
    type: "mindfulness"
  },
  {
    id: 3,
    date: "2023-10-08",
    title: "Weekly Check-in",
    mood: "Reflective",
    excerpt: "Looking back at the week, I noticed some patterns in how I respond to...",
    type: "custom"
  },
  {
    id: 4,
    date: "2023-10-05",
    title: "Dream Journal",
    mood: "Curious",
    excerpt: "Had an interesting dream about flying over mountains and valleys...",
    type: "dream"
  }
];

// Helper function to get appropriate icon based on entry type
const getEntryIcon = (type: string) => {
  switch (type) {
    case 'gratitude':
      return <Book className="h-5 w-5 text-cosmos-coral" />;
    case 'dream':
      return <Calendar className="h-5 w-5 text-cosmos-coral" />;
    case 'mindfulness':
    case 'custom':
    default:
      return <FileText className="h-5 w-5 text-cosmos-coral" />;
  }
};

// Format date in a more readable way
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

export interface PastEntriesProps {
  className?: string;
}

const PastEntries: React.FC<PastEntriesProps> = ({ className }) => {
  return (
    <Card className={cn("glass-panel", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-white">
          <Book className="h-5 w-5 mr-2 text-cosmos-coral" />
          Past Entries
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pastEntriesData.map((entry) => (
            <Card 
              key={entry.id} 
              className="group relative overflow-hidden bg-white/5 hover:bg-cosmos-coral/10 transition-all duration-300 border border-white/10 text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cosmos-coral/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-cosmos-coral/20 rounded-full">
                    {getEntryIcon(entry.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-white text-lg">{entry.title}</h4>
                      <span className="text-xs text-white opacity-70">{formatDate(entry.date)}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="text-xs bg-white/20 rounded-full px-2 py-0.5 text-white">
                        {entry.mood}
                      </span>
                    </div>
                    <p className="text-sm text-white opacity-80 mb-4 line-clamp-2">{entry.excerpt}</p>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="col-span-1 md:col-span-2 bg-cosmos-coral/5 hover:bg-cosmos-coral/10 transition-colors cursor-pointer border border-cosmos-coral/20 text-white">
            <CardContent className="flex justify-center items-center p-4">
              <Button variant="ghost" className="text-cosmos-coral">
                View All Entries <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default PastEntries;
