import { ThemeProvider as ThemeProviderComponent, useTheme } from '../ThemeProvider';
import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button onClick={toggleTheme}>
      Current theme: {theme}
    </Button>
  );
}

export default function ThemeProviderExample() {
  return (
    <ThemeProviderComponent>
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold">Theme Provider Example</h2>
        <ThemeToggle />
        <div className="p-4 bg-card border rounded-lg">
          <p>This content adapts to the current theme</p>
        </div>
      </div>
    </ThemeProviderComponent>
  );
}