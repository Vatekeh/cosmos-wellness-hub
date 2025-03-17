
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DisplayCards, { DisplayCard } from "@/components/ui/display-cards";
import { Book, Calendar, FileText, Sparkles } from 'lucide-react';
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

// Map the entries data to the DisplayCard format
const mapEntriesToDisplayCards = () => {
  return pastEntriesData.map(entry => ({
    icon: getEntryIcon(entry.type),
    title: entry.title,
    description: entry.excerpt,
    date: formatDate(entry.date),
    iconClassName: "text-cosmos-coral",
    titleClassName: "text-white",
    className: "bg-cosmos-midnight/50 border-white/10 hover:border-cosmos-coral/30 h-40 w-full md:w-[22rem] mb-6"
  }));
};

export interface PastEntriesProps {
  className?: string;
}

const PastEntries: React.FC<PastEntriesProps> = ({ className }) => {
  const entryCards = mapEntriesToDisplayCards();
  
  // Add a "View All Entries" card
  const allCards = [
    ...entryCards,
    {
      icon: <Sparkles className="h-5 w-5 text-cosmos-coral" />,
      title: "View All Entries",
      description: "",
      date: "",
      iconClassName: "text-cosmos-coral",
      titleClassName: "text-white",
      className: "bg-cosmos-midnight/50 border-white/10 hover:border-cosmos-coral/30 h-24 w-full md:w-[22rem] flex justify-center items-center"
    }
  ];
  
  return (
    <Card className={cn("glass-panel", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Book className="h-5 w-5 mr-2 text-cosmos-coral" />
          Past Entries
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {allCards.map((cardProps, index) => (
            <DisplayCard 
              key={index}
              {...cardProps}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PastEntries;
