import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CounterAnimation = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const stats = [
  { value: 5, suffix: '+', label: 'Projets Complétés' },
  { value: 10, suffix: '+', label: 'Technologies Maîtrisées' },
  { value: 100, suffix: '%', label: 'Passion & Dédication' },
  { value: 1, suffix: 'an+', label: "Expérience Dev" },
];

const StatsSection = () => {
  return (
    <section style={{
      padding: '4rem 1rem',
      background: 'linear-gradient(180deg, hsl(220 20% 6%) 0%, hsl(220 20% 4%) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, hsla(186, 100%, 50%, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{
                textAlign: 'center',
                padding: '2rem',
                borderRadius: '1rem',
                background: 'linear-gradient(145deg, hsla(220, 20%, 12%, 0.5), hsla(220, 20%, 8%, 0.5))',
                border: '1px solid hsla(220, 15%, 20%, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'linear-gradient(135deg, hsl(186 100% 50%), hsl(280 100% 60%))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: '0.5rem',
              }}>
                <CounterAnimation end={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'hsl(220 10% 60%)',
                fontWeight: '500',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;