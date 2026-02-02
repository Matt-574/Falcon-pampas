import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sprout, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IdentitySection: React.FC = () => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-gold" />,
      title: t('identity.features.rice.title'),
      description: t('identity.features.rice.desc')
    },
    {
      icon: <Sprout className="w-6 h-6 text-gold" />,
      title: t('identity.features.real_economy.title'),
      description: t('identity.features.real_economy.desc')
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-gold" />,
      title: t('identity.features.synergy.title'),
      description: t('identity.features.synergy.desc')
    }
  ];

  return (
    <section id="identity-section" style={{ 
      backgroundColor: 'var(--color-white)', 
      padding: '6rem 2rem',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Column: Text */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             visible: { transition: { staggerChildren: 0.2 } }
           }}
        >
          <motion.span variants={fadeInUp} style={{ 
            color: 'var(--color-gold-imperial)', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem'
          }}>
            {t('identity.label')}
          </motion.span>
          
          <motion.h2 variants={fadeInUp} style={{ 
            color: 'var(--color-navy-deep)', 
            fontSize: '2.5rem', 
            fontFamily: 'var(--font-primary)',
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: '1.5rem' 
          }} dangerouslySetInnerHTML={{ __html: t('identity.title') }}>
          </motion.h2>

          <motion.p variants={fadeInUp} style={{ 
            color: 'var(--color-gray-slate)', 
            lineHeight: 1.8, 
            marginBottom: '3rem',
            fontSize: '1.1rem'
          }}>
            {t('identity.description')}
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                <div style={{ 
                  backgroundColor: 'rgba(184, 134, 11, 0.1)', 
                  padding: '12px', 
                  borderRadius: '50%',
                  color: 'var(--color-gold-imperial)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{ 
                    color: 'var(--color-navy-deep)', 
                    fontSize: '1.1rem', 
                    fontWeight: 600, 
                    marginBottom: '0.25rem',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--color-gray-slate)', fontSize: '0.95rem' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{
             position: 'relative',
             height: '600px',
             borderRadius: '8px',
             overflow: 'hidden',
             backgroundColor: 'var(--color-navy-deep)' // Fallback
           }}
        >
          <img 
            src="/images/about-falcon.jpg" 
            alt="Falcon Pampas Construction Site" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default IdentitySection;
