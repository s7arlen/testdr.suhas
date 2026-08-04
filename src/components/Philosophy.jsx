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
    bgImage: './images/minimally_invasive.jpg',
  },
  {
    number: '02',
    tag: 'Surgical Innovation',
    title: 'Advanced Surgical Innovation',
    description:
      'Combining cutting-edge technology with over a decade of surgical expertise to perform precise, safe, and effective procedures with consistently exceptional outcomes.',
    isNavy: true,
    bgImage: './images/surgical_innovation.jpg',
  },
  {
    number: '03',
    tag: 'Clinical Expertise',
    title: 'Comprehensive Clinical Expertise',
    description:
      'Offering specialized surgical care across gastrointestinal, abdominal, and hernia-related conditions with an unwavering commitment to excellence at every stage.',
    isNavy: false,
    bgImage: './images/clinical_expertise.jpg',
  },
  {
    number: '04',
    tag: 'Patient First',
    title: 'Patient-First Philosophy',
    description:
      'Every treatment plan is tailored to the individual — ensuring compassionate care, complete transparency, and sustained support throughout the recovery journey.',
    isNavy: true,
    bgImage: './images/doctor_patient_care.jpg',
  },
];

// ─── Premium SVG Icons ────────────────────────────────────────────────────────
function CardIcon({ index, color, isNavy }) {
  const primaryGradientId = `icon-primary-grad-${index}`;
  const glowGradientId = `icon-glow-grad-${index}`;
  const accentColor = color || (isNavy ? '#5AAEFF' : '#2D6BFF');
  const secondaryColor = isNavy ? '#80C2FF' : '#00C6FF';

  switch (index) {
    case 0:
      // Minimally Invasive Surgery (Precision Reticle & Laser Focus Core)
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={primaryGradientId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} />
              <stop offset="1" stopColor={secondaryColor} />
            </linearGradient>
            <radialGradient id={glowGradientId} cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} stopOpacity="0.3" />
              <stop offset="1" stopColor={accentColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="24" cy="24" r="20" fill={`url(#${glowGradientId})`} />

          {/* Outer Precision Reticle Ring */}
          <circle cx="24" cy="24" r="19" stroke={`url(#${primaryGradientId})`} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.45" />
          <circle cx="24" cy="24" r="14" stroke={`url(#${primaryGradientId})`} strokeWidth="1.5" opacity="0.85" />
          
          {/* Corner Precision Target Brackets */}
          <path d="M14 10H10V14" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 10H38V14" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 38H10V34" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 38H38V34" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Precision Crosshairs */}
          <line x1="24" y1="4" x2="24" y2="10" stroke={`url(#${primaryGradientId})`} strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="38" x2="24" y2="44" stroke={`url(#${primaryGradientId})`} strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="24" x2="10" y2="24" stroke={`url(#${primaryGradientId})`} strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="24" x2="44" y2="24" stroke={`url(#${primaryGradientId})`} strokeWidth="2" strokeLinecap="round" />

          {/* Core Lens & Laser Point */}
          <circle cx="24" cy="24" r="6" fill={accentColor} fillOpacity="0.15" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" />
          <circle cx="24" cy="24" r="2.5" fill={`url(#${primaryGradientId})`} />
        </svg>
      );

    case 1:
      // Advanced Surgical Innovation (Quantum Atomic Tech & Innovation Star Core)
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={primaryGradientId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} />
              <stop offset="1" stopColor={secondaryColor} />
            </linearGradient>
            <radialGradient id={glowGradientId} cx="24" cy="24" r="22" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} stopOpacity="0.35" />
              <stop offset="1" stopColor={accentColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Glowing Aura */}
          <circle cx="24" cy="24" r="22" fill={`url(#${glowGradientId})`} />

          {/* Tech Orbits */}
          <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(35 24 24)" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
          <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(-35 24 24)" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
          <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(90 24 24)" stroke={`url(#${primaryGradientId})`} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />

          {/* Innovation Sparkle Node at Center */}
          <path d="M24 15L25.8 22.2L33 24L25.8 25.8L24 33L22.2 25.8L15 24L22.2 22.2L24 15Z" fill={`url(#${primaryGradientId})`} />
          <circle cx="24" cy="24" r="2.8" fill="#FFFFFF" opacity="0.95" />
        </svg>
      );

    case 2:
      // Comprehensive Clinical Expertise (Surgical Shield of Mastery & Emblem)
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={primaryGradientId} x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} />
              <stop offset="1" stopColor={secondaryColor} />
            </linearGradient>
            <radialGradient id={glowGradientId} cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} stopOpacity="0.3" />
              <stop offset="1" stopColor={accentColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft Shield Glow */}
          <path d="M24 4L9 9.5V21C9 31.8 15.6 40.5 24 44C32.4 40.5 39 31.8 39 21V9.5L24 4Z" fill={`url(#${glowGradientId})`} />

          {/* Outer Shield Outline */}
          <path d="M24 5.5L10.5 10.5V20.5C10.5 30.2 16.4 38 24 41.2C31.6 38 37.5 30.2 37.5 20.5V10.5L24 5.5Z" stroke={`url(#${primaryGradientId})`} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M24 9.5L14 13.5V20.5C14 27.8 18.5 33.8 24 36.3C29.5 33.8 34 27.8 34 20.5V13.5L24 9.5Z" stroke={`url(#${primaryGradientId})`} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 2" />

          {/* Medical Cross + Checkmark Emblem */}
          <path d="M24 15V27M18 21H30" stroke={`url(#${primaryGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M17 23.5L21.5 28L31 18" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        </svg>
      );

    case 3:
      // Patient-First Philosophy (Compassionate Heart & Vital Lifeline Wave)
      return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={primaryGradientId} x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} />
              <stop offset="1" stopColor={secondaryColor} />
            </linearGradient>
            <radialGradient id={glowGradientId} cx="24" cy="22" r="18" gradientUnits="userSpaceOnUse">
              <stop stopColor={accentColor} stopOpacity="0.35" />
              <stop offset="1" stopColor={accentColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Glow Backdrop */}
          <path d="M24 40S7 27 7 16C7 9.5 12 5 18 5C21.8 5 24 7.2 24 7.2C24 7.2 26.2 5 30 5C36 5 41 9.5 41 16C41 27 24 40 24 40Z" fill={`url(#${glowGradientId})`} />

          {/* Outer Premium Heart Path */}
          <path d="M24 39.5S7.5 26.8 7.5 16.2C7.5 10 12.2 5.5 18 5.5C21.6 5.5 24 7.8 24 7.8C24 7.8 26.4 5.5 30 5.5C35.8 5.5 40.5 10 40.5 16.2C40.5 26.8 24 39.5 24 39.5Z" stroke={`url(#${primaryGradientId})`} strokeWidth="2" strokeLinejoin="round" />

          {/* ECG Vital Wave */}
          <path d="M10 20.5H16L19 12L23 29L27 17L30 22H38" stroke={`url(#${primaryGradientId})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Care Sparkle Flare */}
          <circle cx="34" cy="11" r="2.2" fill={`url(#${primaryGradientId})`} />
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
    <section style={{ background: sectionBg, padding: '75px 0', position: 'relative', overflow: 'hidden' }}>
      
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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
              fontFamily: 'var(--font-sans)', marginBottom: '0.85rem',
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
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em',
              color: 'var(--text-primary)', margin: '0 0 0.75rem',
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
              fontFamily: 'var(--font-sans)', fontSize: '0.98rem',
              color: 'var(--text-secondary)', lineHeight: 1.68, margin: '0 auto',
              maxWidth: '580px',
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
            gap: '14px',
            width: '100%',
            height: isMobile ? 'auto' : '430px',
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
              ? '0 16px 32px rgba(0,0,0,0.35)' 
              : '0 14px 40px rgba(30,80,180,0.07)';
            const hoverShadow = isDark
              ? '0 24px 48px rgba(0,0,0,0.5)'
              : '0 20px 48px rgba(30,80,180,0.11)';
            const innerGlare = card.isNavy 
              ? 'inset 0 1px 1px rgba(255,255,255,0.15)' 
              : 'inset 0 1px 1px rgba(255,255,255,0.5)';

            // Desktop proportions: Active = 3 parts, Inactive = 1 part
            // Mobile proportions: Active height expands smoothly
            const desktopFlex = isActive ? 3.5 : 1;
            const mobileHeight = isActive ? 'auto' : '76px'; // Inactive mobile height just shows title

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
                  borderRadius: '20px',
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
                {/* 50% Transparent Background Image Layer */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isActive ? 0.50 : 0.30,
                    transition: 'opacity 0.5s ease',
                    mixBlendMode: card.isNavy ? 'luminosity' : 'multiply',
                    filter: 'contrast(105%) brightness(95%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />
                {/* Overlay Gradient Mask for Text Contrast */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: card.isNavy
                      ? (isDark 
                          ? 'linear-gradient(135deg, rgba(9,21,36,0.90) 0%, rgba(14,35,72,0.82) 100%)' 
                          : 'linear-gradient(135deg, rgba(14,35,72,0.85) 0%, rgba(7,20,42,0.78) 100%)')
                      : (isDark 
                          ? 'linear-gradient(135deg, rgba(15,31,53,0.92) 0%, rgba(20,38,65,0.88) 100%)' 
                          : 'linear-gradient(135deg, rgba(255,255,255,0.90) 0%, rgba(241,247,253,0.84) 100%)'),
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

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
                        padding: isMobile ? '1.25rem' : '1.75rem',
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
                      <motion.div layoutId={`icon-${index}`} style={{ marginBottom: isMobile ? '0' : '1.5rem', color: accentColor }}>
                        <CardIcon index={index} color={accentColor} isNavy={card.isNavy} />
                      </motion.div>

                      <motion.h3
                        layoutId={`title-${index}`}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: isMobile ? '1.05rem' : '0.92rem',
                          fontWeight: 600,
                          color: titleColor,
                          margin: 0,
                          writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                          transform: isMobile ? 'none' : 'rotate(180deg)',
                          flex: isMobile ? 1 : 'none',
                          marginLeft: isMobile ? '1rem' : 0,
                          lineHeight: 1.35,
                          letterSpacing: isMobile ? '0.02em' : '0.1em',
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
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        padding: isMobile ? '1.25rem' : '2.25rem 2.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        zIndex: 1,
                        flex: 1,
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                        <motion.div layoutId={`icon-${index}`} style={{ color: accentColor }}>
                          <CardIcon index={index} color={accentColor} isNavy={card.isNavy} />
                        </motion.div>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '999px',
                            background: tagBg,
                            border: `1px solid ${tagBorder}`,
                            color: accentColor,
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
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
                          fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)',
                          fontWeight: 700,
                          lineHeight: 1.18,
                          letterSpacing: '-0.02em',
                          color: titleColor,
                          margin: '0 0 0.85rem',
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
                          fontSize: '0.98rem',
                          lineHeight: 1.68,
                          color: descColor,
                          margin: 0,
                          maxWidth: '94%',
                        }}
                      >
                        {card.description}
                      </motion.p>

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
