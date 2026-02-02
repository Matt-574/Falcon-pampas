import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Flame, Database, Wheat, TrendingUp, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyArgentinaSection: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const reasons = [
    {
      id: 1,
      title: t('why_argentina.reasons.vaca_muerta.title'),
      number: "2ª",
      subtitle: t('why_argentina.reasons.vaca_muerta.subtitle'),
      description: t('why_argentina.reasons.vaca_muerta.desc'),
      icon: <Flame size={32} />
    },
    {
      id: 2,
      title: t('why_argentina.reasons.lithium.title'),
      number: "21%",
      subtitle: t('why_argentina.reasons.lithium.subtitle'),
      description: t('why_argentina.reasons.lithium.desc'),
      icon: <Database size={32} /> 
    },
    {
      id: 3,
      title: t('why_argentina.reasons.agribusiness.title'),
      number: "3º",
      subtitle: t('why_argentina.reasons.agribusiness.subtitle'),
      description: t('why_argentina.reasons.agribusiness.desc'),
      icon: <Wheat size={32} />
    },
    {
      id: 4,
      title: t('why_argentina.reasons.recovery.title'),
      number: "P/E",
      subtitle: t('why_argentina.reasons.recovery.subtitle'),
      description: t('why_argentina.reasons.recovery.desc'),
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <section ref={containerRef} style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-cream)', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-gold-imperial)', fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem' }}>{t('why_argentina.label')}</span>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>{t('why_argentina.title')}</h2>
        </div>

        <div style={{ position: 'relative' }}>
          
          {/* Progress Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: 0, 
            bottom: 0, 
            width: '4px', 
            backgroundColor: 'rgba(26, 39, 68, 0.1)', 
            transform: 'translateX(-50%)',
            zIndex: 0
          }} />
          
          <motion.div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: 0, 
            bottom: 0, 
            width: '4px', 
            backgroundColor: 'var(--color-gold-imperial)', 
            transform: 'translateX(-50%)',
            zIndex: 1,
            originY: 0,
            scaleY
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', position: 'relative', zIndex: 2 }}>
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  position: 'relative'
                }}
              >
                  {/* Center Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'var(--color-navy-deep)',
                    border: '4px solid var(--color-white)',
                    borderRadius: '50%',
                    zIndex: 3,
                    boxShadow: '0 0 0 4px rgba(184, 134, 11, 0.2)'
                  }} />

                  <div style={{ 
                    width: '45%', 
                    backgroundColor: 'var(--color-white)', 
                    padding: '2rem', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                    position: 'relative'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: '-20px', 
                      [index % 2 === 0 ? 'right' : 'left']: '20px',
                      backgroundColor: 'var(--color-gold-imperial)',
                      color: 'var(--color-navy-deep)',
                      padding: '10px',
                      borderRadius: '8px'
                    }}>
                      {reason.icon}
                    </div>

                    <span style={{ fontSize: '4rem', fontWeight: 700, color: 'rgba(26, 39, 68, 0.1)', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>
                      {reason.number}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.5rem', color: 'var(--color-navy-deep)', marginBottom: '0.5rem' }}>
                      {reason.title}
                    </h3>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--color-gold-imperial)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>
                      {reason.subtitle}
                    </h4>
                    <p style={{ color: 'var(--color-gray-slate)', fontSize: '1rem', lineHeight: 1.6 }}>
                      {reason.description}
                    </p>
                  </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Floating Map Hint - Visual Only */}
        <div style={{ position: 'sticky', bottom: '2rem', textAlign: 'center', opacity: 0.5, marginTop: '4rem' }}>
           <MapPin size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }} />
           <span style={{ fontSize: '0.8rem' }}>{t('why_argentina.hint')}</span>
        </div>

      </div>
    </section>
  );
};

export default WhyArgentinaSection;
