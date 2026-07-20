import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const specializations = [
  {
    number: '01',
    title: 'Laparoscopic Surgery',
    subtitle: 'Basic & Advanced',
    desc: 'Precision minimally invasive techniques through tiny incisions using a camera and specialized instruments — less pain, faster recovery.',
    accent: '#DEC898',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '02',
    title: 'Gastrointestinal',
    subtitle: 'Surgical Care',
    desc: 'Expert care for complex GI conditions, from diagnosis through surgery, with a focus on restoring digestive health and quality of life.',
    accent: '#C9A96E',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '03',
    title: 'Hernia Surgery',
    subtitle: 'Structural Repair',
    desc: 'Comprehensive hernia repair with laparoscopic techniques for faster healing, reduced recurrence, and long-term core strength restoration.',
    accent: '#E8D5A3',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '04',
    title: 'Breast Surgery',
    subtitle: 'Onco & Reconstructive',
    desc: 'Compassionate surgical care for breast conditions, combining oncological precision with sensitivity for the patient\'s physical and emotional well-being.',
    accent: '#DEC898',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '05',
    title: 'Thyroid Surgery',
    subtitle: 'Glandular Precision',
    desc: 'Expert thyroid and parathyroid procedures performed with meticulous care to preserve nerve function and achieve optimal hormonal outcomes.',
    accent: '#C9A96E',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '06',
    title: 'Laser Procedures',
    subtitle: 'Piles, Fissure & Fistula',
    desc: 'Advanced laser-guided treatments offering minimal pain, no cuts, no stitches, and remarkably rapid return to daily activities.',
    accent: '#E8D5A3',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '07',
    title: 'Varicose Veins',
    subtitle: 'Vascular Surgery',
    desc: 'Modern vascular interventions to treat painful, swollen veins using the latest minimally invasive techniques for lasting relief.',
    accent: '#DEC898',
    image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '08',
    title: 'Diabetic Foot',
    subtitle: 'Wound & Limb Care',
    desc: 'Specialized surgical management of diabetic foot complications, aimed at preventing amputation and restoring mobility and function.',
    accent: '#C9A96E',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '09',
    title: 'Trauma & Emergency',
    subtitle: 'Critical Surgery',
    desc: 'Rapid, decisive surgical response for acute trauma and emergency conditions, where precision and speed save lives.',
    accent: '#E8D5A3',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80',
  },
];

/* ============================= */
/* MOBILE: Vertical Card Layout  */
/* ============================= */
function MobileFilmStrip() {
  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="text-eyebrow" style={{ marginBottom: '0.5rem' }}>Clinical Specialties</div>
          <h2 className="h-2" style={{ fontSize: '1.75rem' }}>
            Our <span className="text-gradient">Specializations</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Swipe through all {specializations.length} specializations
          </p>
        </div>

        {/* Horizontal Snap Scroll */}
        <div 
          className="filmstrip-mobile-scroll"
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '1.5rem',
            marginLeft: '-1rem',
            marginRight: '-1rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          {specializations.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{
                scrollSnapAlign: 'center',
                flexShrink: 0,
                width: '85vw',
                maxWidth: '340px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {/* Card Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={spec.image}
                  alt={spec.title}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.9) saturate(0.95)',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'var(--card-image-overlay-frame)',
                }} />

                {/* Frame Label */}
                <div style={{
                  position: 'absolute',
                  top: '1rem', left: '1rem',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--text-muted)',
                  fontFamily: 'monospace',
                }}>
                  FRAME {spec.number} / 09
                </div>

              </div>

              {/* Card Content */}
              <div style={{
                padding: '1.25rem 1.25rem 1.5rem',
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}>
                {/* Tag */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{ width: '20px', height: '1px', backgroundColor: spec.accent }} />
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: spec.accent,
                  }}>
                    {spec.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  margin: '0 0 0.75rem',
                  lineHeight: 1.2,
                }}>
                  {spec.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  margin: '0 0 1.25rem',
                }}>
                  {spec.desc}
                </p>

                {/* CTA */}
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: spec.accent,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    letterSpacing: '0.03em',
                    textDecoration: 'none',
                  }}
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .filmstrip-mobile-scroll::-webkit-scrollbar {
          display: none;
        }
        .filmstrip-mobile-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

/* ================================ */
/* DESKTOP: Horizontal Film Strip   */
/* ================================ */
function DesktopFilmStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, specializations.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section style={{ position: 'relative', height: '100vh', backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>

      {/* Section Label */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30,
        textAlign: 'center'
      }}>
        <div className="text-eyebrow" style={{ marginBottom: '0.5rem', fontSize: '1rem', letterSpacing: '0.2em', color: '#ffffff', textShadow: '0 0 20px rgba(59,130,246,0.4)' }}>Clinical Specialties</div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', letterSpacing: '0.03em', fontWeight: 500 }}>
          Explore our {specializations.length} specializations
        </p>
      </div>

      {/* Navigation Arrows */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 3rem',
        zIndex: 40,
        pointerEvents: 'none'
      }}>
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          style={{
            pointerEvents: 'auto',
            opacity: activeIndex === 0 ? 0 : 1,
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(96,165,250,0.3)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: activeIndex === 0 ? 'default' : 'pointer',
            boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
            transition: 'all 0.3s ease'
          }}
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === specializations.length - 1}
          style={{
            pointerEvents: 'auto',
            opacity: activeIndex === specializations.length - 1 ? 0 : 1,
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(96,165,250,0.3)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: activeIndex === specializations.length - 1 ? 'default' : 'pointer',
            boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
            transition: 'all 0.3s ease'
          }}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Film Strip Progress Dots */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 30
      }}>
        {specializations.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === activeIndex ? '28px' : '6px',
              backgroundColor: i === activeIndex ? '#DEC898' : 'rgba(255,255,255,0.25)',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ height: '6px', borderRadius: '99px' }}
          />
        ))}
      </div>

      {/* Horizontal Track */}
      <motion.div
        animate={{ x: `-${activeIndex * 100}vw` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          display: 'flex',
          width: `${specializations.length * 100}vw`,
          height: '100%',
        }}
      >
        {specializations.map((spec, i) => (
          <div
            key={i}
            style={{
              width: '100vw',
              height: '100vh',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Cinematic Background Image */}
            <img
              src={spec.image}
              alt={spec.title}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.75) saturate(0.8)',
              }}
            />

            {/* Light gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'var(--card-image-overlay-soft)',
            }} />

            {/* Frame Number */}
            <div style={{
              position: 'absolute',
              top: '64px',
              left: '48px',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.2)',
              fontFamily: 'monospace',
              zIndex: 10,
            }}>
              FRAME {spec.number} / {specializations.length.toString().padStart(2, '0')}
            </div>

            {/* Content */}
            <div style={{
              position: 'absolute',
              inset: '48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: 'clamp(1.5rem, 8vw, 8rem)',
              paddingRight: 'clamp(1.5rem, 8vw, 8rem)',
              zIndex: 10,
            }}>

              {/* Giant Frame Number */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={activeIndex === i ? { opacity: 0.18, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{
                  fontSize: 'clamp(5rem, 18vw, 14rem)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'transparent',
                  WebkitTextStroke: `1px ${spec.accent}`,
                  lineHeight: 0.85,
                  marginBottom: '1.5rem',
                  position: 'absolute',
                  right: 'clamp(1rem, 6vw, 6rem)',
                  bottom: '80px',
                  userSelect: 'none',
                }}
              >
                {spec.number}
              </motion.div>

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={activeIndex === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ width: '32px', height: '1px', backgroundColor: spec.accent }} />
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: spec.accent,
                }}>
                  {spec.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={activeIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  margin: 0,
                  marginBottom: '2rem',
                  maxWidth: '700px',
                }}
              >
                {spec.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={activeIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  marginBottom: '3rem',
                }}
              >
                {spec.desc}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={activeIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: spec.accent,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    borderBottom: `1px solid ${spec.accent}44`,
                    paddingBottom: '4px',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ==================== */
/* MAIN EXPORT          */
/* ==================== */
export default function SpecializationsFilmStrip() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile ? <MobileFilmStrip /> : <DesktopFilmStrip />;
}
