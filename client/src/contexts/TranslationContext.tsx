import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationKey, TranslationObject } from "@shared/translations";

interface TranslationContextType {
  currentLanguage: TranslationKey;
  t: TranslationObject;
  changeLanguage: (language: TranslationKey) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<TranslationKey>(() => {
    const saved = localStorage.getItem("preferredLanguage") as TranslationKey;
    return (saved === "en" || saved === "hi") ? saved : "en";
  });

  const changeLanguage = (language: TranslationKey) => {
    setCurrentLanguage(language);
    localStorage.setItem("preferredLanguage", language);
    
    // Update font family based on language
    if (language === 'hi') {
      document.documentElement.style.setProperty('--font-sans', "'Noto Sans Devanagari', Inter, sans-serif");
    } else {
      document.documentElement.style.setProperty('--font-sans', "Inter, 'Noto Sans Devanagari', sans-serif");
    }
  };

  useEffect(() => {
    // Apply font on initial load based on current language
    if (currentLanguage === 'hi') {
      document.documentElement.style.setProperty('--font-sans', "'Noto Sans Devanagari', Inter, sans-serif");
    } else {
      document.documentElement.style.setProperty('--font-sans', "Inter, 'Noto Sans Devanagari', sans-serif");
    }
  }, []);

  const value = {
    currentLanguage,
    t: translations[currentLanguage],
    changeLanguage
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}