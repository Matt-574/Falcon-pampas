import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ThesisClosing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ 
        padding: '8rem 2rem', 
        position: 'relative',
        color: 'var(--color-white-ivory)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }}>
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")', // Office
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
          zIndex: -1
      }} />

      <div style={{ maxWidth: '800px', zIndex: 1 }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('thesis_page.closing.title')}</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>{t('thesis_page.closing.text')}</p>
        <Link to="/investor-relations" style={{
            backgroundColor: 'var(--color-gold-imperial)',
            color: 'var(--color-blue-deep)',
            padding: '1rem 3rem',
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderRadius: '2px',
            display: 'inline-block'
        }}>
            {t('thesis_page.closing.cta')}
        </Link>
      </div>
    </section>
  );
};

export default ThesisClosing;
