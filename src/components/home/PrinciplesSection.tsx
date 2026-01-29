import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PrinciplesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="principles" style={{ 
      padding: '8rem 2rem', 
      backgroundColor: 'var(--color-white-ivory)', 
      color: 'var(--color-blue-deep)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        
        {/* Text Column */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 700, 
            marginBottom: '3rem', 
            lineHeight: 1.1,
            color: 'var(--color-blue-deep)'
          }}>
            {t('principles.title')}
          </h2>
          
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'var(--font-secondary)', color: '#333' }}>
            <p style={{ marginBottom: '1.5rem' }}>{t('principles.body_1')}</p>
            <p style={{ marginBottom: '1.5rem' }}>{t('principles.body_2')}</p>
            <p style={{ fontWeight: 600, borderLeft: '4px solid var(--color-gold-imperial)', paddingLeft: '1rem' }}>
              {t('principles.body_3')}
            </p>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           style={{ position: 'relative' }}
        >
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '-20px',
                width: '100%',
                height: '100%',
                border: '1px solid var(--color-gold-imperial)',
                zIndex: 0
            }} />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" // Handshake meeting placeholder
              alt="Business Meeting" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                filter: 'grayscale(100%) contrast(120%)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                position: 'relative',
                zIndex: 1
              }} 
            />
        </motion.div>

      </div>
    </section>
  );
};

export default PrinciplesSection;
