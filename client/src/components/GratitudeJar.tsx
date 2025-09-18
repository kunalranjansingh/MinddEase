import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Heart, Sparkles } from "lucide-react";

interface GratitudeNote {
  id: string;
  text: string;
  date: Date;
  color: string;
}

const noteColors = [
  "bg-yellow-100 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700",
  "bg-pink-100 dark:bg-pink-900/20 border-pink-300 dark:border-pink-700",
  "bg-blue-100 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700",
  "bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700",
  "bg-purple-100 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700",
];

export default function GratitudeJar() {
  const [currentNote, setCurrentNote] = useState("");
  const [notes, setNotes] = useState<GratitudeNote[]>([
    // TODO: remove mock data
    {
      id: "1",
      text: "Had a really good conversation with my friend today",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      color: noteColors[0]
    },
    {
      id: "2", 
      text: "Found a new song that made me feel peaceful",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      color: noteColors[1]
    },
    {
      id: "3",
      text: "My pet made me smile when I was feeling down",
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      color: noteColors[2]
    }
  ]);

  const addGratitudeNote = () => {
    if (!currentNote.trim()) return;

    const newNote: GratitudeNote = {
      id: Date.now().toString(),
      text: currentNote.trim(),
      date: new Date(),
      color: noteColors[Math.floor(Math.random() * noteColors.length)]
    };

    setNotes(prev => [newNote, ...prev]);
    setCurrentNote("");
    console.log("Added gratitude note:", newNote.text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addGratitudeNote();
    }
  };

  const getWeeklyCollage = () => {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const weeklyNotes = notes.filter(note => note.date >= weekAgo);
    
    if (weeklyNotes.length >= 5) {
      return (
        <Card className="border-gold bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
          <CardContent className="p-4 text-center">
            <Sparkles className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Weekly Gratitude Collage! ✨
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Amazing! You've collected {weeklyNotes.length} moments of gratitude this week.
              Your jar is glowing with positivity!
            </p>
          </CardContent>
        </Card>
      );
    }
    return null;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="text-6xl mb-4">🫙</div>
        <h2 className="text-2xl font-bold text-primary">Your Gratitude Jar</h2>
        <p className="text-muted-foreground">
          Drop one good thing from your day into your virtual jar
        </p>
      </div>

      {/* Add New Note */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">What made you smile today?</CardTitle>
          <CardDescription>
            Even small moments count - a kind word, a beautiful sunset, or a good meal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="I'm grateful for..."
              data-testid="input-gratitude"
              className="flex-1"
            />
            <Button
              onClick={addGratitudeNote}
              disabled={!currentNote.trim()}
              data-testid="button-add-gratitude"
              className="hover-elevate"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Collage */}
      {getWeeklyCollage()}

      {/* Gratitude Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-destructive" />
            Your Gratitude Collection ({notes.length} notes)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-3">
              {notes.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <div className="text-4xl mb-4">✨</div>
                  <p>Your gratitude jar is waiting for its first note!</p>
                  <p className="text-sm mt-2">Start by adding something you're grateful for today.</p>
                </div>
              ) : (
                notes.map((note) => (
                  <div
                    key={note.id}
                    className={`p-4 rounded-lg border-2 ${note.color} transform hover:scale-105 transition-transform cursor-pointer`}
                    data-testid={`gratitude-note-${note.id}`}
                  >
                    <p className="text-sm font-medium text-foreground mb-2">
                      {note.text}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {note.date.toLocaleDateString()} • {note.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Gratitude Tips */}
      <Card className="border-muted">
        <CardHeader>
          <CardTitle className="text-sm">Gratitude Tips 💡</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>• Try to add at least one note per day</p>
            <p>• Look for small moments: a smile, good weather, a tasty meal</p>
            <p>• Review your jar when you're feeling down</p>
            <p>• Gratitude gets easier with practice!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}