import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Briefcase, MapPin, ChevronDown, ExternalLink } from 'lucide-react';
import LuxuryCredentials from './LuxuryCredentials';



const milestones = [
  { year: '2013', title: 'Medical Degree', desc: 'Completed MBBS from a prestigious medical university' },
  { year: '2017', title: 'MS General Surgery', desc: 'Specialised postgraduate degree in General Surgery' },
  { year: '2018', title: 'St. Johns Medical College', desc: 'Appointed as Assistant Professor, Department of General Surgery' },
  { year: '2019', title: 'Advanced Laparoscopy', desc: 'Completed FALS and Dip Lap certifications in advanced laparoscopic techniques' },
  { year: '2021', title: 'FIAGES Fellowship', desc: 'Recognised by the Indian Association of Gastrointestinal Endo-Surgeons' },
  { year: '2023', title: 'Consultant Surgeon', desc: 'Established private practice at Deepak Hospital & Dermapulse Clinic, Bengaluru' },
];

const publications = [
  {
    title: 'Comparative study of laparoscopic vs open appendectomy outcomes',
    year: '2022',
    abstract: 'This study evaluates the post-operative outcomes, recovery time, and complication rates of laparoscopic appendectomy compared to traditional open surgery. Findings indicate a significant reduction in hospital stay and faster return to normal activities for the laparoscopic group.',
    link: '#'
  },
  {
    title: 'Role of minimally invasive surgery in emergency abdominal conditions',
    year: '2021',
    abstract: 'An exploration of the increasing application of minimally invasive techniques in emergency settings, such as perforated viscus and acute cholecystitis, highlighting the benefits of reduced surgical trauma in critical care.',
    link: '#'
  },
  {
    title: 'Outcomes of laparoscopic hernia repair: A retrospective analysis',
    year: '2020',
    abstract: 'A comprehensive review of 500 cases of laparoscopic hernia repair focusing on recurrence rates and chronic pain, establishing the long-term efficacy and safety profile of the procedure.',
    link: '#'
  },
  {
    title: 'Advances in thyroid surgery techniques and patient recovery',
    year: '2019',
    abstract: 'A detailed analysis of nerve monitoring and minimal access approaches in thyroidectomy. The paper discusses strategies to minimize voice changes and hypocalcemia post-surgery.',
    link: '#'
  },
  {
    title: 'Diabetic foot management: Surgical interventions and prevention strategies',
    year: '2018',
    abstract: 'This paper outlines a multidisciplinary approach to diabetic foot ulcers, detailing surgical debridement techniques, vascular assessment, and long-term preventative care to avoid amputations.',
    link: '#'
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function DoctorDetailPage() {
  const [expandedPubIndex, setExpandedPubIndex] = useState(null);

  // Parallax CTA State
  const ctaRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '5rem', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80"
            alt="Dr. Suhas S Kumar"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
          {/* Overlay that fades to bg-secondary at the bottom to match the next section seamlessly */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to bottom, rgba(247, 251, 255, 0.4) 0%, rgba(247, 251, 255, 0.8) 60%, var(--bg-secondary) 100%)' 
          }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Consultant General & Laparoscopic Surgeon</div>
            <h1 className="h-display" style={{ marginBottom: '1rem' }}>
              Dr. Suhas<br /><span className="text-gradient-gold">S Kumar</span>
            </h1>
            <p className="text-lead" style={{ maxWidth: '550px', marginBottom: 0 }}>
              MS (Gen Surg) · FIAGES · FALS · Dip Lap
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials — Luxury Award Showcase */}
      <LuxuryCredentials />

      {/* Bio & Background */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <GraduationCap size={28} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
            <h3 className="h-3" style={{ marginBottom: '1.5rem' }}>Academic Background</h3>
            <p className="text-body" style={{ marginBottom: '1.5rem' }}>
              Dr. Suhas S. Kumar completed his MS in General Surgery and went on to serve as Assistant Professor in the Department of General Surgery at St. Johns Medical College Hospital, Bangalore — one of India's most prestigious medical institutions.
            </p>
            <p className="text-body">
              His time in academic medicine sharpened both his teaching abilities and his surgical precision, laying the foundation for a practice built on evidence-based care and continuous learning.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Briefcase size={28} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
            <h3 className="h-3" style={{ marginBottom: '1.5rem' }}>Clinical Practice</h3>
            <p className="text-body" style={{ marginBottom: '1.5rem' }}>
              With over 11 years of clinical experience and 1000+ surgeries performed, Dr. Suhas now practices at Deepak Hospital and Dermapulse Clinic in Bengaluru, offering a full range of general and advanced laparoscopic surgical services.
            </p>
            <p className="text-body">
              His specialisations span from laparoscopic cholecystectomy and hernia repair to thyroid surgery, breast oncology surgery, and comprehensive diabetic foot care — always with a patient-first approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Career Journey</div>
            <h2 className="h-2">A decade of <span className="text-gradient">surgical excellence</span></h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'var(--border-subtle)' }} />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'var(--bg-primary)', border: '2px solid var(--accent-gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1,
                  fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-display)', letterSpacing: '0.05em'
                }}>
                  {m.year}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {m.title}
                  </h4>
                  <p className="text-body" style={{ margin: 0 }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <BookOpen size={28} style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }} />
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Research & Publications</div>
            <h2 className="h-2">Published <span className="text-gradient">contributions</span></h2>
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
            {publications.map((pub, i) => {
              const isExpanded = expandedPubIndex === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setExpandedPubIndex(isExpanded ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.75rem 1rem',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                      backgroundColor: isExpanded ? 'rgba(0,0,0,0.015)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                       if(!isExpanded) e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    }}
                    onMouseLeave={(e) => {
                       if(!isExpanded) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', flexShrink: 0 }}>
                      0{i + 1}
                    </span>
                    <h4 style={{ 
                      fontFamily: 'var(--font-display)', 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      color: isExpanded ? 'var(--accent-gold)' : 'var(--text-primary)', 
                      margin: 0, 
                      flex: 1,
                      transition: 'color 0.3s ease'
                    }}>
                      {pub.title}
                    </h4>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={20} style={{ color: 'var(--text-secondary)' }} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ 
                          padding: '0 1rem 1.75rem 4.1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1.25rem',
                          background: 'rgba(0,0,0,0.015)'
                        }}>
                           <div style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--bg-secondary)', padding: '0.3rem 0.7rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.05em', alignSelf: 'flex-start', border: '1px solid var(--border-subtle)' }}>
                              YEAR: {pub.year}
                           </div>
                           <p className="text-body" style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                             {pub.abstract}
                           </p>
                           <a href={pub.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', alignSelf: 'flex-start', transition: 'opacity 0.2s', paddingBottom: '0.2rem', borderBottom: '1px solid var(--accent-gold)' }}
                              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                           >
                             Read Full Paper <ExternalLink size={16} />
                           </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Practice Locations</div>
            <h2 className="h-2">Where to <span className="text-gradient">find us</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Deepak Hospital', address: '33rd Cross Rd, 7th Block, Jayanagar, Bengaluru 560070', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5772763!3d12.9262302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1fc13c3b7%3A0x4f5a3b3a7dfc70ab!2sDeepak%20Hospital!5e0!3m2!1sen!2sin!4v1234567890' },
              { name: 'Dermapulse Clinic', address: '719/25, 10th A Main Rd, 4th Block, Jayanagar, Bengaluru 560011', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5853672!3d12.9239812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a246be3d0ee8329%3A0x2058e7e997251b07!2sDermapulse!5e0!3m2!1sen!2sin!4v1234567890' },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ background: 'var(--bg-primary)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}
              >
                <iframe title={loc.name} src={loc.mapSrc} width="100%" height="250" style={{ border: 0, display: 'block' }} loading="lazy" />
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <MapPin size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{loc.name}</h4>
                  </div>
                  <p className="text-body" style={{ margin: 0, fontSize: '0.9rem' }}>{loc.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section 
        style={{ 
          position: 'relative', 
          padding: '6rem 0', 
          textAlign: 'center',
          background: 'var(--bg-secondary)',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Background Pattern - Animated */}
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '24px 24px'] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            backgroundImage: `radial-gradient(var(--border-subtle) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            pointerEvents: 'none'
          }}
        />
        {/* Soft Glow - Animated */}
        <motion.div 
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(45,107,255,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px', perspective: '1200px' }}>
          <motion.div 
            ref={ctaRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              show: { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                transition: { 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1],
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                } 
              }
            }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              background: 'var(--bg-primary)',
              padding: '4rem 2rem',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Inner accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent-gold), var(--primary-blue))', borderRadius: '24px 24px 0 0' }} />

            <motion.div style={{ transform: "translateZ(50px)", width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} 
                className="h-2" 
                style={{ marginBottom: '1.25rem' }}
              >
                Ready to discuss <span className="text-gradient">your care?</span>
              </motion.h2>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="text-lead" 
                style={{ marginBottom: '2.5rem', maxWidth: '480px' }}
              >
                Schedule a consultation with Dr. Suhas for personalised surgical advice and compassionate support.
              </motion.p>
              
              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <motion.div whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(212,175,55,0.3)' }} whileTap={{ scale: 0.95 }} style={{ borderRadius: '99px' }}>
                  <Link to="/contact" className="btn btn-premium" style={{ padding: '0.85rem 2.2rem', fontSize: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    Book a Consultation <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
