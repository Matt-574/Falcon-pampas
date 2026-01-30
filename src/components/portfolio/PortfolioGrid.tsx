import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import StartupModal from './StartupModal';

// Mock Data
const STARTUPS = [
    {
        id: '1',
        name: 'AgroFuture',
        tagline: 'Precision agriculture powered by AI satellite data.',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80', // placeholder
        cover: 'https://images.unsplash.com/photo-1625246333195-098e98e298d2?auto=format&fit=crop&q=80',
        sector: 'AgTech',
        stage: 'Seed',
        location: 'Córdoba, AR',
        employees: 18,
        raised: '$1.2M',
        growth: '+210% YoY',
        description: 'AgroFuture optimiza el rendimiento de los cultivos mediante el análisis de imágenes satelitales y datos de suelo en tiempo real, permitiendo a los productores ahorrar hasta un 30% en agua y fertilizantes.',
        solution: 'Plataforma SaaS que integra datos de Sentinel-2 con sensores IoT en tierra para predecir plagas y sequías con 2 semanas de antelación.'
    },
    {
        id: '2',
        name: 'FinLink',
        tagline: 'Cross-border payments infrastructure for LatAm SMEs.',
        logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80',
        cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80',
        sector: 'FinTech',
        stage: 'Serie A',
        location: 'Buenos Aires, AR',
        employees: 45,
        raised: '$4.5M',
        growth: '+15% MoM',
        description: 'FinLink elimina la fricción de los cobros internacionales para exportadores de servicios, ofreciendo cuentas locales en USD y EUR con liquidación instantánea en pesos al mejor tipo de cambio.',
        solution: 'API bancaria unificada que conecta redes de pago locales (PIX, SPEI, Transferencias 3.0) con SWIFT y SEPA.'
    },
    {
        id: '3',
        name: 'BioGen',
        tagline: 'Next-gen biofuels from agricultural waste.',
        logo: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80',
        cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
        sector: 'CleanTech',
        stage: 'Pre-Seed',
        location: 'Rosario, AR',
        employees: 8,
        raised: '$450k',
        growth: 'Pre-Rev',
        description: 'BioGen transforma residuos de la cosecha de soja y maíz en biocombustibles avanzados de segunda generación, reduciendo la huella de carbono de la logística agrícola.',
        solution: 'Reactor modular de pirólisis rápida que puede instalarse directamente en los campos de acopio.'
    },
     {
        id: '4',
        name: 'MedConnect',
        tagline: 'Telemedicine platform for remote rural areas.',
        logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
        cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
        sector: 'HealthTech',
        stage: 'Seed',
        location: 'Mendoza, AR',
        employees: 12,
        raised: '$800k',
        growth: '+85% YoY',
        description: 'MedConnect lleva atención médica especializada a pueblos rurales mediante kioscos de telemedicina equipados con herramientas de diagnóstico básico conectadas a la nube.',
        solution: 'Red de médicos especialistas on-demand integrada con hardware de diagnóstico remoto.'
    },
    {
        id: '5',
        name: 'LogiSoft',
        tagline: 'AI-driven route optimization for last-mile delivery.',
        logo: 'https://images.unsplash.com/photo-1566576912906-253c723521b8?auto=format&fit=crop&q=80',
        cover: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
        sector: 'Logistics',
        stage: 'Seed',
        location: 'Buenos Aires, AR',
        employees: 22,
        raised: '$1.5M',
        growth: '+120% YoY',
        description: 'LogiSoft reduce costos logísticos un 25% mediante algoritmos genéticos que recalculan rutas en tiempo real considerando tráfico, clima y ventanas de entrega.',
        solution: 'SaaS B2B para operadores logísticos y e-commerce con flota propia.'
    },
    {
        id: '6',
        name: 'CloudCore',
        tagline: 'Serverless architecture deployment automation.',
        logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
        cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
        sector: 'SaaS',
        stage: 'Serie A',
        location: 'Córdoba, AR',
        employees: 35,
        raised: '$3.2M',
        growth: '+200% ARR',
        description: 'CloudCore permite a equipos de desarrollo desplegar arquitecturas serverless complejas en AWS y Google Cloud en minutos, no meses, mediante templates IaC visuales.',
        solution: 'Plataforma No-Code/Low-Code para DevOps.'
    }
];

const PortfolioGrid: React.FC = () => {
  const [filterSector, setFilterSector] = useState('All');
  const [filterStage, setFilterStage] = useState('All');
  const [selectedStartup, setSelectedStartup] = useState<typeof STARTUPS[0] | null>(null);

  const filteredStartups = STARTUPS.filter(s => {
      const matchSector = filterSector === 'All' || s.sector === filterSector;
      const matchStage = filterStage === 'All' || s.stage === filterStage;
      return matchSector && matchStage;
  });

  const sectors = ['All', 'AgTech', 'FinTech', 'CleanTech', 'HealthTech', 'Logistics', 'SaaS'];
  const stages = ['All', 'Pre-Seed', 'Seed', 'Serie A'];

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Filters Sticky Bar */}
        <div style={{ 
            position: 'sticky', top: '80px', zIndex: 50, 
            backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)',
            padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0',
            marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem',
            alignItems: 'center', justifyContent: 'space-between',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
            
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#A0AEC0', marginRight: '0.5rem' }}>SECTOR:</span>
                {sectors.map(sector => (
                    <button
                        key={sector}
                        onClick={() => setFilterSector(sector)}
                        style={{
                            padding: '0.4rem 0.8rem', borderRadius: '20px', border: 'none',
                            backgroundColor: filterSector === sector ? 'var(--color-navy-deep)' : 'transparent',
                            color: filterSector === sector ? 'white' : '#4A5568',
                            fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s',
                            fontWeight: filterSector === sector ? 600 : 400
                        }}
                    >
                        {sector}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#A0AEC0', marginRight: '0.5rem' }}>STAGE:</span>
                {stages.map(stage => (
                    <button
                        key={stage}
                        onClick={() => setFilterStage(stage)}
                        style={{
                            padding: '0.4rem 0.8rem', borderRadius: '20px', border: 'none',
                            backgroundColor: filterStage === stage ? 'var(--color-gold-imperial)' : 'transparent',
                            color: filterStage === stage ? 'var(--color-navy-deep)' : '#4A5568',
                            fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s',
                             fontWeight: filterStage === stage ? 600 : 400
                        }}
                    >
                        {stage}
                    </button>
                ))}
            </div>

        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            <AnimatePresence>
                {filteredStartups.map((startup) => (
                    <motion.div
                        layout
                        key={startup.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ y: -5, borderColor: 'var(--color-gold-imperial)' }}
                        style={{ 
                            backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E2E8F0',
                            overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s'
                        }}
                        onClick={() => setSelectedStartup(startup)}
                    >
                        {/* Card Header (Logo + Name) */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#EDF2F7' }}>
                                <img src={startup.logo} alt={startup.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A2744', marginBottom: '0.2rem' }}>{startup.name}</h3>
                                <p style={{ fontSize: '0.8rem', color: '#718096' }}>{startup.tagline}</p>
                            </div>
                        </div>

                        {/* Card Tags */}
                        <div style={{ padding: '1rem 1.5rem', display: 'flex', gap: '0.5rem', borderBottom: '1px solid #F7FAFC' }}>
                            <span style={{ fontSize: '0.75rem', backgroundColor: '#EBF8FF', color: '#3182CE', padding: '2px 8px', borderRadius: '4px' }}>{startup.sector}</span>
                            <span style={{ fontSize: '0.75rem', backgroundColor: '#F0FFF4', color: '#38A169', padding: '2px 8px', borderRadius: '4px' }}>{startup.stage}</span>
                        </div>

                        {/* Card Metrics */}
                        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#4A5568' }}>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', color: '#A0AEC0' }}>LOCATION</span>
                                {startup.location}
                            </div>
                             <div>
                                <span style={{ display: 'block', fontSize: '0.75rem', color: '#A0AEC0', textAlign: 'right' }}>GROWTH</span>
                                <span style={{ color: '#48BB78', fontWeight: 600 }}>{startup.growth}</span>
                            </div>
                        </div>

                        {/* Card Footer (CTA) */}
                        <div style={{ padding: '1rem', backgroundColor: '#F7FAFC', textAlign: 'center', color: '#1A2744', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            VER CASO <ArrowUpRight size={16} />
                        </div>

                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <StartupModal startup={selectedStartup} onClose={() => setSelectedStartup(null)} />

      </div>
    </section>
  );
};

export default PortfolioGrid;
