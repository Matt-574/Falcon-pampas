import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
    onLogin: (role: 'admin' | 'investor') => void;
}

const InvestorVault: React.FC<Props> = ({ onLogin }) => {
  return (
    <div style={{ backgroundColor: '#0F172A', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '140px' }}>
        
        {/* Background Effects */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'radial-gradient(#B8860B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(184,134,11,0.15) 0%, rgba(15,23,42,0) 70%)' }} />

        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '600px', padding: '0 2rem' }}
        >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(184,134,11,0.3)', padding: '0.5rem 1rem', borderRadius: '100px', marginBottom: '2rem', backgroundColor: 'rgba(184,134,11,0.05)' }}>
                <Lock size={16} color="#B8860B" />
                <span style={{ color: '#B8860B', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>ACCESO RESTRINGIDO</span>
            </div>

            <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Falcon Investor Vault
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '3rem', lineHeight: 1.6 }}>
                Accede a reportes detallados, deal flow confidencial y gestión de tu portafolio en tiempo real.
            </p>

            <div style={{ width: '100%', maxWidth: '350px', margin: '0 auto' }}>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        const emailInput = (document.getElementById('email') as HTMLInputElement).value;
                        const role = emailInput.includes('admin') ? 'admin' : 'investor';
                        onLogin(role);
                    }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Correo Corporativo" 
                        defaultValue="admin@falconpampas.com"
                        required
                        style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #334155', backgroundColor: 'rgba(15,23,42,0.8)', color: 'white', fontSize: '1rem' }}
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        defaultValue="falcon123"
                        required
                        style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #334155', backgroundColor: 'rgba(15,23,42,0.8)', color: 'white', fontSize: '1rem' }}
                    />
                    <button 
                        type="submit"
                        style={{ 
                            padding: '1rem', backgroundColor: 'var(--color-gold-imperial)', color: '#0F172A', 
                            border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                            marginTop: '1rem', transition: 'transform 0.2s'
                        }}
                    >
                        INGRESAR AL PORTAL <ArrowRight size={18} />
                    </button>
                </form>

                <button style={{ 
                    width: '100%', marginTop: '1rem', padding: '1rem', backgroundColor: 'transparent', color: '#64748B', 
                    border: '1px solid #334155', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' 
                }}>
                    SOLICITAR ACCESO LP
                </button>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', color: '#64748B', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ShieldCheck size={14} /> Encriptación AES-256</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Lock size={14} /> 2FA Requerido</div>
            </div>

        </motion.div>

    </div>
  );
};

export default InvestorVault;
