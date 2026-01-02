import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-profile.jpg';
import TypewriterText from './TypewriterText';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary opacity-80" />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.p
              className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl font-medium mb-4 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.name} <span className="text-primary">{t.hero.lastName}</span>
            </motion.h1>

            {/* Gold line */}
            <motion.div 
              className="gold-line mb-6 mx-auto lg:mx-0"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Typewriter Title */}
            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground font-light mb-8 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TypewriterText texts={t.hero.roles} typingSpeed={80} deletingSpeed={40} pauseTime={2500} />
            </motion.h2>

            {/* Bio */}
            <motion.p 
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t.hero.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="#projects" 
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{t.hero.viewWork}</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="group relative px-8 py-4 border border-muted-foreground/30 text-foreground font-medium rounded-sm overflow-hidden"
                whileHover={{ scale: 1.02, y: -2, borderColor: 'hsl(var(--primary))' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{t.hero.contactMe}</span>
                <motion.span 
                  className="absolute inset-0 bg-primary/5"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Social Links */}
           <motion.div 
  className="flex justify-center lg:justify-start gap-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.9 }}
>
  {[
    { icon: Github, href: "https://github.com/sarasoufi", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sara-soufi", label: "LinkedIn" },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&to=sarasoufi047@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Sara,%0D%0A%0D%0A",
      label: "Email"
    }
  ].map((social) => (
    <motion.a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 rounded-sm transition-all duration-300"
      whileHover={{ scale: 1.15, y: -3 }}
      aria-label={social.label}
    >
      <social.icon className="w-5 h-5" />
    </motion.a>
  ))}
</motion.div>
</motion.div>

          {/* Right - Large Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div 
                className="absolute -inset-4 border border-primary/20 rounded-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              <motion.div 
                className="absolute -inset-8 border border-primary/10 rounded-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              />
              
              {/* Main Image */}
              <motion.div
                className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={heroImage} 
                  alt="Sara Soufi - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary" />
                <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary" />
              </motion.div>
            </div>
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
            <span className="text-xs tracking-[0.2em] uppercase">{t.hero.scroll}</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
