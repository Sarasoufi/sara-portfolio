import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import TechLogo from './TechLogo';

const skillsData = {
  frontend: [
    { name: 'HTML', type: 'Language' },
    { name: 'CSS', type: 'Language' },
    { name: 'JavaScript', type: 'Language' },
    { name: 'React', type: 'Framework' },
  ],
  backend: [
    { name: 'PHP', type: 'Language' },
    { name: 'Laravel', type: 'MVC Framework' },
  ],
  mobile: [
    { name: 'Flutter', type: 'Framework' },
  ],
  tools: [
    { name: 'Vite', type: 'Build Tool' },
    { name: 'Git', type: 'Version Control' },
    { name: 'Jest', type: 'Testing' },
    { name: 'GitHub', type: 'Repository' },
    { name: 'VS Code', type: 'Editor' },
  ],
};

const SkillCard = ({ name, type, index }) => (
  <motion.div
    className="group bg-card border border-border/50 rounded-sm p-4 hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    whileHover={{ y: -3, backgroundColor: 'hsl(var(--card) / 0.8)' }}
  >
    <TechLogo name={name} delay={index * 0.05} />
    <div>
      <h4 className="text-foreground font-medium text-sm group-hover:text-primary transition-colors duration-300">
        {name}
      </h4>
      <p className="text-muted-foreground/60 text-xs mt-0.5">
        {type}
      </p>
    </div>
  </motion.div>
);

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="font-display text-lg text-primary mb-4 pb-2 border-b border-border/30">
      {title}
    </h3>
    <div className="grid gap-3">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} {...skill} index={index} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
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
              {t.skills.subtitle}
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.skills.title}
            </h2>
            <motion.div 
              className="gold-line mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.skills.overview}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCategory 
              title={t.skills.categories.frontend} 
              skills={skillsData.frontend} 
              delay={0}
            />
            <SkillCategory 
              title={t.skills.categories.backend} 
              skills={skillsData.backend} 
              delay={0.1}
            />
            <SkillCategory 
              title={t.skills.categories.mobile} 
              skills={skillsData.mobile} 
              delay={0.2}
            />
            <SkillCategory 
              title={t.skills.categories.tools} 
              skills={skillsData.tools} 
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
