import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Heart, Moon, MessageCircle, Target, Palette, Calendar } from "lucide-react";
import { getUsageStats, type UsageStats as AppUsageStats } from "@/lib/usage";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  progress: number;
  maxProgress: number;
  category: "dreams" | "chat" | "wellness" | "gratitude" | "consistency" | "sandbox" | "diary" | "sos";
  earnedDate?: Date;
}

export default function Achievements() {
  // Real usage statistics from the centralized usage tracker
  const [usageStats, setUsageStats] = useState<AppUsageStats>(getUsageStats);

  // Refresh stats from localStorage when component mounts or becomes visible
  useEffect(() => {
    const refreshStats = () => {
      setUsageStats(getUsageStats());
    };
    
    // Refresh on focus to catch updates from other components
    window.addEventListener('focus', refreshStats);
    
    // Refresh periodically to catch updates from localStorage
    const interval = setInterval(refreshStats, 2000);
    
    return () => {
      window.removeEventListener('focus', refreshStats);
      clearInterval(interval);
    };
  }, []);

  // Generate achievements based on real usage data
  const achievements: Achievement[] = [
    // 💬 Chat-based achievements
    {
      id: "first-chat",
      title: "First Conversation",
      description: "Sent your first message to the AI chatbox",
      icon: "💬",
      earned: usageStats.chatMessages >= 1,
      progress: Math.min(usageStats.chatMessages, 1),
      maxProgress: 1,
      category: "chat",
      earnedDate: usageStats.chatMessages >= 1 ? new Date() : undefined
    },
    {
      id: "honest-heart",
      title: "Honest Heart",
      description: "Shared feelings in chatbox 10 times",
      icon: "💙",
      earned: usageStats.chatMessages >= 10,
      progress: Math.min(usageStats.chatMessages, 10),
      maxProgress: 10,
      category: "chat",
      earnedDate: usageStats.chatMessages >= 10 ? new Date() : undefined
    },
    {
      id: "chat-champion",
      title: "Chat Champion",
      description: "Sent 50 messages in the AI chatbox",
      icon: "🏆",
      earned: usageStats.chatMessages >= 50,
      progress: Math.min(usageStats.chatMessages, 50),
      maxProgress: 50,
      category: "chat"
    },

    // 🌙 Dream journal achievements
    {
      id: "dream-starter",
      title: "Dream Starter",
      description: "Logged your first dream",
      icon: "🌙",
      earned: usageStats.dreamEntries >= 1,
      progress: Math.min(usageStats.dreamEntries, 1),
      maxProgress: 1,
      category: "dreams",
      earnedDate: usageStats.dreamEntries >= 1 ? new Date() : undefined
    },
    {
      id: "dream-explorer",
      title: "Dream Explorer",
      description: "Logged 5 dreams in your dream journal",
      icon: "✨",
      earned: usageStats.dreamEntries >= 5,
      progress: Math.min(usageStats.dreamEntries, 5),
      maxProgress: 5,
      category: "dreams",
      earnedDate: usageStats.dreamEntries >= 5 ? new Date() : undefined
    },
    {
      id: "night-storyteller",
      title: "Night Storyteller",
      description: "Recorded 20 dreams and transformed them",
      icon: "🔮",
      earned: usageStats.dreamEntries >= 20,
      progress: Math.min(usageStats.dreamEntries, 20),
      maxProgress: 20,
      category: "dreams"
    },

    // 🎨 Emotion sandbox achievements
    {
      id: "first-creation",
      title: "First Creation",
      description: "Created your first artwork in emotion sandbox",
      icon: "🎨",
      earned: usageStats.sandboxCreations >= 1,
      progress: Math.min(usageStats.sandboxCreations, 1),
      maxProgress: 1,
      category: "sandbox",
      earnedDate: usageStats.sandboxCreations >= 1 ? new Date() : undefined
    },
    {
      id: "emotion-artist",
      title: "Emotion Artist",
      description: "Created 10 art pieces in emotion sandbox",
      icon: "🌈",
      earned: usageStats.sandboxCreations >= 10,
      progress: Math.min(usageStats.sandboxCreations, 10),
      maxProgress: 10,
      category: "sandbox",
      earnedDate: usageStats.sandboxCreations >= 10 ? new Date() : undefined
    },
    {
      id: "creative-master",
      title: "Creative Master",
      description: "Created 30 emotional artworks",
      icon: "🎭",
      earned: usageStats.sandboxCreations >= 30,
      progress: Math.min(usageStats.sandboxCreations, 30),
      maxProgress: 30,
      category: "sandbox"
    },

    // ✨ Gratitude achievements
    {
      id: "gratitude-starter",
      title: "Gratitude Starter",
      description: "Added your first gratitude note",
      icon: "✨",
      earned: usageStats.gratitudeNotes >= 1,
      progress: Math.min(usageStats.gratitudeNotes, 1),
      maxProgress: 1,
      category: "gratitude",
      earnedDate: usageStats.gratitudeNotes >= 1 ? new Date() : undefined
    },
    {
      id: "gratitude-collector",
      title: "Gratitude Collector",
      description: "Added 20 notes to your gratitude jar",
      icon: "🫙",
      earned: usageStats.gratitudeNotes >= 20,
      progress: Math.min(usageStats.gratitudeNotes, 20),
      maxProgress: 20,
      category: "gratitude",
      earnedDate: usageStats.gratitudeNotes >= 20 ? new Date() : undefined
    },
    {
      id: "thankful-soul",
      title: "Thankful Soul",
      description: "Collected 50 gratitude moments",
      icon: "🌟",
      earned: usageStats.gratitudeNotes >= 50,
      progress: Math.min(usageStats.gratitudeNotes, 50),
      maxProgress: 50,
      category: "gratitude"
    },

    // 📊 Mood tracking achievements
    {
      id: "mood-tracker",
      title: "Mood Tracker",
      description: "Logged your first mood entry",
      icon: "📊",
      earned: usageStats.moodEntries >= 1,
      progress: Math.min(usageStats.moodEntries, 1),
      maxProgress: 1,
      category: "consistency",
      earnedDate: usageStats.moodEntries >= 1 ? new Date() : undefined
    },
    {
      id: "consistent-tracker",
      title: "Consistent Tracker",
      description: "Tracked your mood 15 times",
      icon: "📈",
      earned: usageStats.moodEntries >= 15,
      progress: Math.min(usageStats.moodEntries, 15),
      maxProgress: 15,
      category: "consistency",
      earnedDate: usageStats.moodEntries >= 15 ? new Date() : undefined
    },

    // 🚨 SOS achievements
    {
      id: "calm-mind",
      title: "Calm Mind",
      description: "Used SOS breathing exercises 5 times",
      icon: "🌸",
      earned: usageStats.sosUses >= 5,
      progress: Math.min(usageStats.sosUses, 5),
      maxProgress: 5,
      category: "sos",
      earnedDate: usageStats.sosUses >= 5 ? new Date() : undefined
    },
    {
      id: "crisis-navigator",
      title: "Crisis Navigator",
      description: "Successfully used SOS support 15 times",
      icon: "⚡",
      earned: usageStats.sosUses >= 15,
      progress: Math.min(usageStats.sosUses, 15),
      maxProgress: 15,
      category: "sos"
    },

    // 📔 Personal diary achievements
    {
      id: "diary-starter",
      title: "Diary Starter",
      description: "Wrote your first diary entry",
      icon: "📔",
      earned: usageStats.diaryEntries >= 1,
      progress: Math.min(usageStats.diaryEntries, 1),
      maxProgress: 1,
      category: "diary",
      earnedDate: usageStats.diaryEntries >= 1 ? new Date() : undefined
    },
    {
      id: "thoughtful-writer",
      title: "Thoughtful Writer",
      description: "Wrote 10 personal diary entries",
      icon: "✍️",
      earned: usageStats.diaryEntries >= 10,
      progress: Math.min(usageStats.diaryEntries, 10),
      maxProgress: 10,
      category: "diary",
      earnedDate: usageStats.diaryEntries >= 10 ? new Date() : undefined
    },

    // 🎯 Consistency achievements
    {
      id: "active-week",
      title: "Active Week",
      description: "Used MindEase for 7 days",
      icon: "🎯",
      earned: usageStats.daysActive >= 7,
      progress: Math.min(usageStats.daysActive, 7),
      maxProgress: 7,
      category: "consistency",
      earnedDate: usageStats.daysActive >= 7 ? new Date() : undefined
    },
    {
      id: "milestone-warrior",
      title: "Milestone Warrior",
      description: "Reached 30 days on MindEase",
      icon: "🏆",
      earned: usageStats.daysActive >= 30,
      progress: Math.min(usageStats.daysActive, 30),
      maxProgress: 30,
      category: "consistency"
    },
    {
      id: "wellness-champion",
      title: "Wellness Champion",
      description: "Used all 7 MindEase features",
      icon: "🌟",
      earned: (usageStats.chatMessages >= 1 && usageStats.dreamEntries >= 1 && 
               usageStats.sandboxCreations >= 1 && usageStats.gratitudeNotes >= 1 && 
               usageStats.moodEntries >= 1 && usageStats.sosUses >= 1 && 
               usageStats.diaryEntries >= 1),
      progress: [usageStats.chatMessages >= 1, usageStats.dreamEntries >= 1, 
                usageStats.sandboxCreations >= 1, usageStats.gratitudeNotes >= 1,
                usageStats.moodEntries >= 1, usageStats.sosUses >= 1, 
                usageStats.diaryEntries >= 1].filter(Boolean).length,
      maxProgress: 7,
      category: "wellness"
    }
  ];

  const earnedAchievements = achievements.filter(a => a.earned);
  const inProgressAchievements = achievements.filter(a => !a.earned);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "dreams": return <Moon className="h-4 w-4" />;
      case "chat": return <MessageCircle className="h-4 w-4" />;
      case "wellness": return <Heart className="h-4 w-4" />;
      case "gratitude": return <Star className="h-4 w-4" />;
      case "consistency": return <Target className="h-4 w-4" />;
      case "sandbox": return <Palette className="h-4 w-4" />;
      case "diary": return <Calendar className="h-4 w-4" />;
      case "sos": return <Heart className="h-4 w-4" />;
      default: return <Trophy className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "dreams": return "purple";
      case "chat": return "blue";
      case "wellness": return "green";
      case "gratitude": return "yellow";
      case "consistency": return "orange";
      case "sandbox": return "pink";
      case "diary": return "teal";
      case "sos": return "red";
      default: return "gray";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Trophy className="h-8 w-8 text-yellow-600" />
          <h2 className="text-2xl font-bold text-primary">🏅 Achievements & Badges</h2>
        </div>
        <p className="text-muted-foreground">
          Celebrate your progress and milestones on your wellness journey ✨
        </p>
        
        {/* Live Usage Statistics */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader>
            <CardTitle className="text-lg">📊 Your MindEase Usage Statistics</CardTitle>
            <CardDescription>Real-time tracking of your wellness journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{usageStats.chatMessages}</div>
                <div className="text-xs text-muted-foreground">💬 Chat Messages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{usageStats.dreamEntries}</div>
                <div className="text-xs text-muted-foreground">🌙 Dreams Logged</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">{usageStats.sandboxCreations}</div>
                <div className="text-xs text-muted-foreground">🎨 Art Creations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">{usageStats.gratitudeNotes}</div>
                <div className="text-xs text-muted-foreground">✨ Gratitude Notes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{usageStats.moodEntries}</div>
                <div className="text-xs text-muted-foreground">📊 Mood Entries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{usageStats.sosUses}</div>
                <div className="text-xs text-muted-foreground">🚨 SOS Uses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-600">{usageStats.diaryEntries}</div>
                <div className="text-xs text-muted-foreground">📔 Diary Entries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">{usageStats.daysActive}</div>
                <div className="text-xs text-muted-foreground">📅 Active Days</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-3xl font-bold text-green-600">{earnedAchievements.length}</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-3xl font-bold text-blue-600">{inProgressAchievements.length}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-3xl font-bold text-purple-600">
              {Math.round((earnedAchievements.length / achievements.length) * 100)}%
            </div>
            <div className="text-sm text-muted-foreground">Completion</div>
          </CardContent>
        </Card>
      </div>

      {/* Earned Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Earned Badges ({earnedAchievements.length})
          </CardTitle>
          <CardDescription>
            Congratulations on these amazing achievements!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {earnedAchievements.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Your first badge is waiting to be earned!</p>
              <p className="text-sm mt-2">Keep using MindEase features to unlock achievements.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {earnedAchievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className="border-green-200 bg-green-50 dark:bg-green-950/20 hover-elevate"
                  data-testid={`achievement-earned-${achievement.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-green-800 dark:text-green-200">
                            {achievement.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {getCategoryIcon(achievement.category)}
                          </Badge>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400">
                          Earned {achievement.earnedDate?.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* In Progress Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            In Progress ({inProgressAchievements.length})
          </CardTitle>
          <CardDescription>
            Keep going! You're on your way to earning these badges.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inProgressAchievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className="border-blue-200 dark:border-blue-800"
                data-testid={`achievement-progress-${achievement.id}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl opacity-60">{achievement.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {getCategoryIcon(achievement.category)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">
                            {achievement.progress}/{achievement.maxProgress}
                          </span>
                        </div>
                        <Progress 
                          value={(achievement.progress / achievement.maxProgress) * 100} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Motivation */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold text-primary mb-2">Keep Going! 🌟</h3>
          <p className="text-muted-foreground">
            Every step you take on your wellness journey is worth celebrating. 
            You're doing amazing work by prioritizing your mental health!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}