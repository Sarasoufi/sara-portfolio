import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
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
  const [selectedProject, setSelectedProject] = useState(null);

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
                      onClick={() => setSelectedProject(index)}
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-card border border-border rounded-sm overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground bg-background/50 rounded-sm transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-48 md:h-64">
                <img 
                  src={projectImages[selectedProject]} 
                  alt={t.projects.items[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-sm">
                    {t.projects.items[selectedProject].subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  {t.projects.items[selectedProject].title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t.projects.items[selectedProject].description}
                </p>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
                    {t.projects.detailedDescription}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.projects.items[selectedProject].details}
                  </p>
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
                    {t.projects.objectives}
                  </h4>
                  <ul className="space-y-2">
                    {t.projects.items[selectedProject].objectivesList?.map((objective, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Learnings */}
                <div className="mb-6">
                  <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
                    {t.projects.keyLearnings}
                  </h4>
                  <ul className="space-y-2">
                    {t.projects.items[selectedProject].learningsList?.map((learning, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
                    {t.projects.technologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projectTechs[selectedProject].map((tech) => (
                      <span 
                        key={tech}
                        className="text-sm text-foreground border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <motion.a
                  href="https://github.com/sarasoufi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  {t.projects.viewCode}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
