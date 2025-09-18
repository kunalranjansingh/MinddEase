import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Calendar, Heart } from "lucide-react";

interface MoodEntry {
  date: string;
  mood: string;
  intensity: number;
  color: string;
}

const moodOptions = [
  { value: "calm", label: "Calm 🌸", color: "#10b981", intensity: 5 },
  { value: "happy", label: "Happy 😃", color: "#f59e0b", intensity: 5 },
  { value: "excited", label: "Excited ✨", color: "#8b5cf6", intensity: 4 },
  { value: "neutral", label: "Neutral 😐", color: "#6b7280", intensity: 3 },
  { value: "anxious", label: "Anxious 😟", color: "#ef4444", intensity: 2 },
  { value: "sad", label: "Sad 😢", color: "#3b82f6", intensity: 2 },
  { value: "stressed", label: "Stressed 😤", color: "#dc2626", intensity: 1 },
];

export default function GrowthTracker() {
  const [selectedMood, setSelectedMood] = useState("");
  
  // TODO: remove mock data
  const [moodData, setMoodData] = useState<MoodEntry[]>([
    { date: "Mon", mood: "calm", intensity: 5, color: "#10b981" },
    { date: "Tue", mood: "calm", intensity: 5, color: "#10b981" },
    { date: "Wed", mood: "happy", intensity: 5, color: "#f59e0b" },
    { date: "Thu", mood: "calm", intensity: 5, color: "#10b981" },
    { date: "Fri", mood: "stressed", intensity: 1, color: "#dc2626" },
    { date: "Sat", mood: "happy", intensity: 5, color: "#f59e0b" },
    { date: "Sun", mood: "stressed", intensity: 1, color: "#dc2626" },
  ]);

  const addMoodEntry = () => {
    if (!selectedMood) return;

    const mood = moodOptions.find(m => m.value === selectedMood);
    if (!mood) return;

    const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });
    const newEntry: MoodEntry = {
      date: today,
      mood: mood.value,
      intensity: mood.intensity,
      color: mood.color
    };

    // Replace today's entry if it exists, otherwise add new
    const updatedData = moodData.filter(entry => entry.date !== today);
    setMoodData([...updatedData, newEntry]);
    setSelectedMood("");
    
    console.log("Added mood entry:", newEntry);
  };

  const getMoodCounts = () => {
    const counts = moodData.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(counts).map(([mood, count]) => {
      const moodOption = moodOptions.find(m => m.value === mood);
      return {
        name: moodOption?.label || mood,
        value: count,
        color: moodOption?.color || "#6b7280"
      };
    });
  };

  const getAIFeedback = () => {
    const calmCount = moodData.filter(entry => entry.mood === "calm").length;
    const happyCount = moodData.filter(entry => entry.mood === "happy").length;
    const stressedCount = moodData.filter(entry => entry.mood === "stressed").length;

    if (calmCount >= 3 && happyCount >= 2) {
      return {
        message: "You are getting better at finding calm before exams. Your emotional balance is improving! 🌟",
        type: "positive"
      };
    } else if (stressedCount >= 3) {
      return {
        message: "I notice you've been feeling stressed lately. Remember to use your breathing exercises and take breaks. You're doing great! 💜",
        type: "supportive"
      };
    } else {
      return {
        message: "You're on a wonderful journey of self-awareness. Every day you track is a step toward better emotional health! ✨",
        type: "encouraging"
      };
    }
  };

  const aiCommunication = getAIFeedback();
  const pieData = getMoodCounts();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Add Mood Entry */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-destructive" />
            How are you feeling today?
          </CardTitle>
          <CardDescription>
            Track your daily emotions to see patterns and growth over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Select value={selectedMood} onValueChange={setSelectedMood}>
              <SelectTrigger className="flex-1" data-testid="select-mood">
                <SelectValue placeholder="Select your current mood..." />
              </SelectTrigger>
              <SelectContent>
                {moodOptions.map((mood) => (
                  <SelectItem key={mood.value} value={mood.value}>
                    {mood.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              onClick={addMoodEntry}
              disabled={!selectedMood}
              data-testid="button-add-mood"
              className="hover-elevate"
            >
              <Calendar className="h-4 w-4 mr-1" />
              Track
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* AI Feedback */}
      <Card className={`border-2 ${aiCommunication.type === 'positive' ? 'border-green-200 bg-green-50 dark:bg-green-950/20' : aiCommunication.type === 'supportive' ? 'border-blue-200 bg-blue-50 dark:bg-blue-950/20' : 'border-purple-200 bg-purple-50 dark:bg-purple-950/20'}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4" />
            AI Feedback & Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {aiCommunication.message}
          </p>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Weekly Mood Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">This Week's Mood Journey</CardTitle>
            <CardDescription>
              Your emotional patterns over the past 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 5]} />
                <Tooltip 
                  formatter={(value, name, props) => [
                    `Intensity: ${value}`,
                    moodOptions.find(m => m.value === props.payload.mood)?.label || props.payload.mood
                  ]}
                />
                <Bar dataKey="intensity" fill="#8884d8">
                  {moodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Mood Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Mood Distribution</CardTitle>
            <CardDescription>
              How often you've experienced each emotion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Stats Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {moodData.filter(entry => entry.mood === "calm").length}
              </div>
              <div className="text-sm text-muted-foreground">Calm Days 🌸</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {moodData.filter(entry => entry.mood === "happy").length}
              </div>
              <div className="text-sm text-muted-foreground">Happy Days 😃</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">
                {moodData.filter(entry => entry.mood === "stressed").length}
              </div>
              <div className="text-sm text-muted-foreground">Stressed Days 😟</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {moodData.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Tracked</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}