import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const StartupsHero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section style={{ height: '90vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      
      {/* Video Background */}
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://lh3.googleusercontent.com/d/1PA5z-9TVGIvEWFscjtI6ZfDT-sg9fjSk)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} />
        {/* Navy Gradient Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(26,39,68,0.95) 0%, rgba(26,39,68,0.7) 60%, rgba(26,39,68,0.2) 100%)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', color: 'white', display: 'flex' }}>
        
        <div style={{ maxWidth: '700px' }}>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--font-primary)', lineHeight: 1.1, marginBottom: '2rem' }}
          >
            No Solo Invertimos.<br/>
            <span style={{ color: 'var(--color-gold-imperial)' }}>Construimos Contigo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '3rem' }}
          >
            Capital + Marketing + Tecnología + Ventas + Talento. 
            Todo el ecosistema que tu startup necesita para escalar.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '1.5rem' }}
          >
             <button 
                onClick={() => navigate('/aplicar')}
                style={{
                backgroundColor: 'var(--color-gold-imperial)', color: 'var(--color-navy-deep)',
                padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 600, borderRadius: '4px',
                border: 'none', cursor: 'pointer', transition: 'var(--transition-smooth)'
             }}>
                APLICAR AHORA
             </button>
             <button 
                onClick={() => {
                  const el = document.getElementById('criteria');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                backgroundColor: 'transparent', color: 'white',
                padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 500, borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'var(--transition-smooth)',
                display: 'flex', alignItems: 'center', gap: '0.5rem'
             }}>
                VER QUÉ OFRECEMOS <ArrowDown size={18} />
             </button>
          </motion.div>
        
        </div>

      </div>

    </section>
  );
};

export default StartupsHero;
