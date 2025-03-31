export interface Question {
  id: string;
  text: string;
  description?: string;
  options: {
    value: string;
    label: string;
    description?: string;
  }[];
  category: 'personality' | 'values' | 'emotional';
}

export interface Result {
  overallScore: number;
  dimensions: {
    personality: number;
    values: number;
    emotional: number;
  };
  suggestions: {
    category: string;
    title: string;
    description: string;
  }[];
}

export interface AssessmentState {
  currentStep: number;
  questions: Question[];
  answers: Record<string, string>;
  isComplete: boolean;
  result: Result | null;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  isComplete: boolean;
}

export interface QuestionCardProps {
  currentStep: number;
  answers: Record<string, string>;
  onAnswer: (questionId: string, answer: string) => void;
}

export interface ResultDisplayProps {
  result: Result | null;
}

export interface NavigationButtonsProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
} 