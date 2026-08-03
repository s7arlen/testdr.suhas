import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, Shield, HeartPulse } from 'lucide-react';

/* ─── Categorized Services Data ─── */
const categories = [
  {
    id: 'general-surgery',
    title: 'General Surgery',
    desc: 'Classical and emergency surgical procedures executed with highest precision.',
    icon: Activity,
    services: [
      {
        title: 'Breast Surgery & Breast Onco Surgery',
        tag: 'Breast Care',
        desc: 'Compassionate management of benign breast diseases and advanced surgical oncology.',
        slug: '/services/breast-surgery',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Thyroid Surgery',
        tag: 'Endocrine Care',
        desc: 'Precise glandular surgery prioritizing nerve preservation and optimal functional outcomes.',
        slug: '/services/thyroid-surgery',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Piles, Fissure, Fistula & Pilonidal Sinus',
        tag: 'Anorectal',
        desc: 'Comprehensive evaluation and surgical management for chronic anorectal concerns.',
        slug: '/services/piles-fissure-fistula',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Amputations, Excision & Circumcision',
        tag: 'Minor & General',
        desc: 'Standard general surgeries performed safely with modern aseptic protocols and wound care.',
        slug: '/contact',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Trauma & Emergency Surgery',
        tag: 'Emergency Care',
        desc: 'Urgent, high-precision surgical interventions for trauma injuries and acute abdominal pain.',
        slug: '/services/trauma-emergency-surgery',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'laser-procedures',
    title: 'Laser Procedures',
    desc: 'Advanced laser-guided interventions for minimal pain, no stitches, and rapid recovery.',
    icon: Zap,
    services: [
      {
        title: 'Laser Treatment For Fissure',
        tag: 'Laser Proctology',
        desc: 'Minimally invasive laser therapy providing quick healing and pain relief for anal fissures.',
        slug: '/services/piles-fissure-fistula',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Laser Treatment For Fistula',
        tag: 'Laser Proctology',
        desc: 'Advanced laser closure of fistula tracks without damage to surrounding muscles.',
        slug: '/services/piles-fissure-fistula',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Laser Piles Treatment',
        tag: 'Laser Proctology',
        desc: 'Precision laser coagulation of hemorrhoids under local or general anesthesia for faster recovery.',
        slug: '/services/piles-fissure-fistula',
        image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Laser Varicose Veins Surgery',
        tag: 'Vascular Care',
        desc: 'Endovenous laser ablation to treat varicose veins and restore normal leg circulation.',
        slug: '/services/varicose-vein-surgery',
        image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'laparoscopic-surgery',
    title: 'Laparoscopic Surgery',
    desc: 'Keyhole procedures utilizing cameras for smaller scars, less pain, and faster healing.',
    icon: Shield,
    services: [
      {
        title: 'Hernia Surgery',
        tag: 'Abdominal Wall',
        desc: 'Laparoscopic repair of inguinal, umbilical, and incisional hernias to restore abdominal strength.',
        slug: '/services/hernia-surgery',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gall Bladder Surgery',
        tag: 'Hepatobiliary',
        desc: 'Laparoscopic cholecystectomy for gallstones and acute/chronic gallbladder inflammation.',
        slug: '/services/gallbladder-surgery',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gastrointestinal Surgery',
        tag: 'Digestive Tract',
        desc: 'Thoughtful laparoscopic care for stomach, appendix, and bowel conditions.',
        slug: '/services/gastrointestinal-surgery',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'foot-care',
    title: 'Foot Care',
    desc: 'Specialized diagnostic and surgical management for lower limb and diabetic complications.',
    icon: HeartPulse,
    services: [
      {
        title: 'Diabetic Foot Ulcer',
        tag: 'Wound Care',
        desc: 'Multidisciplinary treatment of diabetic ulcers to promote healing and control infections.',
        slug: '/services/diabetic-foot-surgery',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gangrene Toes',
        tag: 'Limb Salvage',
        desc: 'Surgical management and restoration of perfusion to save limbs and prevent spread of necrosis.',
        slug: '/services/diabetic-foot-surgery',
        image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Bone Abnormalities',
        tag: 'Structural Care',
        desc: 'Expert corrective guidance and surgical options for bone abnormalities and pressure points.',
        slug: '/contact',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Varicose Veins Ulcer',
        tag: 'Venous Care',
        desc: 'Surgical and compression therapy for ulcers secondary to chronic varicose veins.',
        slug: '/services/varicose-vein-surgery',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Nail Abnormalities',
        tag: 'Podiatry',
        desc: 'Surgical excision or corrective treatment for ingrown, thick, or deformed toe nails.',
        slug: '/contact',
        image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

function SegmentedPillToggle({ categories, activeTab, onSelect }) {
  return (
    <div style={{
      display: 'inline-flex',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '16px',
      padding: '5px',
      gap: '4px',
      flexWrap: 'wrap',
    }}>
      {categories.map((cat) => {
        const isActive = activeTab === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            style={{
              position: 'relative',
              padding: '0.7rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem',
              fontWeight: isActive ? 600 : 500,
              color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
              transition: 'color 0.25s ease',
              zIndex: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {/* Sliding pill background */}
            {isActive && (
              <motion.div
                layoutId="pill-indicator"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--accent-gold)',
                  boxShadow: 'var(--shadow-sm)',
                  zIndex: -1,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {cat.title}
          </button>
        );
      })}
    </div>
  );
}

function SubServiceCard({ service, index }) {
  const isClickable = !!service.slug;
  const CardContent = (
    <>
      {/* Background Image */}
      <img
        src={service.image}
        alt={service.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
        loading="lazy"
      />
      
      {/* Adaptive Theme Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--card-image-overlay)',
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            background: 'var(--card-overlay-surface)',
            padding: '0.3rem 0.75rem',
            borderRadius: '999px',
            backdropFilter: 'var(--blur-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            {service.tag}
          </span>
          
          {isClickable && (
            <div className="arrow-badge" style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--card-overlay-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              backdropFilter: 'var(--blur-md)',
              border: '1px solid var(--border-subtle)',
              transition: 'transform 0.3s ease'
            }}>
              <ArrowRight size={14} />
            </div>
          )}
        </div>

        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem', 
            fontWeight: 600,
            marginBottom: '0.5rem', 
            color: 'var(--text-primary)',
            lineHeight: 1.25
          }}>
            {service.title}
          </h4>
          
          <p style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.5, 
            margin: 0 
          }}>
            {service.desc}
          </p>
        </div>
      </div>
    </>
  );

  const containerStyle = {
    position: 'relative',
    borderRadius: '24px',
    overflow: 'hidden',
    height: '340px',
    padding: '1.75rem',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--border-subtle)',
    cursor: isClickable ? 'pointer' : 'default',
    display: 'block',
    textDecoration: 'none'
  };

  if (isClickable) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <Link 
          to={service.slug}
          style={containerStyle}
          className="sub-service-card"
        >
          {CardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={containerStyle}
    >
      {CardContent}
    </motion.div>
  );
}

export default function ServicesCategorized() {
  const [activeTab, setActiveTab] = useState('general-surgery');

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', zIndex: 1, paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '700px', marginBottom: '4rem' }}>
          <div className="text-eyebrow" style={{ marginBottom: '1.25rem' }}>Service Directory</div>
          <h2 className="h-2" style={{ marginBottom: '1.25rem' }}>
            Comprehensive clinical <span className="text-gradient">expertise.</span>
          </h2>
          <p className="text-lead" style={{ fontSize: '1.1rem' }}>
            Navigate our specialized surgical treatments and advanced procedures structured by clinical category.
          </p>
        </div>

        {/* 1. Segmented Pill Toggle */}
        <div style={{ marginBottom: '3rem' }}>
          <SegmentedPillToggle
            categories={categories}
            activeTab={activeTab}
            onSelect={setActiveTab}
          />
        </div>

        {/* 2. Sub-Services Grid Container */}
        <div style={{ minHeight: '380px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}
            >
              {activeCategory.services.map((service, idx) => (
                <SubServiceCard
                  key={service.title}
                  service={service}
                  index={idx}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Embedded CSS for custom styling states like hover arrow animations */}
      <style>{`
        .sub-service-card:hover .arrow-badge {
          transform: translateX(4px);
          color: var(--accent-gold);
          border-color: var(--accent-gold);
        }
      `}</style>
    </section>
  );
}
