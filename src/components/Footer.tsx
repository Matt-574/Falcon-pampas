import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ 
      backgroundColor: 'var(--color-blue-deep)', 
      color: 'var(--color-white-ivory)', 
      padding: '4rem 2rem 2rem',
      marginTop: 'auto',
      borderTop: '1px solid rgba(201, 169, 97, 0.2)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '4rem',
        alignItems: 'start'
      }}>
        {/* Column 1: Logo & Slogan */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img 
            src={logo} 
            alt="Falcon Pampas" 
            style={{ 
              height: '150px', // 3x larger than navbar (50px)
              marginBottom: '1.5rem',
              filter: 'brightness(1.1)' 
            }} 
          />
          <h3 style={{ 
            color: 'var(--color-gold-imperial)', 
            fontSize: '1.2rem', 
            letterSpacing: '1px',
            marginBottom: '0.5rem'
          }}>
            FALCON PAMPAS
          </h3>
          <p style={{ 
            opacity: 0.8, 
            fontSize: '0.9rem', 
            fontStyle: 'italic',
            fontFamily: 'var(--font-primary)'
          }}>
            {t('footer.slogan')}
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 style={{ color: 'var(--color-gold-light)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Explorar</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#" style={{ opacity: 0.8, transition: 'color 0.2s', fontSize: '0.95rem' }}>{t('footer.nav_about')}</a></li>
            <li><a href="#thesis" style={{ opacity: 0.8, transition: 'color 0.2s', fontSize: '0.95rem' }}>{t('footer.nav_thesis')}</a></li>
            <li><a href="#" style={{ opacity: 0.8, transition: 'color 0.2s', fontSize: '0.95rem' }}>{t('footer.nav_press')}</a></li>
            <li><a href="#school" style={{ opacity: 0.8, transition: 'color 0.2s', fontSize: '0.95rem' }}>{t('footer.nav_school')}</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
            <h4 style={{ color: 'var(--color-gold-light)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Contacto</h4>
            <p style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>{t('footer.address')}</p>
            <p style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--color-gold-imperial)' }}>inversores@falconpampas.com</p>
        </div>
      </div>

      {/* Legal */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '4rem auto 0', 
        paddingTop: '2rem', 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center',
        fontSize: '0.75rem',
        opacity: 0.6,
        lineHeight: 1.6
      }}>
        <p>{t('footer.legal')}</p>
      </div>
    </footer>
  );
};

export default Footer;
