import React from 'react';
import { motion } from 'framer-motion';
// import LiveTicker from '../components/thesis/LiveTicker'; // Removed in favor of ArgentinaMacro
import FalconMachine from '../components/thesis/FalconMachine';
import MarketComparison from '../components/thesis/MarketComparison';
import FinalCTA from '../components/home/FinalCTA';
import ArgentinaMacro from '../components/thesis/ArgentinaMacro';

const Thesis: React.FC = () => {
  return (
    <div style={{ paddingTop: '140px', backgroundColor: '#F7FAFC' }}>
      
      {/* 4.1 HERO: El Arbitraje */}
      <section style={{ 
          minHeight: '80vh', backgroundColor: '#1A2744', color: 'white', 
          display: 'flex', flexDirection: 'column',
          position: 'relative',
          padding: '4rem 0'
      }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '0 2rem', maxWidth: '1000px', margin: '0 auto', zIndex: 10 }}>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                }}
            >
                <motion.h1 
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontFamily: 'var(--font-primary)', lineHeight: 1, marginBottom: '2rem' }}
                >
                    ARGENTINA<br/>
                    <span style={{ color: 'var(--color-gold-imperial)' }}>DESENCADENADA</span>
                </motion.h1>
                <motion.p 
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    style={{ fontSize: '1.5rem', color: '#E2E8F0', maxWidth: '850px', margin: '0 auto 5rem', fontFamily: 'var(--font-secondary)', fontWeight: 300, lineHeight: 1.4 }}
                >
                    La mayor asimetría entre <span style={{ color: '#F56565', fontWeight: 600 }}>Riesgo Percibido</span> y <span style={{ color: '#48BB78', fontWeight: 600 }}>Valor Real</span> de la última década.
                </motion.p>
                
                 {/* Visual Representation of Gap */}
                <motion.div 
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    style={{ position: 'relative', height: '160px', width: '100%', maxWidth: '600px', margin: '0 auto' }}
                >
                    {/* Intrinsic Value Line - Stable/Rising */}
                    <div style={{ position: 'absolute', top: 20, left: 0, right: 0, height: '2px', backgroundColor: '#B8860B' }}>
                        <span style={{ position: 'absolute', right: 0, top: '-24px', fontSize: '0.8rem', color: '#B8860B', fontWeight: 700, letterSpacing: '1px' }}>FUNDAMENTALES (VALOR)</span>
                    </div>
                    
                    {/* Market Price Line - Volatiile/Depressed */}
                    <motion.div 
                        initial={{ top: '20px' }}
                        animate={{ top: ['30px', '100px', '60px', '120px', '110px'] }} 
                        transition={{ duration: 4, ease: 'easeInOut', times: [0, 0.4, 0.6, 0.8, 1], delay: 1 }}
                        style={{ position: 'absolute', left: 0, right: 0, height: '2px', backgroundColor: '#F56565' }}
                    >
                        <span style={{ position: 'absolute', right: 0, bottom: '-24px', fontSize: '0.8rem', color: '#F56565', fontWeight: 700, letterSpacing: '1px' }}>PRECIO ACTIVOS</span>
                    </motion.div>

                    {/* Gap Highlight Area */}
                     <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: [0, 0.3, 0.5], height: ['0px', '90px'] }}
                        transition={{ duration: 2, delay: 2.5 }}
                        style={{ position: 'absolute', top: '22px', left: '0', right: '0', backgroundColor: 'rgba(184, 134, 11, 0.1)', borderLeft: '1px dashed rgba(184,134,11,0.5)', borderRight: '1px dashed rgba(184,134,11,0.5)' }} 
                    >
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5 }}
                            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#B8860B', fontWeight: 700, fontSize: '1rem', letterSpacing: '2px', whiteSpace: 'nowrap' }}
                        >
                            OPORTUNIDAD
                        </motion.span>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
      </section>

      {/* 4.2 MACRO DATA (New Section) */}
      <ArgentinaMacro />

      {/* 4.3 MARKET COMPARISON */}
      <MarketComparison />

      {/* 4.4 FALCON MACHINE */}
      <FalconMachine />


      <FinalCTA />

    </div>
  );
};

export default Thesis;
