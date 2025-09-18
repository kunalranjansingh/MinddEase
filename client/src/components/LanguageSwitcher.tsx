import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "../contexts/TranslationContext";
import type { TranslationKey } from "@shared/translations";

interface Language {
  code: TranslationKey;
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
  const { currentLanguage, changeLanguage, t } = useTranslation();
  
  const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0];

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
          <span className="hidden sm:inline">{currentLangData.flag}</span>
          <span className="hidden md:inline ml-1">
            {currentLanguage === "en" ? t.languages.english : t.languages.hindi}
          </span>
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center gap-2 cursor-pointer"
            data-testid={`option-language-${language.code}`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>
              {language.code === "en" ? t.languages.english : t.languages.hindi}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}