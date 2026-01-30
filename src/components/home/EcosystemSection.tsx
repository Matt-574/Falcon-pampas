import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, Factory, Palette, Code2, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EcosystemSection: React.FC = () => {
  const navigate = useNavigate();
  const divisions = [
    {
      id: 'ventures',
      title: "FP-VENTURES",
      tagline: "Capital semilla para el talento argentino",
      icon: <Rocket size={24} />,
      color: "#00CED1" // Cyan
    },
    {
      id: 'cap',
      title: "FP-CAP",
      tagline: "Gestión de tesorería y renta fija",
      icon: <BarChart3 size={24} />,
      color: "#4169E1" // Royal Blue
    },
    {
      id: 'real',
      title: "FP-REAL",
      tagline: "Activos reales: agro, energía, real estate",
      icon: <Factory size={24} />,
      color: "#2E8B57" // Sea Green
    },
    {
      id: 'media',
      title: "FALCON MEDIA",
      tagline: "Branding y marketing para startups",
      icon: <Palette size={24} />,
      color: "#9370DB" // Medium Purple
    },
    {
      id: 'tech',
      title: "FALCON TECH",
      tagline: "Desarrollo de software e IA",
      icon: <Code2 size={24} />,
      color: "#00BFFF" // Deep Sky Blue
    },
    {
      id: 'sales',
      title: "FALCON SALES",
      tagline: "Fuerza de ventas profesional",
      icon: <TrendingUp size={24} />,
      color: "#FF8C00" // Dark Orange
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-navy-deep)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--color-gold-imperial)', fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem' }}>NUESTRAS DIVISIONES</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-white)', marginTop: '1rem' }}>
            Un Ecosistema Diseñado para Multiplicar
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {divisions.map((div, index) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2.5rem 2rem',
                borderRadius: '4px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              className="group"
              onClick={() => navigate(`/divisiones?tab=${div.id}`)}
            >
              {/* Hover Border Effect (Gold) */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                border: '1px solid var(--color-gold-imperial)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
                zIndex: 1
              }} className="hover-border" /> 
              {/* Note: Standard CSS hover to work with inline styles needs state or CSS classes. 
                 Since I can't add CSS classes easily to global css right now without context switching, 
                 I'll rely on Framer Motion 'whileHover' for the main container transform/bg. 
                 For the child elements changing color, I might need a bit of state or pure CSS. 
                 Let's stick to simple efficient Framer Motion. 
              */}

              <div style={{ 
                display: 'inline-flex', 
                padding: '12px', 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '8px',
                marginBottom: '1.5rem',
                color: div.color
              }}>
                {div.icon}
              </div>

              <h3 style={{ 
                color: 'var(--color-white)', 
                fontSize: '1.25rem', 
                fontWeight: 600, 
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-primary)'
              }}>
                {div.title}
              </h3>
              
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.5, marginBottom: '2rem' }}>
                {div.tagline}
              </p>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--color-gold-imperial)', 
                fontWeight: 600,
                fontSize: '0.9rem',
                marginTop: 'auto'
              }}>
                Explorar <ArrowRight size={16} />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;
