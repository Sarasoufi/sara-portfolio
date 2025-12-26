import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import TechIcon from './TechIcon';

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="card-gradient rounded-xl border border-border p-4 sm:p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 group"
    >
      {/* Project Icon */}
      <motion.div 
        className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-6 h-6 rounded bg-primary" />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Tech Stack with Icons */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="bg-secondary hover:bg-primary/20 transition-colors text-xs flex items-center gap-1.5 py-1"
            >
              <TechIcon name={tech} size={14} />
              {tech}
            </Badge>
          </motion.div>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
        {liveUrl && (
          <Button variant="glow" size="sm" asChild className="flex-1">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
