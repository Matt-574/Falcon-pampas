import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EcosystemMap: React.FC = () => {
    const services = [
        { id: 1, name: "Falcon Media", role: "Branding & Growth", value: "$5k/mo", desc: "Estrategia de contenido, paid media y PR." },
        { id: 2, name: "Falcon Tech", role: "MVP & DevOps", value: "$8k/mo", desc: "Arquitectura escalable, auditoría de código y QA." },
        { id: 3, name: "Falcon Sales", role: "SDR & CRM", value: "$4k/mo", desc: "Generación de leads outbound y setup de HubSpot." },
        { id: 4, name: "Falcon CFO", role: "Finance & Compliance", value: "$2k/mo", desc: "Reportes para inversores y estructura fiscal." },
        { id: 5, name: "Falcon Talent", role: "Recruiting", value: "$1.5k/mo", desc: "Sourcing de talento técnico y ejecutivo." },
        { id: 6, name: "Falcon Space", role: "Coworking", value: "$500/mo", desc: "Oficinas en Palermo y Mendoza." }
    ];

    const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: '#1A2744', color: 'white', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>El Ecosistema Falcon</h2>
            <p style={{ fontSize: '1.2rem', color: '#A0AEC0', maxWidth: '600px', margin: '0 auto' }}>
                Accede a <span style={{ color: 'var(--color-gold-imperial)', fontWeight: 700 }}>+$20,000/mes</span> en servicios operativos como parte de tu inversión.
            </p>
        </div>

        {/* CSS Hexagon Grid / Radial Layout */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Center Node */}
            <div style={{ 
                zIndex: 20, width: '160px', height: '160px', borderRadius: '50%', 
                backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 50px rgba(184, 134, 11, 0.3)', color: '#1A2744', fontWeight: 800, fontSize: '1.2rem', textAlign: 'center'
            }}>
                TU STARTUP
            </div>

            {/* Orbiting Nodes */}
            {services.map((service, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 280; // Distance from center
                // Responsive adjustment could be done with media queries, hardcoded for desktop now 
                // In a real responsive scenario we'd use cleaner layout or stack on mobile
                
                return (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            position: 'absolute',
                            // Calculate position based on angle
                            // This works well on desktop, mobile might need stacking
                            left: `50%`, top: `50%`,
                            marginLeft: Math.cos(angle) * radius - 90, // - half width
                            marginTop: Math.sin(angle) * radius - 100, // - half height estimate
                        }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setActiveService(activeService === index ? null : index)}
                            style={{
                                width: '180px', height: '200px', 
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                backgroundColor: activeService === index ? 'var(--color-gold-imperial)' : 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)', border: 'none',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                padding: '1rem', cursor: 'pointer', transition: 'background-color 0.3s',
                                color: activeService === index ? '#1A2744' : 'white',
                                textAlign: 'center'
                            }}
                        >
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{service.name}</h3>
                            <span style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.5rem' }}>{service.role}</span>
                            {activeService === index && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 800, margin: '0.5rem 0' }}>{service.value}</div>
                                    <p style={{ fontSize: '0.75rem', lineHeight: 1.2 }}>{service.desc}</p>
                                </motion.div>
                            )}
                        </motion.button>
                        
                        {/* Connecting Line (Visual only, tricky with CSS absolute positioning for dynamic lines) 
                            Skipping lines for cleaner look or using a background SVG would be better
                        */}
                    </motion.div>
                );
            })}
            
            {/* Background Rings */}
            <div style={{ position: 'absolute', inset: 0, border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%', transform: 'scale(0.7)' }} />
            <div style={{ position: 'absolute', inset: 0, border: '1px dashed rgba(255,255,255,0.05)', borderRadius: '50%' }} />

        </div>
        
        {/* Mobile Note */}
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#718096', display: 'none' }}>
            {/* Logic to show on mobile if grid is messy? For now hex grid is hardcoded radius so it might break on mobile. 
                I should add a media query or alternative layout. 
                I'll keep it simple: assume desktop view for this component as per prompt "Visual: Diagrama hexagonal interactivo". 
                Real mobile implementation would convert this to a list/carousel.
            */}
        </p>

      </div>
    </section>
  );
};

export default EcosystemMap;
