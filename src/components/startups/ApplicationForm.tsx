import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Upload } from 'lucide-react';

const ApplicationForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const nextStep = () => setStep(Math.min(step + 1, totalSteps + 1)); // +1 for success state

    const renderStepper = () => (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
            {[1, 2, 3, 4].map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                    
                    {/* Circle */}
                    <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        backgroundColor: step >= s ? 'var(--color-navy-deep)' : '#E2E8F0',
                        color: step >= s ? 'var(--color-gold-imperial)' : '#A0AEC0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, transition: 'all 0.3s'
                    }}>
                        {step > s ? <CheckCircle size={20} /> : s}
                    </div>

                    {/* Line */}
                    {s < 4 && (
                        <div style={{ 
                            width: '80px', height: '2px', 
                            backgroundColor: step > s ? 'var(--color-navy-deep)' : '#E2E8F0',
                            margin: '0 1rem', transition: 'all 0.3s'
                        }} />
                    )}
                </div>
            ))}
        </div>
    );

    return (
    <section id="apply" style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '3rem' }}>
            Aplica a Falcon Ventures
        </h2>

        {renderStepper()}

        <div style={{ 
            backgroundColor: '#F8FAFC', padding: '3rem', borderRadius: '16px', 
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0' 
        }}>
            
            <AnimatePresence mode='wait'>
                
                {step === 1 && (
                    <motion.div key={1} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#1A2744' }}>1. Sobre Ti</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input type="text" placeholder="Nombre Completo" style={inputStyle} />
                            <input type="email" placeholder="Email Profesional" style={inputStyle} />
                            <input type="text" placeholder="URL de LinkedIn" style={inputStyle} />
                            <select style={inputStyle}>
                                <option value="">Rol en la Startup</option>
                                <option value="ceo">CEO / Founder</option>
                                <option value="cto">CTO / Tech Lead</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>
                        <div style={footerStyle}>
                            <button onClick={nextStep} style={btnStyle}>Siguiente <ArrowRight size={18} /></button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div key={2} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#1A2744' }}>2. Sobre la Startup</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input type="text" placeholder="Nombre de la Startup" style={inputStyle} />
                            <input type="text" placeholder="Website URL" style={inputStyle} />
                             <select style={inputStyle}>
                                <option value="">Sector</option>
                                <option value="agtech">AgTech</option>
                                <option value="fintech">FinTech</option>
                                <option value="healthtech">HealthTech</option>
                                <option value="saas">SaaS</option>
                                <option value="other">Otro</option>
                            </select>
                            <textarea placeholder="Pitch de una oración (140 caracteres)" maxLength={140} style={{ ...inputStyle, minHeight: '100px' }} />
                        </div>
                        <div style={footerStyle}>
                            <button onClick={()=>setStep(1)} style={secondaryBtnStyle}>Atrás</button>
                            <button onClick={nextStep} style={btnStyle}>Siguiente <ArrowRight size={18} /></button>
                        </div>
                    </motion.div>
                )}

                 {step === 3 && (
                    <motion.div key={3} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#1A2744' }}>3. Tracción</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                             <select style={inputStyle}>
                                <option value="">MRR Actual (USD)</option>
                                <option value="0">Pre-Revenue</option>
                                <option value="1k">&lt; $1k</option>
                                <option value="1k-10k">$1k - $10k</option>
                                <option value="10k+">&gt; $10k</option>
                            </select>
                            <input type="text" placeholder="Usuarios / Clientes Activos" style={inputStyle} />
                            <input type="text" placeholder="Capital levantado hasta ahora" style={inputStyle} />
                        </div>
                        <div style={footerStyle}>
                            <button onClick={()=>setStep(2)} style={secondaryBtnStyle}>Atrás</button>
                            <button onClick={nextStep} style={btnStyle}>Siguiente <ArrowRight size={18} /></button>
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div key={4} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#1A2744' }}>4. La Ronda</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input type="text" placeholder="¿Cuánto estás levantando?" style={inputStyle} />
                            <textarea placeholder="¿Para qué usarás el capital?" style={{ ...inputStyle, minHeight: '100px' }} />
                            
                            <div style={{ border: '2px dashed #CBD5E0', padding: '2rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer' }}>
                                <Upload size={32} color="#A0AEC0" style={{ marginBottom: '1rem' }} />
                                <p style={{ color: '#4A5568', fontWeight: 600 }}>Sube tu Pitch Deck (PDF)</p>
                                <p style={{ fontSize: '0.8rem', color: '#A0AEC0' }}>Max 10MB</p>
                            </div>

                        </div>
                        <div style={footerStyle}>
                            <button onClick={()=>setStep(3)} style={secondaryBtnStyle}>Atrás</button>
                            <button onClick={nextStep} style={btnStyle}>ENVIAR APLICACIÓN</button>
                        </div>
                    </motion.div>
                )}

                 {step === 5 && (
                    <motion.div key={5} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '2rem' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#F0FFF4', color: '#48BB78', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                            <CheckCircle size={48} />
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1A2744' }}>¡Aplicación Recibida!</h3>
                        <p style={{ color: '#4A5568', marginBottom: '2rem' }}>
                            Nuestro equipo de analistas revisará tu proyecto en las próximas 48 horas. Te hemos enviado un email con los siguientes pasos.
                        </p>
                        <button style={btnStyle} onClick={() => window.location.href = '/'}>Volver al Inicio</button>
                    </motion.div>
                )}

            </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

const inputStyle = {
    width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0',
    fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s'
};

const footerStyle = {
    display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0'
};

const btnStyle = {
    backgroundColor: 'var(--color-navy-deep)', color: 'white', padding: '1rem 2rem', borderRadius: '8px',
    border: 'none', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
};
const secondaryBtnStyle = {
    backgroundColor: 'transparent', color: '#718096', padding: '1rem 2rem', borderRadius: '8px',
    border: '1px solid transparent', fontWeight: 600, cursor: 'pointer'
};

export default ApplicationForm;
