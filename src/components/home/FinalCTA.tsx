import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section style={{ 
      padding: '8rem 2rem', 
      backgroundColor: '#FFFFFF',
      color: '#1A2744',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Content */}
        <div style={{ order: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontFamily: 'var(--font-primary)', 
              color: 'var(--color-navy-deep)', 
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}>
              Sea Parte de la Reconstrucción de Argentina
            </h2>
            <p style={{ 
              color: '#4A5568', 
              fontSize: '1.25rem', 
              marginBottom: '3rem',
              lineHeight: 1.6,
              maxWidth: '600px'
            }}>
              El futuro se construye hoy. Únase a los inversores que apuestan por la Argentina productiva y sea protagonista del cambio económico.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate('/aplicar')}
                style={{
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
                boxShadow: '0 4px 6px rgba(184, 134, 11, 0.2)',
                transition: 'transform 0.2s'
              }}>
                SOLICITAR REUNIÓN <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => {
                    const storedConfig = localStorage.getItem('falcon_deck_config');
                    let url = '/Falcon_Pampas_Deck.pdf'; // Fallback
                    if (storedConfig) {
                        try {
                            const config = JSON.parse(storedConfig);
                            if (config.url) url = config.url;
                        } catch(e) { console.error(e); }
                    }
                    window.open(url, '_blank');
                }}
                style={{ 
                    padding: '1rem 2rem', 
                    borderRadius: '4px', // Match the other button's radius
                    border: '2px solid var(--color-navy-deep)', 
                    backgroundColor: 'transparent', 
                    color: 'var(--color-navy-deep)', 
                    fontWeight: 700, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                <Download size={18} /> DESCARGAR DECK
            </button>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div style={{ order: 2, position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Decorative element */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100%',
              height: '100%',
              border: '2px solid var(--color-gold-imperial)',
              borderRadius: '12px',
              zIndex: 0
            }} />

            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              aspectRatio: '16/9',
              zIndex: 1
            }}>
              <img 
                src="https://lh3.googleusercontent.com/d/1poVgDx4pys_QjxHXwu1z2WAkDyBXKBw5" 
                alt="Reconstrucción Argentina" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Overlay gradient for depth */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(26,39,68,0.2), transparent)'
              }} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
