import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, Circle } from "lucide-react";

const steps = [
  { count: 5, sense: "see", prompt: "5 things you can see around you" },
  { count: 4, sense: "touch", prompt: "4 things you can touch" },
  { count: 3, sense: "hear", prompt: "3 things you can hear" },
  { count: 2, sense: "smell", prompt: "2 things you can smell" },
  { count: 1, sense: "taste", prompt: "1 thing you can taste" },
];

export default function GroundingGame() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>(Array(5).fill([]).map(() => []));
  const [isComplete, setIsComplete] = useState(false);

  const addAnswer = (stepIndex: number, answer: string) => {
    if (answer.trim()) {
      const newAnswers = [...answers];
      newAnswers[stepIndex] = [...newAnswers[stepIndex], answer.trim()];
      setAnswers(newAnswers);
      
      // Move to next step if current step is complete
      if (newAnswers[stepIndex].length === steps[stepIndex].count) {
        if (stepIndex < steps.length - 1) {
          setCurrentStep(stepIndex + 1);
        } else {
          setIsComplete(true);
          console.log("Grounding exercise completed");
        }
      }
    }
  };

  const resetGame = () => {
    setCurrentStep(0);
    setAnswers(Array(5).fill([]).map(() => []));
    setIsComplete(false);
    console.log("Grounding game reset");
  };

  const getCurrentInput = () => {
    if (isComplete) return null;
    
    const step = steps[currentStep];
    const currentAnswers = answers[currentStep];
    
    return (
      <div className="space-y-2">
        <Input
          placeholder={`Name ${step.count - currentAnswers.length} more...`}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addAnswer(currentStep, e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
          data-testid={`input-grounding-${step.sense}`}
        />
        <div className="flex flex-wrap gap-1">
          {currentAnswers.map((answer, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
            >
              {answer}
            </span>
          ))}
        </div>
      </div>
    );
  };

  if (isComplete) {
    return (
      <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
        <CardContent className="p-4 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            Great job! You're grounded.
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300 mb-4">
            You've successfully completed the 5-4-3-2-1 grounding technique.
          </p>
          <Button
            onClick={resetGame}
            data-testid="button-grounding-restart"
            variant="outline"
            size="sm"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="font-semibold mb-2">5-4-3-2-1 Grounding Technique</h3>
        <p className="text-sm text-muted-foreground">
          This helps you focus on the present moment
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1">
              {index < currentStep || (index === currentStep && answers[index].length === step.count) ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : index === currentStep ? (
                <Circle className="h-5 w-5 text-primary" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1">
              <p className={`font-medium ${index === currentStep ? "text-primary" : index < currentStep ? "text-green-600" : "text-muted-foreground"}`}>
                {step.prompt}
              </p>
              {index === currentStep && getCurrentInput()}
              {index < currentStep && answers[index].length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {answers[index].map((answer, answerIndex) => (
                    <span
                      key={answerIndex}
                      className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-md text-sm"
                    >
                      {answer}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}