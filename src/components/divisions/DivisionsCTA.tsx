import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Download, Mail } from 'lucide-react';

const DivisionsCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
        padding: '6rem 2rem', 
        backgroundColor: '#e6e6e6', 
        color: '#333',
        textAlign: 'center'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', fontWeight: 600 }}>{t('divisions_page.call_to_action.text')}</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <button style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                backgroundColor: 'var(--color-blue-deep)',
                color: '#fff',
                padding: '1rem 2rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.9rem',
                borderRadius: '2px'
            }}>
                <Download size={18} /> {t('divisions_page.call_to_action.btn_download')}
            </button>
            <Link to="/investor-relations" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                backgroundColor: 'transparent',
                color: 'var(--color-blue-deep)',
                padding: '1rem 2rem',
                border: '2px solid var(--color-blue-deep)',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.9rem',
                borderRadius: '2px'
            }}>
                <Mail size={18} /> {t('divisions_page.call_to_action.btn_contact')}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default DivisionsCTA;
