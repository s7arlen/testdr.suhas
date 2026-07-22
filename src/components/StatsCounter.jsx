import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 11, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Surgeries Performed" },
  { value: 2500, suffix: "+", label: "Patients Treated" },
  { value: 10, suffix: "+", label: "Publications Authored" },
];

const DURATION = 2000;

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target, trigger) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  const animate = useCallback(
    (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeOutExpo(progress);

      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    },
    [target]
  );

  useEffect(() => {
    if (trigger) {
      startTimeRef.current = null;
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, animate]);

  return count;
}

function StatItem({ value, suffix, label, index, inView }) {
  const count = useCountUp(value, inView);

  return (
    <motion.div
      className="stats-counter__item"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="stats-counter__number">
        {count.toLocaleString()}
        <span className="stats-counter__suffix">{suffix}</span>
      </span>
      <span className="stats-counter__label">{label}</span>
    </motion.div>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="stats-section-wrapper" ref={ref}>
      <div className="stats-counter__glow" />
      <div className="stats-counter">
        <div className="stats-counter__highlight" />
        <div className="stats-counter__grid">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        .stats-section-wrapper {
          position: relative;
          max-width: 1120px;
          margin: 0 auto;
          z-index: 10;
          padding: 0 20px; /* safety padding for mobile */
        }

        .stats-counter__glow {
          position: absolute;
          inset: -40px;
          z-index: 0;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
          pointer-events: none;
          filter: blur(40px);
        }

        .stats-counter {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border: 1px solid rgba(255, 255, 255, 0.75);
          border-radius: 36px;
          box-shadow: 
            0 10px 30px rgba(30, 64, 175, 0.05),
            0 40px 100px rgba(30, 64, 175, 0.10),
            inset 0 0 1px rgba(255, 255, 255, 0.8);
          padding: 56px 32px;
          transition: all 350ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .stats-counter:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.65);
          box-shadow: 
            0 15px 40px rgba(30, 64, 175, 0.08),
            0 50px 120px rgba(30, 64, 175, 0.15),
            inset 0 0 1px rgba(255, 255, 255, 0.9);
        }

        .stats-counter__highlight {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.15) 0%, transparent 40%);
          border-radius: 36px;
          pointer-events: none;
        }

        .stats-counter__grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .stats-counter__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 0 24px;
          position: relative;
        }

        /* Elegant Glowing Dividers */
        .stats-counter__item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 56px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(59, 130, 246, 0.35),
            transparent
          );
        }

        .stats-counter__number {
          font-family: var(--font-display, "Playfair Display", serif);
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #7EC3FF 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }

        .stats-counter__suffix {
          font-weight: 800;
          background: linear-gradient(135deg, #7EC3FF 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stats-counter__label {
          font-family: var(--font-sans, "Inter", sans-serif);
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #64748B;
          line-height: 1.4;
          max-width: 160px;
        }

        /* Dark mode support */
        [data-theme='dark'] .stats-counter {
          background: rgba(17, 24, 39, 0.58);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.2),
            0 40px 100px rgba(0, 0, 0, 0.3),
            inset 0 0 1px rgba(255, 255, 255, 0.1);
        }
        [data-theme='dark'] .stats-counter:hover {
          background: rgba(17, 24, 39, 0.65);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.25),
            0 50px 120px rgba(0, 0, 0, 0.4),
            inset 0 0 1px rgba(255, 255, 255, 0.15);
        }
        [data-theme='dark'] .stats-counter__label {
          color: #94A3B8;
        }

        /* ── Mobile 2×2 grid ── */
        @media (max-width: 1023px) {
          .stats-counter {
            padding: 40px 20px;
            border-radius: 28px;
          }

          .stats-counter__grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 40px;
          }

          /* Hide vertical dividers on mobile */
          .stats-counter__item::after {
            display: none !important;
          }

          .stats-counter__item {
            padding: 0 12px;
          }
        }
      `}</style>
    </section>
  );
}
