import { Navigation } from '@/components/Navigation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import heroPortrait from '@/assets/hero-portrait.jpg';
import { Flag } from '@/components/Flag';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-fixed bg-center relative text-foreground font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden"
      style={{ backgroundImage: `url(${heroPortrait})` }}
    >
      {/* Premium dark gradient and backdrop-blur overlay over the entire screen */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-black/90 z-0" />
      
      {/* Page Content Wrapper */}
      <div className="relative z-10">
        <Navigation />
        <LanguageToggle />
        
        <main>
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
