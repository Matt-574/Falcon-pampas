import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';

const InvestorRelations: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
    // TODO: Implement Firebase Auth
    alert('Funcionalidad de login en desarrollo');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: '160px', // Space for fixed navbar
      backgroundColor: 'var(--color-blue-deep)',
      color: 'var(--color-white-ivory)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%', maxWidth: '1000px', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Column: Context */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span style={{ 
            color: 'var(--color-gold-imperial)', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            fontSize: '0.9rem', 
            fontWeight: 600,
            display: 'block',
            marginBottom: '1rem'
          }}>
            Relación con Inversores
          </span>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '2rem' }}>
            Acceso Exclusivo para Capitales Calificados
          </h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Nuestra estructura de inversión está diseñada para socios estratégicos que comparten nuestra visión de largo plazo.
            Ingrese a la plataforma para ver reportes de rendimiento, oportunidades actuales y documentación legal.
          </p>
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            borderLeft: '3px solid var(--color-gold-imperial)',
            borderRadius: '0 4px 4px 0'
          }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-gold-light)' }}>¿Interesado en invertir?</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Solicite una reunión con nuestro equipo de dirección.</p>
            <button style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-white-ivory)',
              fontSize: '0.9rem',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}>
              Solicitar Reunión <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Login Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           style={{
             backgroundColor: 'var(--color-blue-midnight)',
             padding: '3rem',
             borderRadius: '8px',
             boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
             border: '1px solid rgba(255,255,255,0.05)'
           }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Lock size={32} color="var(--color-gold-imperial)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '1.5rem' }}>Acceso a Clientes</h2>
          </div>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Email Corporativo</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  color: 'white',
                  outline: 'none',
                  fontSize: '1rem'
                }}
                placeholder="nombre@empresa.com"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  color: 'white',
                  outline: 'none',
                  fontSize: '1rem'
                }}
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              style={{
                backgroundColor: 'var(--color-gold-imperial)',
                color: 'var(--color-blue-deep)',
                padding: '1rem',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                marginTop: '1rem',
                transition: 'transform 0.2s',
              }}
            >
              Ingresar
            </button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', opacity: 0.6 }}>
            Este es un sistema seguro y monitoreado.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default InvestorRelations;
