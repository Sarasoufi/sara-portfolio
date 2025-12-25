import { motion } from 'framer-motion';
import TechIcon from './TechIcon';

const skillCategories = [
  {
    title: 'Front-end Web',
    skills: [
      { name: 'HTML', type: 'Language' },
      { name: 'CSS', type: 'Language' },
      { name: 'JavaScript', type: 'Language' },
      { name: 'React', type: 'Framework' },
    ],
  },
  {
    title: 'Back-end Web',
    skills: [
      { name: 'PHP', type: 'Language' },
      { name: 'Laravel', type: 'MVC Framework' },
    ],
  },
  {
    title: 'Mobile App',
    skills: [
      { name: 'Flutter', type: 'Framework' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Vite', type: 'Build Tool' },
      { name: 'Git', type: 'Version Control' },
      { name: 'Jest', type: 'Testing' },
      { name: 'GitHub', type: 'Repository' },
      { name: 'VS Code', type: 'Editor' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/50 overflow-hidden">
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
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Overview of my technical stack: web languages, frameworks and tools.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
            >
              <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 10,
                      transition: { duration: 0.2 } 
                    }}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-1.5 rounded-md bg-primary/20 group-hover:bg-primary/30 transition-colors"
                      >
                        <TechIcon name={skill.name} size={18} />
                      </motion.div>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                      {skill.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
