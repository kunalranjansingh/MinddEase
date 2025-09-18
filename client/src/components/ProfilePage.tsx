import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, BarChart3, BookOpen, Trophy, Calendar, Target } from "lucide-react";
import GratitudeJar from "./GratitudeJar";
import GrowthTracker from "./GrowthTracker";
import PersonalDiary from "./PersonalDiary";
import Achievements from "./Achievements";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const getGreeting = () => {
    const greetings = [
      `👋 Hello! Welcome back to your safe space 💜`,
      `🌸 Hey there! Ready to reflect and grow today?`,
      `✨ Welcome back! Your journey continues here 🌟`,
      `💫 Hi! Time for some self-care and reflection`,
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  return (
    <div className="space-y-6">
      {/* Greeting Header */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {getGreeting()}
          </h1>
          <p className="text-muted-foreground">
            Your personal wellness space for growth, reflection, and celebration 🌟
          </p>
        </CardContent>
      </Card>

      {/* Navigation Tabs for Profile Features */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-background/50 border">
          <TabsTrigger 
            value="overview" 
            data-testid="tab-overview"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Heart className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="gratitude" 
            data-testid="tab-gratitude"
            className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
          >
            🫙 Jar Game
          </TabsTrigger>
          <TabsTrigger 
            value="tracker" 
            data-testid="tab-tracker"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <BarChart3 className="h-4 w-4 mr-1" />
            Growth Tracker
          </TabsTrigger>
          <TabsTrigger 
            value="diary" 
            data-testid="tab-diary"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
          >
            <BookOpen className="h-4 w-4 mr-1" />
            Personal Diary
          </TabsTrigger>
          <TabsTrigger 
            value="achievements" 
            data-testid="tab-achievements"
            className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
          >
            <Trophy className="h-4 w-4 mr-1" />
            Achievements
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card 
              className="text-center cursor-pointer hover-elevate transition-all"
              onClick={() => setActiveTab("gratitude")}
              data-testid="card-stat-gratitude"
            >
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-yellow-600">12</div>
                <div className="text-xs text-muted-foreground">🫙 Gratitude Notes</div>
              </CardContent>
            </Card>
            <Card 
              className="text-center cursor-pointer hover-elevate transition-all"
              onClick={() => setActiveTab("tracker")}
              data-testid="card-stat-tracker"
            >
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-xs text-muted-foreground">📊 Days Tracked</div>
              </CardContent>
            </Card>
            <Card 
              className="text-center cursor-pointer hover-elevate transition-all"
              onClick={() => setActiveTab("diary")}
              data-testid="card-stat-diary"
            >
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-xs text-muted-foreground">📔 Diary Entries</div>
              </CardContent>
            </Card>
            <Card 
              className="text-center cursor-pointer hover-elevate transition-all"
              onClick={() => setActiveTab("achievements")}
              data-testid="card-stat-achievements"
            >
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-xs text-muted-foreground">🏅 Badges Earned</div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card 
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-2 border-transparent hover:border-yellow-300 transition-all duration-300 hover-elevate cursor-pointer group"
              onClick={() => setActiveTab("gratitude")}
              data-testid="card-feature-gratitude"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🫙</span>
                  <div>
                    <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors">
                      Gratitude Jar Game
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      Drop one good thing from your day into your virtual jar
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card 
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-transparent hover:border-blue-300 transition-all duration-300 hover-elevate cursor-pointer group"
              onClick={() => setActiveTab("tracker")}
              data-testid="card-feature-tracker"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Personal Growth Tracker
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      Simple chart of moods over time with AI feedback
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card 
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-transparent hover:border-green-300 transition-all duration-300 hover-elevate cursor-pointer group"
              onClick={() => setActiveTab("diary")}
              data-testid="card-feature-diary"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📔</span>
                  <div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                      Personal Diary
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      A private space to write thoughts, dreams, or feelings
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            
            <Card 
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-transparent hover:border-purple-300 transition-all duration-300 hover-elevate cursor-pointer group"
              onClick={() => setActiveTab("achievements")}
              data-testid="card-feature-achievements"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏅</span>
                  <div>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      Achievements & Badges
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      Celebrate your progress with earned badges and milestones
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
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
        </TabsContent>

        {/* Individual Feature Tabs */}
        <TabsContent value="gratitude" className="mt-6">
          <GratitudeJar />
        </TabsContent>

        <TabsContent value="tracker" className="mt-6">
          <GrowthTracker />
        </TabsContent>

        <TabsContent value="diary" className="mt-6">
          <PersonalDiary />
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <Achievements />
        </TabsContent>
      </Tabs>
    </div>
  );
}