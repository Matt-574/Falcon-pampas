import React from 'react';
import { useTranslation } from 'react-i18next';

const FalconIndex: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: '#f4f4f4', color: '#333', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-blue-deep)' }}>{t('school_page.index.title')}</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>{t('school_page.index.text')}</p>

        {/* Mock Widget */}
        <div style={{ 
            backgroundColor: '#fff', 
            padding: '2rem', 
            borderRadius: '8px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginBottom: '3rem',
            textAlign: 'left'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 700, color: '#666' }}>INDEX ITEM</span>
                <span style={{ fontWeight: 700, color: '#666' }}>VALUE (REAL)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>1 m² Office (CABA)</span>
                <span style={{ color: 'green', fontWeight: 600 }}>4.2 Salaries</span>
            </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>1 Ton Soy</span>
                <span style={{ color: 'var(--color-gold-imperial)', fontWeight: 600 }}>0.8 iPhones</span>
            </div>
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Argentina ETF (ARGT)</span>
                <span style={{ color: 'blue', fontWeight: 600 }}>Undervalued (-35%)</span>
            </div>
        </div>

        <button style={{
            padding: '1rem 2rem',
            backgroundColor: 'var(--color-blue-deep)',
            color: '#fff',
            border: 'none',
            borderRadius: '2px',
            fontWeight: 700,
            cursor: 'pointer'
        }}>
            {t('school_page.index.cta')}
        </button>
      </div>
    </section>
  );
};

export default FalconIndex;
