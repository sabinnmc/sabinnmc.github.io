import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  LuCpu as Cpu, 
  LuNetwork as Network, 
  LuShieldCheck as ShieldCheck, 
  LuActivity as Activity, 
  LuRadio as Radio, 
  LuLayers as Layers 
} from 'react-icons/lu';

export const ArchitectureSection: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Cpu,
      titleKey: 'arch.card1.title',
      descKey: 'arch.card1.desc',
      tags: ['FreeRTOS', 'STM32', 'ESP32', 'C/C++', 'Bare-metal HAL'],
      accent: 'from-cyan-500/20 to-blue-500/10',
      border: 'hover:border-cyan-500/50',
    },
    {
      icon: Radio,
      titleKey: 'arch.card2.title',
      descKey: 'arch.card2.desc',
      tags: ['CAN Bus', 'SPI / I2C', 'UART / RS-485', 'Sensor Fusion', 'IoT'],
      accent: 'from-blue-500/20 to-indigo-500/10',
      border: 'hover:border-blue-500/50',
    },
    {
      icon: ShieldCheck,
      titleKey: 'arch.card3.title',
      descKey: 'arch.card3.desc',
      tags: ['Oscilloscope', 'Logic Analyzer', 'Fault Tolerance', 'Static Analysis'],
      accent: 'from-indigo-500/20 to-purple-500/10',
      border: 'hover:border-indigo-500/50',
    },
  ];

  return (
    <section className="relative py-20 px-4 z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>{t('arch.badge')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {t('arch.title')}
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          {t('arch.subtitle')}
        </p>
      </div>

      {/* 3-Card Grid (DeepSeek Harness Inspired) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const IconComp = card.icon;
          return (
            <div
              key={index}
              className={`group relative rounded-2xl bg-slate-950/80 border border-white/10 ${card.border} p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden`}
            >
              {/* Top Accent Gradient Glow */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent} opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              <div className="space-y-6">
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                  <IconComp className="w-7 h-7" />
                </div>

                {/* Card Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
