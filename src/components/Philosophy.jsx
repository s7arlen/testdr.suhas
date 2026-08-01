import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Card Data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    number: '01',
    tag: 'Minimally Invasive',
    title: 'Minimally Invasive Surgery',
    description:
      'Delivering advanced laparoscopic procedures that minimize pain, reduce recovery time, and significantly improve patient comfort throughout every step of the healing journey.',
    isNavy: false,
  },
  {
    number: '02',
    tag: 'Surgical Innovation',
    title: 'Advanced Surgical Innovation',
    description:
      'Combining cutting-edge technology with over a decade of surgical expertise to perform precise, safe, and effective procedures with consistently exceptional outcomes.',
    isNavy: true,
  },
  {
    number: '03',
    tag: 'Clinical Expertise',
    title: 'Comprehensive Clinical Expertise',
    description:
      'Offering specialized surgical care across gastrointestinal, abdominal, and hernia-related conditions with an unwavering commitment to excellence at every stage.',
    isNavy: false,
  },
  {
    number: '04',
    tag: 'Patient First',
    title: 'Patient-First Philosophy',
    description:
      'Every treatment plan is tailored to the individual — ensuring compassionate care, complete transparency, and sustained support throughout the recovery journey.',
    isNavy: true,
  },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function CardIcon({ index, color }) {
  switch (index) {
    case 0:
      return (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="2">
          <circle cx="26" cy="26" r="22" strokeDasharray="4 3" opacity="0.35" />
          <circle cx="26" cy="26" r="12" />
          <circle cx="26" cy="26" r="4" fill={color} />
          <line x1="26" y1="0" x2="26" y2="10" strokeLinecap="round" />
          <line x1="26" y1="42" x2="26" y2="52" strokeLinecap="round" />
          <line x1="0" y1="26" x2="10" y2="26" strokeLinecap="round" />
          <line x1="42" y1="26" x2="52" y2="26" strokeLinecap="round" />
        </svg>
      );
    case 1:
      return (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="2">
          <ellipse cx="26" cy="26" rx="23" ry="8.5" transform="rotate(30 26 26)" />
          <ellipse cx="26" cy="26" rx="23" ry="8.5" transform="rotate(-30 26 26)" />
          <ellipse cx="26" cy="26" rx="23" ry="8.5" transform="rotate(90 26 26)" opacity="0.38" />
          <circle cx="26" cy="26" r="5" fill={color} />
        </svg>
      );
    case 2:
      return (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="2">
          <path d="M10 6c10 0 13-2 16-2s6 2 16 2c0 14-3 32-16 44C13 38 10 20 10 6z" strokeLinejoin="round" />
          <path d="M26 17v18M17 26h18" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 3:
      return (
        <svg width="44" height="44" viewBox="0 0 52 52" fill="none" stroke={color} strokeWidth="2">
          <path d="M10 21c0-10 8-15 16-6 8-9 16-4 16 6 0 14-16 26-16 26S10 35 10 21z" strokeLinejoin="round" />
          <path d="M14 25h5l3.5-9 3.5 18 3.5-11 3 2H42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Philosophy() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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

  const sectionBg = isDark
    ? 'linear-gradient(160deg, var(--bg-primary) 0%, var(--bg-alternate) 100%)'
    : 'linear-gradient(160deg, #F8FBFF 0%, #F1F7FD 100%)';
  const badgeColor = isDark ? 'var(--secondary-blue)' : '#0E2348';
  const badgeBg = isDark ? 'rgba(90,174,255,0.10)' : 'rgba(45,107,255,0.07)';
  const badgeBorder = isDark ? 'rgba(90,174,255,0.20)' : 'rgba(45,107,255,0.12)';

  return (
    <section style={{ background: sectionBg, padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Ornaments */}
      <div
        style={{
          position: 'absolute', inset: 0, opacity: isDark ? 0.04 : 0.025, pointerEvents: 'none', zIndex: 0,
          backgroundImage: isDark
            ? `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 104L30 87L0 104V70L30 53L60 70V104ZM30 51L0 34V0L30 17L60 0V34L30 51Z' fill='%23FFFFFF' fill-opacity='0.3' fill-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 104L30 87L0 104V70L30 53L60 70V104ZM30 51L0 34V0L30 17L60 0V34L30 51Z' fill='%232D6BFF' fill-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      />
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: isDark
            ? 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(45,107,255,0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(45,107,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: badgeBg, color: badgeColor,
              border: `1px solid ${badgeBorder}`, borderRadius: '999px',
              padding: '0.4rem 1rem', fontSize: '0.68rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)', marginBottom: '1rem',
            }}
          >
            OUR PHILOSOPHY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em',
              color: 'var(--text-primary)', margin: '0 0 0.85rem',
            }}
          >
            Surgical Excellence <br className="mobile-only" />
            <span className="text-gradient">Guided by Compassion.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
              color: 'var(--text-secondary)', lineHeight: 1.72, margin: '0 auto',
              maxWidth: '600px',
            }}
          >
            Every surgical decision is driven by precision, innovation, and personalized patient care. We treat the person, not just the condition.
          </motion.p>
        </div>

        {/* Animated Expanding Accordion */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '16px',
            width: '100%',
            height: isMobile ? 'auto' : '550px',
          }}
        >
          {CARDS.map((card, index) => {
            const isActive = activeIdx === index;

            // Colors based on card theme and global theme
            const accentColor = card.isNavy ? '#5AAEFF' : '#2D6BFF';
            const titleColor = card.isNavy ? '#FFFFFF' : (isDark ? '#EEF3FF' : '#0E2348');
            const descColor = card.isNavy ? 'rgba(210,228,249,0.88)' : (isDark ? 'rgba(175,195,225,0.82)' : '#58738F');
            const bgColor = card.isNavy ? (isDark ? '#091524' : '#0E2348') : (isDark ? '#0F1F35' : '#FFFFFF');
            const borderColor = card.isNavy
              ? (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)')
              : (isDark ? 'rgba(90,174,255,0.12)' : 'rgba(45,107,255,0.07)');
            const tagBg = card.isNavy ? 'rgba(90,174,255,0.12)' : 'rgba(45,107,255,0.07)';
            const tagBorder = card.isNavy ? 'rgba(90,174,255,0.22)' : 'rgba(45,107,255,0.15)';

            // Premium drop shadow & glare
            const defaultShadow = isDark 
              ? '0 20px 40px rgba(0,0,0,0.4)' 
              : '0 20px 50px rgba(30,80,180,0.08)';
            const hoverShadow = isDark
              ? '0 30px 60px rgba(0,0,0,0.6)'
              : '0 30px 60px rgba(30,80,180,0.12)';
            const innerGlare = card.isNavy 
              ? 'inset 0 1px 1px rgba(255,255,255,0.15)' 
              : 'inset 0 1px 1px rgba(255,255,255,0.5)';

            // Desktop proportions: Active = 3 parts, Inactive = 1 part
            // Mobile proportions: Active height expands smoothly
            const desktopFlex = isActive ? 3.5 : 1;
            const mobileHeight = isActive ? 'auto' : '88px'; // Inactive mobile height just shows title

            return (
              <motion.div
                key={card.number}
                layout
                onClick={() => setActiveIdx(index)}
                onMouseEnter={() => !isMobile && setActiveIdx(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, boxShadow: hoverShadow }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  layout: { duration: 0.6, type: 'spring', bounce: 0.2 },
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { duration: 0.3 },
                  boxShadow: { duration: 0.3 }
                }}
                style={{
                  flex: isMobile ? 'none' : desktopFlex,
                  height: isMobile ? mobileHeight : '100%',
                  borderRadius: '24px',
                  backgroundColor: bgColor,
                  border: `1px solid ${borderColor}`,
                  boxShadow: `${defaultShadow}, ${innerGlare}`,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                }}
              >
                {/* Background Glow */}
                {isActive && (
                  <motion.div
                    layoutId={`active-glow-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: card.isNavy
                        ? 'radial-gradient(circle at 80% 20%, rgba(90,174,255,0.15) 0%, transparent 60%)'
                        : 'radial-gradient(circle at 80% 20%, rgba(45,107,255,0.08) 0%, transparent 60%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                {/* Inactive Content (Title & Icon) */}
                <AnimatePresence mode="popLayout">
                  {!isActive && (
                    <motion.div
                      key={`inactive-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: isMobile ? '1.5rem' : '2.5rem',
                        display: 'flex',
                        flexDirection: isMobile ? 'row' : 'column',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'space-between' : 'flex-start',
                        width: '100%',
                        height: '100%',
                        flexShrink: 0,
                        zIndex: 2,
                      }}
                    >
                      <motion.div layoutId={`icon-${index}`} style={{ marginBottom: isMobile ? '0' : '2rem', color: accentColor }}>
                        <CardIcon index={index} color={accentColor} />
                      </motion.div>

                      <motion.h3
                        layoutId={`title-${index}`}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: isMobile ? '1.15rem' : '1.05rem',
                          fontWeight: 600,
                          color: titleColor,
                          margin: 0,
                          writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                          transform: isMobile ? 'none' : 'rotate(180deg)',
                          flex: isMobile ? 1 : 'none',
                          marginLeft: isMobile ? '1rem' : 0,
                          lineHeight: 1.4,
                          letterSpacing: isMobile ? '0.02em' : '0.12em',
                          textTransform: isMobile ? 'none' : 'uppercase',
                          whiteSpace: isMobile ? 'normal' : 'nowrap',
                          opacity: 0.8,
                        }}
                      >
                        {card.title}
                      </motion.h3>

                      {isMobile && (
                        <motion.div
                          animate={{ rotate: 0 }}
                          style={{ color: titleColor, opacity: 0.5, marginLeft: '1rem' }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded Content */}
                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.div
                      key={`active-${index}`}
                      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? -20 : 0 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? -20 : 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      style={{
                        padding: isMobile ? '1.5rem' : '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        zIndex: 1,
                        flex: 1,
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <motion.div layoutId={`icon-${index}`} style={{ color: accentColor }}>
                          <CardIcon index={index} color={accentColor} />
                        </motion.div>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.35rem 0.9rem',
                            borderRadius: '999px',
                            background: tagBg,
                            border: `1px solid ${tagBorder}`,
                            color: accentColor,
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            fontFamily: 'var(--font-sans)',
                          }}
                        >
                          {card.tag}
                        </div>
                      </div>

                      <motion.h3
                        layoutId={`title-${index}`}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                          fontWeight: 700,
                          lineHeight: 1.15,
                          letterSpacing: '-0.02em',
                          color: titleColor,
                          margin: '0 0 1.25rem',
                        }}
                      >
                        {card.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.05rem',
                          lineHeight: 1.75,
                          color: descColor,
                          margin: 0,
                          maxWidth: '92%',
                        }}
                      >
                        {card.description}
                      </motion.p>

                      {/* Large Watermark Number */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 0.08, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                          position: 'absolute',
                          right: '2rem',
                          bottom: '-2rem',
                          fontFamily: 'var(--font-display)',
                          fontSize: '12rem',
                          fontWeight: 800,
                          lineHeight: 1,
                          color: titleColor,
                          userSelect: 'none',
                          pointerEvents: 'none',
                          letterSpacing: '-0.05em',
                        }}
                      >
                        {card.number}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
