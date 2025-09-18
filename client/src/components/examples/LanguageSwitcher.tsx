import LanguageSwitcher from '../LanguageSwitcher';

export default function LanguageSwitcherExample() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Language Switcher Example</h2>
      <div className="flex gap-4 items-center">
        <LanguageSwitcher variant="default" />
        <LanguageSwitcher variant="outline" />
        <LanguageSwitcher variant="ghost" />
      </div>
    </div>
  );
}