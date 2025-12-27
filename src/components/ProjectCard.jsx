import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl, index = 0 }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Project Icon */}
      <motion.div 
        className={styles.iconWrapper}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.iconInner} />
      </motion.div>

      {/* Title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Description */}
      <p className={styles.description}>{description}</p>

      {/* Tech Stack with Icons */}
      <div className={styles.techStack}>
        {techStack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
          >
            <span className={styles.badge}>
              <TechIcon name={tech} size={14} />
              {tech}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonOutline}`}>
          <Github className={styles.buttonIcon} />
          GitHub
        </a>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonGlow}`}>
            <ExternalLink className={styles.buttonIcon} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
