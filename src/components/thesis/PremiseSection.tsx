import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PremiseSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-white-ivory)', color: 'var(--color-blue-deep)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Infographic Placeholder */}
        <div style={{ position: 'relative', height: '400px', borderLeft: '2px solid #ccc', borderBottom: '2px solid #ccc', padding: '1rem' }}>
            <span style={{ position: 'absolute', top: 0, left: '-30px', transform: 'rotate(-90deg)', transformOrigin: 'left top', color: '#888' }}>Value / Price</span>
            <span style={{ position: 'absolute', bottom: '-30px', right: 0, color: '#888' }}>Time</span>
            
            {/* Intrinsic Value Line (Straight) */}
            <div style={{ 
                position: 'absolute', top: '30%', left: 0, width: '100%', height: '2px', 
                backgroundColor: 'var(--color-blue-deep)', borderTop: '2px dashed var(--color-blue-deep)' 
            }} />
            <span style={{ position: 'absolute', top: '25%', right: '10px', fontWeight: 'bold' }}>Intrinsic Value</span>

            {/* Price Line (Oscillating) */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
               <path d="M0,100 Q25,0 50,150 T100,50" fill="none" stroke="red" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
            <span style={{ position: 'absolute', bottom: '20%', left: '20%', color: 'red', fontSize: '0.9rem' }}>Market Price</span>

            {/* Opportunity Zone */}
            <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               transition={{ delay: 0.5, type: 'spring' }}
               style={{ 
                   position: 'absolute', top: '65%', left: '48%', 
                   width: '40px', height: '40px', borderRadius: '50%', 
                   border: '2px solid var(--color-gold-imperial)',
                   backgroundColor: 'rgba(201, 169, 97, 0.2)',
                   display: 'grid', placeItems: 'center'
               }}
            >
                <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-gold-imperial)', borderRadius: '50%' }} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                style={{ position: 'absolute', top: '65%', left: '60%', color: 'var(--color-gold-imperial)', fontWeight: 'bold' }}
            >
                Falcon Opportunity Zone
            </motion.div>
        </div>

        {/* Text Content */}
        <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-blue-deep)' }}>{t('thesis_page.premise.title')}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{t('thesis_page.premise.text_1')}</p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{t('thesis_page.premise.text_2')}</p>
            <div style={{ 
                padding: '1.5rem', 
                borderLeft: '4px solid var(--color-gold-imperial)', 
                backgroundColor: 'rgba(201, 169, 97, 0.1)',
                fontStyle: 'italic',
                fontWeight: 600
            }}>
                {t('thesis_page.premise.text_3')}
            </div>
        </div>

      </div>
    </section>
  );
};

export default PremiseSection;
