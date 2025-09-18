import { en } from './en';
import { hi } from './hi';

export const translations = {
  en,
  hi
} as const;

export type TranslationKey = keyof typeof translations;

// Create a flexible type that matches the structure but allows different string values
export type TranslationObject = {
  languages: {
    english: string;
    hindi: string;
  };
  common: {
    mindease: string;
    loading: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    close: string;
  };
  welcome: {
    greetings: {
      morning: string;
      afternoon: string;
      evening: string;
    };
    title: string;
    tagline: string;
    enterButton: string;
  };
  home: {
    title: string;
    tagline: string;
    coreFeatures: string;
    chatbox: {
      title: string;
      whatItDoes: string;
      whatItDoesDesc: string;
      howItHelps: string;
      howItHelpsDesc: string;
      perfectFor: string;
      perfectForDesc: string;
    };
    emotionSandbox: {
      title: string;
      whatItDoes: string;
      whatItDoesDesc: string;
      howItHelps: string;
      howItHelpsDesc: string;
      perfectFor: string;
      perfectForDesc: string;
    };
    wellnessTools: string;
    sosSupport: {
      title: string;
      description: string;
    };
    growthHub: {
      title: string;
      description: string;
    };
    multilingualSupport: {
      title: string;
      description: string;
    };
  };
  chatbox: {
    title: string;
    description: string;
    placeholder: string;
    initialMessage: string;
    typing: string;
    aiResponses: readonly string[];
  };
  breathing: {
    title: string;
    description: string;
    instructions: {
      inhale: string;
      hold: string;
      exhale: string;
    };
    start: string;
    stop: string;
  };
  gratitude: {
    title: string;
    addTitle: string;
    addDescription: string;
    placeholder: string;
    emptyState: {
      title: string;
      description: string;
    };
    sampleNotes: readonly string[];
  };
  diary: {
    title: string;
    description: string;
    placeholder: string;
    save: string;
    emptyState: string;
  };
  sos: {
    title: string;
    description: string;
    breathingExercise: string;
    groundingTechnique: string;
    crisisResources: string;
    callHotline: string;
  };
  achievements: {
    title: string;
    description: string;
    emptyState: string;
  };
  growth: {
    title: string;
    description: string;
    mood: string;
    activities: string;
    streaks: string;
  };
};

export { en, hi };