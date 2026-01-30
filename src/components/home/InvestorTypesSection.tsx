import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Building, CheckCircle2 } from 'lucide-react';
import Modal from '../common/Modal';

const InvestorTypesSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
      dark: false,
      details: {
        title: "Falcon App - Inversión Retail",
        longDesc: "La democratización de las inversiones de alto calibre. Nuestra plataforma móvil permitirá a cualquier persona acceder a participaciones fraccionadas en proyectos de Real Estate Premium, Agroindustria Exportadora y Startups Tecnológicas, activos que históricamente estuvieron reservados para grandes capitales.",
        benefits: [
          "Ticket de entrada accesible desde $50.",
          "Mercado secundario para liquidez inmediata.",
          "Diversificación automática en múltiples activos.",
          "Gestión 100% digital desde la App."
        ]
      }
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
      dark: true,
      details: {
        title: "Ciudadanía por Inversión (CBI)",
        longDesc: "Un programa exclusivo diseñado para inversores internacionales que buscan obtener residencia legal y ciudadanía argentina mediante inversiones estratégicas en la economía real del país. Facilitamos todo el proceso legal y migratorio mientras su capital trabaja en sectores productivos de alto rendimiento.",
        benefits: [
          "Tramitación acelerada de Residencia y Ciudadanía.",
          "Pasaporte Mercosur con acceso global.",
          "Planificación fiscal internacional eficiente.",
          "Servicio de Concierge VIP para relocation y lifestyle."
        ]
      }
    },
    {
      id: "institutional",
      icon: <Building size={32} />,
      title: "Institucional",
      subtitle: "Family Offices & Fondos",
      ticket: "$500k+ USD",
      description: "Vehículos estructurados a medida para preservación y multiplicación de patrimonio.",
      features: ["Co-inversión directa", "Reportes trimestrales", "Estructuración legal"],
      dark: false,
      details: {
        title: "Soluciones Institucionales",
        longDesc: "Vehículos de inversión hechos a medida para Family Offices, Fondos de Cobertura e Inversores Calificados que buscan exposición a activos alternativos en LATAM con estándares globales de cumplimiento y reporting.",
        benefits: [
          "Oportunidades de Co-inversión directa (Deal-by-deal).",
          "Sin fees de gestión en estructuras específicas.",
          "Reportes trimestrales bajo estándares ILPA.",
          "Estructuras legales robustas (Fideicomisos, SPVs locales y offshore)."
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
                MÁS INFORMACIÓN
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
                Beneficios Clave
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
                  Para más información detallada sobre este programa, por favor contacte a nuestro equipo de Relaciones con Inversores.
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
