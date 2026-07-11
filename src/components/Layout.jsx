import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X, ArrowRight, MapPin, Phone, Mail, Home, Image as ImageIcon } from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';
import ScrollToTopButton from './ScrollToTop';

const mobileNavItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Doctor' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Measure footer height for the Curtain Reveal effect
  useEffect(() => {
    if (!footerRef.current) return;
    
    const updateHeight = () => {
      if (!footerRef.current) return;
      const baseHeight = footerRef.current.offsetHeight;
      // On mobile (<768px), add 70px for the bottom-nav bar so footer is fully visible
      const isMobile = window.innerWidth < 768;
      setFooterHeight(baseHeight + (isMobile ? 70 : 0));
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(footerRef.current);
    updateHeight();
    
    window.addEventListener('resize', updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, [children, location.pathname]);

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      
      {/* MAIN CONTENT WRAPPER - Scrolls over the fixed footer */}
      <div 
        className="curtain-reveal-wrapper"
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'var(--bg-primary)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          // On mobile, add 70px (bottom-nav height) on top of footer height
          // so the fully revealed footer clears the bottom nav bar
          marginBottom: footerHeight > 0 ? `${footerHeight}px` : 'auto',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="container nav-container">
            <Link className="nav-brand" to="/">
              <Activity className="nav-brand-icon" size={24} />
              <span>Dr. Suhas</span>
            </Link>

            <nav className="nav-links">
              {mobileNavItems.map(item => (
                <NavLink 
                  key={item.to} 
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
                Book Visit
              </Link>
            </nav>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-nav-overlay"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {mobileNavItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <NavLink 
                    to={item.to}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 + mobileNavItems.length * 0.1 }}
              >
                <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="main-content" style={{ flex: 1 }}>
          {children}
        </main>
      </div>

      {/* FIXED FOOTER */}
      <footer 
        ref={footerRef}
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0,
          right: 0,
          zIndex: 0,
          background: 'var(--bg-secondary)', 
          overflow: 'hidden'
        }}
      >
        {/* Gold accent top line */}
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }} />

        <div className="container footer-top">
          
          {/* Col 1 — Brand + CTA */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <Activity size={22} style={{ color: 'var(--accent-gold)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.2rem' }}>Dr. Suhas S Kumar</span>
            </div>
            <p className="text-body" style={{ marginBottom: '1.75rem', maxWidth: '340px', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Advanced surgical care with compassion. Specialising in laparoscopy, hernia repair, and complex abdominal procedures.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.65rem 1.4rem' }}>
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>

          {/* Col 2 — Contact & Locations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div className="footer-section-label">Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a href="tel:9035942513" className="footer-contact-link">
                  <span className="footer-icon-wrap"><Phone size={15} /></span>
                  +91 90359 42513
                </a>
                <a href="mailto:suhassk2@gmail.com" className="footer-contact-link">
                  <span className="footer-icon-wrap"><Mail size={15} /></span>
                  suhassk2@gmail.com
                </a>
              </div>
            </div>
            
            <div>
              <div className="footer-section-label">Locations</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="footer-contact-link" style={{ alignItems: 'flex-start' }}>
                  <span className="footer-icon-wrap" style={{ marginTop: '2px' }}><MapPin size={15} /></span>
                  <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Deepak Hospital</strong><br/>33rd Cross Rd, 7th Block, Jayanagar</span>
                </div>
                <div className="footer-contact-link" style={{ alignItems: 'flex-start' }}>
                  <span className="footer-icon-wrap" style={{ marginTop: '2px' }}><MapPin size={15} /></span>
                  <span><strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Dermapulse Clinic</strong><br/>719/25, 10th A Main, 4th Block, Jayanagar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — Social */}
          <div>
            <div className="footer-section-label">Follow Us</div>
            <p className="text-body" style={{ marginBottom: '1.25rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Stay connected for surgical updates and patient stories.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                { label: 'FB', href: 'https://facebook.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { label: 'IG', href: 'https://instagram.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { label: 'TW', href: 'https://twitter.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
                { label: 'LI', href: 'https://linkedin.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="container footer-bottom">
            <div className="footer-links">
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-credits credit-line">
              <span>Powered by</span>
              <span className="appvertex-badge">A</span>
              <span style={{ fontWeight: 600 }}>Appvertex</span>
              <span className="footer-dot">·</span>
              <span>Built by Leston &amp; Lenstar</span>
            </div>

            <span className="footer-copyright">© {new Date().getFullYear()} Dr. Suhas S Kumar. All rights reserved.</span>
          </div>
        </div>
      </footer>
            </div>
          </div>
        </div>
      </footer>

      {/* Premium Bottom Navigation for Mobile */}
      {/* We add z-index to make sure it floats over the fixed footer */}
      <nav className="bottom-nav" style={{ zIndex: 100 }}>
        <NavLink to="/" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`} end>
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
          <Activity size={20} />
          <span>Services</span>
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
          <ImageIcon size={20} />
          <span>Gallery</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
          <Phone size={20} />
          <span>Contact</span>
        </NavLink>
      </nav>

      {/* Floating Global Widgets */}
      <div style={{ zIndex: 100, position: 'relative' }}>
        <FloatingWhatsApp />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

