import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Landmark, Factory, ArrowRight } from 'lucide-react';

const FalconModelSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-blue-midnight)', color: 'var(--color-white-ivory)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--color-gold-imperial)' }}>
            {t('thesis_page.model.title')}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'start' }}>
            
            {/* Column 1: Fuel */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '4px' }}
            >
                <div style={{ color: 'var(--color-gold-imperial)', marginBottom: '1rem' }}><Landmark size={40} /></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('thesis_page.model.col_1_title')}</h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9 }}>{t('thesis_page.model.col_1_text')}</p>
            </motion.div>

            {/* Center: Flow */}
            <div style={{ alignSelf: 'center', color: 'var(--color-gold-imperial)' }}>
                <ArrowRight size={40} />
            </div>

            {/* Column 2: Destination */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '4px' }}
            >
                <div style={{ color: 'var(--color-gold-imperial)', marginBottom: '1rem' }}><Factory size={40} /></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{t('thesis_page.model.col_2_title')}</h3>
                <p style={{ lineHeight: 1.6, opacity: 0.9 }}>{t('thesis_page.model.col_2_text')}</p>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FalconModelSection;
