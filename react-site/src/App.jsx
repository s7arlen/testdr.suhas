import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const services = [
  {
    title: 'Laparoscopic Surgery',
    summary: 'Minimally invasive techniques designed to reduce discomfort and support faster recovery.',
    icon: 'precision_manufacturing',
  },
  {
    title: 'Hernia Care',
    summary: 'Expert repair planning with an emphasis on long-term comfort and safe recovery.',
    icon: 'health_and_safety',
  },
  {
    title: 'Gallbladder Surgery',
    summary: 'Calm, evidence-led treatment for gallbladder conditions and post-op support.',
    icon: 'vaccines',
  },
  {
    title: 'Thyroid & Breast Care',
    summary: 'Thoughtful surgical planning with clear communication at every step.',
    icon: 'monitor_heart',
  },
]

const stats = [
  { value: '11+', label: 'Years of practice' },
  { value: '5000+', label: 'Procedures supported' },
  { value: '99%', label: 'Patient satisfaction' },
  { value: '4', label: 'Care locations' },
]

const testimonials = [
  {
    quote: 'I felt calm, informed and supported throughout the entire process. The experience felt human, clear and reassuring.',
    author: 'Priya N.',
    meta: 'Gallbladder surgery · Bengaluru',
  },
  {
    quote: 'The recovery was smoother than expected, and the guidance made a difficult decision feel manageable.',
    author: 'Raghav M.',
    meta: 'Hernia repair · Jayanagar',
  },
]

const galleryItems = [
  {
    title: 'Modern operating environment',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Thoughtful clinical preparation',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Patient-centred consultation',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Recovery with close support',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
  },
]

const journeySteps = [
  {
    title: 'Consultation',
    text: 'A thoughtful review of symptoms, history and goals with clear explanation of surgical options.',
  },
  {
    title: 'Planning',
    text: 'Detailed preparation, evaluation and personalised recovery guidance before the procedure.',
  },
  {
    title: 'Recovery',
    text: 'Close follow-up and reassurance throughout healing, with practical support at every stage.',
  },
]

function Layout({ children }) {
  return (
    <div className="page-shell">
      <header className="nav-shell">
        <nav className="nav-bar">
          <Link className="nav-brand" to="/">
            <span className="material-symbols-outlined">medical_services</span>
            <span>Dr. Suhas S Kumar</span>
          </Link>
          <div className="nav-links">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">Doctor</NavLink>
            <NavLink className="nav-link" to="/services">Services</NavLink>
            <NavLink className="nav-link" to="/journey">Journey</NavLink>
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </div>
          <Link className="nav-cta" to="/contact">Book Visit</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-card">
            <div className="eyebrow">Excellence in surgery</div>
            <h3>Dr. Suhas S Kumar</h3>
            <p>Consultant General &amp; Laparoscopic Surgeon offering precise, compassionate care with a calm premium experience in Bengaluru.</p>
            <Link className="pill-btn footer-cta" to="/contact">Book a consultation</Link>
          </div>
          <div className="footer-card">
            <h4>Explore</h4>
            <div className="footer-links">
              <Link to="/about">About the doctor</Link>
              <Link to="/services">Clinical specialties</Link>
              <Link to="/journey">Patient journey</Link>
              <Link to="/gallery">Clinic &amp; care</Link>
            </div>
          </div>
          <div className="footer-card">
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="tel:9035942513">Call · +91 90359 42513</a>
              <a href="https://api.whatsapp.com/send/?phone=%2B9035942513&text=Hello" target="_blank" rel="noreferrer">WhatsApp · Message instantly</a>
              <a href="mailto:suhassk2@gmail.com">Email · suhassk2@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="hero-grid" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">Consultant General &amp; Laparoscopic Surgeon</div>
            <h1 className="hero-title">
              <span>We don&apos;t just</span>
              <span>operate.</span>
              <span>We restore</span>
              <span className="accent">lives.</span>
            </h1>
            <p className="lead">A premium surgical experience shaped by precision, calm confidence and a deeply personal approach to care. From advanced laparoscopy to compassionate guidance, every step is designed to feel clear and reassuring.</p>
            <div className="hero-actions">
              <a className="pill-btn" href="https://api.whatsapp.com/send/?phone=%2B9035942513&text=Hello" target="_blank" rel="noreferrer">Book consultation <span className="material-symbols-outlined">arrow_forward</span></a>
              <Link className="pill-btn secondary" to="/services">Explore specialties</Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80" alt="Consultant surgeon in a calm clinical environment" />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container content-grid">
          <div className="image-card">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80" alt="Doctor profile" />
          </div>
          <div>
            <div className="eyebrow">About the doctor</div>
            <h2 className="headline">Precision built around <span className="muted">human care.</span></h2>
            <p className="lead">Dr. Suhas S Kumar is a consultant general and laparoscopic surgeon with deep expertise in minimally invasive procedures, backed by years of hospital experience and a calm, reassuring bedside manner.</p>
            <div className="stats-row">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <div className="number">{item.value}</div>
                  <div className="label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className="eyebrow">Clinical specialties</div>
          <h2 className="headline">A focused practice built for <span className="muted">clarity and confidence.</span></h2>
          <div className="card-grid services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <span className="material-symbols-outlined">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className="eyebrow">Patient journey</div>
          <h2 className="headline">A measured experience from <span className="muted">first question to final follow-up.</span></h2>
          <div className="card-grid quote-grid">
            {testimonials.map((item) => (
              <div className="quote-card" key={item.author}>
                <p>“{item.quote}”</p>
                <strong>{item.author}</strong>
                <span>{item.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <div className="eyebrow">Clinic and care</div>
          <h2 className="headline">A visual narrative of <span className="muted">technology, trust and calm.</span></h2>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="gallery-caption">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="section section-surface page-intro">
      <div className="container content-grid">
        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80" alt="Doctor at clinic" />
        </div>
        <div>
          <div className="eyebrow">Doctor profile</div>
          <h2 className="headline">A deeply personal surgical practice with <span className="muted">clinical precision.</span></h2>
          <p className="lead">Dr. Suhas S Kumar brings a calm, premium approach to general and laparoscopic surgery. Patients are supported through every stage, from initial conversation to post-operative recovery.</p>
          <div className="card-list">
            <div className="info-card">
              <h3>Clinical focus</h3>
              <p>Advanced laparoscopic surgery, hernia and gallbladder care, thyroid and gastrointestinal procedures and second-opinion support.</p>
            </div>
            <div className="info-card">
              <h3>Trusted approach</h3>
              <p>Every consultation is designed to make the path forward feel clear, evidence-led and reassuring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="section section-surface page-intro">
      <div className="container">
        <div className="eyebrow">Clinical specialties</div>
        <h2 className="headline">Specialised care shaped around <span className="muted">comfort, clarity and recovery.</span></h2>
        <div className="card-grid services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <span className="material-symbols-outlined">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JourneyPage() {
  return (
    <section className="section section-surface page-intro">
      <div className="container">
        <div className="eyebrow">Patient journey</div>
        <h2 className="headline">A measured experience from <span className="muted">first question to final follow-up.</span></h2>
        <div className="card-grid quote-grid">
          {journeySteps.map((step) => (
            <div className="info-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="quote-card wide-card">
          <p>“I felt informed, calm and supported throughout the entire process. Dr. Kumar made a difficult decision feel manageable and clear.”</p>
          <strong>Priya N.</strong>
          <span>Gallbladder surgery · Bengaluru</span>
        </div>
      </div>
    </section>
  )
}

function GalleryPage() {
  return (
    <section className="section section-surface page-intro">
      <div className="container">
        <div className="eyebrow">Gallery</div>
        <h2 className="headline">A visual narrative of <span className="muted">technology, trust and calm.</span></h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="section section-surface page-intro">
      <div className="container contact-grid">
        <div className="contact-card">
          <div className="eyebrow">Make an appointment</div>
          <h2 className="headline">Book a consultation with <span className="muted">confidence.</span></h2>
          <p className="lead">Appointments are available for consultations, follow-ups and second opinions. Quick responses are available on WhatsApp for convenient scheduling.</p>
          <div className="card-list">
            <a className="contact-item" href="tel:9035942513">
              <span className="material-symbols-outlined">call</span>
              <span><strong>Call</strong><br />90359 42513</span>
            </a>
            <a className="contact-item" href="https://api.whatsapp.com/send/?phone=%2B9035942513&text=Hello" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">chat</span>
              <span><strong>WhatsApp</strong><br />Message instantly</span>
            </a>
            <a className="contact-item" href="mailto:suhassk2@gmail.com">
              <span className="material-symbols-outlined">mail</span>
              <span><strong>Email</strong><br />suhassk2@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="map-card">
          <iframe
            title="Clinic map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.5772763!3d12.9262302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1fc13c3b7%3A0x4f5a3b3a7dfc70ab!2sDeepak%20Hospital!5e0!3m2!1sen!2sin!4v1234567890"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
