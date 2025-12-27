import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} <span className={styles.name}>Sara Soufi</span>. All rights reserved.
          </p>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/sarasoufi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Github className={styles.icon} />
            </a>
            <a
              href="https://linkedin.com/in/sara-soufi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Linkedin className={styles.icon} />
            </a>
            <a
              href="mailto:sarasoufi047@gmail.com"
              className={styles.socialLink}
            >
              <Mail className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
