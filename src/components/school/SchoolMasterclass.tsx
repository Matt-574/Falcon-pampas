import React from 'react';
import { PlayCircle, Clock, Award } from 'lucide-react';

const SchoolMasterclass: React.FC = () => {
    const tracks = [
        {
            title: "Track 1: Fundamentos",
            desc: "Domina el lenguaje del dinero: Inflación, Interés Compuesto y Ciclos Económicos.",
            duration: "4 Semanas",
            modules: ["Mentalidad Falcon", "Historia Monetaria Arg", "Patrones de Crisis"]
        },
        {
            title: "Track 2: Mercado de Capitales",
            desc: "Bonos, Acciones y ONs. Aprende a operar en AL30, Merval y CEDEARs.",
            duration: "6 Semanas",
            modules: ["Estructura del Mercado", "Análisis Fundamental", "Operatoria de Bonos"]
        },
        {
            title: "Track 3: Real Estate & Negocios",
            desc: "Cómo evaluar prepozos, calcular TIR de alquileres y estructurar fideicomisos.",
            duration: "5 Semanas",
            modules: ["Valuación de Propiedades", "Leyes de Alquileres", "Fideicomisos al Costo"]
        }
    ];

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', textAlign: 'center', marginBottom: '4rem' }}>
            Tracks de Formación
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {tracks.map((track, i) => (
                <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s', cursor: 'pointer' }}>
                    <div style={{ height: '180px', backgroundColor: '#2D3748', position: 'relative' }}>
                        {/* Placeholder for Video Thumbnail */}
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'url(https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800)', backgroundSize: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <PlayCircle size={64} color="white" style={{ opacity: 0.8 }} />
                        </div>
                    </div>
                    
                    <div style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#1A2744', marginBottom: '0.5rem' }}>{track.title}</h3>
                        <p style={{ color: '#4A5568', marginBottom: '1.5rem', lineHeight: 1.6 }}>{track.desc}</p>
                        
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#718096' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {track.duration}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Award size={16} /> Certificado</div>
                        </div>
                        
                        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#A0AEC0', marginBottom: '0.5rem' }}>MÓDULOS INCLUIDOS:</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {track.modules.map((m, j) => (
                                    <li key={j} style={{ fontSize: '0.9rem', color: '#4A5568', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-gold-imperial)', borderRadius: '50%' }} />
                                        {m}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default SchoolMasterclass;
