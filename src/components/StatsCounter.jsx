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
    <section className="stats-counter" ref={ref}>
      <div className="stats-counter__grid">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} {...stat} index={i} inView={inView} />
        ))}
      </div>

      <style>{`
        .stats-counter {
          background: var(--bg-secondary, #111A29);
          border: 1px solid var(--border-subtle, rgba(242, 227, 198, 0.08));
          border-radius: 24px;
          padding: 56px 32px;
          max-width: 1120px;
          margin: 0 auto;
        }

        .stats-counter__grid {
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

        /* Champagne vertical dividers between items */
        .stats-counter__item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 48px;
          background: linear-gradient(
            180deg,
            transparent,
            var(--accent-gold, #F2E3C6) 50%,
            transparent
          );
          opacity: 0.3;
        }

        .stats-counter__number {
          font-family: var(--font-display, "Playfair Display", serif);
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          line-height: 1;
          color: var(--accent-gold, #F2E3C6);
          letter-spacing: -0.02em;
        }

        .stats-counter__suffix {
          font-weight: 400;
          opacity: 0.7;
        }

        .stats-counter__label {
          font-family: var(--font-sans, "Inter", sans-serif);
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--text-secondary, #9BA3AF);
          line-height: 1.4;
          max-width: 160px;
        }

        /* ── Mobile 2×2 grid ── */
        @media (max-width: 767px) {
          .stats-counter {
            padding: 40px 20px;
            border-radius: 18px;
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
