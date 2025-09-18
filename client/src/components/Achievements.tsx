import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Heart, Moon, MessageCircle, Target } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  progress: number;
  maxProgress: number;
  category: "dreams" | "chat" | "wellness" | "gratitude" | "consistency";
  earnedDate?: Date;
}

export default function Achievements() {
  // TODO: remove mock data
  const achievements: Achievement[] = [
    {
      id: "dream-explorer",
      title: "Dream Explorer",
      description: "Logged 5 dreams in your dream journal",
      icon: "🌙",
      earned: true,
      progress: 5,
      maxProgress: 5,
      category: "dreams",
      earnedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      id: "calm-mind",
      title: "Calm Mind",
      description: "Used SOS breathing exercises 10 times",
      icon: "🌸",
      earned: true,
      progress: 10,
      maxProgress: 10,
      category: "wellness",
      earnedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: "honest-heart",
      title: "Honest Heart",
      description: "Shared feelings in chatbox for 3 days",
      icon: "💬",
      earned: true,
      progress: 3,
      maxProgress: 3,
      category: "chat",
      earnedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
      id: "gratitude-collector",
      title: "Gratitude Collector",
      description: "Added 20 notes to your gratitude jar",
      icon: "✨",
      earned: false,
      progress: 12,
      maxProgress: 20,
      category: "gratitude"
    },
    {
      id: "consistent-tracker",
      title: "Consistent Tracker",
      description: "Tracked your mood for 7 consecutive days",
      icon: "📈",
      earned: false,
      progress: 4,
      maxProgress: 7,
      category: "consistency"
    },
    {
      id: "emotion-artist",
      title: "Emotion Artist",
      description: "Created 10 art pieces in emotion sandbox",
      icon: "🎨",
      earned: false,
      progress: 6,
      maxProgress: 10,
      category: "wellness"
    },
    {
      id: "milestone-warrior",
      title: "Milestone Warrior",
      description: "Reached 30 days on MindEase",
      icon: "🏆",
      earned: false,
      progress: 12,
      maxProgress: 30,
      category: "consistency"
    },
    {
      id: "wellness-champion",
      title: "Wellness Champion",
      description: "Used all MindEase features in one week",
      icon: "🌟",
      earned: false,
      progress: 4,
      maxProgress: 6,
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
      default: return "gray";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Trophy className="h-8 w-8 text-yellow-600" />
          <h2 className="text-2xl font-bold text-primary">Achievements & Badges</h2>
        </div>
        <p className="text-muted-foreground">
          Celebrate your progress and milestones on your wellness journey
        </p>
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