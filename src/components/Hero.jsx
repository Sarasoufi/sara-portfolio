import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero.jpg';
import TypewriterText from './TypewriterText';

const roles = [
  'Full-Stack Developer',
  'React Specialist',
  'UI/UX Enthusiast',
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-[2px] bg-gradient-to-br from-primary to-primary-glow">
              <img 
                src={heroImage} 
                alt="Sara Soufi" 
                className="w-full h-full rounded-full object-cover border-2 border-background"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-4 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sara <span className="text-primary">Soufi</span>
          </motion.h1>

          {/* Gold line */}
          <motion.div 
            className="gold-line mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Typewriter Title */}
          <motion.h2 
            className="text-xl md:text-2xl text-muted-foreground font-light mb-8 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TypewriterText texts={roles} typingSpeed={80} deletingSpeed={40} pauseTime={2500} />
          </motion.h2>

          {/* Bio */}
          <motion.p 
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I design and develop modern, responsive web applications with a focus on 
            clean code, exceptional user experiences, and cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-3.5 border border-muted-foreground/30 text-foreground font-medium rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {[
              { icon: Github, href: "https://github.com/sarasoufi", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/sara-soufi", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sarasoufi047@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
