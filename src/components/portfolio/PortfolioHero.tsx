import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioHero: React.FC = () => {
    // Array of startup images (placeholders)
    const images = [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80", // Meeting
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80", // Coding
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80", // Team
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", // Collaboration
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80", // Tech
        "https://images.unsplash.com/photo-1553877607-40a8316dfc60?auto=format&fit=crop&q=80"  // Agritech/Field placeholder
    ];

    const [currentImage, setCurrentImage] = useState(0);

    // Auto-rotate background subtly
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

  return (
    <section style={{ 
        position: 'relative', height: '70vh', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        overflow: 'hidden', backgroundColor: 'var(--color-navy-deep)' 
    }}>
      
      {/* Dynamic Background Mosaic (Simplified as crossfading images for performance/cleanliness) */}
      {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 0.4 : 0 }}
            transition={{ duration: 2 }}
            style={{ 
                position: 'absolute', inset: 0, 
                backgroundImage: `url(${img})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'grayscale(100%)' 
            }}
          />
      ))}
      
      {/* Overlay Particles (CSS Gradient for now) */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(26,39,68,0.5) 0%, rgba(26,39,68,1) 100%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px', padding: '0 2rem' }}>
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '3.5rem', fontFamily: 'var(--font-primary)', color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}
        >
            Construyendo el <span style={{ color: 'var(--color-gold-imperial)' }}>Futuro de Argentina</span>,<br/>
            Una Startup a la Vez.
        </motion.h1>
        
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: '#A0AEC0', marginBottom: '3rem' }}
        >
            Conoce las empresas que están transformando industrias desde Argentina.
        </motion.p>
      </div>

    </section>
  );
};

export default PortfolioHero;
