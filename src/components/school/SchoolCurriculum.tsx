import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Shield, CandlestickChart, Tractor, ChevronDown, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

  useTranslation();
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const pillars = [
    {
      icon: <Shield size={40} />,
      title: "Módulo 1: Soberanía Personal",
      desc: "Fundamentos de la educación financiera real. Cómo escapar de la carrera de la rata y entender el juego del dinero en Argentina.",
      topics: ["Inflación y Poder de Compra", "Ahorro vs Inversión", "Deuda Buena vs Deuda Mala", "Mentalidad de Inversor"]
    },
    {
      icon: <CandlestickChart size={40} />,
      title: "Módulo 2: Mercados Financieros",
      desc: "Análisis técnico y fundamental aplicado. Entendiendo los ciclos del mercado, acciones, bonos y derivados.",
      topics: ["Lectura de Gráficos", "Valuación de Empresas", "Renta Fija y Bonos Soberanos", "Psicología del Trading"]
    },
    {
      icon: <Tractor size={40} />,
      title: "Módulo 3: Economía Real y Agro",
      desc: "La matriz productiva argentina. Cómo invertir en el motor del país: campo, energía y real estate.",
      topics: ["Ciclos de Commodities", "Crowdfunding Inmobiliario", "Agroindustria y Exportación", "Energías Renovables"]
    }
  ];

  return (
    <section id="curriculum" style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-navy-deep)', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <span style={{ color: 'var(--color-gold-imperial)', letterSpacing: '2px', fontWeight: 700 }}>CURRICULUM VITAE</span>
             <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', margin: '1rem 0' }}>Plan de Estudios 2026</h2>
             <p style={{ color: '#A0AEC0', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                 Un recorrido diseñado para transformar tu entendimiento del dinero y los negocios desde cero hasta nivel profesional.
             </p>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {pillars.map((p, idx) => (
                <div key={idx} style={{ 
                    backgroundColor: activeModule === idx ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)', 
                    borderRadius: '8px',
                    border: activeModule === idx ? '1px solid var(--color-gold-imperial)' : '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                }}>
                    {/* Header */}
                    <div 
                        onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                        style={{ 
                            padding: '2rem', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ color: activeModule === idx ? 'var(--color-gold-imperial)' : '#718096' }}>{p.icon}</div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: activeModule === idx ? 'white' : '#CBD5E0' }}>{p.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#A0AEC0', marginTop: '0.2rem' }}>{p.desc}</p>
                            </div>
                        </div>
                        <ChevronDown 
                            size={24} 
                            style={{ 
                                transform: activeModule === idx ? 'rotate(180deg)' : 'rotate(0deg)', 
                                transition: 'transform 0.3s',
                                color: activeModule === idx ? 'var(--color-gold-imperial)' : '#718096'
                            }} 
                        />
                    </div>

                    {/* Content */}
                    <AnimatePresence>
                        {activeModule === idx && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div style={{ padding: '0 2rem 2rem 5.5rem' }}>
                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                                        <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Temario Detallado</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            {p.topics.map((topic, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E0', fontSize: '0.95rem' }}>
                                                    <BookOpen size={14} color="var(--color-gold-imperial)" />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
             <button 
                 onClick={() => navigate('/aplicar')}
                 style={{ 
                 padding: '1rem 3rem', backgroundColor: 'var(--color-gold-imperial)', color: '#1A2744', 
                 border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                 boxShadow: '0 4px 15px rgba(184, 134, 11, 0.2)'
             }}>
                 INSCRIBIRSE AL MÓDULO INTRODUCTORIO
             </button>
        </div>

      </div>
    </section>
  );
};

export default SchoolCurriculum;
