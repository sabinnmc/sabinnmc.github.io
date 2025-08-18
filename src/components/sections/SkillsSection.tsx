import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiZap, FiCpu } from "react-icons/fi";
import { FaCode, FaWrench } from "react-icons/fa6";

export const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: FiCpu,
      title: t('skills.embedded'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        'Renesas MCU', 'R7FA6T1AD3CFP', 'ARM Cortex', 'AVR', 'PIC Microcontrollers',
        'Real-time Systems', 'RTOS', 'Bare Metal Programming', 'IoT Development', 'Sensor Integration'
      ]
    },
    {
      icon: FiZap,
      title: t('skills.electrical'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        'High Voltage Systems', 'Power Systems', 'Circuit Analysis', 'Signal Analysis',
        'Transmission Lines', 'Power Transformers', 'Circuit Breakers', 'Electrical Testing', 'Logic Control Units', 'Hydropower Systems'
      ]
    },
    {
      icon: FaCode,
      title: t('skills.software'),
      color: 'text-success',
      bgColor: 'bg-success/10',
      skills: [
        'C Programming', 'Embedded C', 'Assembly Language', 'HTML/CSS', 'JavaScript',
        'Python', 'Machine Learning', 'Signal Processing', 'Debugging', 'Version Control'
      ]
    },
    {
      icon: FaWrench,
      title: t('skills.tools'),
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      skills: [
        'E2 Studio', 'LT Spice', 'CSiEDA5', 'AutoCAD', 'ArcGIS',
        'VS FaCode', 'Oscilloscopes', 'Logic Analyzers', 'Multimeters', 'Power Analyzers'
      ]
    }
  ];

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
                    {category.title}
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
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < Math.floor(Math.random() * 2) + 3
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