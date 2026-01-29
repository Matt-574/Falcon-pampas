import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart3, Shield, Briefcase } from 'lucide-react';

const DivisionCapitalMarkets: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
        padding: '8rem 2rem', 
        backgroundColor: '#f0f4f8', 
        color: 'var(--color-blue-deep)',
        borderTop: '1px solid #ddd'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Content */}
        <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-blue-deep)' }}>FP-CAP</h2>
                <span style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#666' }}>{t('divisions_page.cap.subtitle')}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-gold-imperial)' }}>{t('divisions_page.cap.title')}</h3>
            
            <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>{t('divisions_page.cap.desc_1')}</p>
            <p style={{ marginBottom: '2.5rem', lineHeight: 1.6 }}>{t('divisions_page.cap.desc_2')}</p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                    <BarChart3 size={24} color="var(--color-blue-deep)" />
                    <div>
                        <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Deuda Soberana y Provincial</strong>
                        <span style={{ opacity: 0.8, fontSize: '0.95rem' }}>{t('divisions_page.cap.points.p1')}</span>
                    </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                    <Shield size={24} color="var(--color-blue-deep)" />
                    <div>
                        <strong style={{ display: 'block', marginBottom: '0.2rem' }}>BOPREAL</strong>
                        <span style={{ opacity: 0.8, fontSize: '0.95rem' }}>{t('divisions_page.cap.points.p2')}</span>
                    </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                    <Briefcase size={24} color="var(--color-blue-deep)" />
                    <div>
                        <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Corporate Finance</strong>
                        <span style={{ opacity: 0.8, fontSize: '0.95rem' }}>{t('divisions_page.cap.points.p3')}</span>
                    </div>
                </li>
            </ul>
        </div>

        {/* Visual: Bloomberg Screens vibe */}
        <div style={{ position: 'relative' }}>
             <img 
              src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Trading Screens" 
              style={{ width: '100%', borderRadius: '2px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
            {/* Ticker overlay simulation */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                backgroundColor: 'rgba(12, 29, 54, 0.9)',
                padding: '1rem',
                color: '#0f0',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <span>AL30D: $62.50 (+1.2%)</span>
                <span>GD30D: $68.10 (+0.8%)</span>
                <span>RP: 980bps</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DivisionCapitalMarkets;
