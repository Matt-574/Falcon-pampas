import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const FalconIndex: React.FC = () => {
    
    // Data: Falcon strategy vs Traditional Markets (Inflation Adjusted)
    const data = [
      { year: '2016', Falcon: 100, Market: 100 },
      { year: '2017', Falcon: 125, Market: 110 },
      { year: '2018', Falcon: 160, Market: 90 }, // Crisis year, Falcon holds better
      { year: '2019', Falcon: 145, Market: 75 },
      { year: '2020', Falcon: 180, Market: 120 }, // Post-covid rebound
      { year: '2021', Falcon: 250, Market: 140 },
      { year: '2022', Falcon: 310, Market: 130 },
      { year: '2023', Falcon: 420, Market: 160 },
      { year: '2024', Falcon: 580, Market: 210 },
      { year: '2025', Falcon: 750, Market: 240 },
    ];

    const indicators = [
        { label: "Salarios para comprar 1m² en CABA", value: "185 salarios", context: "-32% (Oportunidad)", diffColor: "#48BB78" },
        { label: "Hectáreas de campo por $1M USD", value: "420 ha", context: "+45% (Valorización)", diffColor: "#F56565" },
        { label: "Barriles de petróleo por sueldo min.", value: "2.3 barriles", context: "+12% (Estable)", diffColor: "#ECC94B" },
    ];

  return (
    <section id="falcon-index" style={{ backgroundColor: '#1A2744', padding: '6rem 2rem', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--color-gold-imperial)', letterSpacing: '2px', fontWeight: 700 }}>TECNOLOGÍA DE ANÁLISIS</span>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', margin: '1rem 0' }}>Falcon Index: Visión Histórica</h2>
            <p style={{ fontSize: '1.2rem', color: '#A0AEC0', maxWidth: '700px', margin: '0 auto' }}>
                 Nuestro algoritmo exclusivo trackea activos reales vs instrumentos financieros tradicionales, identificando asimetrías de valor en el mercado argentino.
            </p>
        </div>

        {/* Indicators Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            {indicators.map((item, i) => (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '0.9rem', color: '#A0AEC0', marginBottom: '1rem', minHeight: '40px' }}>{item.label}</p>
                    <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>{item.value}</div>
                    <div style={{ color: item.diffColor, fontSize: '0.9rem', fontWeight: 600 }}>{item.context}</div>
                </div>
            ))}
        </div>

        {/* Chart Section */}
        <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '3rem', 
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            height: '500px'
        }}>
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--color-navy-deep)', fontSize: '1.5rem', fontWeight: 700 }}>Rendimiento Acumulado (Base 100)</h3>
                <p style={{ color: '#718096' }}>Estrategia Falcon (Activos Reales) vs Mercado Tradicional (S&P Merval USD)</p>
            </div>
            
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                    <XAxis dataKey="year" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#1A2744', color: 'white', border: 'none', borderRadius: '8px' }}
                        itemStyle={{ color: 'white' }}
                        labelStyle={{ color: '#A0AEC0', marginBottom: '0.5rem' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Line 
                        type="monotone" 
                        dataKey="Falcon" 
                        stroke="var(--color-gold-imperial)" 
                        strokeWidth={4} 
                        dot={{ r: 6, fill: 'var(--color-gold-imperial)', strokeWidth: 2, stroke: '#fff' }} 
                        activeDot={{ r: 8 }} 
                        name="Estrategia Falcon"
                    />
                    <Line 
                        type="monotone" 
                        dataKey="Market" 
                        stroke="#A0AEC0" 
                        strokeWidth={2} 
                        strokeDasharray="5 5" 
                        dot={false} 
                        name="Mercado Tradicional"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
        
      </div>
    </section>
  );
};

export default FalconIndex;
