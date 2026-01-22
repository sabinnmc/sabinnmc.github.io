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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden glass border-glass-border hover:border-primary/50 transition-smooth">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {project.title[language]}
                </h3>

                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-background-secondary/70"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.demo && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FaEye className="w-4 h-4" />
                        {t('projects.view')}
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-4 h-4" />
                        {t('projects.code')}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="p-6 glass border-glass-border hover:border-primary/50 transition-smooth group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {project.title[language]}
                  </h3>
                  <div className="flex gap-2">
                    {project.demo && (
                      <Button variant="ghost" size="icon" className="w-8 h-8" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="ghost" size="icon" className="w-8 h-8" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

