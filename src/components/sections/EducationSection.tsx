import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { FaGraduationCap, FaAward, } from "react-icons/fa6";
import { LuZap } from "react-icons/lu";
import { educationData, educationSkills } from '@/data/portfolioData';

export const EducationSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="py-24 bg-background-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Education Items with solid left border accent instead of cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 border-l-4 ${index % 2 === 0 ? 'border-primary' : 'border-accent'} bg-background-tertiary/20 hover:bg-background-tertiary/40 transition-all duration-300 rounded-r-xl space-y-4`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {item.type === 'degree' ? <FaGraduationCap className="w-6 h-6" /> : <FaAward className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 leading-snug">{item.title[language]}</h3>
                  <p className={`font-semibold text-sm mt-1 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>{item.subtitle[language]}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed pt-2 pl-2">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Foundation - Sleek wide flat horizontal panel with subtle left-border accent */}
        <div className="p-8 bg-background-tertiary/20 border-l-4 border-primary rounded-r-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <LuZap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{educationSkills.title[language]}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {educationSkills.description[language]}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 md:max-w-md">
              {educationSkills.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1.5 bg-slate-800/40 text-slate-300 hover:bg-slate-800/70 border border-white/5 transition-colors duration-200 text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};