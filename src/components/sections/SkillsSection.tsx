import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillCategories } from '@/data/portfolioData';

export const SkillsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 glass border-glass-border group hover:border-primary/50 transition-smooth"
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="text-center space-y-3">
                  <div className={`w-14 h-14 mx-auto ${category.bgColor} rounded-full flex items-center justify-center`}>
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title[language]}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded-lg bg-background-secondary/50 hover:bg-background-secondary transition-smooth"
                    >
                      <span className="text-sm text-foreground-secondary font-medium">
                        {skill.name}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${i < skill.level
                              ? 'bg-primary'
                              : 'bg-muted'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Banner */}
        <div className="mt-16 text-center">
          <Card className="p-8 glass border-glass-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Currently Learning & Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['FPGA Development', 'PCB Design', 'Industrial Automation', 'Wireless Communication', 'Power Electronics'].map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};