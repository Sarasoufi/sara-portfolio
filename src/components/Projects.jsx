import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import codeReact from '@/assets/code-react.jpg';
import codeJs from '@/assets/code-js.jpg';
import codeJest from '@/assets/code-jest.jpg';
import codeNode from '@/assets/code-node.jpg';
import codeGit from '@/assets/code-git.jpg';

const projectImages = [codeReact, codeReact, codeJest, codeNode, codeGit];
const projectTechs = [
  ['React', 'Vite', 'CSS Modules', 'JavaScript', 'Jest'],
  ['React', 'JavaScript', 'Vite', 'CSS'],
  ['JavaScript', 'Jest', 'Node.js', 'NPM'],
  ['Node.js', 'JavaScript', 'NPM', 'File System'],
  ['Git', 'GitHub', 'Command Line', 'Version Control'],
];

// Simple code examples for beginners
const codeExamples = [
  // Lab 7 - Kanban Board
  `// Simple Kanban Task Component
function Task({ title, onMove }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <button onClick={onMove}>
        Move →
      </button>
    </div>
  );
}

// Using the component
<Task 
  title="Learn React" 
  onMove={() => moveTask(id)} 
/>`,
  // Lab 5 - React Components
  `// useState Hook Example
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add +1
      </button>
    </div>
  );
}`,
  // Lab 4 - Jest Testing
  `// Simple Jest Test
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('array contains item', () => {
  const fruits = ['apple', 'banana'];
  expect(fruits).toContain('apple');
});`,
  // Lab 3 - Node.js
  `// Simple Node.js Server
const http = require('http');

const server = http.createServer(
  (req, res) => {
    res.writeHead(200);
    res.end('Hello World!');
  }
);

server.listen(3000);
console.log('Server running!');`,
  // Lab 2 - Git Commands
  `# Basic Git Commands

git init              # Start a repo
git add .             # Stage files
git commit -m "msg"   # Save changes
git push origin main  # Upload to GitHub

# Branching
git branch feature    # Create branch
git checkout feature  # Switch branch
git merge feature     # Merge branch`,
];

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-background-secondary relative overflow-hidden">
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
              Labs & <span className="text-primary">Projects</span>
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

          {/* Projects Grid - 3 columns for first row, 2 columns centered for second */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={project.title}
                className={`group relative bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300 ${
                  index >= 3 ? 'lg:col-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Code Image Preview */}
                <div className="relative h-36 overflow-hidden">
                  <motion.img 
                    src={projectImages[index]} 
                    alt={`${project.title} code preview`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Lab badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-sm">
                      {project.subtitle}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {projectTechs[index]?.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs text-muted-foreground/70 border border-border px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {projectTechs[index]?.length > 3 && (
                      <span className="text-xs text-muted-foreground/50">
                        +{projectTechs[index].length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <motion.a
                      href="https://github.com/sarasoufi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-xs text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/50 rounded-sm transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-3.5 h-3.5" />
                      {t.projects.viewCode}
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedProject(index)}
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm transition-all duration-300"
                      whileHover={{ scale: 1.02, gap: '10px' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.projects.moreDetails}
                      <ArrowRight className="w-3.5 h-3.5" />
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
              className="relative w-full max-w-3xl bg-card border border-border rounded-sm overflow-hidden max-h-[90vh] overflow-y-auto"
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
              <div className="relative h-48 md:h-56">
                <img 
                  src={projectImages[selectedProject]} 
                  alt={t.projects.items[selectedProject]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-sm">
                    {t.projects.items[selectedProject]?.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  {t.projects.items[selectedProject]?.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t.projects.items[selectedProject]?.description}
                </p>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
                    {t.projects.detailedDescription}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.projects.items[selectedProject]?.details}
                  </p>
                </div>

                {/* Code Example */}
                <div className="mb-6">
                  <h4 className="text-primary text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Code Example
                  </h4>
                  <div className="bg-background rounded-sm border border-border overflow-hidden">
                    <pre className="p-4 text-xs md:text-sm text-muted-foreground overflow-x-auto font-mono leading-relaxed">
                      <code>{codeExamples[selectedProject]}</code>
                    </pre>
                  </div>
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
                    {t.projects.objectives}
                  </h4>
                  <ul className="space-y-2">
                    {t.projects.items[selectedProject]?.objectivesList?.map((objective, idx) => (
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
                    {t.projects.items[selectedProject]?.learningsList?.map((learning, idx) => (
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
                    {projectTechs[selectedProject]?.map((tech) => (
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