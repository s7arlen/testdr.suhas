import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Scissors, BookOpen, ShieldCheck } from 'lucide-react';

/* ── Refined Credentials Data ─────────────────────────────────────────── */
const credentials = [
  {
    abbr: 'MS (Gen Surg)',
    category: 'PROFESSIONAL QUALIFICATION',
    desc: 'Master of Surgery — General Surgery',
    icon: GraduationCap,
    delay: 0.1,
  },
  {
    abbr: 'FIAGES',
    category: 'BOARD CERTIFIED FELLOWSHIP',
    desc: 'Fellow of Indian Association of Gastrointestinal Endo-Surgeons',
    icon: Award,
    delay: 0.22,
  },
  {
    abbr: 'FALS',
    category: 'ADVANCED SURGICAL FELLOWSHIP',
    desc: 'Fellow of Advanced Laparoscopic Surgery',
    icon: Scissors,
    delay: 0.34,
  },
  {
    abbr: 'Dip Lap',
    category: 'SPECIALIST POSTGRADUATE DIPLOMA',
    desc: 'Diploma in Laparoscopic Surgery',
    icon: BookOpen,
    delay: 0.46,
  },
];

/* ── Main Component ─────────────────────────────────────────────────── */
export default function LuxuryCredentials() {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="lux-credentials-section" ref={sectionRef}>
      {/* ── Background Aesthetics ── */}
      <div className="lux-bg-layer" aria-hidden="true">
        <div className="lux-bg-paper" />
        <div className="lux-bg-radial" />
        <div
          className="lux-spotlight"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
          }}
        />
        
        {/* Low-opacity Caduceus / Medical Blueprint SVG Watermark */}
        <svg className="lux-watermark-svg" viewBox="0 0 800 800" preserveAspectRatio="none">
          {/* Faint Medical Blueprint Grid */}
          <line x1="0" y1="120" x2="800" y2="120" stroke="#C8A96A" strokeOpacity="0.03" strokeWidth="1" />
          <line x1="0" y1="680" x2="800" y2="680" stroke="#C8A96A" strokeOpacity="0.03" strokeWidth="1" />
          
          {/* Corner Watermark Graphic */}
          <g transform="translate(680, 80) scale(0.6)" opacity="0.035" stroke="#C8A96A" fill="none" strokeWidth="1.5">
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" strokeDasharray="2 2" />
            <path d="M100 20 L100 180 M20 100 L180 100" />
            <path d="M60 100 C60 70, 140 70, 140 100 C140 130, 60 130, 60 100" />
            <path d="M60 100 C60 130, 140 130, 140 100 C140 70, 60 70, 60 100" transform="rotate(90 100 100)" />
          </g>
        </svg>
      </div>

      {/* ── Content Container ── */}
      <div className="container lux-container">
        {/* Section Header */}
        <motion.div
          className="lux-heading-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="lux-eyebrow">QUALIFICATIONS</span>
          <h2 className="lux-h2">Professional Credentials</h2>
          <p className="lux-subtitle">
            Recognized qualifications earned through advanced training, dedication, and commitment to surgical excellence.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="lux-cards-grid">
          {credentials.map((cred, i) => {
            const IconComp = cred.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: cred.delay, ease: [0.16, 1, 0.3, 1] }}
                className="lux-card-wrapper"
              >
                <div className="lux-plaque">
                  {/* Subtle top edge light pass */}
                  <div className="lux-shimmer" />

                  {/* Top Circle Icon */}
                  <div className="lux-icon-circle-wrap">
                    <div className="lux-icon-circle">
                      <IconComp size={22} color="#C8A96A" strokeWidth={1.55} className="lux-icon-svg" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="lux-plaque-body">
                    <span className="lux-category-label">{cred.category}</span>
                    <h3 className="lux-abbr">{cred.abbr}</h3>
                    <p className="lux-desc">{cred.desc}</p>
                  </div>

                  {/* Clean Minimal Bottom Area */}
                  <div className="lux-card-footer">
                    <div className="lux-footer-divider" />
                    <div className="lux-qualification-badge">
                      <ShieldCheck size={16} color="#C8A96A" strokeWidth={1.75} />
                      <span>Recognized Medical Qualification</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
