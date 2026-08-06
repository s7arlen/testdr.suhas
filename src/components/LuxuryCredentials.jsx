import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Scissors, BookOpen } from 'lucide-react';

/* ── Credentials Data ─────────────────────────────────────────────────── */
const credentials = [
  {
    abbr: 'MS (Gen Surg)',
    category: 'Professional Qualification',
    desc: 'Master of Surgery — General Surgery',
    icon: GraduationCap,
    delay: 0.08,
  },
  {
    abbr: 'FIAGES',
    category: 'Board Certified Fellowship',
    desc: 'Fellow of Indian Association of Gastrointestinal Endo-Surgeons',
    icon: Award,
    delay: 0.16,
  },
  {
    abbr: 'FALS',
    category: 'Advanced Surgical Fellowship',
    desc: 'Fellow of Advanced Laparoscopic Surgery',
    icon: Scissors,
    delay: 0.24,
  },
  {
    abbr: 'Dip Lap',
    category: 'Postgraduate Diploma',
    desc: 'Diploma in Laparoscopic Surgery',
    icon: BookOpen,
    delay: 0.32,
  },
];

/* ── Main Component ─────────────────────────────────────────────────── */
export default function LuxuryCredentials() {
  const sectionRef = useRef(null);

  return (
    <section className="lux-credentials-section" aria-label="Professional Credentials" ref={sectionRef}>
      {/* ── Minimal Background ── */}
      <div className="lux-bg-layer" aria-hidden="true">
        <div className="lux-bg-radial" />
      </div>

      {/* ── Content ── */}
      <div className="container lux-container">
        {/* Section Header */}
        <motion.div
          className="lux-heading-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="lux-eyebrow">Qualifications</span>
          <h2 className="lux-h2">Professional Credentials</h2>
          <p className="lux-subtitle">
            Advanced training and internationally recognized certifications in surgical excellence.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="lux-cards-grid">
          {credentials.map((cred, i) => {
            const IconComp = cred.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: cred.delay, ease: [0.16, 1, 0.3, 1] }}
                className="lux-card-wrapper"
              >
                <div className="lux-plaque">
                  {/* Icon */}
                  <div className="lux-icon-circle">
                    <IconComp size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="lux-plaque-body">
                    <span className="lux-category-label">{cred.category}</span>
                    <h3 className="lux-abbr">{cred.abbr}</h3>
                    <p className="lux-desc">{cred.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Single disclaimer instead of repeating on every card */}
        <motion.p
          className="lux-disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          All certifications are recognized medical qualifications by their respective international boards.
        </motion.p>
      </div>
    </section>
  );
}
