import React from 'react';
import { useTranslation } from 'react-i18next';

const SchoolNewsletter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: '#fcf8f2', color: '#333', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-primary)' }}>{t('school_page.newsletter.title')}</h2>
        <p style={{ fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6 }}>{t('school_page.newsletter.text')}</p>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
                type="email" 
                placeholder={t('school_page.newsletter.placeholder')} 
                style={{ 
                    flex: 1, 
                    padding: '1rem', 
                    border: '1px solid #ccc', 
                    borderRadius: '2px',
                    fontSize: '1rem' 
                }}
            />
            <button style={{
                padding: '1rem 2rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '2px',
                fontWeight: 700,
                cursor: 'pointer'
            }}>
                {t('school_page.newsletter.cta')}
            </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolNewsletter;
