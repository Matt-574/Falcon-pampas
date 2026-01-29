import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DivisionsSynergy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
        padding: '8rem 2rem', 
        backgroundColor: 'var(--color-blue-deep)', 
        color: 'var(--color-white-ivory)',
        textAlign: 'center'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-gold-imperial)' }}>{t('divisions_page.synergy.title')}</h2>
        
        {/* Simple visual representation of cycle */}
        <div style={{ margin: '3rem auto', width: '200px', height: '200px', position: 'relative' }}>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ 
                    width: '100%', height: '100%', 
                    borderRadius: '50%', 
                    border: '4px dashed var(--color-gold-imperial)',
                    opacity: 0.5
                }}
            />
            <div style={{ 
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                fontSize: '2rem', fontWeight: 700
            }}>
                X
            </div>
        </div>

        <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>{t('divisions_page.synergy.text')}</p>
      </div>
    </section>
  );
};

export default DivisionsSynergy;
