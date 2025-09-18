import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Music, BookOpen, Sparkles, Loader2 } from "lucide-react";

interface CreatedContent {
  type: "art" | "story" | "music" | "tip";
  content: string;
  title: string;
}

export default function EmotionSandbox() {
  const [emotion, setEmotion] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [createdContent, setCreatedContent] = useState<CreatedContent[]>([]);

  const generateContent = async () => {
    if (!emotion.trim()) return;

    setIsGenerating(true);
    
    // Simulate AI content generation (in real app, this would call OpenAI API)
    setTimeout(() => {
      const mockContent: CreatedContent[] = [
        {
          type: "art",
          title: "Calming Moonscape",
          content: "🌙 A serene night scene with soft blue and silver tones. The moon gently illuminates calm waters, surrounded by peaceful stars that twinkle like hope."
        },
        {
          type: "story",
          title: "A Journey to Inner Peace",
          content: "Once upon a time, there was a young person who felt overwhelming emotions. They discovered that like waves in the ocean, feelings come and go. By breathing deeply and focusing on the present moment, they found their inner calm..."
        },
        {
          type: "music",
          title: "Gentle Rain Melody",
          content: "🎵 Soft piano notes like raindrops... Dm - F - C - G... A gentle rhythm that matches your heartbeat when you're finding peace."
        },
        {
          type: "tip",
          title: "Wellness Tip",
          content: "When emotions feel overwhelming, try the 4-7-8 breathing technique: Inhale for 4 counts, hold for 7, exhale for 8. This activates your body's relaxation response."
        }
      ];

      setCreatedContent(mockContent);
      setIsGenerating(false);
    }, 2000);

    console.log("Generating content for emotion:", emotion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      generateContent();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Input Section */}
      <Card className="bg-gradient-to-r from-accent/5 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-accent">
            <Palette className="h-5 w-5" />
            Emotion Sandbox
          </CardTitle>
          <CardDescription>
            Transform your feelings into beautiful, calming creations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="I feel... (e.g., lonely, anxious, overwhelmed, excited)"
              disabled={isGenerating}
              data-testid="input-emotion"
              className="flex-1"
            />
            <Button
              onClick={generateContent}
              disabled={!emotion.trim() || isGenerating}
              data-testid="button-generate-content"
              className="hover-elevate"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Create
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Loading State */}
      {isGenerating && (
        <Card className="border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Creating your personalized content...</h3>
              <p className="text-muted-foreground">
                AI is transforming "{emotion}" into calming art, stories, and wellness tips
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Generated Content */}
      {createdContent.length > 0 && !isGenerating && (
        <Tabs defaultValue="art" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="art" data-testid="tab-art">
              <Palette className="h-4 w-4 mr-1" />
              Art
            </TabsTrigger>
            <TabsTrigger value="story" data-testid="tab-story">
              <BookOpen className="h-4 w-4 mr-1" />
              Story
            </TabsTrigger>
            <TabsTrigger value="music" data-testid="tab-music">
              <Music className="h-4 w-4 mr-1" />
              Music
            </TabsTrigger>
            <TabsTrigger value="tip" data-testid="tab-tip">
              <Sparkles className="h-4 w-4 mr-1" />
              Tip
            </TabsTrigger>
          </TabsList>

          {createdContent.map((content) => (
            <TabsContent key={content.type} value={content.type}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {content.type === "art" && <Palette className="h-5 w-5 text-accent" />}
                    {content.type === "story" && <BookOpen className="h-5 w-5 text-primary" />}
                    {content.type === "music" && <Music className="h-5 w-5 text-chart-3" />}
                    {content.type === "tip" && <Sparkles className="h-5 w-5 text-chart-4" />}
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {content.content}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => console.log(`Saved ${content.type}: ${content.title}`)}
                      data-testid={`button-save-${content.type}`}
                      className="hover-elevate"
                    >
                      Save to Journal
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => console.log(`Shared ${content.type}: ${content.title}`)}
                      data-testid={`button-share-${content.type}`}
                      className="hover-elevate"
                    >
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {/* Example Prompts */}
      {createdContent.length === 0 && !isGenerating && (
        <Card className="border-muted">
          <CardHeader>
            <CardTitle className="text-sm">Try these example emotions:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["lonely", "anxious", "excited", "overwhelmed", "peaceful", "frustrated"].map((example) => (
                <Button
                  key={example}
                  variant="outline"
                  size="sm"
                  onClick={() => setEmotion(example)}
                  data-testid={`button-example-${example}`}
                  className="hover-elevate"
                >
                  {example}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}