import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Building2, Briefcase } from 'lucide-react';

interface InvestmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

import { useNavigate } from 'react-router-dom';

const InvestmentModal: React.FC<InvestmentModalProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const investmentOptions = [
        {
            id: 'private',
            title: 'Inversor Privado',
            subtitle: 'Tickets desde $25k',
            icon: <User size={40} />,
            description: 'Acceso exclusivo a rondas Seed y Series A en startups de alto potencial. Co-inversión directa junto a Falcon Pampas Holding en deals seleccionados.',
            color: '#48BB78',
            action: 'Aplicar al Club'
        },
        {
            id: 'institutional',
            title: 'Institucional y Family Office',
            subtitle: 'Estructuras a Medida',
            icon: <Building2 size={40} />,
            description: 'Vehículos dedicados, SPVs sindicados y acceso estratégico al dealflow propietario de Falcon. Gestión profesional de portafolio y reportes trimestrales.',
            color: '#B8860B', // Gold
            action: 'Solicitar Reunión'
        },
        {
            id: 'partner',
            title: 'Partner Estratégico',
            subtitle: 'Corporate Venture',
            icon: <Briefcase size={40} />,
            description: 'Para corporaciones que buscan innovación abierta. Conectamos su industria con soluciones tecnológicas disruptivas desarrolladas por nuestras startups.',
            color: '#4299E1',
            action: 'Contactar'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '100%',
                                maxWidth: '1000px',
                                backgroundColor: '#1A2744', // Brand Navy
                                borderRadius: '24px',
                                padding: '3rem',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            {/* Decorative Background Elements */}
                            <div style={{ position: 'absolute', top: -100, left: -100, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(184,134,11,0.2) 0%, rgba(26,39,68,0) 70%)', pointerEvents: 'none' }} />
                            <div style={{ position: 'absolute', bottom: -100, right: -100, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(66,153,225,0.2) 0%, rgba(26,39,68,0) 70%)', pointerEvents: 'none' }} />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    right: '2rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                    zIndex: 10
                                }}
                            >
                                <X size={20} />
                            </button>

                            {/* Title */}
                            <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    style={{ fontSize: '2.5rem', color: 'white', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}
                                >
                                    Elige tu Camino de Inversión
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    style={{ color: '#A0AEC0', fontSize: '1.1rem' }}
                                >
                                    Descubre cómo potenciar tus activos con Falcon Pampas
                                </motion.p>
                            </div>

                            {/* Options Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
                                {investmentOptions.map((option, index) => (
                                    <motion.div
                                        key={option.id}
                                        layoutId={option.id}
                                        onClick={() => setSelectedId(selectedId === option.id ? null : option.id)}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        whileHover={{ y: -5, boxShadow: `0 10px 30px -10px ${option.color}40` }}
                                        style={{
                                            backgroundColor: selectedId === option.id ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                                            borderRadius: '16px',
                                            padding: '2rem',
                                            cursor: 'pointer',
                                            border: `1px solid ${selectedId === option.id ? option.color : 'rgba(255,255,255,0.1)'}`,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'background 0.3s, border 0.3s'
                                        }}
                                    >
                                        <div style={{ color: option.color, marginBottom: '1.5rem' }}>
                                            {option.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem', fontFamily: 'var(--font-primary)' }}>
                                            {option.title}
                                        </h3>
                                        <p style={{ color: option.color, fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                                            {option.subtitle}
                                        </p>
                                        
                                        <motion.div 
                                            initial={{ opacity: 0.6 }}
                                            animate={{ opacity: selectedId === option.id ? 1 : 0.6 }}
                                            style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}
                                        >
                                            {option.description}
                                        </motion.div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => navigate('/aplicar', { state: { type: option.id } })}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                backgroundColor: option.color,
                                                color: '#1A2744',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontWeight: 700,
                                                fontSize: '1rem',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {option.action}
                                        </motion.button>

                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default InvestmentModal;
