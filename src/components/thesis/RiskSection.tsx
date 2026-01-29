import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, RefreshCw, Scale } from 'lucide-react';

const RiskSection: React.FC = () => {
  const { t } = useTranslation();

  const risks = [
    {
      icon: <ShieldAlert size={40} />,
      title: t('thesis_page.risk.p1_title'),
      text: t('thesis_page.risk.p1_text')
    },
    {
      icon: <RefreshCw size={40} />,
      title: t('thesis_page.risk.p2_title'),
      text: t('thesis_page.risk.p2_text')
    },
    {
      icon: <Scale size={40} />,
      title: t('thesis_page.risk.p3_title'),
      text: t('thesis_page.risk.p3_text')
    }
  ];

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#f9f9f9', color: 'var(--color-blue-deep)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '4rem', textAlign: 'center' }}>{t('thesis_page.risk.title')}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {risks.map((risk, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-gold-imperial)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        {risk.icon}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 700 }}>{risk.title}</h3>
                    <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{risk.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
