import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CBIHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex' }}>
      
      {/* Split Background */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        {/* Left: Passport/Office */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
                position: 'absolute', inset: 0, 
                backgroundColor: '#1A2744', // Fallback
                backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80)', // Placeholder: Office/Desk
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.6)'
            }} />
        </div>
        
        {/* Right: Vineyard/Andes */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
             <div style={{ 
                position: 'absolute', inset: 0, 
                backgroundColor: '#2C5282', // Fallback
                backgroundImage: 'url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80)', // Placeholder: Vineyard
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7)'
            }} />
        </div>

        {/* Gradient Overlay for Blend */}
        <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(105deg, rgba(26,39,68,0.95) 0%, rgba(26,39,68,0.7) 40%, rgba(26,39,68,0.2) 100%)' 
        }} />
      </div>

      {/* Content */}
      <div style={{ 
          position: 'relative', zIndex: 10, width: '100%', maxWidth: '1400px', margin: '0 auto', 
          display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2rem', color: 'var(--color-white-ivory)' 
      }}>
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '700px' }}
        >
            <span style={{ 
                display: 'inline-block', color: 'var(--color-gold-imperial)', 
                letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem',
                border: '1px solid var(--color-gold-imperial)', padding: '0.5rem 1rem', borderRadius: '50px'
            }}>
                PROGRAMA OFICIAL DE CIUDADANÍA POR INVERSIÓN
            </span>

            <h1 style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--font-primary)', 
                lineHeight: 1.1, marginBottom: '2rem' 
            }}>
                Invierte en Argentina.<br/>
                <span style={{ color: 'var(--color-gold-imperial)' }}>Obtén Tu Ciudadanía.</span>
            </h1>

            <p style={{ 
                fontSize: '1.2rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px' 
            }}>
                El programa CBI de Argentina te permite acceder a la ciudadanía a través de una inversión productiva mínima de 
                <strong style={{ color: 'var(--color-white)' }}> USD $550,000</strong> en el ecosistema de startups más prometedor de Latinoamérica.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <button 
                    onClick={() => navigate('/aplicar')}
                    style={{
                    backgroundColor: 'var(--color-gold-imperial)', color: 'var(--color-navy-deep)',
                    padding: '1rem 2.5rem', fontSize: '1rem', fontWeight: 600, borderRadius: '4px',
                    border: 'none', cursor: 'pointer', transition: 'var(--transition-smooth)'
                }}>
                    SOLICITAR INFORMACIÓN
                </button>
                <button style={{
                    backgroundColor: 'transparent', color: 'var(--color-white)',
                    padding: '1rem 2.5rem', fontSize: '1rem', fontWeight: 500, borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'var(--transition-smooth)',
                    display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                    VER PROCESO COMPLETO <ArrowRight size={18} />
                </button>
            </div>
        </motion.div>

      </div>

      {/* Trust Badge */}
      <div style={{
          position: 'absolute', bottom: '4rem', right: '4rem',
          backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
          padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
          maxWidth: '250px', 
          display: 'block' // Simplified for now, assuming desktop-first or responsive enough
      }}> 
          <span style={{ display: 'block', fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</span>
          <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.4 }}>
              Programa regulado por <strong>Decreto 524/2025</strong><br/>Gobierno de Argentina
          </p>
      </div>

    </section>
  );
};

export default CBIHero;
