import React from 'react';
import { useTranslation } from 'react-i18next';

const ScholarshipProgram: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
        padding: '8rem 2rem', 
        backgroundColor: '#1a1f2c', 
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Content */}
        <div style={{ zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-gold-imperial)' }}>{t('school_page.scholarship.title')}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.9 }}>
                {t('school_page.scholarship.text_1')}
            </p>
             <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', opacity: 0.9 }}>
                {t('school_page.scholarship.text_2')}
            </p>
             <button style={{
                padding: '1rem 2.5rem',
                backgroundColor: 'transparent',
                color: 'var(--color-gold-imperial)',
                border: '2px solid var(--color-gold-imperial)',
                borderRadius: '2px',
                fontWeight: 700,
                cursor: 'pointer'
            }}>
                {t('school_page.scholarship.cta')}
            </button>
        </div>

        {/* Visual: Map approximation + Person */}
        <div style={{ position: 'relative' }}>
             <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Entrepreneur" 
                style={{ width: '100%', borderRadius: '4px', opacity: 0.7 }}
            />
        </div>

      </div>
    </section>
  );
};

export default ScholarshipProgram;
