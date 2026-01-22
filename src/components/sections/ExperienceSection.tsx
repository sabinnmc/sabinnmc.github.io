import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LuCalendarDays, LuMapPin, LuBuilding2 } from "react-icons/lu";
import { experiences } from '@/data/portfolioData';

export const ExperienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-primary">
                      <LuBuilding2 className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 p-6 glass border-glass-border hover:border-primary/50 transition-smooth">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title[language]}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <LuBuilding2 className="w-4 h-4" />
                            {exp.company[language]}
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                            {exp.type[language]}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-foreground-muted">
                            <div className="flex items-center gap-1">
                              <LuCalendarDays className="w-4 h-4" />
                              {exp.period[language]}
                            </div>
                            <div className="flex items-center gap-1">
                              <LuMapPin className="w-4 h-4" />
                              {exp.location[language]}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground-secondary leading-relaxed">
                        {exp.description[language]}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground">{t('experience.present.key_achievements')}:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-foreground-secondary">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement[language]}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-background-secondary/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};