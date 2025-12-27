import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.section}>
      {/* Animated background elements */}
      <div className={styles.backgroundContainer}>
        <motion.div 
          className={styles.bgOrb1}
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.bgOrb2}
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Profile Image */}
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className={styles.imageContainer}
              animate={{ boxShadow: ["0 0 20px hsl(292 92% 24% / 0.3)", "0 0 40px hsl(292 92% 24% / 0.6)", "0 0 20px hsl(292 92% 24% / 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img 
                src={heroImage} 
                alt="Sara Soufi" 
                className={styles.profileImage}
              />
            </motion.div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm{' '}
            <span className={styles.gradient}>Soufi Sara</span>
          </motion.h1>

          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Junior Full-Stack Web Developer
          </motion.h2>

          {/* Bio */}
          <motion.p 
            className={styles.bio}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I design and develop front-end and back-end websites and applications. 
            I focus on creating modern, responsive, and user-friendly digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className={styles.buttonsContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.buttonWrapper}>
              <a href="#projects" className={`${styles.button} ${styles.buttonPrimary}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                background: 'linear-gradient(to right, hsl(292 92% 24%), hsl(292 84% 40%))',
                color: 'hsl(0 0% 98%)',
                fontWeight: 500,
                textDecoration: 'none',
                width: '100%'
              }}>View My Work</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={styles.buttonWrapper}>
              <a href="#contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: '1px solid hsl(240 3.7% 15.9%)',
                background: 'transparent',
                color: 'hsl(0 0% 98%)',
                fontWeight: 500,
                textDecoration: 'none',
                width: '100%'
              }}>Contact Me</a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className={styles.socialLinks}
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
                className={styles.socialLink}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <social.icon className={styles.socialIcon} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className={styles.scrollIndicator}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <a href="#projects" className={styles.scrollLink}>
              <ArrowDown className={styles.scrollIcon} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
