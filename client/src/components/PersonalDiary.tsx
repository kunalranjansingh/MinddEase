import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { BookOpen, Save, Heart, Sparkles, Lock, CalendarDays } from "lucide-react";
import { trackDiaryEntry } from "@/lib/usage";

interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: Date;
  affirmation?: string;
}

export default function PersonalDiary() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [entries, setEntries] = useState<DiaryEntry[]>([
    // TODO: remove mock data
    {
      id: "1",
      title: "A challenging day",
      content: "Today was really difficult. I felt overwhelmed with school and couldn't focus. But I tried the breathing exercise from MindEase and it helped a bit. I'm grateful I have this space to write.",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      affirmation: "You showed incredible strength by reaching out for help and using healthy coping strategies."
    },
    {
      id: "2",
      title: "Small wins",
      content: "Had a good conversation with my friend today. We talked about our dreams and it made me feel hopeful about the future. Sometimes I forget how important friendships are.",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      affirmation: "Your ability to connect meaningfully with others shows your emotional intelligence and kindness."
    }
  ]);

  const saveEntry = () => {
    if (!currentTitle.trim() || !currentContent.trim()) return;

    // Generate AI affirmation (mock - in real app would call OpenAI)
    const generateAffirmation = (content: string) => {
      const affirmations = [
        "Your willingness to reflect and grow shows incredible self-awareness and maturity.",
        "Every word you write is a step toward understanding yourself better. That's beautiful.",
        "Your thoughts and feelings are valid and important. Thank you for sharing them here.",
        "The fact that you're taking time for self-reflection shows how much you value your growth.",
        "Your honesty with yourself is a superpower that will guide you through any challenge."
      ];
      return affirmations[Math.floor(Math.random() * affirmations.length)];
    };

    const newEntry: DiaryEntry = {
      id: Date.now().toString(),
      title: currentTitle.trim(),
      content: currentContent.trim(),
      date: new Date(),
      affirmation: generateAffirmation(currentContent)
    };

    setEntries(prev => [newEntry, ...prev]);
    setCurrentTitle("");
    setCurrentContent("");
    
    // Track usage for achievements
    trackDiaryEntry();
    
    console.log("Saved diary entry:", newEntry.title);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Lock className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-bold text-primary">📔 Your Private Diary</h2>
        </div>
        <p className="text-muted-foreground">
          🔒 A safe space for your thoughts, dreams, and feelings - completely private and secure ✨
        </p>
        
        {/* Calendar with Smiling Faces */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* Calendar Toggle */}
            <Button
              onClick={() => setShowCalendar(!showCalendar)}
              variant="outline"
              size="sm"
              className="mb-4 hover-elevate"
              data-testid="button-toggle-calendar"
            >
              <CalendarDays className="h-4 w-4 mr-2" />
              {showCalendar ? "Hide Calendar" : "Show Calendar"} 📅
            </Button>
            
            {showCalendar && (
              <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
                <CardHeader>
                  <CardTitle className="text-center text-yellow-700 dark:text-yellow-300">
                    😊 Your Wellness Calendar 😊
                  </CardTitle>
                  <CardDescription className="text-center">
                    Every day is a new opportunity for growth and happiness! 🌟
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    components={{
                      Day: ({ date, ...props }) => {
                        const isToday = date?.toDateString() === new Date().toDateString();
                        const isSelected = date?.toDateString() === selectedDate?.toDateString();
                        const dayNumber = date?.getDate() || 0;
                        
                        // Add smiling faces based on the day
                        const smileEmoji = dayNumber % 5 === 0 ? "😊" : 
                                         dayNumber % 4 === 0 ? "😄" :
                                         dayNumber % 3 === 0 ? "🙂" :
                                         dayNumber % 2 === 0 ? "😌" : "😊";
                        
                        return (
                          <button
                            {...props}
                            className={`
                              relative h-9 w-9 p-0 font-normal aria-selected:opacity-100 
                              ${isToday ? 'bg-yellow-300 text-yellow-900 rounded-full font-bold' : ''}
                              ${isSelected ? 'bg-primary text-primary-foreground rounded-full' : ''}
                              hover:bg-yellow-200 transition-all duration-200
                            `}
                            data-testid={`calendar-day-${dayNumber}`}
                          >
                            <div className="flex flex-col items-center">
                              <span className="text-xs">{dayNumber}</span>
                              <span className="text-[8px]">{smileEmoji}</span>
                            </div>
                          </button>
                        );
                      }
                    }}
                  />
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="space-y-4">
            <Card className="text-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
              <CardContent className="p-4">
                <div className="text-2xl mb-2">🌈</div>
                <div className="text-sm font-semibold text-purple-700 dark:text-purple-300">Today's Mood</div>
                <div className="text-xs text-muted-foreground">Click to add! 😊</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
              <CardContent className="p-4">
                <div className="text-2xl mb-2">⭐</div>
                <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">Gratitude Today</div>
                <div className="text-xs text-muted-foreground">What made you smile? 😄</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* New Entry Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            ✍️ Write a New Entry
          </CardTitle>
          <CardDescription>
            💖 Express yourself freely - AI will create a positive affirmation from your writing ✨
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            placeholder="📝 Give your entry a title..."
            data-testid="input-diary-title"
          />
          <Textarea
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
            placeholder="🌸 What's on your mind? Write about your day, your dreams, your worries, or anything else you'd like to express... 💭"
            className="min-h-[150px] resize-none"
            data-testid="textarea-diary-content"
          />
          <Button
            onClick={saveEntry}
            disabled={!currentTitle.trim() || !currentContent.trim()}
            data-testid="button-save-entry"
            className="w-full hover-elevate"
          >
            <Save className="h-4 w-4 mr-2" />
            💾 Save Entry ✨
          </Button>
        </CardContent>
      </Card>

      {/* Diary Entries */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-destructive" />
            💖 Your Journal ({entries.length} entries) 📚
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-4">
              {entries.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <div className="text-6xl mb-4">📖</div>
                  <p>📝 Your diary is waiting for your first entry! ✨</p>
                  <p className="text-sm mt-2">🌟 Start by writing about your day or anything on your mind. 💭</p>
                </div>
              ) : (
                entries.map((entry) => (
                  <Card key={entry.id} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{entry.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">
                          {entry.date.toLocaleDateString()}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          {entry.content}
                        </p>
                      </div>
                      
                      {entry.affirmation && (
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20">
                          <div className="flex items-start gap-2">
                            <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-primary text-sm mb-1">
                                ✨ AI Affirmation 💝
                              </h4>
                              <p className="text-sm text-muted-foreground italic">
                                {entry.affirmation}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Privacy Notice */}
      <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                🔐 Your Privacy is Protected 🛡️
              </h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                🔒 Your diary entries are completely private and secure. Only you can see what you write here.
                ✨ AI affirmations are generated to help support your emotional wellbeing. 💚
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}