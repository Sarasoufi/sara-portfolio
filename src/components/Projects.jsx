import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import codeHtml from '@/assets/code-html.jpg';
import codeJs from '@/assets/code-js.jpg';
import codeNode from '@/assets/code-node.jpg';

const projectImages = [codeHtml, codeJs, codeNode];
const projectTechs = [
  ['HTML5', 'CSS3', 'Responsive Design'],
  ['JavaScript', 'ES6+', 'DOM', 'Fetch API'],
  ['Node.js', 'NPM', 'HTTP', 'Express'],
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding bg-background-secondary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
              {t.projects.subtitle}
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.projects.title}
            </h2>
            <motion.div 
              className="gold-line mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.projects.description}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Code Image Preview */}
                <div className="relative h-40 overflow-hidden">
                  <motion.img 
                    src={projectImages[index]} 
                    alt={`${project.title} code preview`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Subtitle badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-sm">
                      {project.subtitle}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projectTechs[index].map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs text-muted-foreground/70 border border-border px-2 py-1 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href="https://github.com/sarasoufi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/50 rounded-sm transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.viewCode}
                    </motion.a>
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm transition-all duration-300"
                      whileHover={{ scale: 1.02, gap: '12px' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.projects.moreDetails}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
