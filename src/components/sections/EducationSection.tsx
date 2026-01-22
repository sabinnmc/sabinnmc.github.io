import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaGraduationCap, FaAward, } from "react-icons/fa6";
import { LuZap } from "react-icons/lu";
import { educationData, educationSkills } from '@/data/portfolioData';

export const EducationSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {educationData.map((item, index) => (
            <Card key={index} className="glass border-glass-border group hover:border-primary/50 transition-smooth">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    {item.type === 'degree' ? <FaGraduationCap className="w-6 h-6 text-primary-foreground" /> : <FaAward className="w-6 h-6 text-primary-foreground" />}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-foreground">{item.title[language]}</CardTitle>
                    <p className="text-primary font-medium">{item.subtitle[language]}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-secondary leading-relaxed">
                  {item.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass border-glass-border">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <LuZap className="w-5 h-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-foreground">{educationSkills.title[language]}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              {educationSkills.description[language]}
            </p>
            <div className="flex flex-wrap gap-3">
              {educationSkills.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 bg-secondary/50 border border-glass-border"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};