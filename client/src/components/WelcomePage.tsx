import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "../contexts/TranslationContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "wouter";
import logoImage from "@assets/mindease-logo.jpeg";

export default function WelcomePage() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getTimeBasedGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return t.welcome.greetings.morning;
      if (hour < 17) return t.welcome.greetings.afternoon;
      return t.welcome.greetings.evening;
    };
    setGreeting(getTimeBasedGreeting());
  }, [t]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/30 to-primary/40 animate-gradient-shift">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`floating-shape floating-shape-${i + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="MindEase Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold text-primary">{t.common.mindease}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            data-testid="button-theme-toggle"
            className="hover-elevate"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {greeting}
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-foreground/80">
              {t.welcome.title}
            </div>
          </div>

          {/* Animated tagline */}
          <div className="relative">
            <div className="text-xl md:text-2xl font-medium text-muted-foreground slide-in-up">
              {t.welcome.tagline}
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-50 -z-10" />
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Link to="/home">
              <Button
                size="lg"
                className="text-lg px-8 py-4 rounded-xl hover-elevate bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-enter-mindease"
              >
                {t.welcome.enterButton}
                <img src={logoImage} alt="MindEase Logo" className="ml-2 h-5 w-5 object-contain" />
              </Button>
            </Link>
          </div>

          {/* Floating elements - using simple shapes instead of emojis */}
          <div className="flex justify-center gap-8 pt-12">
            <div className="animate-float-1 w-4 h-4 bg-pink-300 dark:bg-pink-600 rounded-full opacity-60" />
            <div className="animate-float-2 w-3 h-3 bg-yellow-300 dark:bg-yellow-500 rounded-sm rotate-45 opacity-70" />
            <div className="animate-float-3 w-5 h-3 bg-purple-300 dark:bg-purple-500 rounded-full opacity-50" />
            <div className="animate-float-1 w-4 h-4 bg-blue-300 dark:bg-blue-500 rounded-full opacity-60" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </main>

      <style>{`
        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .floating-shapes .floating-shape {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-shape-1 { width: 15px; height: 15px; }
        .floating-shape-2 { width: 25px; height: 25px; }
        .floating-shape-3 { width: 18px; height: 18px; }
        .floating-shape-4 { width: 22px; height: 22px; }
        .floating-shape-5 { width: 16px; height: 16px; }
        .floating-shape-6 { width: 28px; height: 28px; }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .slide-in-up {
          animation: slideInUp 1s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-1 {
          animation: float1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float2 4s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float3 5s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}