import { 
  FileCode, 
  Palette, 
  Braces, 
  Atom, 
  Server, 
  Layers, 
  Smartphone,
  Zap,
  GitBranch,
  TestTube,
  Github,
  Code2,
  Terminal,
  Package,
  FolderOpen
} from 'lucide-react';
import styles from './TechIcon.module.css';

const iconMap = {
  'HTML': FileCode,
  'CSS': Palette,
  'JavaScript': Braces,
  'React': Atom,
  'PHP': Server,
  'Laravel': Layers,
  'Flutter': Smartphone,
  'Vite': Zap,
  'Git': GitBranch,
  'Jest': TestTube,
  'GitHub': Github,
  'GitHub/GitLab': Github,
  'VS Code': Code2,
  'Node.js': Server,
  'NPM': Package,
  'CSS Modules': Palette,
  'Command Line': Terminal,
  'Version Control': GitBranch,
  'File System (fs)': FolderOpen,
};

const TechIcon = ({ name, size = 16, className = '' }) => {
  const Icon = iconMap[name] || Code2;
  return <Icon size={size} className={`${styles.icon} ${className}`} />;
};

export default TechIcon;
