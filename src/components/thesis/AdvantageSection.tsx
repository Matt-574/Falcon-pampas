import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AdvantageSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-blue-deep)', color: 'var(--color-white-ivory)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4rem', height: '300px', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '150px' }}>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Competition</span>
                <div style={{ width: '100%', height: '50px', backgroundColor: '#555', borderRadius: '4px 4px 0 0' }}></div>
                <span style={{ fontWeight: 'bold' }}>3 Months</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '150px' }}>
                <span style={{ fontSize: '0.9rem', opacity: 0.7, color: 'var(--color-gold-imperial)' }}>Falcon Pampas</span>
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '250px' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ width: '100%', backgroundColor: 'var(--color-gold-imperial)', borderRadius: '4px 4px 0 0' }}
                >
                </motion.div>
                <span style={{ fontWeight: 'bold', color: 'var(--color-gold-imperial)' }}>10 Years</span>
            </div>
        </div>

        <blockquote style={{ 
            fontSize: '1.5rem', 
            fontFamily: 'var(--font-primary)', 
            fontStyle: 'italic', 
            lineHeight: 1.6,
            borderLeft: '4px solid var(--color-gold-imperial)',
            paddingLeft: '2rem',
            textAlign: 'left',
            margin: '0 auto',
            maxWidth: '800px'
        }}>
            {t('thesis_page.advantage.quote')}
        </blockquote>

      </div>
    </section>
  );
};

export default AdvantageSection;
