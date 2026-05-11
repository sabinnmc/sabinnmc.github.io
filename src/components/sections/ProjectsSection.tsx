import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaGithub, FaEye } from 'react-icons/fa6';
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from '@/data/portfolioData';

export const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.15)]">
              {t('projects.title')}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Featured Projects list with bullet points */}
        <div className="space-y-10 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden glass border-white/10 hover:border-cyan-500/30 transition-all duration-500 rounded-2xl shadow-xl shadow-black/40 glass-card-hover">
              <div className="flex flex-col lg:flex-row">
                
                {/* Project Image */}
                <div className="lg:w-2/5 relative overflow-hidden h-64 lg:h-auto min-h-[260px]">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Visual gradient overlays on image */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-cyan-500 text-black font-semibold text-xs tracking-wider uppercase py-1 px-3 shadow-lg shadow-cyan-500/20">
                      Featured
                    </Badge>
                  </div>
                </div>

                {/* Project Details & Bullets */}
                <div className="lg:w-3/5 p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors duration-300">
                      {project.title[language]}
                    </h3>
                    
                    {/* Bullet Points Details Layout */}
                    <ul className="space-y-3.5 pt-2">
                      {project.bullets[language].map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                          {/* Sleek Custom Neon Glowing Bullet Indicator */}
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.85)] animate-pulse" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges and Actions */}
                  <div className="space-y-5 pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-white/5 text-cyan-300 hover:bg-white/10 transition-colors border border-white/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3.5">
                      {project.demo && (
                        <Button variant="default" size="sm" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold flex-1 sm:flex-initial" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <FaEye className="w-4 h-4" />
                            {t('projects.view')}
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" className="border-white/15 hover:border-cyan-400 hover:bg-cyan-500/5 text-slate-200 hover:text-white flex-1 sm:flex-initial" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <FaGithub className="w-4 h-4" />
                            {t('projects.code')}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid with bullet-point layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <Card key={index} className="p-7 glass border-white/10 hover:border-cyan-500/20 transition-all duration-500 rounded-2xl shadow-lg shadow-black/30 glass-card-hover group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title[language]}
                  </h3>
                  <div className="flex gap-2.5 shrink-0">
                    {project.demo && (
                      <Button variant="ghost" size="icon" className="w-9 h-9 border border-white/5 hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:text-cyan-400 rounded-full" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="ghost" size="icon" className="w-9 h-9 border border-white/5 hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:text-cyan-400 rounded-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Bullet Points Details Layout for other projects */}
                <ul className="space-y-3">
                  {project.bullets[language].map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80 shadow-[0_0_6px_rgba(34,211,238,0.7)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies list at the bottom */}
              <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-white/5">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-[10px] py-0.5 px-2 bg-white/5 text-slate-400 border border-white/5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
