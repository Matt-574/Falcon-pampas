import React, { useState } from 'react';


const CBICalculator: React.FC = () => {
  const [investment, setInvestment] = useState(550000);
  const [familyMembers, setFamilyMembers] = useState(1);
  const [horizon, setHorizon] = useState(5);

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  // Constants
  const LEGAL_FEES_BASE = 15000;
  const LEGAL_FEES_PER_DEPENDENT = 2000;
  const GOVT_FEES_BASE = 5000;
  const GOVT_FEES_PER_DEPENDENT = 1000;
  
  // Calculations
  const legalFees = LEGAL_FEES_BASE + (familyMembers - 1) * LEGAL_FEES_PER_DEPENDENT;
  const govtFees = GOVT_FEES_BASE + (familyMembers - 1) * GOVT_FEES_PER_DEPENDENT;
  const totalInitial = investment + legalFees + govtFees;

  // Projection (Conservative 8% Treasury + 15% VC Blend ~ 10-12% ??? Let's simplify to match simulator logic roughly or hardcode logic for this specific calculator)
  // CBI Logic: "Valor Proyectado (5 años): $847,000 - $1,100,000"
  // Let's use a base CAGR of 9% (conservative) and 14% (optimistic)
  const projectedLow = investment * Math.pow(1.09, horizon);
  const projectedHigh = investment * Math.pow(1.14, horizon);


  return (
    <section style={{ backgroundColor: '#FAF8F5', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
           <span style={{ color: 'var(--color-navy-deep)', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 700, opacity: 0.7 }}>SIMULADOR FINANCIERO</span>
           <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>Tu Inversión en Números</h2>
        </div>

        <div style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem',
            backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', overflow: 'hidden'
        }}>
            
            {/* Left: Inputs */}
            <div style={{ padding: '3rem', borderRight: '1px solid rgba(0,0,0,0.05)' }}>
                
                {/* Investment */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#1A2744', fontWeight: 600 }}>
                        <span>Monto de Inversión</span>
                        <span style={{ color: 'var(--color-gold-imperial)' }}>{formatCurrency(investment)}</span>
                    </label>
                    <input 
                        type="range" min={550000} max={2000000} step={50000}
                        value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--color-gold-imperial)' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#718096', marginTop: '0.5rem' }}>
                        <span>$550k</span><span>$2M</span>
                    </div>
                </div>

                {/* Family Members */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '1rem', color: '#1A2744', fontWeight: 600 }}>Miembros de Familia</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {[1, 2, 3, 4, 5].map(num => (
                            <button
                                key={num}
                                onClick={() => setFamilyMembers(num)}
                                style={{
                                    flex: 1, padding: '0.8rem', borderRadius: '6px', border: '1px solid #E2E8F0',
                                    backgroundColor: familyMembers === num ? 'var(--color-navy-deep)' : 'white',
                                    color: familyMembers === num ? 'white' : '#4A5568',
                                    cursor: 'pointer', transition: 'all 0.2s'
                                }}
                            >
                                {num === 5 ? '5+' : num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Horizon */}
                <div>
                    <label style={{ display: 'block', marginBottom: '1rem', color: '#1A2744', fontWeight: 600 }}>Horizonte de Inversión</label>
                    <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#F7FAFC', padding: '4px', borderRadius: '8px' }}>
                        {[3, 5, 7].map(year => (
                            <button
                                key={year}
                                onClick={() => setHorizon(year)}
                                style={{
                                    flex: 1, padding: '0.6rem', borderRadius: '6px', border: 'none',
                                    backgroundColor: horizon === year ? 'white' : 'transparent',
                                    color: horizon === year ? 'var(--color-navy-deep)' : '#718096',
                                    boxShadow: horizon === year ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                                    fontWeight: horizon === year ? 600 : 400,
                                    cursor: 'pointer', transition: 'all 0.2s'
                                }}
                            >
                                {year} años
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right: Outputs */}
            <div style={{ padding: '3rem', backgroundColor: '#F8FAFC', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                
                <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.9rem', color: '#718096', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Desglose de Costos Iniciales</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                        <span style={{ color: '#4A5568' }}>Inversión Falcon Pampas</span>
                        <span style={{ fontWeight: 600, color: '#1A2744' }}>{formatCurrency(investment)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                        <span style={{ color: '#4A5568' }}>Honorarios Legales (Est.)</span>
                        <span style={{ fontWeight: 600, color: '#1A2744' }}>~{formatCurrency(legalFees)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                        <span style={{ color: '#4A5568' }}>Tasas Gubernamentales</span>
                        <span style={{ fontWeight: 600, color: '#1A2744' }}>~{formatCurrency(govtFees)}</span>
                    </div>
                    <div style={{ borderTop: '2px solid #E2E8F0', marginTop: '1rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, color: '#1A2744' }}>TOTAL ESTIMADO</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-navy-deep)' }}>{formatCurrency(totalInitial)}</span>
                    </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-navy-deep)', padding: '1.5rem', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem' }}>VALOR PROYECTADO ({horizon} AÑOS)</span>
                    <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-gold-imperial)', fontFamily: 'var(--font-mono)' }}>
                        {formatCurrency(projectedLow)} - {formatCurrency(projectedHigh)}
                    </div>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        Ciudadanías obtenidas: <strong style={{ color: 'white' }}>{familyMembers}</strong>
                    </div>
                </div>

                <button style={{
                    marginTop: '2rem', width: '100%', padding: '1rem', 
                    backgroundColor: 'var(--color-gold-imperial)', color: 'var(--color-navy-deep)',
                    border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem',
                    cursor: 'pointer', transition: 'var(--transition-smooth)'
                }}>
                    AGENDAR CONSULTA GRATUITA
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#718096', marginTop: '1rem' }}>
                    Sin compromiso. 30 minutos con un asesor especializado.
                </p>

            </div>

        </div>
      </div>
    </section>
  );
};

export default CBICalculator;
