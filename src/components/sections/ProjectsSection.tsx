import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {  FaGithub, FaEye, FaArrowDown } from 'react-icons/fa6';
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered translation for Japanese and English communication.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'OpenAI', 'WebSocket', 'Supabase', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with Kanban boards and team analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather data visualization with predictive analytics for Japanese cities.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    }
  ];

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
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {project.description}
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
                  <Button variant="default" size="sm" className="flex-1">
                    <FaEye className="w-4 h-4" />
                    {t('projects.view')}
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <FaGithub className="w-4 h-4" />
                    {t('projects.code')}
                  </Button>
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
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <FaGithub className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {project.description}
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
