import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, SkipForward, RotateCcw } from "lucide-react";

const stretches = [
  {
    name: "Neck Roll",
    duration: 30,
    instructions: "Slowly roll your head in a circle. 5 times each direction.",
    image: "🔄"
  },
  {
    name: "Shoulder Shrugs",
    duration: 20,
    instructions: "Lift shoulders to ears, hold for 3 seconds, release.",
    image: "🤷"
  },
  {
    name: "Arm Stretch",
    duration: 30,
    instructions: "Reach one arm across your chest, hold with other arm.",
    image: "💪"
  },
  {
    name: "Shake It Out",
    duration: 30,
    instructions: "Shake your whole body! Release all the tension.",
    image: "🕺"
  }
];

export default function StretchRoutine() {
  const [currentStretch, setCurrentStretch] = useState(0);
  const [timeLeft, setTimeLeft] = useState(stretches[0].duration);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setTimeLeft(stretches[currentStretch]?.duration || 0);
  }, [currentStretch]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      // Move to next stretch
      if (currentStretch < stretches.length - 1) {
        setCurrentStretch((prev) => prev + 1);
      } else {
        setIsComplete(true);
        setIsActive(false);
        console.log("Stretch routine completed");
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, currentStretch]);

  const handlePlayPause = () => {
    setIsActive(!isActive);
    console.log(`Stretch routine ${isActive ? "paused" : "started"}`);
  };

  const handleNext = () => {
    if (currentStretch < stretches.length - 1) {
      setCurrentStretch((prev) => prev + 1);
      setIsActive(false);
    }
    console.log("Skipped to next stretch");
  };

  const handleReset = () => {
    setCurrentStretch(0);
    setIsActive(false);
    setIsComplete(false);
    console.log("Stretch routine reset");
  };

  const progressPercentage = ((stretches[currentStretch]?.duration - timeLeft) / stretches[currentStretch]?.duration) * 100;

  if (isComplete) {
    return (
      <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
        <CardContent className="p-6 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            Stretch Complete!
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300 mb-4">
            Great job! You've completed your mini stretch routine.
          </p>
          <Button
            onClick={handleReset}
            data-testid="button-stretch-restart"
            variant="outline"
            size="sm"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Do Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const stretch = stretches[currentStretch];

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-4xl mb-2">{stretch.image}</div>
        <h3 className="font-semibold text-lg">{stretch.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {stretch.instructions}
        </p>
      </div>

      <div className="space-y-3">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">{timeLeft}s</div>
          <Progress value={progressPercentage} className="w-full" />
        </div>

        <div className="flex justify-center gap-2">
          <Button
            onClick={handlePlayPause}
            data-testid="button-stretch-toggle"
            variant="default"
            size="sm"
          >
            {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isActive ? "Pause" : "Start"}
          </Button>
          
          {currentStretch < stretches.length - 1 && (
            <Button
              onClick={handleNext}
              data-testid="button-stretch-next"
              variant="outline"
              size="sm"
            >
              <SkipForward className="h-4 w-4" />
              Next
            </Button>
          )}
          
          <Button
            onClick={handleReset}
            data-testid="button-stretch-reset"
            variant="outline"
            size="sm"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {stretches.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentStretch
                ? "bg-primary"
                : index < currentStretch
                ? "bg-green-500"
                : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}