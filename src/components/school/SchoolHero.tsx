import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SchoolHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
      height: '90vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      color: 'var(--color-white-ivory)'
    }}>
      {/* Video Placeholder - Cinematic/Human */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Study" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) desaturate(0.3)' }}
        />
      </div>
      
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1.5rem', 
            fontWeight: 700,
            lineHeight: 1.2
          }}
        >
          {t('school_page.hero.title')}
        </motion.h1>
         <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: '1.25rem', 
            opacity: 0.9,
            lineHeight: 1.6,
            marginBottom: '3rem'
          }}
        >
          {t('school_page.hero.subtitle')}
        </motion.p>
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
                padding: '1rem 3rem',
                fontSize: '1rem',
                fontWeight: 700,
                backgroundColor: 'var(--color-gold-imperial)',
                color: 'var(--color-blue-deep)',
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
                letterSpacing: '1px'
            }}
        >
            {t('school_page.hero.cta')}
        </motion.button>
      </div>
    </section>
  );
};

export default SchoolHero;
