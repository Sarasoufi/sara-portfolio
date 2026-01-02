import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleArticle = (index) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  return (
    <section id="blog" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/3 to-transparent" />
      
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
              {t.blog.subtitle}
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.blog.title}
            </h2>
            <motion.div 
              className="h-0.5 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.blog.description}
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.blog.articles.map((article, index) => (
              <motion.article
                key={article.title}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Article Header */}
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-sm mb-4">
                    {article.category}
                  </span>
                  
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {expandedArticle === index ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-6">
                          {article.fullContent}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6"
                      >
                        {article.excerpt}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  
                  <motion.button
                    onClick={() => toggleArticle(index)}
                    className="flex items-center gap-2 text-primary text-sm font-medium group/btn"
                    whileHover={{ x: 5 }}
                  >
                    <BookOpen className="w-4 h-4" />
                    {expandedArticle === index ? t.blog.readLess : t.blog.readMore}
                    {expandedArticle === index ? (
                      <ChevronUp className="w-4 h-4 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    )}
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
