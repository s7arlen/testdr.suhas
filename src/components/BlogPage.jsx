import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    slug: 'understanding-laparoscopic-surgery',
    title: 'Understanding Laparoscopic Surgery: What to Expect',
    excerpt: 'Laparoscopy has revolutionized surgery. Learn about the benefits of minimally invasive procedures, preparation, and what to expect during recovery.',
    date: 'Oct 12, 2025',
    author: 'Dr. Suhas S Kumar',
    category: 'Laparoscopy',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'recovery-after-hernia-repair',
    title: 'Recovery After Hernia Repair: A Patient Guide',
    excerpt: 'A successful recovery depends heavily on post-operative care. Read our comprehensive guide on resting, movement, and returning to daily activities safely.',
    date: 'Sep 28, 2025',
    author: 'Dr. Suhas S Kumar',
    category: 'Hernia Care',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'managing-diabetic-foot-ulcers',
    title: 'Managing Diabetic Foot Ulcers: Treatment and Care',
    excerpt: 'Diabetic foot complications require immediate, expert attention. Learn about wound care, infection control, and when surgical intervention is necessary.',
    date: 'Aug 15, 2025',
    author: 'Dr. Suhas S Kumar',
    category: 'Diabetic Foot',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'varicose-veins-laser-vs-traditional',
    title: 'Varicose Veins: Modern Laser vs Traditional Surgery',
    excerpt: 'Explore the differences between endovenous laser treatment and traditional surgical vein stripping, focusing on recovery times and clinical outcomes.',
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
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function BlogPage() {
  return (
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
              style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}
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
  );
}
