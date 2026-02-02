import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, Briefcase, GraduationCap, Building2, UserCircle, CheckCircle } from 'lucide-react';
import FinalCTA from '../components/home/FinalCTA';

type UserType = 'investor' | 'entrepreneur' | 'student' | 'general' | null;

const Apply: React.FC = () => {
  const location = useLocation();
  const [step, setStep] = useState<number>(1);
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState<any>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (location.state) {
        if (location.state.type) {
            // Came from InvestmentModal
            const typeMap: Record<string, UserType> = {
                'private': 'investor',
                'institutional': 'investor', 
                'partner': 'general'
            };
            const mappedType = typeMap[location.state.type] || 'general';
            setUserType(mappedType);
            setStep(2);
             // Optionally pre-fill some specific field based on subtype if needed
             if (location.state.type === 'institutional') {
                 setFormData((prev: any) => ({ ...prev, accredited: 'yes', investmentRange: '1M+' }));
             }
        } 
        else if (location.state.simulationData) {
            // Came from Simulator
            setUserType('investor');
            setStep(2);
            const { amount, investorType: invType } = location.state.simulationData;
            
            // Map amount to range
            let range = '';
            if (amount < 50000) range = '10k-50k';
            else if (amount < 250000) range = '50k-250k';
            else if (amount < 1000000) range = '250k-1M';
            else range = '1M+';

            setFormData((prev: any) => ({
                ...prev,
                investmentRange: range,
                accredited: invType === 'institutional' ? 'yes' : 'no'
            }));
        }
    }
  }, [location.state]);

  const handleTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep(1);
    setUserType(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to backend
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Content configuration based on UserType
  const getTypeConfig = () => {
    switch(userType) {
      case 'investor':
        return {
          title: "Portal del Inversor",
          subtitle: "Únase a Falcon Pampas y acceda a oportunidades de inversión en Economía Real y Mercados de Capitales.",
          icon: <Briefcase size={40} className="text-gold" />,
          fields: (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Rango de Inversión Estimado (USD)</label>
                <select name="investmentRange" style={inputStyle} value={formData.investmentRange || ''} onChange={handleInputChange} required>
                  <option value="">Seleccione un rango</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-250k">$50,000 - $250,000</option>
                  <option value="250k-1M">$250,000 - $1M</option>
                  <option value="1M+">$1M +</option>
                </select>
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Intereses Principales</label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {['Renta Fija / Tesorería', 'Real Estate', 'Agroindustria', 'Venture Capital', 'Fondo Diversificado'].map((interest) => (
                    <label key={interest} style={{ ...checkboxLabelStyle, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <input type="checkbox" name="interests" value={interest} style={{ marginRight: '0.5rem' }} />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>¿Es Inversor Acreditado?</label>
                <select name="accredited" style={inputStyle} value={formData.accredited || 'no'} onChange={handleInputChange}>
                  <option value="no">No / No estoy seguro</option>
                  <option value="yes">Sí</option>
                </select>
              </div>
            </>
          )
        };
      case 'entrepreneur':
        return {
          title: "Aplica con tu Startup",
          subtitle: "Buscamos fundadores argentinos construyendo el futuro. Cuéntanos qué estás construyendo.",
          icon: <Building2 size={40} className="text-gold" />,
          fields: (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Nombre de la Startup</label>
                <input type="text" name="startupName" style={inputStyle} onChange={handleInputChange} required />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Vertical / Industria</label>
                <select name="vertical" style={inputStyle} onChange={handleInputChange} required>
                    <option value="">Seleccione una industria</option>
                    <option value="agtech">AgTech</option>
                    <option value="fintech">FinTech</option>
                    <option value="biotech">BioTech / Salud</option>
                    <option value="saas">SaaS B2B</option>
                    <option value="energy">Energía / CleanTech</option>
                    <option value="other">Otro</option>
                </select>
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Etapa Actual</label>
                <select name="stage" style={inputStyle} onChange={handleInputChange} required>
                    <option value="">Seleccione etapa</option>
                    <option value="idea">Idea / Pre-Seed</option>
                    <option value="mvp">MVP Lanzado</option>
                    <option value="revenue">Generando Ingresos</option>
                    <option value="scaling">Escalando (Seed/Series A)</option>
                </select>
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Elevator Pitch (280 caracteres)</label>
                <textarea name="pitch" maxLength={280} style={{...inputStyle, height: '100px'}} onChange={handleInputChange} placeholder="Describe tu empresa brevemente..." required />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Enlace a Pitch Deck / Website</label>
                <input type="url" name="link" style={inputStyle} onChange={handleInputChange} placeholder="https://" />
              </div>
            </>
          )
        };
      case 'student':
        return {
            title: "Escuela de Soberanía Financiera",
            subtitle: "Inscríbete para recibir acceso a nuestros programas educativos y newsletters.",
            icon: <GraduationCap size={40} className="text-gold" />,
            fields: (
              <>
                 <div style={formGroupStyle}>
                  <label style={labelStyle}>Nivel de Conocimiento Financiero</label>
                  <select name="knowledgeLevel" style={inputStyle} onChange={handleInputChange}>
                    <option value="beginner">Principiante</option>
                    <option value="intermediate">Intermedio (Invierto ocasionalmente)</option>
                    <option value="advanced">Avanzado (Gestiono mi cartera activamente)</option>
                    <option value="pro">Profesional del sector</option>
                  </select>
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Áreas de Interés Educativo</label>
                  <select name="eduInterest" style={inputStyle} onChange={handleInputChange}>
                      <option value="macro">Macroeconomía Argentina</option>
                      <option value="personal_finance">Finanzas Personales y Ahorro</option>
                      <option value="investing">Valuación de Empresas</option>
                      <option value="crypto">Criptoactivos y Blockchain</option>
                  </select>
                </div>
              </>
            )
        };
      default: // general
        return {
            title: "Contacto General",
            subtitle: "¿Tiene alguna consulta específica? Póngase en contacto con nuestro equipo.",
            icon: <UserCircle size={40} className="text-gold" />,
            fields: (
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Asunto</label>
                    <select name="subject" style={inputStyle} onChange={handleInputChange}>
                        <option value="press">Prensa y Medios</option>
                        <option value="partnership">Alianzas Comerciales</option>
                        <option value="careers">Trabajar en Falcon Pampas</option>
                        <option value="other">Otro</option>
                    </select>
                </div>
            )
        };
    }
  };

  const currentConfig = getTypeConfig();

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', paddingTop: '160px' }}>
      
      {/* Header / Hero Small */}
      <div style={{ 
          backgroundColor: 'var(--color-navy-deep)', 
          padding: '4rem 2rem', 
          textAlign: 'center',
          color: 'var(--color-white-ivory)',
          borderBottom: '4px solid var(--color-gold-imperial)'
      }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Cinzel, serif' }}
          >
              {submitted ? "SOLICITUD RECIBIDA" : "CONECTE CON FALCON PAMPAS"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#CBD5E0' }}
          >
              {submitted 
                ? "Nuestro equipo está revisando su información y se pondrá en contacto pronto."
                : "Seleccione el perfil que mejor le representa para dirigir su consulta al área correspondiente."
              }
          </motion.p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {submitted ? (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '4rem 2rem' }}
            >
                <div style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--color-gold-imperial)' }}>
                    <CheckCircle size={80} />
                </div>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-navy-deep)', marginBottom: '1.5rem' }}>Gracias por su interés</h2>
                <p style={{ fontSize: '1.2rem', color: '#4A5568', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Hemos recibido sus datos correctamente. Un especialista de Falcon Pampas analizará su perfil y le contactará en las próximas 48 horas hábiles.
                </p>
                <button 
                    onClick={() => window.location.href = '/'}
                    style={{
                        padding: '1rem 3rem',
                        backgroundColor: 'var(--color-navy-deep)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    VOLVER AL INICIO
                </button>
            </motion.div>
        ) : (
            <>
                <AnimatePresence mode='wait'>
                    {step === 1 ? (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                        >
                            <SelectionCard 
                                icon={<Briefcase size={32} />}
                                title="Inversor"
                                desc="Busco rentabilizar mi capital a través de los vehículos de inversión de Falcon Pampas."
                                onClick={() => handleTypeSelect('investor')}
                            />
                            <SelectionCard 
                                icon={<Building2 size={32} />}
                                title="Empresario / Startup"
                                desc="Busco capital, alianzas estratégicas o potenciar mi compañía."
                                onClick={() => handleTypeSelect('entrepreneur')}
                            />
                            <SelectionCard 
                                icon={<GraduationCap size={32} />}
                                title="Estudiante"
                                desc="Quiero aprender en la Escuela de Soberanía Financiera."
                                onClick={() => handleTypeSelect('student')}
                            />
                            <SelectionCard 
                                icon={<UserCircle size={32} />}
                                title="Contacto General"
                                desc="Prensa, carreras, institucional u otras consultas."
                                onClick={() => handleTypeSelect('general')}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            <button 
                                onClick={handleBack}
                                style={{ 
                                    display: 'flex', alignItems: 'center', gap: '0.5rem', 
                                    background: 'none', border: 'none', 
                                    color: '#718096', fontSize: '1rem', cursor: 'pointer',
                                    marginBottom: '2rem'
                                }}
                            >
                                <ArrowLeft size={20} /> Volver a seleccionar
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ color: 'var(--color-gold-imperial)' }}>{currentConfig.icon}</div>
                                <div>
                                    <h2 style={{ fontSize: '2rem', color: 'var(--color-navy-deep)', marginBottom: '0.5rem' }}>{currentConfig.title}</h2>
                                    <p style={{ color: '#718096' }}>{currentConfig.subtitle}</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} style={{ backgroundColor: '#F7FAFC', padding: '3rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                                    <div style={formGroupStyle}>
                                        <label style={labelStyle}>Nombre Completo</label>
                                        <input type="text" name="name" style={inputStyle} onChange={handleInputChange} required />
                                    </div>
                                    <div style={formGroupStyle}>
                                        <label style={labelStyle}>Email</label>
                                        <input type="email" name="email" style={inputStyle} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                                     <div style={formGroupStyle}>
                                        <label style={labelStyle}>Teléfono / WhatsApp</label>
                                        <input type="tel" name="phone" style={inputStyle} onChange={handleInputChange} />
                                    </div>
                                     <div style={formGroupStyle}>
                                        <label style={labelStyle}>País de Residencia</label>
                                        <input type="text" name="country" style={inputStyle} onChange={handleInputChange} />
                                    </div>
                                </div>

                                {/* Dynamic Fields */}
                                {currentConfig.fields}

                                <div style={formGroupStyle}>
                                    <label style={labelStyle}>Mensaje Adicional</label>
                                    <textarea name="message" style={{ ...inputStyle, height: '120px' }} onChange={handleInputChange}></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '1.25rem',
                                        marginTop: '1rem',
                                        backgroundColor: 'var(--color-navy-deep)',
                                        color: 'var(--color-gold-imperial)',
                                        border: 'none',
                                        borderRadius: '4px',
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    ENVIAR SOLICITUD
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        )}

      </div>
        
      {!submitted && <FinalCTA />}
    </div>
  );
};

// Sub-components & Styles
const SelectionCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; onClick: () => void }> = ({ icon, title, desc, onClick }) => (
    <motion.div 
        whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        onClick={onClick}
        style={{ 
            backgroundColor: 'white', 
            padding: '2.5rem', 
            borderRadius: '8px', 
            border: '1px solid #E2E8F0',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 0.3s ease'
        }}
    >
        <div style={{ color: 'var(--color-gold-imperial)', marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-deep)', marginBottom: '1rem', fontWeight: 700 }}>{title}</h3>
        <p style={{ color: '#718096', lineHeight: 1.6, marginBottom: '2rem' }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-navy-deep)', fontWeight: 600 }}>
            Comenzar <ChevronRight size={18} style={{ marginLeft: '0.5rem' }} />
        </div>
    </motion.div>
);

const formGroupStyle: React.CSSProperties = {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as 'column'
};

const labelStyle: React.CSSProperties = {
    marginBottom: '0.5rem',
    color: '#2D3748',
    fontWeight: 600,
    fontSize: '0.95rem'
};

const inputStyle: React.CSSProperties = {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #CBD5E0',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: '#2D3748',
    width: '100%'
};

const checkboxLabelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #E2E8F0',
    cursor: 'pointer',
    fontSize: '0.9rem',
    color: '#4A5568'
};

export default Apply;
