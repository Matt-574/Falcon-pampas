import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DivisionsHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
      height: '80vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#000',
      color: 'var(--color-white-ivory)'
    }}>
      {/* Abstract 3D Video Placeholder */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
        backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80")', // Abstract geometric
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }} />
      
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', padding: '0 2rem' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            fontSize: '4rem', 
            marginBottom: '1.5rem', 
            textTransform: 'uppercase', 
            letterSpacing: '4px',
            color: 'var(--color-white-ivory)' 
          }}
        >
          {t('divisions_page.hero.title')}
        </motion.h1>
         <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: '1.4rem', 
            fontFamily: 'var(--font-secondary)',
            fontWeight: 300,
            opacity: 0.9,
            lineHeight: 1.6
          }}
        >
          {t('divisions_page.hero.subtitle')}
        </motion.h2>
      </div>
    </section>
  );
};

export default DivisionsHero;
