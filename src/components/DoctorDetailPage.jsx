import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, GraduationCap, Briefcase, MapPin } from 'lucide-react';

const credentials = [
  { label: 'MS (Gen Surg)', desc: 'Master of Surgery — General Surgery' },
  { label: 'FIAGES', desc: 'Fellow of Indian Association of Gastrointestinal Endo-Surgeons' },
  { label: 'FALS', desc: 'Fellow of Advanced Laparoscopic Surgery' },
  { label: 'Dip Lap', desc: 'Diploma in Laparoscopic Surgery' },
];

const milestones = [
  { year: '2013', title: 'Medical Degree', desc: 'Completed MBBS from a prestigious medical university' },
  { year: '2017', title: 'MS General Surgery', desc: 'Specialised postgraduate degree in General Surgery' },
  { year: '2018', title: 'St. Johns Medical College', desc: 'Appointed as Assistant Professor, Department of General Surgery' },
  { year: '2019', title: 'Advanced Laparoscopy', desc: 'Completed FALS and Dip Lap certifications in advanced laparoscopic techniques' },
  { year: '2021', title: 'FIAGES Fellowship', desc: 'Recognised by the Indian Association of Gastrointestinal Endo-Surgeons' },
  { year: '2023', title: 'Consultant Surgeon', desc: 'Established private practice at Deepak Hospital & Dermapulse Clinic, Bengaluru' },
];

const publications = [
  'Comparative study of laparoscopic vs open appendectomy outcomes',
  'Role of minimally invasive surgery in emergency abdominal conditions',
  'Outcomes of laparoscopic hernia repair: A retrospective analysis',
  'Advances in thyroid surgery techniques and patient recovery',
  'Diabetic foot management: Surgical interventions and prevention strategies',
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
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80"
            alt="Dr. Suhas S Kumar"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '0% 0%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,11,17,1) 0%, rgba(6,11,17,0.6) 50%, rgba(6,11,17,0.3) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Consultant General & Laparoscopic Surgeon</div>
            <h1 className="h-display" style={{ marginBottom: '1rem' }}>
              Dr. Suhas<br /><span className="text-gradient-gold">S Kumar</span>
            </h1>
            <p className="text-lead" style={{ maxWidth: '550px' }}>
              MS (Gen Surg) · FIAGES · FALS · Dip Lap
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Qualifications</div>
            <h2 className="h-2">Professional <span className="text-gradient">Credentials</span></h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}
          >
            {credentials.map((cred, i) => (
              <motion.div key={i} variants={fadeUp} style={{
                padding: '2.5rem 2rem',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                textAlign: 'center',
              }}>
                <Award size={28} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                  {cred.label}
                </h3>
                <p className="text-body" style={{ margin: 0, fontSize: '0.9rem' }}>{cred.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  padding: '1.5rem 2rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
                }}
              >
                <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', flexShrink: 0, marginTop: '2px' }}>
                  0{i + 1}
                </span>
                <p className="text-body" style={{ margin: 0 }}>{pub}</p>
              </motion.div>
            ))}
          </motion.div>
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

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="h-2" style={{ marginBottom: '1.5rem' }}>Ready to discuss your care?</h2>
            <p className="text-lead" style={{ marginBottom: '2.5rem' }}>Schedule a consultation with Dr. Suhas for personalised surgical advice and compassionate support.</p>
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
