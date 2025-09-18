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

      {/* About Section */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">About MindEase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-lg text-muted-foreground">
            We designed this platform to support youth mental wellness through creativity, reflection, and play.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
              <MessageCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary">AI Chatbox</h3>
                <p className="text-sm text-muted-foreground">Share your feelings and get gentle, empathetic responses.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
              <Palette className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-accent">Emotion Sandbox</h3>
                <p className="text-sm text-muted-foreground">Turn your emotions into calming art, music, and stories.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
              <Moon className="h-6 w-6 text-chart-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-chart-3">Dream Journal</h3>
                <p className="text-sm text-muted-foreground">Transform your dreams into hopeful stories and affirmations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
              <BarChart3 className="h-6 w-6 text-chart-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-chart-4">Growth Tracker</h3>
                <p className="text-sm text-muted-foreground">Watch your emotional journey and celebrate progress.</p>
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