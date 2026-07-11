import React from 'react';
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

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', height: '100vh', minHeight: '800px', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Background Image & Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div className="hero-img-wrapper" style={{ width: '100%', height: '100%' }}>
          <motion.img 
            initial={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80" 
            alt="Dr. Suhas"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '0% 0%' }}
          />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to right, rgba(6,11,17,0.95) 0%, rgba(6,11,17,0.4) 50%, rgba(6,11,17,0.1) 100%)'
          }} 
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(6,11,17,1) 0%, transparent 30%)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '80px' }}>
        <motion.div 
          style={{ maxWidth: '700px' }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          
          <motion.div variants={fadeUp}>
            <div className="text-eyebrow" style={{ marginBottom: '1.5rem' }}>
              Dr. Suhas S Kumar &mdash; Consultant Surgeon
            </div>
          </motion.div>
          
          <motion.h1 
            className="h-display" 
            style={{ marginBottom: '1.5rem' }}
            variants={fadeUp}
          >
            Surgical precision.<br />
            <span className="text-gradient-gold">Human compassion.</span>
          </motion.h1>

          <motion.p 
            className="text-lead"
            style={{ marginBottom: '3rem', maxWidth: '540px' }}
            variants={fadeUp}
          >
            A premium surgical experience shaped by advanced laparoscopy, calm confidence, and a deeply personal approach to your care and recovery.
          </motion.p>

          <motion.div 
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}
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

          {/* Trust Indicators */}
          <motion.div 
            className="hero-trust-indicators"
            style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}
            variants={fadeUp}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', color: 'var(--accent-gold)' }}>
                {[1,2,3,4,5].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1.2 + (i * 0.1), type: 'spring', stiffness: 200, damping: 10 }}
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
              <span className="text-body" style={{ fontSize: '0.875rem' }}>99% Patient Satisfaction</span>
            </div>
            
            <div className="hide-mobile" style={{ width: '1px', background: 'var(--border-strong)' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem' }}>5000+</span>
              <span className="text-body" style={{ fontSize: '0.875rem' }}>Successful Procedures</span>
            </div>
            
            <div className="hide-mobile" style={{ width: '1px', background: 'var(--border-strong)' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem' }}>11+ Years</span>
              <span className="text-body" style={{ fontSize: '0.875rem' }}>Clinical Experience</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
