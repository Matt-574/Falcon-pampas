import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ThesisHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
      height: '100vh', 
      backgroundColor: 'var(--color-blue-deep)', 
      color: 'var(--color-white-ivory)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Line Graph Background */}
      <svg 
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', opacity: 0.2 }}
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,80 C20,70 40,90 60,60 S80,20 100,10"
          fill="none"
          stroke="var(--color-white-ivory)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        {/* Fill area under curve */}
        <motion.path
          d="M0,80 C20,70 40,90 60,60 S80,20 100,10 V100 H0 Z"
          fill="url(#gradient)"
          stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-white-ivory)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-blue-deep)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div style={{ textAlign: 'center', zIndex: 1, maxWidth: '900px', padding: '0 2rem' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ 
            fontSize: '4rem', 
            fontFamily: 'var(--font-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}
        >
          {t('thesis_page.hero.title')}
        </motion.h1>
         <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ 
            fontSize: '1.5rem', 
            fontFamily: 'var(--font-secondary)',
            fontWeight: 300,
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >
          {t('thesis_page.hero.subtitle')}
        </motion.h2>
      </div>
    </section>
  );
};

export default ThesisHero;
