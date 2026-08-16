import React, { useState, useEffect } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { LuCpu as Cpu, LuArrowUpRight as ArrowUpRight } from 'react-icons/lu';

const navItems = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const DynamicIslandNav: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section intersection detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'en' ? 'jp' : 'en';
    setLanguage(nextLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'mt-3 w-[94vw] max-w-[700px] h-[52px] rounded-full bg-slate-950/85 backdrop-blur-xl border border-cyan-500/25 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)] px-4 flex items-center justify-between'
            : 'w-full max-w-7xl h-[72px] bg-slate-950/30 backdrop-blur-md border-b border-white/5 px-6 flex items-center justify-between'
        }`}
      >
        {/* Brand Logo / Identifier */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all">
            <Cpu className="w-4.5 h-4.5" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              Sabin Bhandari
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/20">
                Embedded
              </span>
            </span>
          </div>
        </button>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {t(item.labelKey)}
              </button>
            );
          })}
        </nav>

        {/* Language Switcher & Contact Button */}
        <div className="flex items-center gap-2">
          {/* Bilingual Language Switcher Button (日本語 / EN) */}
          <button
            onClick={toggleLanguage}
            type="button"
            className="flex items-center p-0.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono transition-all hover:border-cyan-500/50"
            aria-label="Switch Language"
          >
            <span
              className={`px-2 py-0.5 rounded-full transition-all text-[11px] ${
                language === 'jp'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              日本語
            </span>
            <span
              className={`px-2 py-0.5 rounded-full transition-all text-[11px] ${
                language === 'en'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </span>
          </button>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-medium transition-all duration-300 group shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          >
            <span>{t('hero.contact')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
