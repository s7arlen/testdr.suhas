import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen, X } from 'lucide-react';
import SEO from '../components/SEO';
import { PageWrapper } from '../components/common';
import { siteSettings } from '../config/siteSettings';
import { organizationSchema, breadcrumbSchema } from '../data/content';

const blogPosts = [
  {
    slug: 'understanding-laparoscopic-surgery',
    title: 'Understanding Laparoscopic Surgery: What to Expect',
    excerpt: 'Laparoscopy has revolutionized surgery. Learn about the benefits of minimally invasive procedures, preparation, and what to expect during recovery.',
    content: `Laparoscopic surgery, often referred to as keyhole surgery, represents one of the most significant advancements in modern surgical practice. By utilizing small incisions typically ranging from 0.5 to 1.5 centimeters, surgeons insert a high-definition camera (laparoscope) and specialized instruments to perform complex operations with high visual precision.

### Key Advantages of Laparoscopy
- **Significantly Reduced Pain**: Smaller incisions lead to less tissue trauma and significantly reduced postoperative discomfort.
- **Shorter Hospitalization**: Most patients are discharged within 24 to 48 hours following surgery.
- **Faster Return to Daily Routine**: Patients generally resume normal daily activities within 1 to 2 weeks.
- **Minimal Scarring**: Scars are minimal and fade considerably over time.

### Preparing for Surgery
Prior to laparoscopic surgery, Dr. Suhas conducts a thorough clinical evaluation, pre-operative blood work, and imaging. Detailed instructions regarding fasting and medication management are provided to ensure optimal patient safety.`,
    date: 'Oct 12, 2025',
    author: 'Dr. Suhas S Kumar',
    category: 'Laparoscopy',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'recovery-after-hernia-repair',
    title: 'Recovery After Hernia Repair: A Patient Guide',
    excerpt: 'A successful recovery depends heavily on post-operative care. Read our comprehensive guide on resting, movement, and returning to daily activities safely.',
    content: `Recovering from hernia repair requires a balanced approach between rest and gentle, progressive movement. Whether undergoing laparoscopic mesh repair or traditional open surgery, adhering to medical guidelines accelerates healing and minimizes recurrence risk.

### Post-Operative Care Guidelines
- **Avoid Heavy Lifting**: Refrain from lifting anything over 5 kg for at least 4 to 6 weeks.
- **Wound Care**: Keep the incision site clean and dry. Follow dressing change instructions meticulously.
- **Dietary Management**: Maintain a high-fiber diet and stay well-hydrated to prevent constipation and strain on abdominal muscles.
- **Gradual Activity**: Gentle walking is encouraged from the first day to promote circulation and prevent blood clots.`,
    date: 'Sep 28, 2025',
    author: 'Dr. Suhas S Kumar',
    category: 'Hernia Care',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'managing-diabetic-foot-ulcers',
    title: 'Managing Diabetic Foot Ulcers: Treatment and Care',
    excerpt: 'Diabetic foot complications require immediate, expert attention. Learn about wound care, infection control, and when surgical intervention is necessary.',
    content: `Diabetic foot ulcers are serious complications of diabetes requiring prompt multidisciplinary care. Poor blood circulation and peripheral neuropathy mean minor injuries can escalate quickly if unmonitored.

### Prevention & Daily Inspection
- Inspect feet daily for cuts, blisters, redness, or swelling.
- Keep feet clean and well-moisturized (avoiding between toes).
- Wear comfortable, well-fitted footwear designed for diabetic feet.

### Clinical & Surgical Management
Early surgical debridement of non-viable tissue, specialized offloading dressings, and strict glycemic control are key steps to promote ulcer healing and prevent limb loss.`,
    date: 'Aug 15, 2025',
    author: 'Dr. Suhas S Kumar',
    category: 'Diabetic Foot',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'varicose-veins-laser-vs-traditional',
    title: 'Varicose Veins: Modern Laser vs Traditional Surgery',
    excerpt: 'Explore the differences between endovenous laser treatment and traditional surgical vein stripping, focusing on recovery times and clinical outcomes.',
    content: `Varicose veins cause pain, leg heaviness, and aesthetic concerns. Modern endovenous laser ablation (EVLA) has transformed vascular surgical care.

### Laser Ablation vs Open Stripping
- **Laser Treatment (EVLA)**: Performed under local anesthesia as a day-care procedure. Uses thermal energy to seal diseased veins internally. No large incisions or stitches required.
- **Recovery Comparison**: Patients undergoing laser treatment walk out immediately after the procedure and resume work within 48 hours, compared to 2-3 weeks for traditional vein stripping.`,
    date: 'Jul 22, 2025',
    author: 'Dr. Suhas S Kumar',
    category: 'Vein Surgery',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    if (selectedPost) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  return (
    <PageWrapper>
      <SEO
        title="Medical Articles & Surgical Guides"
        description="Articles and patient guides on laparoscopic surgery, hernia care, diabetic foot, and recovery by Dr. Suhas S Kumar."
        pathname="/blog"
        schema={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', item: `${siteSettings.siteUrl}/` },
            { name: 'Blog', item: `${siteSettings.siteUrl}/blog` }
          ])
        ]}
      />
      <section className="section" style={{ paddingTop: '160px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
        <div className="container">
          
          {/* Page Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <BookOpen size={36} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
            <div className="text-eyebrow" style={{ marginBottom: '1rem' }}>Knowledge & Resources</div>
            <h1 className="h-1" style={{ marginBottom: '1.5rem' }}>
              Medical Insights & <span className="text-gradient">Health Guides</span>
            </h1>
            <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Articles and guides on advanced surgical treatments, recovery tips, and clinical updates curated by Dr. Suhas S Kumar.
            </p>
          </div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.slug}
                variants={cardVariants}
                className="editorial-card"
                onClick={() => setSelectedPost(post)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPost(post);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Read full article: ${post.title}`}
                style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', cursor: 'pointer' }}
              >
                {/* Image Frame */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--accent-gold)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {post.category}
                  </span>
                </div>

                {/* Text Body */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  
                  {/* Meta details */}
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <User size={14} /> {post.author}
                    </span>
                  </div>

                  <h3 className="h-3" style={{ marginBottom: '1rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h3>
                  
                  <p className="text-body" style={{ flex: 1, marginBottom: '2rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent-gold)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Read Full Article <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--bg-primary)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '2.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              <button
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                }}
              >
                <X size={20} />
              </button>

              <span style={{
                display: 'inline-block',
                background: 'var(--border-subtle)',
                padding: '0.3rem 0.8rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}>
                {selectedPost.category}
              </span>

              <h2 className="h-2" style={{ marginBottom: '1rem', lineHeight: 1.2 }}>
                {selectedPost.title}
              </h2>

              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} /> {selectedPost.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <User size={14} /> {selectedPost.author}
                </span>
              </div>

              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '16px', marginBottom: '2rem' }}
              />

              <div style={{ whiteSpace: 'pre-line', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                {selectedPost.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
