import { useLanguage } from '@/contexts/LanguageContext';
import { FaGraduationCap, FaAward } from "react-icons/fa6";
import { educationData } from '@/data/portfolioData';

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

        {/* Education Items */}
        <div className="grid lg:grid-cols-2 gap-12">
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
      </div>
    </section>
  );
};