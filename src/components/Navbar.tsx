import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Falcon Pampas" />
        <span>Falcon Pampas</span>
      </Link>

      <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
        <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
        <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
      </button>

      <div className={`navbar-actions ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/tesis" className="navbar-link">{t('navbar.thesis')}</Link></li>
          <li><Link to="/divisiones" className="navbar-link">{t('navbar.divisions')}</Link></li>
          <li><Link to="/escuela" className="navbar-link">{t('navbar.school')}</Link></li>
          <li><Link to="/cbi" className="navbar-link">CBI</Link></li>
          <li><Link to="/portafolio" className="navbar-link">STARTUPS</Link></li>
          <li><Link to="/startups" className="navbar-link">APLICA A FALCON VENTURES</Link></li>
          
          <li>
              <Link to="/investor-relations" className="navbar-cta">
                {t('navbar.request_invite')}
              </Link>
          </li>
        </ul>

        <button 
          onClick={toggleLanguage}
          className="language-btn"
        >
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
