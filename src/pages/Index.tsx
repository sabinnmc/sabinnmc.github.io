import React from 'react';
import { ParticleBackground } from '@/components/harness/ParticleBackground';
import { DynamicIslandNav } from '@/components/harness/DynamicIslandNav';
import { HarnessHero } from '@/components/harness/HarnessHero';
import { ArchitectureSection } from '@/components/harness/ArchitectureSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Flag } from '@/components/Flag';
import { useLanguage } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-bold focus:rounded-lg shadow-lg"
      >
        {t('common.skip_to_content')}
      </a>

      {/* Interactive Canvas Moving Background */}
      <ParticleBackground />

      {/* Dynamic Island Cylindrical Shrinking Header */}
      <DynamicIslandNav />

      {/* Page Content Container */}
      <div className="relative z-10">
        <main id="main-content">
          {/* DeepSeek Harness Style Hero Section */}
          <HarnessHero />

          {/* Core Competencies 3-Grid Architecture Cards */}
          <ArchitectureSection />

          {/* CV Content Sections in Dark Glass Cards */}
          <div className="space-y-16 py-12">
            <section id="about" className="scroll-mt-24">
              <AboutSection />
            </section>

            <section id="education" className="scroll-mt-24">
              <EducationSection />
            </section>

            <section id="skills" className="scroll-mt-24">
              <SkillsSection />
            </section>

            <section id="projects" className="scroll-mt-24">
              <ProjectsSection />
            </section>

            <section id="experience" className="scroll-mt-24">
              <ExperienceSection />
            </section>

            <section id="contact" className="scroll-mt-24">
              <ContactSection />
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl mt-20">
          <div className="container mx-auto px-6 text-center space-y-2">
            <p className="text-slate-400 text-sm font-mono">
              © {new Date().getFullYear()} Sabin Bhandari — {t('footer.role')}
            </p>
            <p className="text-slate-500 text-xs">
              Designed with DeepSeek Harness aesthetics & Dynamic Island scroll transitions
            </p>
          </div>
        </footer>
      </div>

      {/* Floating Flag Badge */}
      <Flag />
    </div>
  );
};

export default Index;
