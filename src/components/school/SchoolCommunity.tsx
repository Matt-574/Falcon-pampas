import React from 'react';
import { useTranslation } from 'react-i18next';

const SchoolCommunity: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#fff', color: '#333' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
                <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>
                    {t('school_page.community.q1')}
                </p>
                <span style={{ fontWeight: 700, color: 'var(--color-blue-deep)' }}>{t('school_page.community.a1')}</span>
            </div>
            <div>
                 <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>
                    {t('school_page.community.q2')}
                </p>
                <span style={{ fontWeight: 700, color: 'var(--color-blue-deep)' }}>{t('school_page.community.a2')}</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SchoolCommunity;
