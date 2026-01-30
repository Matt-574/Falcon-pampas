import React from 'react';

const FalconIndex: React.FC = () => {
    const indicators = [
        { label: "Salarios para comprar 1m² en CABA", value: "185 salarios", context: "-32% (Barato)", diffColor: "#48BB78" },
        { label: "Hectáreas de campo por $1M USD", value: "420 ha", context: "+45% (Caro hist.)", diffColor: "#F56565" },
        { label: "Barriles de petróleo por sueldo min.", value: "2.3 barriles", context: "+12% (Normal)", diffColor: "#ECC94B" },
        { label: "iPhones por tonelada de soja", value: "8.5 iPhones", context: "-18% (Soja barata)", diffColor: "#48BB78" }
    ];

  return (
    <section style={{ backgroundColor: '#1A2744', padding: '6rem 2rem', color: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--color-gold-imperial)', letterSpacing: '2px', fontWeight: 700 }}>HERRAMIENTA EXCLUSIVA</span>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', margin: '1rem 0' }}>El Índice Falcon</h2>
            <p style={{ fontSize: '1.2rem', color: '#A0AEC0', maxWidth: '700px', margin: '0 auto' }}>
                 El "Big Mac Index" de la economía argentina. Medimos el costo real de activos en términos tangibles a través del tiempo.
            </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {indicators.map((item, i) => (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '0.9rem', color: '#A0AEC0', marginBottom: '1rem', minHeight: '40px' }}>{item.label}</p>
                    <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>{item.value}</div>
                    <div style={{ color: item.diffColor, fontSize: '0.9rem', fontWeight: 600 }}>{item.context}</div>
                </div>
            ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button style={{ 
                backgroundColor: 'transparent', border: '1px solid var(--color-gold-imperial)', 
                color: 'var(--color-gold-imperial)', padding: '0.8rem 2rem', borderRadius: '4px',
                cursor: 'pointer', fontWeight: 600
            }}>
                VER GRÁFICOS HISTÓRICOS
            </button>
        </div>

      </div>
    </section>
  );
};

export default FalconIndex;
