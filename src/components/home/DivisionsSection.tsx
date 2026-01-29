import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, TrendingUp, Wheat, Flame, Cpu } from 'lucide-react';

const DivisionsSection: React.FC = () => {
  const { t } = useTranslation();

  const divisions = [
    {
      icon: <TrendingUp size={36} />,
      titleKey: "card_1_title",
      descKey: "card_1_desc",
      img: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Bloomberg screens
    },
    {
      icon: <Wheat size={36} />,
      titleKey: "card_2_title",
      descKey: "card_2_desc",
      img: "https://images.unsplash.com/photo-1625246333195-bf8f7e710471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Silos
    },
    {
      icon: <Flame size={36} />,
      titleKey: "card_3_title",
      descKey: "card_3_desc",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Oil rig / Fire
    },
    {
      icon: <Cpu size={36} />,
      titleKey: "card_4_title",
      descKey: "card_4_desc",
      img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Code
    }
  ];

  return (
    <section id="divisions" style={{ 
      padding: '8rem 2rem', 
      backgroundColor: 'var(--color-blue-deep)',
      color: 'var(--color-white-ivory)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '3rem', 
          marginBottom: '5rem', 
          color: 'var(--color-gold-imperial)',
          textTransform: 'uppercase',
          letterSpacing: '2px' 
        }}>
          {t('divisions.title')}
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {divisions.map((div, index) => (
            <motion.div
              key={index}
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                position: 'relative',
                height: '450px',
                borderRadius: '2px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#000'
              }}
            >
              {/* Background Image with Zoom Effect */}
              <motion.div
                variants={{
                  rest: { scale: 1, opacity: 0.6 },
                  hover: { scale: 1.1, opacity: 0.4 }
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${div.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Content Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                zIndex: 2,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
              }}>
                <div style={{ color: 'var(--color-gold-imperial)', marginBottom: '1rem' }}>
                  {div.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px',
                  fontWeight: 600
                }}>
                  {t(`divisions.${div.titleKey}`)}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  opacity: 0.9, 
                  marginBottom: '1.5rem', 
                  lineHeight: 1.5 
                }}>
                  {t(`divisions.${div.descKey}`)}
                </p>
                
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: 10 },
                    hover: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-gold-imperial)',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    borderBottom: '1px solid var(--color-gold-imperial)',
                    paddingBottom: '2px'
                  }}>
                    {t('divisions.cta_explore')} <ArrowRight size={16} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
