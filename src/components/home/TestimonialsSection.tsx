import React from 'react';
import { useTranslation } from 'react-i18next';


const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-navy-deep)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Stats Title */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              color: 'var(--color-white)', 
              fontSize: '2rem', 
              fontFamily: 'var(--font-primary)',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              {t('common.objectives')}
            </h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold-imperial)', margin: '1rem auto' }}></div>
          </div>

          {/* Stats */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            flexWrap: 'wrap', 
            gap: '2rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '4rem'
          }}>
             {[
               { number: "$45M+", label: t('testimonials.stats.aum') },
               { number: "18", label: t('testimonials.stats.startups') },
               { number: "350+", label: t('testimonials.stats.jobs') }
             ].map((stat, i) => (
               <div key={i} style={{ textAlign: 'center' }}>
                 <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-gold-imperial)', fontFamily: 'var(--font-mono)' }}>{stat.number}</div>
                 <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
               </div>
             ))}
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '4rem', fontFamily: 'serif', color: 'rgba(255,255,255,0.1)', lineHeight: 1 }}>"</span>
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'var(--color-white)', 
              fontFamily: 'var(--font-primary)', 
              fontStyle: 'italic', 
              lineHeight: 1.6,
              marginBottom: '2rem' 
            }}>
              {t('testimonials.quote')}
            </h3>
            
            <div>
              <div style={{ fontWeight: 600, color: 'var(--color-gold-imperial)' }}>{t('testimonials.author')}</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>{t('testimonials.role')}</div>
            </div>
          </div>

       </div>
    </section>
  );
};

export default TestimonialsSection;
