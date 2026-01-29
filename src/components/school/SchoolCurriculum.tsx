import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, CandlestickChart, Tractor } from 'lucide-react';

const SchoolCurriculum: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <Shield size={40} />,
      title: t('school_page.curriculum.p1_title'),
      desc: t('school_page.curriculum.p1_desc'),
      featured: t('school_page.curriculum.p1_class')
    },
    {
      icon: <CandlestickChart size={40} />,
      title: t('school_page.curriculum.p2_title'),
      desc: t('school_page.curriculum.p2_desc'),
      featured: t('school_page.curriculum.p2_class')
    },
    {
      icon: <Tractor size={40} />,
      title: t('school_page.curriculum.p3_title'),
      desc: t('school_page.curriculum.p3_desc'),
      featured: t('school_page.curriculum.p3_class')
    }
  ];

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#111', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {pillars.map((p, idx) => (
                <div key={idx} style={{ 
                    padding: '3rem', 
                    backgroundColor: '#1a1a1a', 
                    borderRadius: '4px',
                    border: '1px solid #333',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                }}>
                    <div style={{ color: 'var(--color-gold-imperial)', marginBottom: '1.5rem' }}>{p.icon}</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>{p.title}</h3>
                    <p style={{ color: '#ccc', lineHeight: 1.6, marginBottom: '2rem', height: '80px' }}>{p.desc}</p>
                    
                    <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', borderLeft: '2px solid var(--color-gold-imperial)' }}>
                        <span style={{ fontSize: '0.9rem', color: '#fff', fontStyle: 'italic' }}>{p.featured}</span>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default SchoolCurriculum;
