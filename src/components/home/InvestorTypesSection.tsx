import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Building, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Modal from '../common/Modal';

const InvestorTypesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const types = [
    {
      id: "retail",
      icon: <Smartphone size={32} />,
      title: t('investor_types.types.retail.title'),
      subtitle: t('investor_types.types.retail.subtitle'),
      badge: t('investor_types.coming_soon'),
      ticket: "$50 - $500 / mes", // Keep hardcoded currency format or move to translation? keeping format for now, text part "/ mes" maybe translatable but sticking to format.
      description: t('investor_types.types.retail.desc'),
      features: [
        t('investor_types.types.retail.features.0'),
        t('investor_types.types.retail.features.1'),
        t('investor_types.types.retail.features.2')
      ],
      dark: false,
      details: {
        title: t('investor_types.types.retail.details.title'),
        longDesc: t('investor_types.types.retail.details.long_desc'),
        benefits: [
          t('investor_types.types.retail.details.benefits.0'),
          t('investor_types.types.retail.details.benefits.1'),
          t('investor_types.types.retail.details.benefits.2'),
          t('investor_types.types.retail.details.benefits.3')
        ]
      }
    },
    {
      id: "cbi",
      icon: <Globe size={32} />,
      title: t('investor_types.types.cbi.title'),
      subtitle: t('investor_types.types.cbi.subtitle'),
      badge: t('investor_types.exclusive_program'),
      ticket: "$550,000 USD",
      description: t('investor_types.types.cbi.desc'),
      features: [
        t('investor_types.types.cbi.features.0'),
        t('investor_types.types.cbi.features.1'),
        t('investor_types.types.cbi.features.2')
      ],
      dark: true,
      details: {
        title: t('investor_types.types.cbi.details.title'),
        longDesc: t('investor_types.types.cbi.details.long_desc'),
        benefits: [
          t('investor_types.types.cbi.details.benefits.0'),
          t('investor_types.types.cbi.details.benefits.1'),
          t('investor_types.types.cbi.details.benefits.2'),
          t('investor_types.types.cbi.details.benefits.3')
        ]
      }
    },
    {
      id: "institutional",
      icon: <Building size={32} />,
      title: t('investor_types.types.institutional.title'),
      subtitle: t('investor_types.types.institutional.subtitle'),
      ticket: "$500k+ USD",
      description: t('investor_types.types.institutional.desc'),
      features: [
        t('investor_types.types.institutional.features.0'),
        t('investor_types.types.institutional.features.1'),
        t('investor_types.types.institutional.features.2')
      ],
      dark: false,
      details: {
        title: t('investor_types.types.institutional.details.title'),
        longDesc: t('investor_types.types.institutional.details.long_desc'),
        benefits: [
          t('investor_types.types.institutional.details.benefits.0'),
          t('investor_types.types.institutional.details.benefits.1'),
          t('investor_types.types.institutional.details.benefits.2'),
          t('investor_types.types.institutional.details.benefits.3')
        ]
      }
    }
  ];

  const activeContent = types.find(t => t.id === activeModal)?.details;

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-navy-deep)' }}>
            {t('investor_types.title')}
          </h2>
          <p style={{ color: 'var(--color-gray-slate)', marginTop: '0.5rem' }}>{t('investor_types.subtitle')}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {types.map((type, index) => (
            <motion.div
              key={type.id}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: type.dark ? 'var(--color-navy-deep)' : 'var(--color-cream)',
                color: type.dark ? 'var(--color-white)' : 'var(--color-navy-deep)',
                padding: '3rem 2rem',
                borderRadius: '8px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: index === 1 ? '0 20px 40px rgba(26, 39, 68, 0.15)' : 'none',
                border: index === 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
              }}
            >
              {type.badge && (
                <span style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  backgroundColor: type.dark ? 'var(--color-gold-imperial)' : 'var(--color-navy-deep)',
                  color: type.dark ? 'var(--color-navy-deep)' : 'var(--color-white)',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}>
                  {type.badge}
                </span>
              )}

              <div style={{ marginBottom: '1.5rem', color: type.dark ? 'var(--color-gold-imperial)' : 'var(--color-navy-deep)' }}>
                {type.icon}
              </div>

              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-primary)', marginBottom: '0.2rem' }}>
                {type.title}
              </h3>
              <span style={{ display: 'block', fontSize: '0.9rem', marginBottom: '2rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {type.subtitle}
              </span>

              <div style={{ marginBottom: '2rem' }}>
                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6 }}>{t('investor_types.ticket_label')}</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{type.ticket}</span>
              </div>

              <p style={{ marginBottom: '2rem', lineHeight: 1.6, opacity: 0.9 }}>
                {type.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'auto' }}>
                {type.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: type.dark ? 'var(--color-gold-imperial)' : 'var(--color-navy-deep)' }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setActiveModal(type.id)}
                style={{
                  marginTop: '2rem',
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: 'transparent',
                  border: `1px solid ${type.dark ? 'var(--color-white)' : 'var(--color-navy-deep)'}`,
                  color: type.dark ? 'var(--color-white)' : 'var(--color-navy-deep)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {t('investor_types.more_info')}
              </button>

            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <Modal 
          isOpen={!!activeModal} 
          onClose={() => setActiveModal(null)}
          title={activeContent?.title}
        >
          {activeContent && (
            <div>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#475569' }}>
                {activeContent.longDesc}
              </p>
              
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#1E293B', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {t('investor_types.key_benefits')}
              </h4>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {activeContent.benefits.map((benefit, i) => (
                  <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} color="var(--color-gold-imperial)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#334155' }}>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem', padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: '8px', borderLeft: '4px solid var(--color-gold-imperial)' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748B', fontStyle: 'italic' }}>
                  {t('investor_types.modal_disclaimer')}
                </p>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};

export default InvestorTypesSection;
