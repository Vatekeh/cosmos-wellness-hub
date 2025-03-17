
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, FileText } from 'lucide-react';
import { cn } from "@/lib/utils";

// Sample data for past entries
// In a real application, this would come from your database
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
        <CardTitle className="flex items-center">
          <Book className="h-5 w-5 mr-2 text-cosmos-coral" />
          Past Entries
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pastEntriesData.map((entry) => (
            <Card 
              key={entry.id} 
              className="bg-white/5 hover:bg-white/10 transition-colors cursor-pointer p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {getEntryIcon(entry.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium">{entry.title}</h4>
                    <span className="text-xs text-white/70">{formatDate(entry.date)}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-white/20 rounded-full px-2 py-0.5">
                      {entry.mood}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 line-clamp-2">{entry.excerpt}</p>
                </div>
              </div>
            </Card>
          ))}
          
          <Card className="bg-white/5 hover:bg-white/10 transition-colors cursor-pointer p-4 flex justify-center items-center">
            <span className="text-white/70 text-sm">View All Entries</span>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default PastEntries;
