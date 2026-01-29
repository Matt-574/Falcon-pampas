import React from 'react';
import { useTranslation } from 'react-i18next';

const DivisionPrivateEquity: React.FC = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      title: t('divisions_page.real.sectors.s1_title'),
      text: t('divisions_page.real.sectors.s1_text'),
      img: "https://images.unsplash.com/photo-1625246333195-bf8f7e710471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('divisions_page.real.sectors.s2_title'),
      text: t('divisions_page.real.sectors.s2_text'),
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t('divisions_page.real.sectors.s3_title'),
      text: t('divisions_page.real.sectors.s3_text'),
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#eaddcf', color: '#3d3d3d' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#5a4632', marginBottom: '0.5rem' }}>FP-REAL</h2>
            <h3 style={{ fontSize: '1.5rem', color: '#8c7354', marginBottom: '2rem' }}>{t('divisions_page.real.title')} — {t('divisions_page.real.subtitle')}</h3>
            <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>{t('divisions_page.real.desc')}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {sectors.map((sector, idx) => (
                <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div style={{ height: '200px', backgroundImage: `url(${sector.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div style={{ padding: '2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', color: '#5a4632', marginBottom: '1rem', fontWeight: 700 }}>{sector.title}</h4>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{sector.text}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionPrivateEquity;
