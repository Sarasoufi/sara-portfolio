import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-glow p-1 glow"
              animate={{ boxShadow: ["0 0 20px hsl(292 92% 24% / 0.3)", "0 0 40px hsl(292 92% 24% / 0.6)", "0 0 20px hsl(292 92% 24% / 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-5xl font-bold text-gradient">
                SS
              </div>
            </motion.div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm{' '}
            <span className="text-gradient">Soufi Sara</span>
          </motion.h1>

          <motion.h2 
            className="text-xl md:text-2xl text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Junior Full-Stack Web Developer
          </motion.h2>

          {/* Bio */}
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I design and develop front-end and back-end websites and applications. 
            I focus on creating modern, responsive, and user-friendly digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/sarasoufi", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/sara-soufi", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sarasoufi047@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
