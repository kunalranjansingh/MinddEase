import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Heart, Loader2 } from "lucide-react";
import { useTranslation } from "../contexts/TranslationContext";
import { trackChatMessage } from "@/lib/usage";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function ChatBox() {
  const { t } = useTranslation();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: t.chatbox.initialMessage,
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage.trim(),
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);
    
    // Track usage for achievements
    trackChatMessage();

    // Simulate AI response (in real app, this would call OpenAI API)
    setTimeout(() => {
      const aiResponses = t.chatbox.aiResponses;

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "ai",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);

    console.log("Message sent:", currentMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="chatbox-bg">
          <div className="floating-hearts">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="floating-heart"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              >
                <Heart className="h-4 w-4 text-blue-500" />
              </div>
            ))}
          </div>
          <div className="chat-bubbles">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="chat-bubble"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Card className="flex-1 flex flex-col relative z-10 bg-background/90 backdrop-blur-sm border border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <Heart className="h-5 w-5" />
            {t.chatbox.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {t.chatbox.description}
          </p>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col min-h-0">
          <ScrollArea className="flex-1 pr-3">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  data-testid={`message-${message.sender}-${message.id}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">{t.chatbox.typing}</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="flex gap-2 mt-4">
            <Input
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.chatbox.placeholder}
              disabled={isLoading}
              data-testid="input-chat-message"
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!currentMessage.trim() || isLoading}
              data-testid="button-send-message"
              size="icon"
              className="hover-elevate"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Animated Background Styles */}
      <style>{`
        .chatbox-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(139, 92, 246, 0.1) 0%, 
            rgba(59, 130, 246, 0.1) 50%, 
            rgba(168, 85, 247, 0.1) 100%);
          overflow: hidden;
        }
        
        .floating-hearts {
          position: absolute;
          inset: 0;
        }
        
        .floating-heart {
          position: absolute;
          font-size: 1.2rem;
          animation: floatHeart infinite ease-in-out;
          pointer-events: none;
          opacity: 0.6;
        }
        
        @keyframes floatHeart {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.8;
          }
        }
        
        .chat-bubbles {
          position: absolute;
          inset: 0;
        }
        
        .chat-bubble {
          position: absolute;
          width: 30px;
          height: 20px;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 15px 15px 15px 5px;
          animation: bubbleFloat 8s infinite ease-in-out;
          pointer-events: none;
        }
        
        @keyframes bubbleFloat {
          0%, 100% {
            transform: translateY(0) scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}