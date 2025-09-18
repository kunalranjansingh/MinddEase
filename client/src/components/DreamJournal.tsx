import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sparkles, Heart, Loader2, Stars } from "lucide-react";

interface DreamEntry {
  id: string;
  originalDream: string;
  reframedDream: string;
  affirmations: string[];
  timestamp: Date;
}

export default function DreamJournal() {
  const [currentDream, setCurrentDream] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [dreamEntries, setDreamEntries] = useState<DreamEntry[]>([]);

  const processDream = async () => {
    if (!currentDream.trim()) return;

    setIsProcessing(true);

    // Simulate AI dream processing (in real app, this would call OpenAI API)
    setTimeout(() => {
      const mockReframedDream = currentDream.toLowerCase().includes("drowning")
        ? "In your dream, you discovered your incredible ability to transform. What felt like drowning became your metamorphosis into a graceful dolphin. You swam freely through crystal-clear waters, moving with confidence and joy. This dream shows your inner strength to adapt and thrive in any situation."
        : "Your dream has been transformed into a beautiful story of growth and resilience. Every challenge you faced in the dream became a stepping stone to discovering your inner strength and wisdom.";

      const mockAffirmations = [
        "I am capable of transforming challenges into opportunities",
        "I trust in my ability to navigate difficult emotions",
        "I am strong, resilient, and worthy of peace",
        "My dreams guide me toward healing and growth",
        "I embrace change as a path to my authentic self"
      ];

      const newEntry: DreamEntry = {
        id: Date.now().toString(),
        originalDream: currentDream,
        reframedDream: mockReframedDream,
        affirmations: mockAffirmations,
        timestamp: new Date()
      };

      setDreamEntries(prev => [newEntry, ...prev]);
      setCurrentDream("");
      setIsProcessing(false);
    }, 2500);

    console.log("Processing dream:", currentDream);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Input Section */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
            <Moon className="h-5 w-5" />
            Dream Journal (DreamCatcher)
          </CardTitle>
          <CardDescription>
            Share your dreams and watch them transform into positive stories and affirmations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={currentDream}
            onChange={(e) => setCurrentDream(e.target.value)}
            placeholder="Describe your dream... even if it was scary or confusing, share it here and I'll help transform it into something beautiful."
            disabled={isProcessing}
            data-testid="textarea-dream"
            className="min-h-[120px] resize-none"
          />
          <Button
            onClick={processDream}
            disabled={!currentDream.trim() || isProcessing}
            data-testid="button-process-dream"
            className="w-full hover-elevate"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Transforming your dream...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Transform My Dream
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Processing State */}
      {isProcessing && (
        <Card className="border-purple-200 dark:border-purple-800">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="relative">
                <Moon className="h-16 w-16 text-purple-500 mx-auto animate-pulse" />
                <Stars className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                Weaving magic into your dream...
              </h3>
              <p className="text-muted-foreground">
                AI is creating a beautiful, hopeful transformation of your dream
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Dream Entries */}
      {dreamEntries.map((entry) => (
        <Card key={entry.id} className="border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm text-muted-foreground">
              <Moon className="h-4 w-4" />
              Dream from {entry.timestamp.toLocaleDateString()}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Reframed Dream */}
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Your Transformed Dream
              </h3>
              <p className="text-muted-foreground leading-relaxed bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                {entry.reframedDream}
              </p>
            </div>

            {/* Affirmations */}
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Personal Affirmations
              </h3>
              <div className="grid gap-2">
                {entry.affirmations.map((affirmation, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg"
                    data-testid={`affirmation-${index}`}
                  >
                    <span className="text-purple-500">✨</span>
                    <span className="text-sm text-muted-foreground">{affirmation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-purple-200 dark:border-purple-800">
              <Button
                variant="outline"
                size="sm"
                onClick={() => console.log("Dream entry saved to journal")}
                data-testid="button-save-dream"
                className="hover-elevate"
              >
                Save to Journal
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => console.log("Dream affirmations saved")}
                data-testid="button-save-affirmations"
                className="hover-elevate"
              >
                Save Affirmations
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Bedtime Tips */}
      {dreamEntries.length === 0 && !isProcessing && (
        <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">
              Sweet Dreams Tips 🌙
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Keep a dream journal by your bed to capture dreams while they're fresh</p>
              <p>• Remember: all dreams, even scary ones, can teach us something valuable</p>
              <p>• Try visualization before sleep - imagine peaceful, positive scenarios</p>
              <p>• Your subconscious mind is working to help you process and grow</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}