import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { LuCalendarDays, LuMapPin, LuBuilding2, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { experiences } from '@/data/portfolioData';

export const ExperienceSection = () => {
  const { t, language } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="py-24 bg-background-secondary/30 relative">
      {/* Decorative background mesh */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-2 bottom-0 w-[1.5px] bg-gradient-to-b from-primary via-accent to-emerald-500 opacity-25" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isOpen = !!openItems[index];

                return (
                  <div key={index} className="relative flex gap-6 md:gap-8 group">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-slate-950 border-2 border-primary rounded-full flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-accent transition-all duration-300 shadow-lg">
                        <LuBuilding2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content block */}
                    <div className="flex-1 p-6 md:p-8 bg-background-tertiary/15 hover:bg-background-tertiary/30 border border-white/5 hover:border-primary/20 rounded-2xl transition-all duration-300">
                      <div className="space-y-4">
                        {/* Header: Title, Company, Period, Location */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-1.5">
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors duration-300 leading-snug">
                              {exp.title[language]}
                            </h3>
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                              <LuBuilding2 className="w-4 h-4 shrink-0" />
                              <span>{exp.company[language]}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:items-end gap-2 shrink-0">
                            <Badge variant="outline" className="w-fit border-primary/25 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-wider py-0.5 px-2.5">
                              {exp.type[language]}
                            </Badge>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
                              <div className="flex items-center gap-1">
                                <LuCalendarDays className="w-3.5 h-3.5 text-slate-500" />
                                <span>{exp.period[language]}</span>
                              </div>
                              <span className="text-slate-600 hidden sm:inline">•</span>
                              <div className="flex items-center gap-1">
                                <LuMapPin className="w-3.5 h-3.5 text-slate-500" />
                                <span>{exp.location[language]}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Dropdown Toggle Button immediately after Header */}
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-primary transition-all duration-200 mt-2 group/btn cursor-pointer"
                        >
                          <span className="flex items-center gap-2 uppercase tracking-wider font-bold">
                            {isOpen ? t('experience.hide_details') : t('experience.view_details')}
                          </span>
                          {isOpen ? (
                            <LuChevronUp className="w-4 h-4 text-primary shrink-0 transition-transform" />
                          ) : (
                            <LuChevronDown className="w-4 h-4 text-primary shrink-0 transition-transform" />
                          )}
                        </button>

                        {/* Collapsible Details Container */}
                        {isOpen && (
                          <div className="space-y-4 pt-3 border-t border-white/5 animate-in fade-in-50 duration-200">
                            {/* Description */}
                            <p className="text-slate-300 text-sm leading-relaxed">
                              {exp.description[language]}
                            </p>

                            {/* Achievements */}
                            {exp.achievements.length > 0 && (
                              <div className="space-y-2.5 pt-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                  {t('experience.present.key_achievements')}
                                </h4>
                                <ul className="space-y-2.5">
                                  {exp.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                      <span>{achievement[language]}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Technologies */}
                            {exp.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                {exp.technologies.map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant="secondary"
                                    className="text-[10px] bg-slate-800/40 hover:bg-slate-800/60 text-slate-300 border border-white/5 py-0.5 px-2"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};