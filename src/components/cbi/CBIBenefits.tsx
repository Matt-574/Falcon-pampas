import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Home, Zap, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const CBIBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Globe size={32} />,
      title: "Pasaporte Argentino",
      description: "La ciudadanía argentina te permite residir sin visa en 170+ países y es un gateway rápido hacia la nacionalidad española o italiana por descendencia."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Retorno Real",
      description: "Tu inversión no es una donación a fondo perdido. Participas activamente en un portafolio de startups con potencial de alto rendimiento."
    },
    {
      icon: <Home size={32} />,
      title: "Sin Residencia Física",
      description: "No necesitas vivir permanentemente en Argentina para mantener tu estatus. Puedes gestionar tus activos de forma remota con visitas ocasionales."
    },
    {
      icon: <Zap size={32} />,
      title: "Proceso Rápido",
      description: "Obtén la residencia permanente en 6-12 meses y aplica a la ciudadanía plena en tan solo 2 años de inversión sostenida."
    },
    {
      icon: <Users size={32} />,
      title: "Familia Incluida",
      description: "Tu cónyuge e hijos menores de 21 años pueden ser incluidos en la misma aplicación, asegurando el futuro de toda tu familia."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Capital Seguro",
      description: "Inversión canalizada a través de un vehículo regulado RICE, con auditoría de Big Four y custodia segregada de activos."
    }
  ];

  const [selectedFeature, setSelectedFeature] = React.useState<number | null>(null);

  return (
    <section style={{ backgroundColor: '#FAF8F5', padding: '8rem 2rem', color: '#1A2744', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>
            ¿Por Qué Elegir Argentina?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>
            Una combinación única de calidad de vida, potencial de inversión y libertad global.
          </p>
        </div>

        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              style={{ 
                backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid transparent',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold-imperial)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(184, 134, 11, 0.15)';
              }}
              onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ 
                width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(26, 39, 68, 0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy-deep)'
              }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary)' }}>{item.title}</h3>
                <p style={{ color: '#4A5568', lineHeight: 1.6 }}>{item.description}</p>
              </div>
              <div 
                  onClick={() => setSelectedFeature(index)}
                  style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--color-gold-imperial)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}
              >
                Más info <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Overlay */}
      {selectedFeature !== null && (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
        }} onClick={() => setSelectedFeature(null)}>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                    backgroundColor: 'white', borderRadius: '16px', padding: '3rem',
                    maxWidth: '600px', width: '100%', position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ marginBottom: '1.5rem', color: 'var(--color-navy-deep)' }}>
                    {benefits[selectedFeature].icon}
                </div>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '1rem' }}>
                    {benefits[selectedFeature].title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#4A5568', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {benefits[selectedFeature].description}
                </p>
                
                {/* Additional Detail Content */}
                 <div style={{ padding: '1.5rem', backgroundColor: '#F7FAFC', borderRadius: '8px', borderLeft: '4px solid var(--color-gold-imperial)' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#2D3748', marginBottom: '0.5rem' }}>Detalle Exclusivo</h4>
                    <p style={{ fontSize: '0.95rem', color: '#718096' }}>
                        Como miembro de Falcon Pampas, accedes a un equipo legal dedicado que gestiona este aspecto ({benefits[selectedFeature].title.toLowerCase()}) al 100%. Maximizamos los beneficios regulatorios vigentes para inversores calificados bajo el nuevo marco RIGI y las leyes de economía del conocimiento.
                    </p>
                </div>

                <button 
                    onClick={() => setSelectedFeature(null)}
                    style={{
                        position: 'absolute', top: '1.5rem', right: '1.5rem',
                        background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#A0AEC0'
                    }}
                >
                    ×
                </button>
            </motion.div>
        </div>
      )}

    </section>
  );
};

export default CBIBenefits;
