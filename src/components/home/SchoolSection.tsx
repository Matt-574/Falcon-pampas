import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const SchoolSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="school" style={{ 
      padding: '8rem 2rem', 
      position: 'relative',
      color: 'var(--color-white-ivory)',
      overflow: 'hidden'
    }}>
      {/* Background Image: Auditorium / People */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
          zIndex: -1
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem',
            color: 'var(--color-gold-imperial)'
        }}>
            {t('school.title')}
        </h2>
        <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            maxWidth: '600px', 
            margin: '0 auto 3rem auto',
            lineHeight: 1.6
        }}>
         {t('school.body')}
        </p>
        <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--color-gold-imperial)',
            color: 'var(--color-blue-deep)',
            padding: '1rem 3rem',
            fontSize: '1rem',
            fontWeight: 700,
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 15px rgba(201, 169, 97, 0.3)'
        }}>
            {t('school.cta')} <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default SchoolSection;
