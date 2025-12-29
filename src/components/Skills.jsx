import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Langages',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Frameworks & Tools',
    skills: ['Node.js', 'Express', 'NPM'],
  },
  {
    title: 'Design & UX/UI',
    skills: ['Figma', 'Canva'],
  },
  {
    title: 'Méthodologie',
    skills: ['Responsive Design', 'Accessibilité', 'Bonnes pratiques SEO'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
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
              Expertise
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Compétences
            </h2>
            <motion.div 
              className="gold-line mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-display text-lg text-primary mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="text-muted-foreground text-sm py-2 border-b border-border/30"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.1 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
