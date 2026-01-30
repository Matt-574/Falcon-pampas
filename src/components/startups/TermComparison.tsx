import React from 'react';

const TermComparison: React.FC = () => {
    const rows = [
        { label: "Ticket Típico", falcon: "$100K - $500K", traditional: "$50K - $150K" },
        { label: "Equity Pedido", falcon: "8 - 15%", traditional: "10 - 25%" },
        { label: "Servicios Incluidos", falcon: "✅ Todo el ecosistema", traditional: "❌ Solo capital" },
        { label: "Tiempo de Decisión", falcon: "2 - 4 semanas", traditional: "2 - 6 meses" },
        { label: "Seguimiento", falcon: "Mensual + Soporte Activo", traditional: "Trimestral / Pasivo" },
        { label: "Mentalidad", falcon: "Socios a Largo Plazo", traditional: "Flip / Exit Rápido" }
    ];

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: '#FAF8F5' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', textAlign: 'center', marginBottom: '4rem' }}>
            Nuestros Términos vs. VC Tradicional
        </h2>

        <div style={{ overflowX: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '12px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                <thead>
                    <tr style={{ backgroundColor: '#1A2744', color: 'white' }}>
                        <th style={{ padding: '1.5rem', textAlign: 'left', width: '30%' }}>ASPECTO</th>
                        <th style={{ padding: '1.5rem', textAlign: 'center', width: '35%', backgroundColor: 'var(--color-gold-imperial)', color: '#1A2744' }}>FALCON VENTURES</th>
                        <th style={{ padding: '1.5rem', textAlign: 'center', width: '35%', opacity: 0.8 }}>VC TRADICIONAL</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid #E2E8F0' }}>
                            <td style={{ padding: '1.5rem', fontWeight: 600, color: '#4A5568' }}>{row.label}</td>
                            <td style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 700, color: '#1A2744', backgroundColor: '#FFFAF0' }}>{row.falcon}</td>
                            <td style={{ padding: '1.5rem', textAlign: 'center', color: '#718096' }}>{row.traditional}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </div>
    </section>
  );
};

export default TermComparison;
