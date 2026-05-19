import { useLanguage } from '@/contexts/LanguageContext';
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
    <section id="about" className="py-24 bg-background-secondary/40 border-y border-glass-border/30 relative">
      {/* Subtle decorative mesh background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{aboutData.title[language]}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-slate-300">
              {aboutData.description[language]}
            </p>

            <div className="space-y-4 pl-4 border-l-2 border-primary/30">
              <h3 className="text-xl font-semibold text-slate-100">{aboutData.professionalApproach.title[language]}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {aboutData.professionalApproach.content[language]}
              </p>
            </div>

            <div className="space-y-4 pl-4 border-l-2 border-accent/30">
              <h3 className="text-xl font-semibold text-slate-100">{aboutData.technicalExpertise.title[language]}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {aboutData.technicalExpertise.content[language]}
              </p>
            </div>

            <div className="space-y-4 pl-4 border-l-2 border-emerald-500/30">
              <h3 className="text-xl font-semibold text-slate-100">{aboutData.whyJapan.title[language]}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {aboutData.whyJapan.content[language]}
              </p>
            </div>
          </div>

          {/* Stats Grid - Flat, sophisticated borderless cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-8 bg-background-tertiary/30 border border-white/5 hover:border-primary/20 rounded-2xl transition-all duration-300 hover:bg-background-tertiary/60 group text-center space-y-4 shadow-sm hover:translate-y-[-2px]"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-slate-100 tracking-tight">{stat.label}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};