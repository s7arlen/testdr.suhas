import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const storyItems = [
  {
    index: '01',
    title: 'Experience',
    tag: 'Over 11 Years',
    text: 'With over 11 years of dedicated practice, Dr. Suhas has performed thousands of successful procedures, refining his technique to deliver outcomes that prioritize patient comfort and long-term health.',
    bg: '#0B1628',
    accent: '#F2E3C6',
  },
  {
    index: '02',
    title: 'Approach',
    tag: 'Patient First',
    text: 'Every consultation begins with listening. Understanding your concerns allows us to craft a surgical plan that aligns with your lifestyle, ensuring clarity and confidence before any procedure.',
    bg: '#101E35',
    accent: '#E8D5AA',
  },
  {
    index: '03',
    title: 'Technology',
    tag: 'State of the Art',
    text: 'Leveraging state-of-the-art laparoscopic equipment, we perform minimally invasive surgeries that reduce physical trauma, minimize scarring, and significantly accelerate the healing process.',
    bg: '#152241',
    accent: '#DEC898',
  },
  {
    index: '04',
    title: 'Patient Care',
    tag: 'Lifelong Support',
    text: "Surgery is more than an operation — it's a journey. From your first visit to your final follow-up, our team provides unwavering support, answering every question and calming every concern.",
    bg: '#1A2850',
    accent: '#F2E3C6',
  },
];

// Each card handles its own scroll-driven peel transform
function StackCard({ item, index, total, scrollYProgress }) {
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;

  const scale = useTransform(scrollYProgress, [rangeStart, rangeEnd], [1, 0.84]);
  const y = useTransform(scrollYProgress, [rangeStart, rangeEnd], ['0%', '-8%']);
  const opacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [1, 0.5]);
  const borderRadius = useTransform(scrollYProgress, [rangeStart, rangeEnd], ['24px', '32px']);

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `calc(80px + ${index * 18}px)`,
        scale,
        y,
        opacity: index === total - 1 ? 1 : opacity,
        borderRadius,
        zIndex: index + 1,
        transformOrigin: 'top center',
        marginBottom: '1.5rem',
      }}
    >
      <div
        className="story-card-inner"
        style={{
          background: item.bg,
          border: '1px solid rgba(242,227,198,0.1)',
          borderRadius: 'inherit',
          position: 'relative',
        }}
      >


        {/* Left: Index + Title */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: item.accent,
              textTransform: 'uppercase',
            }}>
              {item.index}
            </span>
            <span style={{
              display: 'inline-block',
              background: `rgba(242,227,198,0.08)`,
              border: `1px solid rgba(242,227,198,0.15)`,
              color: item.accent,
              borderRadius: '999px',
              padding: '0.25rem 0.85rem',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {item.tag}
            </span>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#F8F9FA',
            lineHeight: 1.05,
            margin: 0,
          }}>
            {item.title}
          </h3>
        </div>

        {/* Right: Text */}
        <div>
          <p style={{
            color: 'rgba(155,163,175,0.9)',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.75,
            margin: 0,
            maxWidth: '480px',
          }}>
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DoctorStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--section-py)',
        // Give enough scroll room for each card to peel
        paddingBottom: `calc(var(--section-py) + ${storyItems.length * 24}px)`,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>The Philosophy</div>
          <h2 className="h-2" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Precision built around <span className="text-gradient">human care.</span>
          </h2>
        </div>

        {/* Stacked Cards */}
        <div>
          {storyItems.map((item, index) => (
            <StackCard
              key={index}
              item={item}
              index={index}
              total={storyItems.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
