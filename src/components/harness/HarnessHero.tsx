import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  LuCopy as Copy, 
  LuCheck as Check, 
  LuTerminal as Terminal, 
  LuGithub as Github, 
  LuLinkedin as Linkedin, 
  LuMail as Mail, 
  LuDownload as Download, 
  LuArrowRight as ArrowRight, 
  LuShieldCheck as ShieldCheck, 
  LuCircuitBoard as CircuitBoard 
} from 'react-icons/lu';
import { toast } from 'sonner';

export const HarnessHero: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'cli' | 'stack'>('cli');

  const cliCommand = 'npx sabin-bhandari info --mode=embedded-engineer';

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    toast.success(t('hero.cmd_copy'));
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center items-center text-center px-4 overflow-hidden z-10">
      {/* Hero Container */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        
        {/* DeepSeek Style Metallic Glowing Badge */}
        <div className="inline-flex items-center gap-2 p-[1px] rounded-full bg-gradient-to-r from-cyan-500/50 via-blue-500/30 to-purple-500/50 shadow-[0_0_25px_rgba(6,182,212,0.25)] animate-fade-in">
          <div className="px-4 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-xl flex items-center gap-2 border border-white/10">
            <CircuitBoard className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-200 uppercase">
              {t('hero.badge')}
            </span>
          </div>
        </div>

        {/* Mega Typography Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
          {t('hero.title_part1')}{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
            {t('hero.title_part2')}
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed text-balance">
          {t('hero.desc')}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <span>{t('hero.hire')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/15 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            {t('hero.explore')}
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com/sabinnmc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Interactive CLI Terminal Card (DeepSeek Harness Inspired) */}
        <div className="w-full max-w-2xl mt-8 rounded-2xl bg-slate-950/90 border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.1)] overflow-hidden text-left backdrop-blur-xl">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                sabin-bhandari-terminal
              </span>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-md border border-white/5">
              <button
                onClick={() => setActiveTab('cli')}
                className={`px-2.5 py-0.5 text-[11px] font-mono rounded transition-all cursor-pointer ${
                  activeTab === 'cli'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CLI
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-2.5 py-0.5 text-[11px] font-mono rounded transition-all cursor-pointer ${
                  activeTab === 'stack'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Stack
              </button>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-5 font-mono text-sm leading-relaxed relative">
            {activeTab === 'cli' ? (
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-cyan-300 overflow-x-auto">
                  <span className="text-cyan-500 select-none">$</span>
                  <span className="text-slate-100">{cliCommand}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 text-xs transition-all shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-1.5 text-xs">
                <div className="text-slate-400">
                  <span className="text-cyan-400">[Target]</span> STM32, ESP32, AVR Microcontrollers
                </div>
                <div className="text-slate-400">
                  <span className="text-blue-400">[Kernel]</span> FreeRTOS, Bare-Metal HAL
                </div>
                <div className="text-slate-400">
                  <span className="text-purple-400">[Protocols]</span> CAN, SPI, I2C, UART, RS-485
                </div>
                <div className="text-slate-400">
                  <span className="text-green-400">[Language]</span> C, C++, Python, Rust (Learning)
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
