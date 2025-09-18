import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [timer, setTimer] = useState(4);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      // Move to next phase
      if (phase === "inhale") {
        setPhase("hold");
        setTimer(4);
      } else if (phase === "hold") {
        setPhase("exhale");
        setTimer(4);
      } else {
        setPhase("inhale");
        setTimer(4);
        setCycle((prev) => prev + 1);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timer, phase]);

  const handleStart = () => {
    setIsActive(!isActive);
    console.log(`Breathing exercise ${isActive ? "paused" : "started"}`);
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase("inhale");
    setTimer(4);
    setCycle(0);
    console.log("Breathing exercise reset");
  };

  const getInstructions = () => {
    switch (phase) {
      case "inhale":
        return "Breathe in slowly...";
      case "hold":
        return "Hold your breath...";
      case "exhale":
        return "Breathe out slowly...";
    }
  };

  const getCircleScale = () => {
    const progress = (4 - timer) / 4;
    if (phase === "inhale") {
      return 0.5 + (progress * 0.5); // Expand from 0.5 to 1
    } else if (phase === "exhale") {
      return 1 - (progress * 0.5); // Shrink from 1 to 0.5
    }
    return 1; // Hold phase
  };

  return (
    <div className="text-center space-y-4">
      <div className="relative w-32 h-32 mx-auto">
        <div
          className="w-full h-full rounded-full bg-primary/20 border-2 border-primary transition-transform duration-1000 ease-in-out flex items-center justify-center"
          style={{
            transform: `scale(${getCircleScale()})`,
          }}
        >
          <div className="text-2xl font-bold text-primary">{timer}</div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-lg font-medium">{getInstructions()}</p>
        <p className="text-sm text-muted-foreground">Cycle: {cycle}</p>
      </div>

      <div className="flex gap-2 justify-center">
        <Button
          onClick={handleStart}
          data-testid="button-breathing-toggle"
          variant="default"
          size="sm"
        >
          {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button
          onClick={handleReset}
          data-testid="button-breathing-reset"
          variant="outline"
          size="sm"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}