import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, PieChart, Briefcase, TrendingUp, RefreshCw } from 'lucide-react';

const FalconEngineSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 1,
      title: "Capital Inversor",
      icon: <Users size={24} />,
      description: "Entrada de capital de Retail, CBI e Institucionales.",
      pos: { top: '10%', left: '50%' }
    },
    {
      id: 2,
      title: "Allocation Estratégico",
      icon: <PieChart size={24} />,
      description: "Distribución inteligente: 60% Tesorería (Seguridad) + 40% Startups (Potencial).",
      pos: { top: '35%', left: '50%' }
    },
    {
      id: 3,
      title: "Potenciación",
      icon: <Briefcase size={24} />,
      description: "Nuestras divisiones prestan servicios a las startups, reduciendo sus costos y riesgos.",
      pos: { top: '60%', left: '75%' }
    },
    {
      id: 4,
      title: "Crecimiento Exponencial",
      icon: <TrendingUp size={24} />,
      description: "Las startups crecen más rápido y con mejores fundamentos.",
      pos: { top: '60%', left: '25%' }
    },
    {
      id: 5,
      title: "Retorno del Ciclo",
      icon: <RefreshCw size={24} />,
      description: "El crecimiento aumenta el NAV del fondo, atrayendo más capital.",
      pos: { top: '85%', left: '50%' }
    }
  ];

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-navy-deep)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-white)' }}>
            El Motor Falcon
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Cómo nuestro ecosistema genera valor continuo.</p>
        </div>

        <div style={{ position: 'relative', height: '600px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
          
          {/* Connecting Lines (Simplified for CSS) */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'var(--color-gold-imperial)', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: 'var(--color-gold-imperial)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* 1 -> 2 */}
            <motion.path d="M500 80 L500 200" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
            {/* 2 -> 3 */}
            <motion.path d="M520 230 L750 360" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
             {/* 2 -> 4 */}
            <motion.path d="M480 230 L250 360" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
             {/* 3 -> 5 */}
            <motion.path d="M750 380 L520 510" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
             {/* 4 -> 5 */}
            <motion.path d="M250 380 L480 510" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
          </svg>

          {nodes.map((node) => (
            <motion.div
              key={node.id}
              style={{
                position: 'absolute',
                top: node.pos.top,
                left: node.pos.left,
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            >
              <div style={{
                backgroundColor: activeNode === node.id ? 'var(--color-gold-imperial)' : 'var(--color-navy-deep)',
                border: '2px solid var(--color-gold-imperial)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeNode === node.id ? 'var(--color-navy-deep)' : 'var(--color-white)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.3s'
              }}>
                {node.icon}
              </div>
              
              <div style={{ 
                position: 'absolute', 
                top: '100%', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '200px', 
                textAlign: 'center', 
                marginTop: '1rem',
                pointerEvents: 'none' 
              }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--color-white)', fontWeight: 600 }}>{node.title}</h3>
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: activeNode === node.id ? 1 : 0, height: activeNode === node.id ? 'auto' : 0 }}
                  style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', overflow: 'hidden' }}
                >
                  {node.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default FalconEngineSection;
