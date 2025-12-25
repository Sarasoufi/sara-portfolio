import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Lab 7 - Kanban Board',
    description: 'A Trello-like task management application built with React. Features task creation, status-based columns, dynamic task movement, and modern component architecture.',
    techStack: ['React', 'Vite', 'CSS Modules', 'JavaScript', 'Jest'],
    githubUrl: 'https://github.com/sarasoufi',
  },
  {
    title: 'Lab 5 - React Components & State',
    description: 'A React lab demonstrating core concepts including functional components, hooks, events, lists, props, and forms to build interactive and dynamic user interfaces.',
    techStack: ['React', 'JavaScript', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/sarasoufi',
  },
  {
    title: 'Lab 4 - Unit Testing (Jest)',
    description: 'A JavaScript project demonstrating unit testing using Jest. Includes tests for array manipulation functions, string concatenation, and array chunking.',
    techStack: ['JavaScript', 'Jest', 'Node.js', 'NPM'],
    githubUrl: 'https://github.com/sarasoufi',
  },
  {
    title: 'Lab 3 - Node.js & NPM',
    description: 'A Node.js project focused on server-side JavaScript and package management. Includes reusable modules, file operations, and third-party package integration.',
    techStack: ['Node.js', 'JavaScript', 'NPM', 'File System (fs)'],
    githubUrl: 'https://github.com/sarasoufi',
  },
  {
    title: 'Lab 2 - Git & GitHub',
    description: 'Version control project covering Git and GitHub for managing code changes. Includes repositories, commits, branching, and remote collaboration workflows.',
    techStack: ['Git', 'GitHub', 'Command Line', 'Version Control'],
    githubUrl: 'https://github.com/sarasoufi',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Labs & <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Projects completed during this semester, showcasing skills in React, JavaScript, testing, and version control.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
