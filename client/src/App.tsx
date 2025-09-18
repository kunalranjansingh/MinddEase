import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { TranslationProvider } from "./contexts/TranslationContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, LogOut } from "lucide-react";
import SOSButton from "./components/SOSButton";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
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

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) return null;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="icon"
      data-testid="button-logout"
      className="hover-elevate"
    >
      <LogOut className="h-5 w-5" />
    </Button>
  );
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      {isAuthenticated ? (
        <>
          <Route path="/" component={() => <DashboardPage />} />
          <Route path="/home" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/profile" component={ProfilePage} />
        </>
      ) : (
        <Route path="/" component={WelcomePage} />
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function MainApp() {
  const { isAuthenticated } = useAuth();
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  if (!isAuthenticated) {
    // For non-authenticated users, show login/signup pages without sidebar
    return (
      <div className="min-h-screen bg-background">
        <Router />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider style={style as React.CSSProperties}>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <div className="flex flex-col flex-1">
            <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <div className="flex items-center gap-2">
                <LogoutButton />
                <ThemeToggle />
              </div>
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
            <AuthProvider>
              <MainApp />
              <Toaster />
            </AuthProvider>
          </TranslationProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}