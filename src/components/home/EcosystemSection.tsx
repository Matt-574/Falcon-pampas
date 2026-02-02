import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, Factory, Palette, Code2, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EcosystemSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const divisions = [
    {
      id: 'ventures',
      title: t('home_ecosystem.divisions.ventures.title'),
      tagline: t('home_ecosystem.divisions.ventures.tagline'),
      icon: <Rocket size={24} />,
      color: "#00CED1"
    },
    {
      id: 'cap',
      title: t('home_ecosystem.divisions.cap.title'),
      tagline: t('home_ecosystem.divisions.cap.tagline'),
      icon: <BarChart3 size={24} />,
      color: "#4169E1"
    },
    {
      id: 'real',
      title: t('home_ecosystem.divisions.real.title'),
      tagline: t('home_ecosystem.divisions.real.tagline'),
      icon: <Factory size={24} />,
      color: "#2E8B57"
    },
    {
      id: 'media',
      title: t('home_ecosystem.divisions.media.title'),
      tagline: t('home_ecosystem.divisions.media.tagline'),
      icon: <Palette size={24} />,
      color: "#9370DB"
    },
    {
      id: 'tech',
      title: t('home_ecosystem.divisions.tech.title'),
      tagline: t('home_ecosystem.divisions.tech.tagline'),
      icon: <Code2 size={24} />,
      color: "#00BFFF"
    },
    {
      id: 'sales',
      title: t('home_ecosystem.divisions.sales.title'),
      tagline: t('home_ecosystem.divisions.sales.tagline'),
      icon: <TrendingUp size={24} />,
      color: "#FF8C00"
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-navy-deep)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--color-gold-imperial)', fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem' }}>{t('home_ecosystem.label')}</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-white)', marginTop: '1rem' }}>
            {t('home_ecosystem.title')}
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {divisions.map((div, index) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2.5rem 2rem',
                borderRadius: '4px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              className="group"
              onClick={() => navigate(`/divisiones?tab=${div.id}`)}
            >
              {/* Hover Border Effect (Gold) */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                border: '1px solid var(--color-gold-imperial)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
                zIndex: 1
              }} className="hover-border" /> 

              <div style={{ 
                display: 'inline-flex', 
                padding: '12px', 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '8px',
                marginBottom: '1.5rem',
                color: div.color
              }}>
                {div.icon}
              </div>

              <h3 style={{ 
                color: 'var(--color-white)', 
                fontSize: '1.25rem', 
                fontWeight: 600, 
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-primary)'
              }}>
                {div.title}
              </h3>
              
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.5, marginBottom: '2rem' }}>
                {div.tagline}
              </p>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--color-gold-imperial)', 
                fontWeight: 600,
                fontSize: '0.9rem',
                marginTop: 'auto'
              }}>
                {t('home_ecosystem.explore')} <ArrowRight size={16} />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;
