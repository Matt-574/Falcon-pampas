import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Users, TrendingUp, ArrowRight } from 'lucide-react';

interface Startup {
    id: string;
    name: string;
    tagline: string;
    logo: string;
    cover: string;
    sector: string;
    stage: string;
    location: string;
    employees: number;
    raised: string;
    growth: string;
    description: string;
    solution: string;
}

interface StartupModalProps {
    startup: Startup | null;
    onClose: () => void;
}

const StartupModal: React.FC<StartupModalProps> = ({ startup, onClose }) => {
    if (!startup) return null;

    return (
        <AnimatePresence>
            {startup && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{ 
                            position: 'relative', width: '90%', maxWidth: '1000px', maxHeight: '90vh', 
                            backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', overflowY: 'auto',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            style={{ 
                                position: 'absolute', top: '20px', right: '20px', zIndex: 10,
                                width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={24} />
                        </button>

                        {/* Hero */}
                        <div style={{ height: '300px', position: 'relative' }}>
                            <img src={startup.cover} alt={startup.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                            <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: 'white' }}>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                    <span style={{ backgroundColor: 'var(--color-gold-imperial)', color: 'var(--color-navy-deep)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>{startup.sector}</span>
                                    <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem' }}>{startup.stage}</span>
                                </div>
                                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', marginBottom: '0.5rem' }}>{startup.name}</h2>
                                <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{startup.tagline}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                            
                            {/* Left: Detail */}
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1A2744' }}>El Problema & La Solución</h3>
                                <p style={{ color: '#4A5568', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    {startup.description}
                                </p>
                                <div style={{ backgroundColor: '#F7FAFC', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold-imperial)' }}>
                                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1A2744' }}>Solución Innovadora</h4>
                                    <p style={{ color: '#4A5568', fontSize: '0.95rem' }}>{startup.solution}</p>
                                </div>
                            </div>

                            {/* Right: Metrics & Team */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#A0AEC0', marginBottom: '1rem', letterSpacing: '1px' }}>Key Metrics</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <MapPin size={20} color="#CBD5E0" /> 
                                            <span style={{ color: '#4A5568' }}>{startup.location}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <Users size={20} color="#CBD5E0" /> 
                                            <span style={{ color: '#4A5568' }}>{startup.employees} Empleados</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <CoinsIcon size={20} color="#CBD5E0" /> 
                                            <span style={{ color: '#4A5568' }}>{startup.raised} Raised</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <TrendingUp size={20} color="#48BB78" /> 
                                            <span style={{ color: '#48BB78', fontWeight: 600 }}>{startup.growth}</span>
                                        </div>
                                    </div>
                                </div>

                                <button style={{
                                    backgroundColor: 'var(--color-navy-deep)', color: 'white',
                                    padding: '1rem', borderRadius: '8px', border: 'none',
                                    fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                                }}>
                                    Solicitar Intro <ArrowRight size={18} />
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

// Helper icon
const CoinsIcon = ({ size, color }: { size: number, color: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
);

export default StartupModal;
