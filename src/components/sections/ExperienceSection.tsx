import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LuCalendarDays, LuMapPin, LuBuilding2 } from "react-icons/lu";

export const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      titleKey: 'experience.pal.title',
      companyKey: 'experience.pal.company',
      locationKey: 'experience.pal.location',
      periodKey: 'experience.pal.period',
      typeKey: 'experience.pal.type',
      descriptionKey: 'experience.pal.description',
      achievementKeys: [
        'experience.pal.achievement1',
        'experience.pal.achievement2',
        'experience.pal.achievement3',
        'experience.pal.achievement4',
        'experience.pal.achievement5'
      ],
      technologies: ['Renesas MCU', 'R7FA6T1AD3CFP', 'E2 Studio', 'LT SPICE', 'CSiEDA', 'VS Code', 'Machine Learning']
    },
    {
      titleKey: 'experience.cosmic.title',
      companyKey: 'experience.cosmic.company',
      locationKey: 'experience.cosmic.location',
      periodKey: 'experience.cosmic.period',
      typeKey: 'experience.cosmic.type',
      descriptionKey: 'experience.cosmic.description',
      achievementKeys: [
        'experience.cosmic.achievement1',
        'experience.cosmic.achievement2',
        'experience.cosmic.achievement3',
        'experience.cosmic.achievement4'
      ],
      technologies: ['C Programming', 'HTML', 'CSS', 'JavaScript', 'Academic Teaching']
    },
    {
      titleKey: 'experience.admc.title',
      companyKey: 'experience.admc.company',
      locationKey: 'experience.admc.location',
      periodKey: 'experience.admc.period',
      typeKey: 'experience.admc.type',
      descriptionKey: 'experience.admc.description',
      achievementKeys: [
        'experience.admc.achievement1',
        'experience.admc.achievement2',
        'experience.admc.achievement3',
        'experience.admc.achievement4',
        'experience.admc.achievement5'
      ],
      technologies: ['Power Systems', 'Transmission Lines', 'Electrical Design', 'Project Management', 'Field Surveys']
    },
    {
      titleKey: 'experience.mewa.title',
      companyKey: 'experience.mewa.company',
      locationKey: 'experience.mewa.location',
      periodKey: 'experience.mewa.period',
      typeKey: 'experience.mewa.type',
      descriptionKey: 'experience.mewa.description',
      achievementKeys: [
        'experience.mewa.achievement1',
        'experience.mewa.achievement2',
        'experience.mewa.achievement3',
        'experience.mewa.achievement4',
        'experience.mewa.achievement5'
      ],
      technologies: ['Hydropower Systems', 'Logic Control Units', 'Circuit Breakers', 'Power Transformers', 'Electrical Testing']
    }
  ];

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
                            {t(exp.titleKey)}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <LuBuilding2 className="w-4 h-4" />
                            {t(exp.companyKey)}
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                            {t(exp.typeKey)}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-foreground-muted">
                            <div className="flex items-center gap-1">
                              <LuCalendarDays className="w-4 h-4" />
                              {t(exp.periodKey)}
                            </div>
                            <div className="flex items-center gap-1">
                              <LuMapPin className="w-4 h-4" />
                              {t(exp.locationKey)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground-secondary leading-relaxed">
                        {t(exp.descriptionKey)}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievementKeys.map((achievementKey, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-foreground-secondary">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {t(achievementKey)}
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