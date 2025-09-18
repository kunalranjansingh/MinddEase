import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Palette, Moon, BarChart3, Target, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to MindEase
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl -z-10" />
        </div>
        
        <p className="text-xl md:text-2xl font-semibold text-primary">
          AI for 24-Hour Youth Mental Wellness 💜
        </p>
      </div>

      {/* About Section - Detailed Feature Descriptions */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">🌟 Complete Feature Guide</CardTitle>
          <CardDescription className="text-center text-lg">
            Every tool designed specifically to support your mental wellness journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Core AI Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary text-center">💜 Core AI-Powered Features</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-800">
                <MessageCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary text-lg">🤖 AI Chatbox - Your 24/7 Support Friend</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>What it does:</strong> A safe space to share any thoughts, feelings, or concerns. Our AI responds with empathy, validation, and gentle guidance.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>How it helps:</strong> Provides immediate emotional support, helps you process feelings, offers coping strategies, and validates your experiences without judgment.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Perfect for:</strong> When you need someone to listen, feeling overwhelmed, processing difficult emotions, or just want to talk through your day.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border border-green-200 dark:border-green-800">
                <Palette className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent text-lg">🎨 Emotion Sandbox - Creative Expression Therapy</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>What it does:</strong> Transforms your emotions into beautiful visual art, calming music suggestions, inspiring stories, and wellness tips using AI.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>How it helps:</strong> Creative expression reduces stress, helps process emotions, provides new perspectives on feelings, and creates positive associations with difficult emotions.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Perfect for:</strong> When words aren't enough, feeling creatively blocked, wanting to explore emotions safely, or needing inspiration and motivation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800">
                <Moon className="h-8 w-8 text-chart-3 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-chart-3 text-lg">🌙 Dream Journal - Transform Your Subconscious</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>What it does:</strong> AI analyzes your dreams (even nightmares) and transforms them into positive, hopeful stories with personalized affirmations.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>How it helps:</strong> Reduces anxiety from bad dreams, helps you understand subconscious thoughts, builds positive thinking patterns, and improves sleep quality.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Perfect for:</strong> Processing nightmares, understanding recurring dreams, building confidence, and creating positive bedtime routines.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border border-yellow-200 dark:border-yellow-800">
                <BarChart3 className="h-8 w-8 text-chart-4 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-chart-4 text-lg">📊 Growth Tracker - Your Progress Visualizer</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>What it does:</strong> Beautiful charts showing your mood patterns over time, with AI-generated insights and personalized feedback on your emotional growth.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>How it helps:</strong> Identifies emotional patterns, celebrates progress, provides motivation during tough times, and helps you understand your triggers and strengths.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Perfect for:</strong> Tracking emotional patterns, celebrating small wins, identifying triggers, and staying motivated on your wellness journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness Tools */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="text-xl font-semibold text-accent text-center">🧘 Instant Wellness Tools</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20">
                <Heart className="h-8 w-8 text-destructive mx-auto mb-2" />
                <h4 className="font-semibold text-destructive">🚨 SOS Emergency Support</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Instant access to breathing exercises, grounding techniques, gentle stretches, and crisis resources. Available 24/7 with one click.
                </p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-green-600">🎯 Personal Growth Hub</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Gratitude jar game, personal diary with calendar, achievement badges, and progress tracking to celebrate your journey.
                </p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
                <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-600">🌐 Multilingual Support</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Complete support in Hindi and English with proper font rendering and culturally appropriate responses.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mission Statement */}
      <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="h-8 w-8 text-accent" />
            <h2 className="text-2xl font-bold text-accent">Our Mission</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            To give young people a safe space to express, relax, and grow.
          </p>
          <div className="flex justify-center gap-4 mt-6 text-2xl">
            <span className="animate-pulse">🌟</span>
            <Heart className="h-6 w-6 text-destructive mt-1" />
            <span className="animate-pulse">🌟</span>
          </div>
        </CardContent>
      </Card>

      {/* Floating Background Elements */}
      <style>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
}