import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Methodology = () => {
  const { t } = useLanguage();

  return (
    <section id="methodology" className="section-padding bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
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
              {t.methodology.subtitle}
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.methodology.title}
            </h2>
            <motion.div 
              className="gold-line mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.methodology.description}
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
            {t.methodology.steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-8 py-8 border-b border-border/50 group hover:border-primary/30 transition-colors duration-300">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-4xl md:text-5xl font-display text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-muted-foreground/70 text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
