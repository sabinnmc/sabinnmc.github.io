import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { LuCodeXml, LuMapPinned, LuCalendar, LuHeart } from "react-icons/lu";
import { aboutData } from '@/data/portfolioData';

export const AboutSection = () => {
  const { t, language } = useLanguage();

  const stats = [
    { icon: LuCodeXml, label: '8+ Years', description: 'Engineering Experience' },
    { icon: LuMapPinned, label: 'Japan', description: 'Based in Japan' },
    { icon: LuCalendar, label: '20+', description: 'Projects Completed' },
    { icon: LuHeart, label: 'Embedded Systems', description: 'Specialist' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{aboutData.title[language]}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-foreground-secondary">
              {aboutData.description[language]}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{aboutData.professionalApproach.title[language]}</h3>
              <p className="text-foreground-secondary leading-relaxed">
                {aboutData.professionalApproach.content[language]}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{aboutData.technicalExpertise.title[language]}</h3>
              <p className="text-foreground-secondary leading-relaxed">
                {aboutData.technicalExpertise.content[language]}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{aboutData.whyJapan.title[language]}</h3>
              <p className="text-foreground-secondary leading-relaxed">
                {aboutData.whyJapan.content[language]}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 glass border-glass-border group hover:border-primary/50 transition-smooth">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.label}</p>
                    <p className="text-sm text-foreground-muted">{stat.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};