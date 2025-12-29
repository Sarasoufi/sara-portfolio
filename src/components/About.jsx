import { motion } from 'framer-motion';
import { Code, Palette, BookOpen, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Web Development' },
  { icon: Palette, label: 'UX/UI Design' },
  { icon: BookOpen, label: 'Academic Projects' },
  { icon: TrendingUp, label: 'Continuous Learning' },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
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
              About
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              À propos
            </h2>
            <motion.div 
              className="gold-line mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Étudiante en Master 1 STIC, je développe progressivement des compétences en conception 
              et développement d'applications web. Mon approche repose sur une méthodologie claire, 
              une bonne compréhension des besoins utilisateurs et l'application des standards du web moderne.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center p-6 border border-border rounded-sm hover:border-primary/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-4" />
                <p className="text-foreground text-sm font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
