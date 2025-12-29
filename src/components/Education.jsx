import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background-secondary relative">
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
              Education
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Formation
            </h2>
            <motion.div 
              className="gold-line mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="relative max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card border border-border rounded-sm p-8 text-center hover:border-primary/30 transition-colors duration-300">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-primary/30 rounded-full">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              {/* Degree */}
              <h3 className="font-display text-2xl text-foreground mb-2">
                Master 1 STIC
              </h3>
              
              {/* Details */}
              <p className="text-primary text-sm tracking-[0.15em] uppercase mb-4">
                Sciences et Technologies de l'Information et de la Communication
              </p>
              
              {/* Year */}
              <p className="text-muted-foreground text-sm">
                Année en cours — 2024/2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
