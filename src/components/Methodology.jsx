import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Concept Framing',
    description: 'Clarifying the vision by translating initial ideas into well-defined objectives. This stage establishes project boundaries, success criteria, and strategic priorities.',
  },
  {
    number: '02',
    title: 'Strategic Exploration',
    description: 'Evaluating existing ecosystems, identifying opportunities, and assessing constraints. Decisions are guided by data, feasibility, and long-term sustainability.',
  },
  {
    number: '03',
    title: 'Experience Architecture',
    description: 'Structuring user journeys and visual systems with precision. Interfaces are crafted to balance functionality, clarity, and aesthetic coherence using professional design tools.',
  },
  {
    number: '04',
    title: 'Technical Execution',
    description: 'Engineering robust and maintainable solutions through clean architecture and thoughtful implementation. Focus is placed on reliability, scalability, and code quality.',
  },
  {
    number: '05',
    title: 'Validation & Deployment',
    description: 'Ensuring readiness through testing, refinement, and controlled delivery. The solution is optimized, validated, and prepared for real-world usage.',
  },
];

const Methodology = () => {
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
              Process
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Professional Workflow
            </h2>
            <motion.div 
              className="gold-line mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A disciplined and results-driven workflow designed to transform complex ideas 
              into reliable, high-quality digital solutions.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
            {steps.map((step, index) => (
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
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
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
