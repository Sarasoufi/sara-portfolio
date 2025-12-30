import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.methodology, href: '#methodology' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.blog, href: '#blog' },
    { name: t.nav.personal, href: '#personal' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/98 backdrop-blur-md border-b border-primary/10 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="font-display text-2xl text-foreground hover:text-primary transition-colors" whileHover={{ scale: 1.02 }}>
            <span>Sara</span><span className="text-primary"> Soufi</span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-3/4 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button onClick={toggleTheme} className="p-2 rounded-sm border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
            <motion.button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border hover:border-primary text-sm text-muted-foreground hover:text-primary transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Globe className="w-4 h-4" /><span className="font-medium">{language.toUpperCase()}</span>
            </motion.button>
            <motion.button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.9 }}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden">
              <div className="py-6 space-y-1 border-t border-border/50">
                {navLinks.map((link, index) => (
                  <motion.a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="block py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-sm transition-all" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
