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
      backgroundColor: 'var(--color-navy-deep)',
      color: 'var(--color-white-ivory)'
    }}>
      
      {/* Background Image */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <img 
            src="/images/school-hero-bg.png" 
            alt="Escuela Background" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Overlay */}
        <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'linear-gradient(rgba(10, 17, 32, 0.6), rgba(10, 17, 32, 0.6))' 
        }} />
      </div>

      {/* Decorative Gold Curve Animation */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.3 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M-100,600 C300,400 600,800 1500,200"
            stroke="var(--color-gold-imperial)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
           <motion.path
            d="M-100,700 C400,500 800,900 1500,300"
            stroke="var(--color-gold-imperial)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
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
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
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
                EXPLORAR CURRICULUM
            </motion.button>

             <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => document.getElementById('falcon-index')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                    padding: '1rem 3rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    backgroundColor: 'transparent',
                    color: 'var(--color-gold-imperial)',
                    border: '2px solid var(--color-gold-imperial)',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    letterSpacing: '1px'
                }}
            >
                VER GRÁFICOS HISTÓRICOS
            </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SchoolHero;
