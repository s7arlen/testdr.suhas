import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

const heroImage = `${import.meta.env.BASE_URL}images/hero-doctor.png`;

export default function Hero() {
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined'
      ? document.documentElement.dataset.theme === 'dark'
      : false
  );

  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.dataset.theme === 'dark');
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero-section" style={{ position: 'relative', minHeight: '440px', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: 'var(--bg-primary)', padding: '2rem 0' }}>
      
      {/* Background Image & Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        
        {/* Animated Precision Pattern (Light Mode) */}
        <div className="hero-animated-pattern" />

        <div className="hero-img-wrapper" style={{ width: '100%', height: '100%', '--hero-image': `url(${heroImage})` }}>
          <motion.img 
            initial={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            src={heroImage}
            alt="Dr. Suhas S Kumar - Consultant General & Laparoscopic Surgeon"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '0% 0%' }}
          />
        </div>
        <motion.div 
          className="hero-overlay hero-overlay-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="hero-overlay hero-overlay-top" />
      </div>

      {/* Hex grid pattern (Left half only with smooth fade) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '55%',
          opacity: isDark ? 0.08 : 0.07,
          pointerEvents: 'none',
          zIndex: 5,
          backgroundImage: isDark
            ? `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 104L30 87L0 104V70L30 53L60 70V104ZM30 51L0 34V0L30 17L60 0V34L30 51Z' fill='%23FFFFFF' fill-opacity='0.3' fill-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 104L30 87L0 104V70L30 53L60 70V104ZM30 51L0 34V0L30 17L60 0V34L30 51Z' fill='%232D6BFF' fill-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '40px' }}>
        <motion.div 
          style={{ maxWidth: '700px' }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          
          <motion.div variants={fadeUp}>
            <div className="text-eyebrow" style={{ marginBottom: '0.75rem' }}>
              Dr. Suhas S Kumar &mdash; Consultant Surgeon
            </div>
          </motion.div>
          
          <motion.h1 
            className="h-display" 
            style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}
            variants={fadeUp}
          >
            Surgical precision.<br />
            <span className="text-gradient-navy">Human compassion.</span>
          </motion.h1>

          <motion.p 
            className="text-lead"
            style={{ marginBottom: '1.5rem', maxWidth: '540px', color: 'var(--text-secondary)' }}
            variants={fadeUp}
          >
            A premium surgical experience shaped by advanced laparoscopy, calm confidence, and a deeply personal approach to your care and recovery.
          </motion.p>

          <motion.div 
            className="hero-cta-row"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}
            variants={fadeUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn btn-primary">
                Book Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="btn btn-secondary">
                Explore Specialties
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
