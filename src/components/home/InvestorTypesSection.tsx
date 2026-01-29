import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Building } from 'lucide-react';

const InvestorTypesSection: React.FC = () => {
  const types = [
    {
      id: "retail",
      icon: <Smartphone size={32} />,
      title: "Retail",
      subtitle: "Falcon App",
      badge: "PRÓXIMAMENTE",
      ticket: "$50 - $500 / mes",
      description: "Acceso democrático a inversiones de calibre institucional desde tu celular.",
      features: ["Micro-inversión", "Liquidez inmediata", "Cero comisiones ocultas"],
      dark: false
    },
    {
      id: "cbi",
      icon: <Globe size={32} />,
      title: "CBI",
      subtitle: "Ciudadanía por Inversión",
      badge: "PROGRAMA EXCLUSIVO",
      ticket: "$550,000 USD",
      description: "Obtenga la residencia y ciudadanía argentina invirtiendo en sectores estratégicos.",
      features: ["Pasaporte Argentino", "Beneficios fiscales", "Concierge Service"],
      dark: true // Highlighted styling
    },
    {
      id: "institutional",
      icon: <Building size={32} />,
      title: "Institucional",
      subtitle: "Family Offices & Fondos",
      ticket: "$500k+ USD",
      description: "Vehículos estructurados a medida para preservación y multiplicación de patrimonio.",
      features: ["Co-inversión directa", "Reportes trimestrales", "Estructuración legal"],
      dark: false
    }
  ];

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-navy-deep)' }}>
            Encuentra Tu Camino
          </h2>
          <p style={{ color: 'var(--color-gray-slate)', marginTop: '0.5rem' }}>Soluciones adaptadas a cada etapa de tu crecimiento financiero.</p>
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
                <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6 }}>TICKET DE ENTRADA</span>
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

              <button style={{
                marginTop: '2rem',
                width: '100%',
                padding: '1rem',
                backgroundColor: 'transparent',
                border: `1px solid ${type.dark ? 'var(--color-white)' : 'var(--color-navy-deep)'}`,
                color: type.dark ? 'var(--color-white)' : 'var(--color-navy-deep)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                MÁS INFORMACIÓN
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InvestorTypesSection;
