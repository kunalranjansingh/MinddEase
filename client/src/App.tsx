import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { TranslationProvider } from "./contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import SOSButton from "./components/SOSButton";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import ProfilePage from "./components/ProfilePage";
import NotFound from "@/pages/not-found";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
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
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={WelcomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function MainApp() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider style={style as React.CSSProperties}>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <div className="flex flex-col flex-1">
            <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <ThemeToggle />
            </header>
            <main className="flex-1 overflow-auto">
              <Router />
            </main>
          </div>
        </div>
      </SidebarProvider>
      <SOSButton />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <TranslationProvider>
            <MainApp />
            <Toaster />
          </TranslationProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}