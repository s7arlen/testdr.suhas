import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80', title: 'Modern Environment', aspect: '1/1' },
  { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80', title: 'Clinical Precision', aspect: '4/3' },
  { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80', title: 'Patient Consultation', aspect: '3/4' },
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80', title: 'Guided Recovery', aspect: '16/9' },
];

export default function Gallery() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Clinic & Care</div>
          <h2 className="h-2">A visual narrative of<br/><span className="text-gradient">technology and calm.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '32px', aspectRatio: img.aspect }}
              className="gallery-card"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
                className="gallery-img"
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '2rem'
              }} className="gallery-overlay">
                <span style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.25rem' }}>{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .gallery-card:hover .gallery-img {
            transform: scale(1.05);
          }
          .gallery-card:hover .gallery-overlay {
            opacity: 1;
          }
        `}} />
      </div>
    </section>
  );
}
