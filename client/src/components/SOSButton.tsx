import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Phone, Brain, Activity } from "lucide-react";
import { trackSOSUse } from "@/lib/usage";
import BreathingExercise from "./BreathingExercise";
import GroundingGame from "./GroundingGame";
import StretchRoutine from "./StretchRoutine";

export default function SOSButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
          trackSOSUse(); // Track usage for achievements
        }}
        data-testid="button-sos"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 z-50 pulse-animation"
        size="icon"
      >
        <Heart className="h-8 w-8" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-destructive">
              SOS Support
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="calm" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="calm" data-testid="tab-calm">
                <Brain className="h-4 w-4 mr-1" />
                Calm
              </TabsTrigger>
              <TabsTrigger value="move" data-testid="tab-move">
                <Activity className="h-4 w-4 mr-1" />
                Move
              </TabsTrigger>
              <TabsTrigger value="support" data-testid="tab-support">
                <Phone className="h-4 w-4 mr-1" />
                Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calm" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Instant Calming Exercises</CardTitle>
                  <CardDescription>
                    Take a moment to breathe and center yourself
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <BreathingExercise />
                  <GroundingGame />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="move" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Body Movement & Mini Exercises</CardTitle>
                  <CardDescription>
                    Gentle movement to release tension and reset your energy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <StretchRoutine />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Emergency Resources</CardTitle>
                  <CardDescription>
                    Connect with support when you need it most
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => console.log("Crisis Text Line activated")}
                      data-testid="button-crisis-text"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Crisis Text Line: Text HOME to 741741
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => console.log("National Suicide Prevention Lifeline activated")}
                      data-testid="button-suicide-prevention"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      National Suicide Prevention Lifeline: 988
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => console.log("Talk to trusted person activated")}
                      data-testid="button-trusted-person"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Talk to a trusted person right now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <style>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}