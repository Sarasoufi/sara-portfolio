import { motion } from 'framer-motion';
import TechIcon from './TechIcon';
import styles from './Skills.module.css';

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
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Skills & <span className={styles.gradient}>Technologies</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
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
          className={styles.grid}
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
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 10,
                      transition: { duration: 0.2 } 
                    }}
                    className={styles.skillItem}
                  >
                    <div className={styles.skillContent}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={styles.skillIconWrapper}
                      >
                        <TechIcon name={skill.name} size={18} />
                      </motion.div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <span className={styles.skillType}>{skill.type}</span>
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
