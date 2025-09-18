import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Palette, Moon, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ChatBox from "./ChatBox";
import EmotionSandbox from "./EmotionSandbox";
import DreamJournal from "./DreamJournal";

export default function DashboardPage() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      id: "chatbox",
      title: "AI Chatbox",
      description: "Share your feelings and get gentle, empathetic responses",
      icon: MessageCircle,
      color: "primary",
      background: "bg-gradient-to-br from-primary/10 to-primary/20",
      component: ChatBox
    },
    {
      id: "sandbox", 
      title: "Emotion Sandbox",
      description: "Turn your emotions into calming art, music, and stories",
      icon: Palette,
      color: "accent",
      background: "bg-gradient-to-br from-accent/10 to-accent/20",
      component: EmotionSandbox
    },
    {
      id: "dreamcatcher",
      title: "Dream Journal",
      description: "Transform your dreams into hopeful stories and affirmations",
      icon: Moon,
      color: "chart-3",
      background: "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20",
      component: DreamJournal
    }
  ];

  const openFeature = (featureId: string) => {
    setActiveFeature(featureId);
    console.log(`Opened ${featureId} feature`);
  };

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Your Wellness Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose a tool to support your mental wellness journey
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.id}
              className={`${feature.background} border-2 border-transparent hover:border-${feature.color}/30 transition-all duration-300 hover-elevate cursor-pointer group`}
              onClick={() => openFeature(feature.id)}
              data-testid={`card-feature-${feature.id}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-colors`}>
                    <IconComponent className={`h-12 w-12 text-${feature.color}`} />
                  </div>
                </div>
                <CardTitle className={`text-xl text-${feature.color}`}>
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  className="w-full group-hover:scale-105 transition-transform"
                  variant="outline"
                  data-testid={`button-open-${feature.id}`}
                >
                  Open {feature.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="border-muted">
        <CardHeader>
          <CardTitle className="text-center">Quick Access</CardTitle>
          <CardDescription className="text-center">
            Jump into any wellness activity instantly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => openFeature("chatbox")}
              data-testid="button-quick-chat"
              className="hover-elevate"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Quick Chat
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => openFeature("sandbox")}
              data-testid="button-quick-create"
              className="hover-elevate"
            >
              <Palette className="h-4 w-4 mr-2" />
              Create Art
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => openFeature("dreamcatcher")}
              data-testid="button-quick-dream"
              className="hover-elevate"
            >
              <Moon className="h-4 w-4 mr-2" />
              Record Dream
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feature Dialog */}
      <Dialog open={!!activeFeature} onOpenChange={() => setActiveFeature(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {activeFeatureData && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <activeFeatureData.icon className={`h-6 w-6 text-${activeFeatureData.color}`} />
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