import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MarketComparison: React.FC = () => {
    const data = [
        { name: 'USA (S&P 500)', pe: 22, color: '#CBD5E0' },
        { name: 'Brasil (Bovespa)', pe: 14, color: '#CBD5E0' },
        { name: 'México (IPC)', pe: 12, color: '#CBD5E0' },
        { name: 'Argentina (Merval)', pe: 6, color: '#B8860B' }, // Gold for Argentina
    ];

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
         <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '1rem' }}>
                Argentina vs. El Mundo
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>
                Comprar acciones argentinas hoy es como comprar acciones brasileñas a valuaciones de 2002. El mercado te está regalando empresas.
            </p>
        </div>

        <div style={{ height: '400px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={150} tick={{ fill: '#4A5568', fontSize: 14, fontWeight: 600 }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Bar dataKey="pe" radius={[0, 4, 4, 0]} barSize={40} animationDuration={2000} isAnimationActive={true}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color:'#A0AEC0' }}>
            *Price-to-Earnings Ratio (P/E) promedio de mercado. Fuente: Bloomberg (Ene 2026).
        </p>

      </div>
    </section>
  );
};

export default MarketComparison;
