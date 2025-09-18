import type { TranslationObject } from './index';

export const en = {
  // Language names
  languages: {
    english: "English",
    hindi: "हिंदी"
  },

  // Common
  common: {
    mindease: "MindEase",
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    close: "Close"
  },

  // Welcome Page
  welcome: {
    greetings: {
      morning: "Good Morning",
      afternoon: "Good Afternoon", 
      evening: "Good Evening"
    },
    title: "Welcome to Your Safe Space",
    tagline: "AI for 24-Hour Youth Mental Wellness",
    enterButton: "Enter MindEase"
  },

  // Home Page
  home: {
    title: "Welcome to MindEase",
    tagline: "AI for 24-Hour Youth Mental Wellness",
    coreFeatures: "Core AI-Powered Features",
    
    chatbox: {
      title: "AI Chatbox - Your 24/7 Support Friend",
      whatItDoes: "What it does:",
      whatItDoesDesc: "A safe space to share any thoughts, feelings, or concerns. Our AI responds with empathy, validation, and gentle guidance.",
      howItHelps: "How it helps:",
      howItHelpsDesc: "Provides immediate emotional support, helps you process feelings, offers coping strategies, and validates your experiences without judgment.",
      perfectFor: "Perfect for:",
      perfectForDesc: "When you need someone to listen, feeling overwhelmed, processing difficult emotions, or just want to talk through your day."
    },

    emotionSandbox: {
      title: "Emotion Sandbox - Creative Expression Therapy",
      whatItDoes: "What it does:",
      whatItDoesDesc: "A digital canvas where you can express emotions through colors, shapes, and creative tools. No artistic skills needed!",
      howItHelps: "How it helps:",
      howItHelpsDesc: "Art therapy techniques help process complex emotions, reduce stress, and provide a healthy outlet for difficult feelings.",
      perfectFor: "Perfect for:",
      perfectForDesc: "When words aren't enough, feeling creative, wanting to explore emotions visually, or needing a meditative activity."
    },

    wellnessTools: "Instant Wellness Tools",

    sosSupport: {
      title: "SOS Emergency Support",
      description: "Instant access to breathing exercises, grounding techniques, gentle stretches, and crisis resources. Available 24/7 with one click."
    },

    growthHub: {
      title: "Personal Growth Hub", 
      description: "Gratitude jar game, personal diary with calendar, achievement badges, and progress tracking to celebrate your journey."
    },

    multilingualSupport: {
      title: "Multilingual Support",
      description: "Complete support in Hindi and English with proper font rendering and culturally appropriate responses."
    }
  },

  // Chat Box
  chatbox: {
    title: "AI Support Chat - Your Safe Space",
    description: "Share your thoughts and feelings in a safe, judgment-free space. Our AI listens with empathy and responds with care.",
    placeholder: "Share what's on your mind...",
    initialMessage: "Hello! I'm here to listen and support you. How are you feeling today?",
    typing: "AI is typing...",
    aiResponses: [
      "I hear you, and your feelings are completely valid. It takes courage to share what you're going through.",
      "Thank you for trusting me with your thoughts. Remember, it's okay to not be okay sometimes.",
      "You're not alone in feeling this way. Many people experience similar emotions, and that's perfectly normal.",
      "I'm glad you felt comfortable sharing that with me. How would you like to explore these feelings?",
      "Your awareness of your emotions shows great self-understanding. That's a wonderful strength you have.",
      "It sounds like you're dealing with a lot right now. Let's take this one step at a time together."
    ]
  },

  // Breathing Exercise
  breathing: {
    title: "Breathing Exercise",
    description: "Take a moment to center yourself with this guided breathing exercise.",
    instructions: {
      inhale: "Breathe in slowly...",
      hold: "Hold your breath...",
      exhale: "Breathe out slowly..."
    },
    start: "Start Exercise",
    stop: "Stop Exercise"
  },

  // Gratitude Jar
  gratitude: {
    title: "Gratitude Jar",
    addTitle: "What made you smile today?",
    addDescription: "Even small moments count - a kind word, a beautiful sunset, or a good meal",
    placeholder: "I'm grateful for...",
    emptyState: {
      title: "Your gratitude jar is waiting for its first note!",
      description: "Start by adding something you're grateful for today."
    },
    sampleNotes: [
      "Had a really good conversation with my friend today",
      "Found a new song that made me feel peaceful",
      "My pet made me smile when I was feeling down"
    ]
  },

  // Personal Diary
  diary: {
    title: "Personal Diary",
    description: "A safe space for your thoughts, feelings, and daily reflections.",
    placeholder: "What's on your mind today?",
    save: "Save Entry",
    emptyState: "No entries yet. Start writing your first entry!"
  },

  // SOS Button
  sos: {
    title: "SOS - Emergency Support",
    description: "Immediate help is here. Choose what feels right for you right now.",
    breathingExercise: "Breathing Exercise",
    groundingTechnique: "Grounding Technique", 
    crisisResources: "Crisis Resources",
    callHotline: "Call Crisis Hotline"
  },

  // Achievements
  achievements: {
    title: "Your Achievements",
    description: "Celebrate your progress and milestones!",
    emptyState: "Complete activities to unlock achievements!"
  },

  // Growth Tracker  
  growth: {
    title: "Growth Tracker",
    description: "Track your mental wellness journey over time.",
    mood: "Mood",
    activities: "Activities Completed", 
    streaks: "Streak Days"
  }
} satisfies TranslationObject;