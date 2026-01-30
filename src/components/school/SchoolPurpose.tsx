import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SchoolPurpose: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#fff', color: '#000' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Text */}
        <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', letterSpacing: '-1px' }}>{t('school_page.purpose.title')}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#333' }}>
                {t('school_page.purpose.text_1')}
            </p>
             <div style={{ borderLeft: '3px solid #000', paddingLeft: '1.5rem' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 500 }}>
                    {t('school_page.purpose.text_2')}
                </p>
            </div>
        </div>

        {/* Visual: Image moved from Hero */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', height: '100%', minHeight: '400px', borderRadius: '4px', overflow: 'hidden' }}
        >
            <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="School Purpose" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)' }}
            />
        </motion.div>

      </div>
    </section>
  );
};

export default SchoolPurpose;
