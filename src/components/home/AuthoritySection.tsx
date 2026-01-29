import React from 'react';
import { useTranslation } from 'react-i18next';

const AuthoritySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="authority" style={{ 
      padding: '8rem 2rem', 
      backgroundColor: 'var(--color-blue-deep)', 
      color: 'var(--color-white-ivory)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ 
            fontSize: '1rem', 
            color: 'var(--color-gold-imperial)', 
            textTransform: 'uppercase', 
            letterSpacing: '3px',
            marginBottom: '4rem'
        }}>
            {t('authority.title')}
        </h2>

        <div style={{ position: 'relative', marginBottom: '4rem' }}>
            <span style={{ 
                position: 'absolute', 
                top: '-40px', 
                left: '-20px', 
                fontSize: '8rem', 
                color: 'rgba(255,255,255,0.05)', 
                fontFamily: 'serif',
                lineHeight: 1
            }}>
                “
            </span>
            <p style={{ 
                fontSize: '2rem', 
                fontFamily: 'var(--font-primary)', 
                fontStyle: 'italic', 
                lineHeight: 1.4,
                position: 'relative',
                zIndex: 1
            }}>
                {t('authority.quote')}
            </p>
        </div>

        <p style={{ 
            color: 'var(--color-gold-imperial)', 
            fontSize: '0.9rem', 
            marginBottom: '4rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }}>
            {t('authority.source')}
        </p>

        <button style={{
            backgroundColor: 'transparent',
            color: 'var(--color-gold-imperial)',
            padding: '1rem 3rem',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        }}>
            [ {t('authority.cta')} ]
        </button>
      </div>
    </section>
  );
};

export default AuthoritySection;
