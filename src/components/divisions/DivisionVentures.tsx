import React from 'react';
import { useTranslation } from 'react-i18next';

const DivisionVentures: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
        padding: '8rem 2rem', 
        backgroundColor: '#111', 
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(0,0,0,0) 70%)' }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Content */}
        <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff' }}>FP-TECH</h2>
                <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'cyan' }}>{t('divisions_page.tech.subtitle')}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#ccc' }}>{t('divisions_page.tech.title')}</h3>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '1.1rem' }}>{t('divisions_page.tech.desc_1')}</p>
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '1.1rem' }}>{t('divisions_page.tech.desc_2')}</p>
        </div>

        {/* Visual: Tech/Lab */}
         <div style={{ position: 'relative' }}>
             <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Tech Lab" 
              style={{ width: '100%', borderRadius: '4px', filter: 'contrast(1.2) brightness(0.8)' }} 
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '4px', background: 'cyan' }}></div>
        </div>

      </div>
    </section>
  );
};

export default DivisionVentures;
