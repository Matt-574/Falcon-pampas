import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(12, 29, 54, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-gold-imperial)' : 'none',
      height: '140px'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={logo} alt="Falcon Pampas" style={{ height: '100px' }} />
        <span style={{ 
          fontFamily: 'var(--font-primary)', 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          color: 'var(--color-gold-imperial)',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Falcon Pampas
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', alignItems: 'center', margin: 0, padding: 0 }}>
          <li><Link to="/tesis" style={{ color: 'var(--color-gold-imperial)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700 }}>{t('navbar.thesis')}</Link></li>
          <li><Link to="/divisiones" style={{ color: 'var(--color-gold-imperial)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700 }}>{t('navbar.divisions')}</Link></li>
          <li><Link to="/escuela" style={{ color: 'var(--color-gold-imperial)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700 }}>{t('navbar.school')}</Link></li>
          <li><Link to="/cbi" style={{ color: 'var(--color-gold-imperial)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700 }}>CBI</Link></li>
          <li><Link to="/portafolio" style={{ color: 'var(--color-gold-imperial)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700 }}>NUESTRAS STARTUPS</Link></li>
          <li><Link to="/startups" style={{ color: 'var(--color-gold-imperial)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700 }}>APLICA A FALCON VENTURES</Link></li>
          
          <li>
              <Link to="/investor-relations" style={{ 
                color: 'var(--color-blue-deep)', 
                backgroundColor: 'var(--color-gold-imperial)', 
                padding: '0.6rem 1.5rem', 
                borderRadius: '2px', 
                fontWeight: 700, 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {t('navbar.request_invite')}
              </Link>
          </li>
        </ul>

        <button 
          onClick={toggleLanguage}
          style={{
            color: 'var(--color-gold-imperial)',
            border: '1px solid var(--color-gold-imperial)',
            padding: '0.4rem 0.8rem',
            borderRadius: '2px',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
