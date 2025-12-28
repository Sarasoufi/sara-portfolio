import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero.jpg';
import ParticlesBackground from './ParticlesBackground';
import TypewriterText from './TypewriterText';
import styles from './Hero.module.css';

const roles = [
  'Full-Stack Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  return (
    <section id="home" className={styles.section}>
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Animated background elements */}
      <div className={styles.backgroundContainer}>
        <motion.div 
          className={styles.bgOrb1}
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.bgOrb2}
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className={styles.bgOrb3} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Profile Image */}
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className={styles.imageContainer}
              animate={{ 
                boxShadow: [
                  "0 0 30px hsla(186, 100%, 50%, 0.3)", 
                  "0 0 50px hsla(186, 100%, 50%, 0.5)", 
                  "0 0 30px hsla(186, 100%, 50%, 0.3)"
                ] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img 
                src={heroImage} 
                alt="Sara Soufi - Developer" 
                className={styles.profileImage}
              />
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className={styles.gradient}>Sara Soufi</span>
          </motion.h1>

          {/* Typewriter Title */}
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className={styles.gradient}>
              <TypewriterText texts={roles} typingSpeed={80} deletingSpeed={40} pauseTime={2500} />
            </span>
          </motion.h2>

          {/* Bio */}
          <motion.p 
            className={styles.bio}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I design and develop modern, responsive web applications with a focus on 
            clean code, exceptional user experiences, and cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className={styles.buttonsContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.buttonWrapper}>
              <a href="#projects" className={styles.buttonPrimary}>
                View My Work
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.buttonWrapper}>
              <a href="#contact" className={styles.buttonSecondary}>
                <Mail style={{ width: '1rem', height: '1rem' }} />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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
                className={styles.socialLink}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className={styles.socialIcon} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a href="#projects" className={styles.scrollLink}>
            <span className={styles.scrollText}>Scroll</span>
            <ArrowDown className={styles.scrollIcon} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;