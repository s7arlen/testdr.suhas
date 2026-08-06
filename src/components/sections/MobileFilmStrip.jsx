import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { specializations } from '../../data/specializationsData';

export function MobileFilmStrip() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current && scrollRef.current.children.length > 1) {
        const secondCard = scrollRef.current.children[1];
        const scrollAmount = secondCard.offsetLeft - scrollRef.current.offsetLeft - 16;
        scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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
          ref={scrollRef}
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
                  loading="lazy"
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
