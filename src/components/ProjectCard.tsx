import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl, delay = 0 }: ProjectCardProps) => {
  return (
    <div
      className="card-gradient rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 opacity-0 animate-slide-up group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Project Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        <div className="w-6 h-6 rounded bg-primary" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-secondary hover:bg-primary/20 transition-colors text-xs"
          >
            {tech}
          </Badge>
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
    </div>
  );
};

export default ProjectCard;
