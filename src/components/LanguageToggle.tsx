import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="glass"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}
      className="fixed top-6 right-6 z-50 min-w-[100px]"
    >
      {language === 'en' ? (
        <>
          <span className="text-lg">🇯🇵</span>
          日本語
        </>
      ) : (
        <>
          <span className="text-lg">🇺🇸</span>
          English
        </>
      )}
    </Button>
  );
};