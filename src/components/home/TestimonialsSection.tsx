import React from 'react';


const TestimonialsSection: React.FC = () => {
  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-navy-deep)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
       <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
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
               { number: "$45M+", label: "Activos Gestionados" },
               { number: "18", label: "Startups en Portafolio" },
               { number: "350+", label: "Empleos Generados" }
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
              Falcon Pampas entendió lo que otros fondos ignoran: el verdadero valor está en conectar la economía real con la innovación tecnológica. No solo invierten capital, invierten estructura.
            </h3>
            
            <div>
              <div style={{ fontWeight: 600, color: 'var(--color-gold-imperial)' }}>Martín G.</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>CEO, AgriTech Partner</div>
            </div>
          </div>

       </div>
    </section>
  );
};

export default TestimonialsSection;
