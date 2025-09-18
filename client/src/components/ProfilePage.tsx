import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BarChart3, BookOpen, Trophy, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GratitudeJar from "./GratitudeJar";
import GrowthTracker from "./GrowthTracker";
import PersonalDiary from "./PersonalDiary";
import Achievements from "./Achievements";

export default function ProfilePage() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [userName] = useState("Aastha"); // TODO: remove mock data - get from user context

  const getGreeting = () => {
    const greetings = [
      `👋 Hello, ${userName}! Welcome back to your safe space 💜`,
      `🌸 Hey there! Ready to reflect and grow today?`,
      `✨ Welcome back, ${userName}! Your journey continues here 🌟`,
      `💫 Hi ${userName}! Time for some self-care and reflection`,
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const features = [
    {
      id: "gratitude",
      title: "Gratitude Jar Game",
      description: "Drop one good thing from your day into your virtual jar",
      icon: "🫙",
      color: "primary",
      background: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20",
      component: GratitudeJar
    },
    {
      id: "tracker",
      title: "Personal Growth Tracker", 
      description: "Simple chart of moods over time with AI feedback",
      icon: "📊",
      color: "chart-1",
      background: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      component: GrowthTracker
    },
    {
      id: "diary",
      title: "Personal Diary",
      description: "A private space to write thoughts, dreams, or feelings",
      icon: "📔",
      color: "accent",
      background: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      component: PersonalDiary
    },
    {
      id: "achievements",
      title: "Achievements & Badges",
      description: "Celebrate your progress with earned badges and milestones",
      icon: "🏅",
      color: "chart-4",
      background: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
      component: Achievements
    }
  ];

  const openFeature = (featureId: string) => {
    setActiveFeature(featureId);
    console.log(`Opened ${featureId} feature`);
  };

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <div className="space-y-8">
      {/* Greeting Header */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {getGreeting()}
          </h1>
          <p className="text-muted-foreground">
            Your personal wellness space for growth, reflection, and celebration
          </p>
        </CardContent>
      </Card>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Card 
            key={feature.id}
            className={`${feature.background} border-2 border-transparent hover:border-${feature.color}/30 transition-all duration-300 hover-elevate cursor-pointer group`}
            onClick={() => openFeature(feature.id)}
            data-testid={`card-feature-${feature.id}`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Button 
                variant="outline"
                size="sm"
                className="w-full group-hover:scale-105 transition-transform"
                data-testid={`button-open-${feature.id}`}
              >
                Open {feature.title.split(' ')[0]}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">12</div>
            <div className="text-xs text-muted-foreground">Gratitude Notes</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">7</div>
            <div className="text-xs text-muted-foreground">Days Tracked</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-xs text-muted-foreground">Diary Entries</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-xs text-muted-foreground">Badges Earned</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Inspiration */}
      <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
        <CardHeader>
          <CardTitle className="text-center text-accent">Today's Inspiration ✨</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg font-medium text-muted-foreground italic">
            "Every small step forward is a victory worth celebrating. You're doing amazing!"
          </p>
        </CardContent>
      </Card>

      {/* Feature Dialog */}
      <Dialog open={!!activeFeature} onOpenChange={() => setActiveFeature(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {activeFeatureData && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <span className="text-2xl">{activeFeatureData.icon}</span>
                  {activeFeatureData.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <activeFeatureData.component />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}