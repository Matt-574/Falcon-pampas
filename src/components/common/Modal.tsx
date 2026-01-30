import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
             document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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
                            inset: 0,
                            backgroundColor: 'rgba(15, 23, 42, 0.8)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 2000, // Higher than Navbar (1000)
                            cursor: 'pointer'
                        }}
                    />

                    {/* Modal Content */}
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2001,
                        pointerEvents: 'none' // Allow clicks to pass through to backdrop if not on card
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            style={{
                                backgroundColor: 'white',
                                width: '90%',
                                maxWidth: '600px',
                                maxHeight: '85vh',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                pointerEvents: 'auto', // Re-enable clicks
                                position: 'relative'
                            }}
                        >
                            {/* Header */}
                            <div style={{
                                padding: '1.5rem 2rem',
                                borderBottom: '1px solid #E2E8F0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: '#F8FAFC'
                            }}>
                                {title && (
                                    <h3 style={{ 
                                        margin: 0, 
                                        fontFamily: 'var(--font-primary)', 
                                        fontSize: '1.25rem', 
                                        color: '#0F172A',
                                        fontWeight: 600
                                    }}>
                                        {title}
                                    </h3>
                                )}
                                <button 
                                    onClick={onClose}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#64748B',
                                        padding: '4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div style={{
                                padding: '2rem',
                                overflowY: 'auto',
                                color: '#334155',
                                lineHeight: 1.6
                            }}>
                                {children}
                            </div>

                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
