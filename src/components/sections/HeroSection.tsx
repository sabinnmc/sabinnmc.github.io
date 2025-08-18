import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {  FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa6';
import { LuMail } from "react-icons/lu";
import heroPortrait from '@/assets/hero-portrait.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-bg opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow-primary">
              <img 
                src={heroPortrait} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 max-w-2xl">
            <div className="space-y-4">
              <p className="text-lg text-foreground-secondary">{t('hero.greeting')}</p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="gradient-text">Sabin Bhandari</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                {t('hero.title')}
              </h2>
              <p className="text-lg text-foreground-muted max-w-xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex items-center gap-2 text-accent font-medium justify-center lg:justify-start">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                {t('hero.location')}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="hero"
                onClick={scrollToProjects}
                className="group"
              >
                {t('hero.cta.projects')}
                <FaArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="hero"
                onClick={scrollToContact}
              >
                {t('hero.cta.contact')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/sabinnmc" target="_blank" rel="noopener noreferrer">
                <Button variant="glass" size="icon">
                  <FaGithub className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/sabin-bhandari-nmc" target="_blank" rel="noopener noreferrer">
                <Button variant="glass" size="icon">
                  <FaLinkedinIn className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:sabinnmc@gmail.com">
                <Button variant="glass" size="icon">
                  <LuMail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="w-6 h-6 text-foreground-muted" />
      </div>
    </section>
  );
};