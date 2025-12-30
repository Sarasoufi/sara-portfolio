import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Palette, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Personal = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.personal.gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.personal.gallery.length) % t.personal.gallery.length);
  };

  return (
    <section id="personal" className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              {t.personal.subtitle}
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.personal.title}
            </h2>
            <motion.div 
              className="gold-line mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.personal.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hobbies & Interests */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-foreground mb-8 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                {t.personal.hobbiesTitle}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {t.personal.hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    className="group bg-card border border-border/50 rounded-sm p-4 hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <span className="text-2xl mb-2 block">{hobby.emoji}</span>
                    <h4 className="text-foreground font-medium text-sm group-hover:text-primary transition-colors duration-300">
                      {hobby.name}
                    </h4>
                    <p className="text-muted-foreground/60 text-xs mt-1">
                      {hobby.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-foreground mb-8 flex items-center gap-3">
                <Palette className="w-6 h-6 text-primary" />
                {t.personal.galleryTitle}
              </h3>

              {/* Carousel */}
              <div className="relative bg-card border border-border rounded-sm overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-card to-primary/5"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center p-8">
                        <span className="text-5xl mb-4 block">{t.personal.gallery[currentSlide].emoji}</span>
                        <h4 className="font-display text-xl text-foreground mb-2">
                          {t.personal.gallery[currentSlide].title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {t.personal.gallery[currentSlide].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between p-4 border-t border-border/50">
                  <motion.button
                    onClick={prevSlide}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>

                  <div className="flex gap-2">
                    {t.personal.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextSlide}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Fun Fact */}
              <motion.div 
                className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-primary text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  {t.personal.funFact}
                </div>
                <p className="text-muted-foreground text-sm">
                  {t.personal.funFactText}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
