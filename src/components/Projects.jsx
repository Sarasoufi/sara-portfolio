import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Introduction au Web',
    subtitle: 'Lab 1',
    description: 'Découverte des bases du développement web à travers HTML5 et CSS3, avec un accent sur la sémantique, l\'accessibilité et le responsive design.',
    technologies: ['HTML5', 'CSS3', 'Responsive Design'],
    githubUrl: 'https://github.com/sarasoufi',
  },
  {
    title: 'JavaScript Moderne',
    subtitle: 'Lab 2',
    description: 'Manipulation du DOM, gestion des événements et utilisation des fonctionnalités ES6+.',
    technologies: ['JavaScript', 'ES6+', 'DOM', 'Fetch API'],
    githubUrl: 'https://github.com/sarasoufi',
  },
  {
    title: 'Node.js & NPM',
    subtitle: 'Lab 3',
    description: 'Mise en place d\'un environnement backend avec Node.js, gestion des dépendances et introduction à Express.',
    technologies: ['Node.js', 'NPM', 'HTTP', 'Express'],
    githubUrl: 'https://github.com/sarasoufi',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background-secondary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-primary text-sm tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Portfolio
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Projets Académiques
            </h2>
            <motion.div 
              className="gold-line mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Travaux réalisés dans le cadre du module Conception d'Applications Web. 
              Chaque projet représente une étape clé dans mon apprentissage du développement web moderne.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-card border border-border rounded-sm p-6 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Subtitle */}
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-3">
                  {project.subtitle}
                </p>
                
                {/* Title */}
                <h3 className="font-display text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs text-muted-foreground/70 border border-border px-2 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
