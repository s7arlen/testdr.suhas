import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────── */
/*  DATA                                                           */
/* ─────────────────────────────────────────────────────────────── */
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    title: 'Advanced Operating Theatre',
    label: 'State-of-the-Art Surgical Suite',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
    title: 'Clinical Consultation',
    label: 'Personalized Care & Diagnostics',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    title: 'Minimal Access Surgery',
    label: 'Precision Laparoscopic Tools',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    title: 'Interdisciplinary Team',
    label: 'Collaborative Surgical Care',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    title: 'Diagnostic Excellence',
    label: 'High-Resolution Medical Imaging',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    title: 'Recovery & Care Unit',
    label: 'Monitored Post-Op Environment',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1200&q=80',
    title: 'Endo-Surgery Facility',
    label: 'Advanced Laparoscopic Tower',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    title: 'Clinical Research',
    label: 'Evidence-Based Medicine',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80',
    title: 'Patient Care Journey',
    label: 'Compassionate Follow-Up',
    span: 'normal',
  },
];

/* ─────────────────────────────────────────────────────────────── */
/*  LIGHTBOX                                                        */
/* ─────────────────────────────────────────────────────────────── */
function Lightbox({ img, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {img && (
        <motion.div
          key="lb-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(3,3,7,0.93)',
            backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <motion.div
            key="lb-card"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative', maxWidth: '900px', width: '100%',
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 60px 120px rgba(0,0,0,0.7)',
            }}
          >
            <img src={img.src} alt={img.title}
              style={{ width: '100%', display: 'block', maxHeight: '85vh', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
            }}>
              <div style={{ color: 'var(--accent-gold,#c9a96e)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                {img.label}
              </div>
              <div style={{ color: '#fff', fontFamily: 'var(--font-display,Georgia,serif)', fontSize: '1.4rem', fontWeight: 500 }}>
                {img.title}
              </div>
            </div>
            <button onClick={onClose} aria-label="Close lightbox" style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%', width: '40px', height: '40px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', backdropFilter: 'blur(8px)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  DESKTOP – MAGNETIC PULL GRID                                   */
/* ─────────────────────────────────────────────────────────────── */
const STRENGTH = 18;
const LIFT     = 28;

function MagneticCard({ img, index, onClick }) {
  const cardRef = useRef(null);
  const rafRef  = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50, lifted: false });

  const applyTilt = useCallback((clientX, clientY) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const px = (clientX - left) / width;
    const py = (clientY - top)  / height;
    setTilt({ rx: (py - 0.5) * -STRENGTH * 2, ry: (px - 0.5) * STRENGTH * 2, mx: px * 100, my: py * 100, lifted: true });
  }, []);

  const reset = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50, lifted: false });
  }, []);

  const onMouseMove = (e) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => applyTilt(e.clientX, e.clientY));
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const gridColSpan = img.span === 'wide' ? 2 : 1;
  const gridRowSpan = img.span === 'tall' ? 2 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ gridColumn: `span ${gridColSpan}`, gridRow: `span ${gridRowSpan}`, minHeight: img.span === 'tall' ? '480px' : '260px' }}
    >
      <div style={{ width: '100%', height: '100%', perspective: '900px', cursor: 'pointer' }}
        onMouseMove={onMouseMove} onMouseLeave={reset} onClick={() => onClick(img)}>
        <div ref={cardRef} style={{
          width: '100%', height: '100%', borderRadius: '28px', overflow: 'hidden',
          position: 'relative', willChange: 'transform', transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${tilt.lifted ? LIFT : 0}px)`,
          transition: tilt.lifted ? 'transform 0.08s linear' : 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
          boxShadow: tilt.lifted ? '0 40px 80px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.06)' : '0 8px 32px rgba(0,0,0,0.35)',
        }}>
          <img src={img.src} alt={img.title} draggable={false} style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: tilt.lifted ? 'scale(1.06)' : 'scale(1)',
            transition: tilt.lifted ? 'transform 0.08s linear' : 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
            userSelect: 'none', pointerEvents: 'none',
          }} />
          {/* Glare */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', mixBlendMode: 'screen',
            background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, rgba(255,255,255,0.18) 0%, transparent 65%)`,
            opacity: tilt.lifted ? 1 : 0,
            transition: tilt.lifted ? 'opacity 0.08s linear' : 'opacity 0.4s ease',
          }} />
          {/* Caption */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(5,5,10,0.88) 0%, rgba(5,5,10,0.2) 45%, transparent 70%)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: '1.75rem', opacity: tilt.lifted ? 1 : 0.72, transition: 'opacity 0.3s ease',
          }}>
            <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold,#c9a96e)', marginBottom: '0.4rem' }}>
              {img.label}
            </span>
            <span style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontWeight: 500, fontSize: '1.15rem', color: '#fff', lineHeight: 1.25 }}>
              {img.title}
            </span>
            <div style={{ marginTop: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: tilt.lifted ? 1 : 0, transform: tilt.lifted ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold,#c9a96e)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.08em' }}>View full</span>
            </div>
          </div>
          {/* Gold border glow */}
          <div style={{
            position: 'absolute', inset: -1, borderRadius: '28px', pointerEvents: 'none',
            border: `1px solid rgba(201,169,110,${tilt.lifted ? 0.35 : 0})`,
            transition: 'border-color 0.3s ease',
          }} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  MOBILE – MOMENTUM SWIPE RIVER                                  */
/* ─────────────────────────────────────────────────────────────── */
const CARD_W   = 260;   // px — card width
const CARD_GAP = 16;    // px — gap between cards
const STRIDE   = CARD_W + CARD_GAP;
const FRICTION = 0.88;  // momentum decay per frame (0–1, higher = slides longer)
const SNAP_MS  = 420;   // snap-to-center animation duration

// Tripled images so we always have cards on both sides for infinite feel
const RIVER_IMGS = [...galleryImages, ...galleryImages, ...galleryImages];
const CLONE_COUNT = galleryImages.length; // how many images in one set

function MomentumRiver({ onCardClick }) {
  const trackRef   = useRef(null);
  const offsetRef  = useRef(0);          // current x-offset (px, negative = scrolled right)
  const velRef     = useRef(0);          // current velocity
  const rafRef     = useRef(null);
  const lastXRef   = useRef(null);
  const isDragRef  = useRef(false);
  const snapTimRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(CLONE_COUNT); // start at middle set
  const [renderOffset, setRenderOffset] = useState(0);

  const totalW = RIVER_IMGS.length * STRIDE;
  const setW   = galleryImages.length * STRIDE;

  /* Apply CSS transform */
  const applyTransform = useCallback((x) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${x}px)`;
    }
  }, []);

  /* Compute which card is centred */
  const getCenteredIdx = useCallback((x) => {
    const viewCentre = typeof window !== 'undefined' ? window.innerWidth / 2 : 200;
    const best = RIVER_IMGS.reduce((acc, _, i) => {
      const cardCentre = i * STRIDE + CARD_W / 2 + x;
      const dist = Math.abs(cardCentre - viewCentre);
      return dist < acc.dist ? { idx: i, dist } : acc;
    }, { idx: 0, dist: Infinity });
    return best.idx;
  }, []);

  /* Snap to nearest card */
  const snapTo = useCallback((idx) => {
    clearTimeout(snapTimRef.current);
    const viewCentre = typeof window !== 'undefined' ? window.innerWidth / 2 : 200;
    const targetX = viewCentre - (idx * STRIDE + CARD_W / 2);
    const startX  = offsetRef.current;
    const startT  = performance.now();

    const ease = (t) => 1 - Math.pow(1 - t, 4); // ease-out-quart

    const tick = (now) => {
      const elapsed = now - startT;
      const p = Math.min(elapsed / SNAP_MS, 1);
      const x = startX + (targetX - startX) * ease(p);
      offsetRef.current = x;
      applyTransform(x);
      setActiveIdx(getCenteredIdx(x));

      if (p < 1) { rafRef.current = requestAnimationFrame(tick); }
      else {
        offsetRef.current = targetX;
        applyTransform(targetX);
        // Infinite loop: re-centre into the middle set silently
        wrapOffset(targetX, idx);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [applyTransform, getCenteredIdx]);

  /* Silently jump to equivalent position in middle set */
  const wrapOffset = useCallback((x, snappedIdx) => {
    const viewCentre = typeof window !== 'undefined' ? window.innerWidth / 2 : 200;
    let newIdx = snappedIdx;
    // If we've drifted into first or last clone set, jump
    if (snappedIdx < CLONE_COUNT) {
      newIdx = snappedIdx + CLONE_COUNT;
    } else if (snappedIdx >= CLONE_COUNT * 2) {
      newIdx = snappedIdx - CLONE_COUNT;
    }
    if (newIdx !== snappedIdx) {
      const newX = viewCentre - (newIdx * STRIDE + CARD_W / 2);
      offsetRef.current = newX;
      applyTransform(newX);
      setActiveIdx(newIdx);
    }
  }, [applyTransform]);

  /* Momentum animation loop */
  const runMomentum = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const tick = () => {
      velRef.current *= FRICTION;
      offsetRef.current += velRef.current;
      applyTransform(offsetRef.current);
      const cIdx = getCenteredIdx(offsetRef.current);
      setActiveIdx(cIdx);

      if (Math.abs(velRef.current) > 0.5) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Snap to nearest
        snapTo(getCenteredIdx(offsetRef.current));
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [applyTransform, getCenteredIdx, snapTo]);

  /* Touch handlers */
  const onTouchStart = useCallback((e) => {
    cancelAnimationFrame(rafRef.current);
    isDragRef.current = true;
    lastXRef.current  = e.touches[0].clientX;
    velRef.current    = 0;
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDragRef.current) return;
    e.preventDefault();
    const dx = e.touches[0].clientX - lastXRef.current;
    lastXRef.current  = e.touches[0].clientX;
    velRef.current    = dx;
    offsetRef.current += dx;
    applyTransform(offsetRef.current);
    setActiveIdx(getCenteredIdx(offsetRef.current));
  }, [applyTransform, getCenteredIdx]);

  const onTouchEnd = useCallback(() => {
    isDragRef.current = false;
    runMomentum();
  }, [runMomentum]);

  /* Mouse drag (desktop fallback) */
  const onMouseDown = useCallback((e) => {
    cancelAnimationFrame(rafRef.current);
    isDragRef.current = true;
    lastXRef.current  = e.clientX;
    velRef.current    = 0;
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current  = e.clientX;
    velRef.current    = dx;
    offsetRef.current += dx;
    applyTransform(offsetRef.current);
    setActiveIdx(getCenteredIdx(offsetRef.current));
  }, [applyTransform, getCenteredIdx]);

  const onMouseUp = useCallback(() => {
    if (!isDragRef.current) return;
    isDragRef.current = false;
    runMomentum();
  }, [runMomentum]);

  /* Init — centre on the middle set */
  useEffect(() => {
    const viewCentre = window.innerWidth / 2;
    const startIdx   = CLONE_COUNT + Math.floor(galleryImages.length / 2);
    const initX      = viewCentre - (startIdx * STRIDE + CARD_W / 2);
    offsetRef.current = initX;
    applyTransform(initX);
    setActiveIdx(startIdx);

    const handleMouseUp = () => { if (isDragRef.current) onMouseUp(); };
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [applyTransform, onMouseUp]);

  /* Dot indicator (maps into 0..N-1) */
  const dotIdx = activeIdx % galleryImages.length;

  return (
    <div style={{ position: 'relative', overflow: 'hidden', userSelect: 'none' }}>

      {/* Faded edge masks */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 18%, transparent 82%, var(--bg-primary) 100%)',
      }} />

      {/* Track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: `${CARD_GAP}px`,
          willChange: 'transform',
          cursor: isDragRef.current ? 'grabbing' : 'grab',
          paddingTop: '16px',
          paddingBottom: '28px',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      >
        {RIVER_IMGS.map((img, i) => {
          const isActive = i === activeIdx;
          return (
            <div
              key={i}
              onClick={() => { if (Math.abs(velRef.current) < 3) onCardClick(img); }}
              style={{
                flexShrink: 0,
                width: `${CARD_W}px`,
                height: isActive ? '360px' : '300px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'height 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, filter 0.4s ease',
                boxShadow: isActive
                  ? '0 30px 70px rgba(0,0,0,0.6), 0 0 0 1.5px rgba(201,169,110,0.4)'
                  : '0 6px 24px rgba(0,0,0,0.35)',
                filter: isActive ? 'brightness(1)' : 'brightness(0.55)',
                cursor: 'pointer',
                alignSelf: 'center',
              }}
            >
              <img src={img.src} alt={img.title} draggable={false} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: isActive ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
                pointerEvents: 'none', userSelect: 'none',
              }} />

              {/* Spotlight glow on active */}
              {isActive && (
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.12) 0%, transparent 70%)',
                  mixBlendMode: 'screen',
                }} />
              )}

              {/* Caption overlay — only on active */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(3,3,10,0.92) 0%, transparent 100%)',
                padding: '1.4rem 1.2rem 1.1rem',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                pointerEvents: 'none',
              }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-gold,#c9a96e)', marginBottom: '0.3rem' }}>
                  {img.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontWeight: 500, fontSize: '1rem', color: '#fff', lineHeight: 1.3 }}>
                  {img.title}
                </div>
                {/* Tap to view hint */}
                <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold,#c9a96e)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.08em' }}>Tap to expand</span>
                </div>
              </div>

              {/* Gold top-left corner accent */}
              {isActive && (
                <div style={{
                  position: 'absolute', top: '12px', left: '12px', pointerEvents: 'none',
                  width: '20px', height: '20px',
                  borderTop: '2px solid var(--accent-gold,#c9a96e)',
                  borderLeft: '2px solid var(--accent-gold,#c9a96e)',
                  borderRadius: '3px 0 0 0',
                  opacity: 0.8,
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', paddingBottom: '4px', position: 'relative', zIndex: 3 }}>
        {galleryImages.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => snapTo(CLONE_COUNT + i)}
            style={{
              width: i === dotIdx ? '22px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === dotIdx ? 'var(--accent-gold,#c9a96e)' : 'rgba(255,255,255,0.25)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Swipe hint — fades after first interaction */}
      <div className="swipe-hint" style={{
        textAlign: 'center', marginTop: '1rem',
        fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)',
        letterSpacing: '0.08em', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Swipe or fling to explore
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: 'scaleX(-1)' }}>
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  ROOT EXPORT                                                    */
/* ─────────────────────────────────────────────────────────────── */
export default function Gallery() {
  const [active, setActive]   = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section id="gallery" style={{
      padding: 'clamp(5rem, 10vw, 9rem) 0',
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '700px', height: '700px', borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 4.5rem)', padding: '0 1.5rem' }}
        >
          <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Clinic & Care</div>
          <h2 className="h-2">
            A visual narrative of<br />
            <span className="text-gradient">technology and calm.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1.2rem', letterSpacing: '0.04em' }}>
            {isMobile ? 'Swipe & fling to explore' : 'Hover — or press your finger — to feel the pull'}
          </p>
        </motion.div>

        {/* ── MOBILE: Momentum Swipe River ── */}
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MomentumRiver onCardClick={setActive} />
          </motion.div>
        ) : (
          /* ── DESKTOP: Magnetic Pull Grid ── */
          <div className="container">
            <div className="mag-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '260px',
              gap: '1.25rem',
            }}>
              {galleryImages.map((img, i) => (
                <MagneticCard key={i} img={img} index={i} onClick={setActive} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Global style */}
      <style>{`
        .swipe-hint { animation: fadeHint 6s ease forwards; }
        @keyframes fadeHint {
          0%   { opacity: 1; }
          60%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      {/* Lightbox */}
      <Lightbox img={active} onClose={() => setActive(null)} />
    </section>
  );
}
