import React from 'react';

import { ArrowRight, Download } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section style={{ 
      padding: '8rem 2rem', 
      background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, #0a1120 100%)', 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Decorative Gold Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(184, 134, 11, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '3rem', 
          fontFamily: 'var(--font-primary)', 
          color: 'var(--color-white)', 
          marginBottom: '1.5rem' 
        }}>
          Sea Parte de la Reconstrucción de Argentina
        </h2>
        <p style={{ 
          color: 'rgba(255,255,255,0.7)', 
          fontSize: '1.2rem', 
          marginBottom: '3rem',
          lineHeight: 1.6
        }}>
          El futuro se construye hoy. Únase a los inversores que apuestan por la Argentina productiva.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            backgroundColor: 'var(--color-gold-imperial)',
            color: 'var(--color-navy-deep)',
            padding: '1rem 2.5rem',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            transition: 'transform 0.2s'
          }}>
            SOLICITAR REUNIÓN <ArrowRight size={18} />
          </button>

          <button style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'var(--color-white)',
            padding: '1rem 2.5rem',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            transition: 'background 0.2s'
          }}>
            <Download size={18} /> DESCARGAR DECK
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
