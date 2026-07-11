import React, { useEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import './App.css';

// Components
import Layout from './components/Layout';
import Hero from './components/Hero';
import DoctorStory from './components/DoctorStory';
import AboutSection from './components/AboutSection';
import ServicesEditorial from './components/ServicesEditorial';
import ServicesDeck from './components/ServicesDeck';
import SpecializationsFilmStrip from './components/SpecializationsFilmStrip';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import GalleryComponent from './components/Gallery';

// New Sections & Pages
import StatsCounter from './components/StatsCounter';
import FAQ from './components/FAQ';
import DoctorDetailPage from './components/DoctorDetailPage';
import BlogPage from './components/BlogPage';
import Preloader from './components/Preloader';
import ClinicTour from './components/ClinicTour';

// Data from original App
const serviceCatalog = [
  {
    slug: 'laparoscopic-surgery',
    title: 'Laparoscopic Surgery',
    intro: 'Minimally invasive surgery with smaller wounds, less pain and faster recovery.',
    summary: 'Laparoscopic surgery allows Dr. Suhas to perform carefully planned procedures through tiny incisions with excellent visual control and a smoother recovery journey.',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Smaller scars', 'Less postoperative pain', 'Shorter hospital stay', 'Quicker return to daily life'],
    coverage: ['Appendix surgery', 'Gallbladder surgery', 'Basic and advanced laparoscopic procedures'],
    whyChoose: ['Precise surgical planning', 'Advanced laparoscopic equipment', 'Personalised post-op guidance'],
  },
  {
    slug: 'gastrointestinal-surgery',
    title: 'Gastrointestinal Surgery',
    intro: 'Specialised treatment for digestive tract conditions with thoughtful surgical care.',
    summary: 'From stomach and bowel conditions to complex abdominal concerns, Dr. Suhas offers comprehensive evaluation and surgical expertise with a patient-first approach.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Digestive tract care', 'Abdominal condition management', 'Personalised treatment planning', 'Compassionate recovery support'],
    coverage: ['Stomach and bowel conditions', 'Complex abdominal surgery', 'Diagnostic and operative care'],
    whyChoose: ['Clear explanation of surgery options', 'Safe recovery planning', 'Experience in advanced abdominal care'],
  },
  {
    slug: 'hernia-surgery',
    title: 'Hernia Surgery',
    intro: 'Reliable repair for inguinal, umbilical and other hernias with a focus on comfort and recovery.',
    summary: 'Hernia surgery is planned carefully to restore strength and reduce the chance of recurrence while helping patients feel confident during recovery.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Repair for common and complex hernias', 'Reduced recurrence risk', 'Calm recovery guidance', 'Improved comfort and mobility'],
    coverage: ['Inguinal and umbilical hernias', 'Recurrent hernia repair', 'Day-to-day recovery support'],
    whyChoose: ['Detailed pre-op assessment', 'Modern surgical technique', 'Long-term follow-up care'],
  },
  {
    slug: 'gallbladder-surgery',
    title: 'Gall Bladder Surgery',
    intro: 'Expert treatment for gallstones and related gallbladder conditions.',
    summary: 'Gallbladder surgery is offered with careful evaluation and precise technique so patients can move comfortably into recovery and resume normal routines sooner.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Treatment for gallstones', 'Symptom relief', 'Modern minimally invasive approach', 'Short recovery windows'],
    coverage: ['Cholecystectomy', 'Gallbladder pain management', 'Post-op recovery support'],
    whyChoose: ['Clear diagnosis and planning', 'Compassionate support', 'Focused on faster healing'],
  },
  {
    slug: 'thyroid-surgery',
    title: 'Thyroid Surgery',
    intro: 'Specialised thyroid procedures carried out with precision and careful patient support.',
    summary: 'Dr. Suhas provides expert care for thyroid conditions that require surgery, guiding patients through diagnosis, operation and recovery with reassurance and clarity.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Thyroid nodule and enlargement treatment', 'Careful pre-op planning', 'Precise surgical technique', 'Supportive follow-up'],
    coverage: ['Thyroidectomy', 'Thyroid enlargement care', 'Post-surgery guidance'],
    whyChoose: ['Experienced surgical judgement', 'Strong communication', 'Patient-centred recovery care'],
  },
  {
    slug: 'varicose-vein-surgery',
    title: 'Varicose Vein Surgery',
    intro: 'Treatment for painful and visible varicose veins that affects comfort and mobility.',
    summary: 'Varicose vein surgery helps improve appearance, reduce discomfort and restore confidence while supporting a smoother return to daily activities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Relief from discomfort', 'Improved mobility', 'Aesthetic and functional improvement', 'Tailored treatment plans'],
    coverage: ['Varicose vein evaluation', 'Surgical treatment options', 'Recovery guidance'],
    whyChoose: ['Focused on symptom relief', 'Thoughtful surgical planning', 'Clear recovery advice'],
  },
  {
    slug: 'piles-fissure-fistula',
    title: 'Piles, Fissure & Fistula Care',
    intro: 'Comfort-focused care for anorectal conditions such as piles, fissures and fistulas.',
    summary: 'These conditions can be uncomfortable and affect daily life, and Dr. Suhas offers careful assessment and treatment with a strong focus on symptom relief and recovery.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Piles treatment', 'Fissure care', 'Fistula management', 'Improved quality of life'],
    coverage: ['Laser and surgical options', 'Detailed evaluation', 'Recovery and follow-up'],
    whyChoose: ['Compassionate consultation', 'Modern treatment options', 'Practical recovery support'],
  },
  {
    slug: 'diabetic-foot-surgery',
    title: 'Diabetic Foot Surgery',
    intro: 'Specialist surgical care for diabetic foot complications and chronic wounds.',
    summary: 'Diabetic foot surgery is approached with careful assessment and infection control to help preserve mobility and support healing as safely as possible.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Foot ulcer and complication care', 'Infection-focused treatment', 'Mobility-preserving surgery', 'Supportive postoperative care'],
    coverage: ['Ulcer management', 'Foot surgery planning', 'Recovery support'],
    whyChoose: ['Careful multidisciplinary approach', 'Attention to wound healing', 'Patient-focused follow-up'],
  },
  {
    slug: 'breast-surgery',
    title: 'Breast Surgery',
    intro: 'Compassionate surgical support for breast conditions, including oncological care.',
    summary: 'Breast surgery is handled with empathy, precision and a clear explanation of every step so patients feel informed and supported.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Breast condition evaluation', 'Oncology-focused treatment', 'Clear communication', 'Gentle recovery support'],
    coverage: ['Breast surgery consultation', 'Treatment planning', 'Post-surgery follow-up'],
    whyChoose: ['Thoughtful patient guidance', 'Detailed surgical planning', 'Compassionate care'],
  },
  {
    slug: 'trauma-emergency-surgery',
    title: 'Trauma & Emergency Surgery',
    intro: 'Urgent surgical care for injuries and acute abdominal conditions.',
    summary: 'Emergency surgery requires quick judgement and calm execution, and Dr. Suhas offers experienced support when time-sensitive decisions matter most.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80',
    highlights: ['Urgent intervention', 'Rapid assessment', 'Experienced handling of critical cases', 'Immediate follow-up care'],
    coverage: ['Trauma care', 'Emergency abdominal surgery', 'Critical surgical support'],
    whyChoose: ['Rapid response', 'Experienced leadership', 'Clear communication during emergencies'],
  },
];

// Page Transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const PageWrapper = ({ children }) => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
    {children}
  </motion.div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <StatsCounter />
      <DoctorStory />
      <AboutSection />

      <SpecializationsFilmStrip />
      <ClinicTour />
      <Timeline />
      <Testimonials />
      <FAQ />
      <GalleryComponent />
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <div style={{ paddingTop: '80px' }}>
        <DoctorDetailPage />
      </div>
    </PageWrapper>
  );
}

function ServicesPage() {
  return (
    <PageWrapper>
      <div style={{ paddingTop: '80px' }}>
        <ServicesDeck />
      </div>
    </PageWrapper>
  );
}

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceCatalog.find(s => s.slug === slug);

  if (!service) {
    return (
      <PageWrapper>
        <section className="section" style={{ paddingTop: '160px', textAlign: 'center' }}>
          <h1 className="h-2">Service Not Found</h1>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section style={{ position: 'relative', height: '60vh', minHeight: '500px', display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, rgba(10,10,10,0.4) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Service Detail</div>
            <h1 className="h-display" style={{ marginBottom: '1.5rem' }}>{service.title}</h1>
            <p className="text-lead" style={{ maxWidth: '600px' }}>{service.summary}</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="h-3" style={{ marginBottom: '2rem' }}>What this service includes</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {service.highlights.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>&bull;</span>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="h-3" style={{ marginBottom: '2rem' }}>Common areas of care</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {service.coverage.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>&bull;</span>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="editorial-card" style={{ padding: '4rem', background: 'var(--bg-secondary)', border: 'none' }}>
            <h3 className="h-3" style={{ marginBottom: '2rem', textAlign: 'center' }}>Why patients choose this care</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {service.whyChoose.map((item, i) => (
                <span key={i} style={{ padding: '0.75rem 1.5rem', background: 'var(--border-subtle)', borderRadius: '999px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function GalleryPage() {
  return (
    <PageWrapper>
      <div style={{ paddingTop: '120px' }}>
        <GalleryComponent />
      </div>
    </PageWrapper>
  );
}

function ContactPage() {
  return (
    <PageWrapper>
      <section className="section" style={{ paddingTop: '160px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Make an appointment</div>
            <h1 className="h-1" style={{ marginBottom: '1.5rem' }}>Book a consultation with <span className="text-gradient">confidence.</span></h1>
            <p className="text-lead" style={{ marginBottom: '3rem' }}>Appointments are available for surgical consultations, follow-up visits, and second opinions.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="tel:9035942513" className="editorial-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ background: 'var(--border-subtle)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Call</div>
                  <div style={{ color: 'var(--text-secondary)' }}>+91 90359 42513</div>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=%2B9035942513&text=Hello" target="_blank" rel="noreferrer" className="editorial-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ background: 'var(--border-subtle)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>WhatsApp</div>
                  <div style={{ color: 'var(--text-secondary)' }}>Message instantly</div>
                </div>
              </a>

              <a href="mailto:suhassk2@gmail.com" className="editorial-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ background: 'var(--border-subtle)', padding: '1rem', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Email</div>
                  <div style={{ color: 'var(--text-secondary)' }}>suhassk2@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ height: '500px', borderRadius: '32px', overflow: 'hidden' }}>
            <iframe title="Clinic map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5772763!3d12.9262302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1fc13c3b7%3A0x4f5a3b3a7dfc70ab!2sDeepak%20Hospital!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
}

function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/doctor" element={<AboutPage />} />
          <Route path="/doctor-details" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/journey" element={<AboutPage />} /> 
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
