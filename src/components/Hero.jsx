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
    <section className="hero-section" style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Background Image & Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        
        {/* Animated Precision DNA / Glass Ribbon Pattern (Desktop Only) */}
        <div className="hero-animated-pattern">
          <svg 
            className="hero-ribbon-svg" 
            viewBox="0 0 1400 900" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Ambient background glow behind center gap */}
              <radialGradient id="ribbonCenterGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#9FD4FF" stopOpacity="0.28" />
                <stop offset="60%" stopColor="#C8E5FF" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>

              {/* Main Frosted Glass Ribbon Gradients */}
              <linearGradient id="ribbonLayer1Grad" x1="0%" y1="20%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#EAF5FF" stopOpacity="0.3" />
                <stop offset="35%" stopColor="#C8E5FF" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#9FD4FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F7FBFF" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="ribbonLayer2Grad" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="25%" stopColor="#DCEEFF" stopOpacity="0.45" />
                <stop offset="65%" stopColor="#9FD4FF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#C8E5FF" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="ribbonLayer3Grad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#9FD4FF" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#C8E5FF" stopOpacity="0.4" />
                <stop offset="80%" stopColor="#EAF5FF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="ribbonHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#9FD4FF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
              </linearGradient>

              {/* Blurs for Glass Effect */}
              <filter id="glassBlurHeavy" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="35" />
              </filter>
              <filter id="glassBlurMedium" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
              <filter id="glassBlurSoft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" />
              </filter>
            </defs>

            {/* Center Ambient Glow */}
            <ellipse cx="650" cy="480" rx="420" ry="280" fill="url(#ribbonCenterGlow)" className="hero-ribbon-glow" />

            {/* LAYER 1: Deep Background Glass Ribbon (Softest, Largest) */}
            <path 
              d="M -100 680 Q 250 820, 580 520 T 1250 380 Q 1420 320, 1500 450 L 1500 750 Q 1200 850, 700 720 T -100 880 Z" 
              fill="url(#ribbonLayer1Grad)" 
              filter="url(#glassBlurHeavy)" 
              opacity="0.75"
            />

            {/* LAYER 2: Main Middle Frosted Ribbon (Flowing S-Curve) */}
            <path 
              d="M -50 580 C 220 720, 480 580, 680 430 C 880 280, 1150 310, 1450 480 L 1450 560 C 1180 390, 890 370, 670 510 C 450 650, 180 780, -50 660 Z" 
              fill="url(#ribbonLayer2Grad)" 
              filter="url(#glassBlurMedium)"
              opacity="0.85"
            />

            {/* LAYER 2b: Intertwining Ribbon Strand (DNA Twist Feel) */}
            <path 
              d="M -80 450 C 180 320, 420 480, 640 560 C 860 640, 1120 520, 1420 320 L 1420 390 C 1100 590, 840 690, 620 610 C 400 530, 160 380, -80 510 Z" 
              fill="url(#ribbonLayer3Grad)" 
              filter="url(#glassBlurMedium)"
              opacity="0.65"
            />

            {/* LAYER 3: Fine Glossy Edge Highlights & Fine Mesh Lines */}
            <path 
              d="M -50 580 C 220 720, 480 580, 680 430 C 880 280, 1150 310, 1450 480" 
              stroke="url(#ribbonHighlight)" 
              strokeWidth="2.5" 
              fill="none" 
              filter="url(#glassBlurSoft)"
              opacity="0.9"
            />

            <path 
              d="M -80 450 C 180 320, 420 480, 640 560 C 860 640, 1120 520, 1420 320" 
              stroke="url(#ribbonHighlight)" 
              strokeWidth="1.5" 
              fill="none" 
              filter="url(#glassBlurSoft)"
              opacity="0.75"
            />

            {/* Subtle DNA / Precision Line Wave Array */}
            <g opacity="0.35">
              <path d="M -50 595 C 220 735, 480 595, 680 445 C 880 295, 1150 325, 1450 495" stroke="#FFFFFF" strokeWidth="1" fill="none" strokeDasharray="6 8" />
              <path d="M -50 565 C 220 705, 480 565, 680 415 C 880 265, 1150 295, 1450 465" stroke="#9FD4FF" strokeWidth="0.8" fill="none" />
              <path d="M -80 465 C 180 335, 420 495, 640 575 C 860 655, 1120 535, 1420 335" stroke="#C8E5FF" strokeWidth="0.8" fill="none" strokeDasharray="10 6" />
            </g>
          </svg>
        </div>

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
          className="hero-overlay hero-overlay-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="hero-overlay hero-overlay-top" />
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
            style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}
            variants={fadeUp}
          >
            Surgical precision.<br />
            <span className="text-gradient-navy">Human compassion.</span>
          </motion.h1>

          <motion.p 
            className="text-lead"
            style={{ marginBottom: '3rem', maxWidth: '540px', color: 'var(--text-secondary)' }}
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

        </motion.div>
      </div>
    </section>
  );
}
