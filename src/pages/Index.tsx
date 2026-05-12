import { Navigation } from '@/components/Navigation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import heroPortrait from '@/assets/hero-portrait.webp';
import { Flag } from '@/components/Flag';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-fixed bg-center relative text-foreground font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden"
      style={{ backgroundImage: `url(${heroPortrait})` }}
    >
      {/* Skip to Content for Keyboard Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:font-semibold focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg"
      >
        Skip to content
      </a>

      {/* Premium dark gradient and backdrop-blur overlay over the entire screen */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-black/90 z-0" />
      
      {/* Page Content Wrapper */}
      <div className="relative z-10">
        <Navigation />
        <LanguageToggle />
        
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-glass-border">
          <div className="container mx-auto px-6 text-center">
            <p className="text-foreground-muted text-sm">
              © {new Date().getFullYear()} Sabin Bhandari - Developer.
            </p>
          </div>
        </footer>
      </div>

      {/* Fixed Nepali Flag floating at the bottom-right corner */}
      <Flag />
    </div>
  );
};

export default Index;
