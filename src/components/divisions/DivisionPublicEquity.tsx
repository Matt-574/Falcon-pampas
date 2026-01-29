import React from 'react';
import { useTranslation } from 'react-i18next';

const DivisionPublicEquity: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
        padding: '8rem 2rem', 
        backgroundColor: '#f5f5f5', 
        color: '#000',
        borderTop: '1px solid #ddd'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        
        {/* Visual: Boardroom */}
        <div style={{ position: 'relative', order: 2 }}>
             <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Boardroom" 
              style={{ width: '100%', filter: 'grayscale(100%)', borderRadius: '2px' }} 
            />
        </div>

        {/* Content */}
        <div style={{ order: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>FP-EQUITY</h2>
                <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#666' }}>{t('divisions_page.equity.subtitle')}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textTransform: 'uppercase' }}>{t('divisions_page.equity.title')}</h3>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>{t('divisions_page.equity.desc_1')}</p>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>{t('divisions_page.equity.desc_2')}</p>
        </div>

      </div>
    </section>
  );
};

export default DivisionPublicEquity;
