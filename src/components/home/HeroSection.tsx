import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InvestmentModal from './InvestmentModal';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToIdentity = () => {
    const section = document.getElementById('identity-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{ 
      height: '100vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      color: 'var(--color-white)'
    }}>
      {/* Video Background */}
      <video
        src="/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: -2,
        }}
      />

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(26, 39, 68, 0.55)',
        zIndex: -1
      }} />

      <div style={{ textAlign: 'center', padding: '0 2rem', maxWidth: '1200px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Decorative Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ width: '180px', height: '2px', backgroundColor: 'var(--color-gold-imperial)', marginBottom: '2rem' }}
        />

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ 
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            marginBottom: '1rem', 
            fontWeight: 700,
            letterSpacing: '2px',
            lineHeight: 1.1,
            color: 'var(--color-white)'
          }}
          dangerouslySetInnerHTML={{ __html: t('hero.title') }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ 
            fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', 
            marginBottom: '1rem', 
            fontFamily: 'var(--font-secondary)',
            fontWeight: 500,
            maxWidth: '900px',
            color: 'var(--color-white)'
          }}
        >
          {t('hero.subtitle_1')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
             fontSize: '1.1rem',
             marginBottom: '3rem',
             fontFamily: 'var(--font-secondary)',
             fontWeight: 300,
             opacity: 0.9
          }}
        >
          {t('hero.subtitle_2')}
        </motion.p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ backgroundColor: 'var(--color-white)', color: 'var(--color-navy-deep)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            style={{
              backgroundColor: 'var(--color-gold-imperial)',
              color: 'var(--color-navy-deep)',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {t('hero.cta_invest')}
          </motion.button>

          <Link to="/tesis">
            <motion.button
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.3, delay: 0.9 }}
               style={{
                 backgroundColor: 'transparent',
                 color: 'var(--color-white)',
                 border: '1px solid var(--color-white)',
                 padding: '1rem 2.5rem',
                 fontSize: '1rem',
                 fontWeight: 600,
                 cursor: 'pointer',
                 transition: 'var(--transition-smooth)',
                 fontFamily: 'var(--font-mono)'
               }}
            >
               {t('hero.cta_thesis')}
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'max-content',
          zIndex: 10
        }}
      >
        <motion.div
          onClick={scrollToIdentity}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            color: 'var(--color-white)',
            opacity: 0.7,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', display: 'block' }}>{t('hero.scroll')}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </motion.div>
      </div>

      {/* Investment Modal */}
      <InvestmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default HeroSection;
