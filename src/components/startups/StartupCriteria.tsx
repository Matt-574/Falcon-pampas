import React from 'react';
import { Target, Users, TrendingUp, MapPin } from 'lucide-react';

const StartupCriteria: React.FC = () => {
    const criteria = [
        {
            icon: <Target size={40} />,
            title: "Problema Real",
            desc: "Resuelve un pain point claro y medible en un mercado grande."
        },
        {
            icon: <Users size={40} />,
            title: "Equipo Fuerte",
            desc: "Founders comprometidos full-time con experiencia en el sector."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Tracción Inicial",
            desc: "Métricas que demuestren validación de mercado (MVP o primeras ventas)."
        },
        {
            icon: <MapPin size={40} />,
            title: "ADN Argentino",
            desc: "Operación principal o fundadores basados en Argentina."
        }
    ];

  return (
    <section id="criteria" style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '4rem' }}>
            Qué Buscamos
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {criteria.map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
                    <div style={{ color: 'var(--color-gold-imperial)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1A2744' }}>{item.title}</h3>
                    <p style={{ color: '#4A5568', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default StartupCriteria;
