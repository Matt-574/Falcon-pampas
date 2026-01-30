import React from 'react';
import { motion } from 'framer-motion';

const CBITimeline: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Consulta Inicial",
      time: "Semana 1",
      description: "Reunión con equipo Falcon + Hebany para evaluar elegibilidad y explicar el programa."
    },
    {
      id: 2,
      title: "Due Diligence",
      time: "Semanas 2-4",
      description: "Verificación KYC/AML completa. Revisión de origen de fondos y antecedentes."
    },
    {
      id: 3,
      title: "Firma & Inversión",
      time: "Semanas 4-6",
      description: "Firma del contrato de inversión. Transferencia de USD $550,000 a cuenta segregada."
    },
    {
      id: 4,
      title: "Trámite Migratorio",
      time: "Meses 2-6",
      description: "Hebany Group gestiona tu visa de inversor y residencia temporal ante Migraciones."
    },
    {
      id: 5,
      title: "Residencia Permanente",
      time: "Meses 6-12",
      description: "Conversión a residencia permanente. Ya puedes vivir y trabajar en Argentina."
    },
    {
      id: 6,
      title: "Ciudadanía",
      time: "Años 2-3",
      description: "Aplicación a ciudadanía plena. Pasaporte argentino para ti y tu familia."
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-navy-deep)', padding: '6rem 2rem', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--color-gold-imperial)', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 700 }}>PROCESO PASO A PASO</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: 'white', marginTop: '1rem' }}>El Camino a tu Ciudadanía</h2>
        </div>

        <div style={{ position: 'relative', marginTop: '4rem' }}>
          
          {/* Horizontal Line */}
          <div style={{ 
            position: 'absolute', top: '24px', left: 0, right: 0, height: '2px', 
            background: 'linear-gradient(90deg, transparent, var(--color-gold-imperial), transparent)',
            opacity: 0.3
          }} />

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            position: 'relative'
          }}>
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ position: 'relative', textAlign: 'center' }}
              >
                {/* Node */}
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-navy-deep)', 
                  border: '2px solid var(--color-gold-imperial)', margin: '0 auto 1.5rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-gold-imperial)', fontWeight: 700, fontSize: '1.2rem',
                  position: 'relative', zIndex: 2
                }}>
                  {step.id}
                </div>

                {/* Content */}
                <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <span style={{ 
                  display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '1rem'
                }}>
                  {step.time}
                </span>
                <p style={{ color: '#A0AEC0', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {step.description}
                </p>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CBITimeline;
