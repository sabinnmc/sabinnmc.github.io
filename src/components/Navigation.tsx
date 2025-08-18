import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const navItems = ['about', 'education', 'skills', 'projects', 'experience', 'contact'];

export const Navigation = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-[calc(100vw-180px)] md:max-w-none">
      <div className="glass rounded-full px-3 md:px-6 py-3 flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide">
        {navItems.map((item) => (
          <Button
            key={item}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(item)}
            className="text-foreground-secondary hover:text-foreground rounded-full whitespace-nowrap text-xs md:text-sm px-2 md:px-4 flex-shrink-0"
          >
            {t(`nav.${item}`)}
          </Button>
        ))}
      </div>
    </nav>
  );
};