import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, Building, Wallet } from 'lucide-react';

const FalconMachine: React.FC = () => {
    // ... main component
  return (
    <section style={{ backgroundColor: '#FAF8F5', padding: '8rem 2rem', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '1rem' }}
                >
                    El Motor Falcon
                </motion.h2>
                <p style={{ fontSize: '1.2rem', color: '#718096', maxWidth: '700px', margin: '0 auto' }}>
                    Un ecosistema diseñado para convertir el flujo de caja en crecimiento exponencial.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', position: 'relative' }}>
                
                {/* 1. INPUT */}
                <Card 
                    icon={<Wallet size={32} color="#1A2744" />}
                    title="Inversores"
                    desc="Capital Institucional & Privado"
                    delay={0}
                />

                <ArrowDown delay={0.3} />

                {/* 2. CORE */}
                <div style={{ padding: '2rem 4rem', backgroundColor: '#1A2744', borderRadius: '16px', color: 'white', textAlign: 'center', minWidth: '300px', boxShadow: '0 20px 40px rgba(26, 39, 68, 0.2)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-gold-imperial)' }}>FALCON HOLDING</h3>
                    <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Gestión Centralizada</p>
                </div>

                <ArrowDown delay={0.6} />

                {/* 3. ENGINES (Split) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%' }}>
                    
                    {/* Treasury Engine */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{ flex: 1, minWidth: '300px', backgroundColor: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ padding: '10px', backgroundColor: '#EBF8FF', borderRadius: '8px' }}>
                                <Building size={24} color="#2B6CB0" />
                            </div>
                            <h4 style={{ fontSize: '1.25rem', color: '#2D3748' }}>Tesorería (60%)</h4>
                        </div>
                        <p style={{ color: '#718096', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Generación de <strong>Cash Flow</strong> previsible a través de Bonos Soberanos y Real Estate Estratégico. Protege el capital.
                        </p>
                    </motion.div>

                    {/* Venture Engine */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        style={{ flex: 1, minWidth: '300px', backgroundColor: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                    >
                         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ padding: '10px', backgroundColor: '#FFFFF0', borderRadius: '8px' }}>
                                <Activity size={24} color="#D69E2E" />
                            </div>
                            <h4 style={{ fontSize: '1.25rem', color: '#2D3748' }}>Venture (40%)</h4>
                        </div>
                        <p style={{ color: '#718096', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Inversión en <strong>Startups de Alto Impacto</strong> tecnológicas. Busca la asimetría y el retorno exponencial.
                        </p>
                    </motion.div>

                </div>

                <ArrowDown delay={1.2} />

                {/* 4. OUTPUT */}
                <Card 
                    icon={<TrendingUp size={32} color="#48BB78" />}
                    title="Crecimiento NAV"
                    desc="Incremento del Valor Patrimonial Neto"
                    delay={1.5}
                    highlight
                />

            </div>

        </div>
    </section>
  );
};

interface CardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    delay: number;
    highlight?: boolean;
}

const Card: React.FC<CardProps> = ({ icon, title, desc, delay, highlight = false }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        style={{
            backgroundColor: 'white', padding: '2rem', borderRadius: '16px',
            border: highlight ? '2px solid #48BB78' : '1px solid #E2E8F0',
            boxShadow: highlight ? '0 10px 30px rgba(72, 187, 120, 0.2)' : '0 4px 6px rgba(0,0,0,0.05)',
            textAlign: 'center', minWidth: '280px', maxWidth: '350px'
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>{icon}</div>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1A2744' }}>{title}</h4>
        <p style={{ fontSize: '0.9rem', color: '#718096' }}>{desc}</p>
    </motion.div>
);

const ArrowDown = ({ delay }: { delay: number }) => (
    <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: '60px' }}
        transition={{ delay, duration: 0.5 }}
        style={{ width: '2px', backgroundColor: '#CBD5E0', position: 'relative' }}
    >
        <div style={{ position: 'absolute', bottom: 0, left: '-5px', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #CBD5E0' }} />
    </motion.div>
);

export default FalconMachine;
