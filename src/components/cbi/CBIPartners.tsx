import React from 'react';

const CBIPartners: React.FC = () => {
    // Placeholder logos for now
    const partners = [
        "HEBANY GROUP", "BIG FOUR AUDIT", "ESTUDIO JURÍDICO", "BANCO CUSTODIO"
    ];

  return (
    <section style={{ backgroundColor: '#F7FAFC', padding: '4rem 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: '#A0AEC0', marginBottom: '2rem' }}>
              ALIANZAS ESTRATÉGICAS
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '3rem', opacity: 0.5 }}>
              {partners.map((partner, i) => (
                  <span key={i} style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A2744' }}>{partner}</span>
              ))}
          </div>
      </div>
    </section>
  );
};

export default CBIPartners;
