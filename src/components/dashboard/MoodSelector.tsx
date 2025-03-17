
import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Save } from 'lucide-react';

const moodOptions = [
  { emoji: "😊", label: "Happy", color: "bg-yellow-400 hover:bg-yellow-300" },
  { emoji: "😌", label: "Calm", color: "bg-blue-400 hover:bg-blue-300" },
  { emoji: "😔", label: "Sad", color: "bg-red-400 hover:bg-red-300" },
  { emoji: "😴", label: "Tired", color: "bg-purple-400 hover:bg-purple-300" },
  { emoji: "😰", label: "Anxious", color: "bg-green-400 hover:bg-green-300" },
  { emoji: "😡", label: "Angry", color: "bg-orange-400 hover:bg-orange-300" },
];

interface MoodSelectorProps {
  selectedMood: { emoji: string; label: string; color: string } | null;
  setSelectedMood: (mood: { emoji: string; label: string; color: string } | null) => void;
  moodDialogOpen: boolean;
  setMoodDialogOpen: (open: boolean) => void;
  moodNote: string;
  setMoodNote: (note: string) => void;
  saveMoodEntry: () => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  setSelectedMood,
  moodDialogOpen,
  setMoodDialogOpen,
  moodNote,
  setMoodNote,
  saveMoodEntry
}) => {
  return (
    <>
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
    </>
  );
};

export default MoodSelector;
