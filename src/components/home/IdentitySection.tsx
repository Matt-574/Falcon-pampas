import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sprout, RefreshCw } from 'lucide-react';

const IdentitySection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-gold" />,
      title: "Registro RICE",
      description: "Registrados en el Ministerio de Economía. Compliance institucional."
    },
    {
      icon: <Sprout className="w-6 h-6 text-gold" />,
      title: "Economía Real",
      description: "Invertimos en activos tangibles: agro, energía, tecnología."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-gold" />,
      title: "Ecosistema Sinérgico",
      description: "Nuestras empresas de servicios potencian a las startups."
    }
  ];

  return (
    <section id="identity-section" style={{ 
      backgroundColor: 'var(--color-white)', 
      padding: '6rem 2rem',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Column: Text */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             visible: { transition: { staggerChildren: 0.2 } }
           }}
        >
          <motion.span variants={fadeInUp} style={{ 
            color: 'var(--color-gold-imperial)', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem'
          }}>
            SOBRE FALCON PAMPAS
          </motion.span>
          
          <motion.h2 variants={fadeInUp} style={{ 
            color: 'var(--color-navy-deep)', 
            fontSize: '2.5rem', 
            fontFamily: 'var(--font-primary)',
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: '1.5rem' 
          }}>
            No Somos un Fondo Tradicional. <br />
            Somos Constructores de Argentina.
          </motion.h2>

          <motion.p variants={fadeInUp} style={{ 
            color: 'var(--color-gray-slate)', 
            lineHeight: 1.8, 
            marginBottom: '3rem',
            fontSize: '1.1rem'
          }}>
            Falcon Pampas es un ecosistema de inversión que combina la gestión financiera institucional con un portafolio de empresas operativas. No solo invertimos en startups: las incubamos, las potenciamos con servicios compartidos, y las hacemos crecer juntas. Somos propietarios permanentes con visión de 50 años.
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
              >
                <div style={{ 
                  backgroundColor: 'rgba(184, 134, 11, 0.1)', 
                  padding: '12px', 
                  borderRadius: '50%',
                  color: 'var(--color-gold-imperial)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{ 
                    color: 'var(--color-navy-deep)', 
                    fontSize: '1.1rem', 
                    fontWeight: 600, 
                    marginBottom: '0.25rem',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--color-gray-slate)', fontSize: '0.95rem' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           style={{
             position: 'relative',
             height: '600px',
             borderRadius: '8px',
             overflow: 'hidden',
             backgroundColor: 'var(--color-navy-deep)' // Fallback
           }}
        >
          <img 
            src="/images/about-falcon.jpg" 
            alt="Falcon Pampas Construction Site" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default IdentitySection;
