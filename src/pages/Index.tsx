import { Navigation } from '@/components/Navigation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
            © 2024 Sabin Bhandari - Developer.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
