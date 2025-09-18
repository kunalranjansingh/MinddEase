import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

// Limited to Hindi and English only for MindEase
const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
];

interface LanguageSwitcherProps {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
}

export default function LanguageSwitcher({ 
  variant = "ghost", 
  size = "default" 
}: LanguageSwitcherProps) {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant} 
          size={size}
          data-testid="button-language-switcher"
          className="hover-elevate"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <span className="hidden md:inline ml-1">{currentLanguage.name}</span>
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              setCurrentLanguage(language);
              // Apply appropriate font family for Hindi
              if (language.code === 'hi') {
                document.documentElement.style.setProperty('--font-sans', "'Noto Sans Devanagari', Inter, sans-serif");
              } else {
                document.documentElement.style.setProperty('--font-sans', "Inter, 'Noto Sans Devanagari', sans-serif");
              }
              console.log(`Language switched to: ${language.name} - Font updated`);
            }}
            className="flex items-center gap-2 cursor-pointer"
            data-testid={`option-language-${language.code}`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}