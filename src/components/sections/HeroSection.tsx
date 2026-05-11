import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedinIn, FaArrowDown, FaBriefcase } from 'react-icons/fa6';
import { LuMail } from "react-icons/lu";
import { heroData } from '@/data/portfolioData';

export const HeroSection = () => {
  const { language, t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
          
          {/* Tagline Badge with animate-reveal */}
          <div className="animate-reveal inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary shadow-lg shadow-black/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            {heroData.greeting[language]}
          </div>

          {/* Animated Name and Subtitles */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight select-none leading-none animate-reveal-delay-1">
              <span className="gradient-text animate-gradient-shifting bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-[size:200%_auto] text-transparent bg-clip-text drop-shadow-[0_2px_15px_rgba(52,211,153,0.25)]">
                Sabin Bhandari
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-wide animate-reveal-delay-2">
              {heroData.title[language]}
            </h2>
            
            <p className="text-base sm:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed font-normal animate-reveal-delay-3">
              {heroData.subtitle[language]}
            </p>

            <div className="flex items-center gap-2.5 text-accent font-semibold justify-center text-sm tracking-wide animate-reveal-delay-3 mt-4">
              <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_hsl(var(--accent))]" />
              {heroData.location[language]}
            </div>
          </div>

          {/* Redesigned CTA Buttons - Hire Me & Contact Me */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-4 animate-reveal-delay-3">
            <Button
              variant="hero"
              size="hero"
              asChild
              className="shimmer-hover bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-400 hover:via-teal-400 hover:to-amber-400 text-white font-semibold border border-emerald-400/20 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/40 hover:-translate-y-1 transform transition-all duration-300 px-10 rounded-full"
            >
              <a href="mailto:sabinnmc@gmail.com?subject=Job%20Inquiry%20-%20Sabin%20Bhandari" className="flex items-center justify-center gap-2.5">
                <FaBriefcase className="w-5 h-5" />
                {t('hero.hire')}
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="hero"
              onClick={scrollToContact}
              className="hover:border-emerald-400/80 hover:bg-white/10 text-white font-semibold shadow-lg shadow-black/10 hover:shadow-emerald-500/10 hover:-translate-y-1 transform transition-all duration-300 px-10 backdrop-blur-md rounded-full"
            >
              {t('hero.contact')}
            </Button>
          </div>

          {/* Social Links & More Projects */}
          <div className="flex flex-col items-center gap-6 pt-4 animate-reveal-delay-3 w-full">
            <div className="flex gap-4.5 justify-center">
              <a href="https://github.com/sabinnmc" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <Button variant="glass" size="icon" className="border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary rounded-full shadow-md">
                  <FaGithub className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/sabin-bhandari-nmc" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <Button variant="glass" size="icon" className="border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary rounded-full shadow-md">
                  <FaLinkedinIn className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:sabinnmc@gmail.com" className="hover:scale-110 transition-transform duration-300">
                <Button variant="glass" size="icon" className="border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary rounded-full shadow-md">
                  <LuMail className="w-5 h-5" />
                </Button>
              </a>
            </div>

            <button
              onClick={scrollToProjects}
              className="group flex flex-col items-center gap-2 text-foreground-muted hover:text-primary text-xs font-semibold tracking-wider uppercase transition-colors duration-300 mt-6"
            >
              <span>{t('hero.explore')}</span>
              <FaArrowDown className="w-4 h-4 group-hover:translate-y-1.5 transition-transform duration-300 text-primary animate-bounce mt-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};