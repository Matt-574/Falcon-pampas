import React, { useState, useEffect, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Sprout, Building2, Landmark } from 'lucide-react';

const InvestmentSimulator: React.FC = () => {
  const [investorType, setInvestorType] = useState<'retail' | 'cbi' | 'institutional'>('retail');
  const [amount, setAmount] = useState<number>(10000);
  const [years, setYears] = useState<number>(5);
  const [riskProfile, setRiskProfile] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');

  const handleTypeChange = (type: 'retail' | 'cbi' | 'institutional') => {
      setInvestorType(type);
      switch (type) {
        case 'retail': setAmount(5000); break;
        case 'cbi': setAmount(550000); break;
        case 'institutional': setAmount(1000000); break;
      }
  };

  // Calculation Logic
  const data = useMemo(() => {
    const RATES = {
        treasury: 0.08, // 8% annual
        startups: {
          conservative: 0.15,
          balanced: 0.20,
          aggressive: 0.25
        }
    };
      
    const getAllocation = (profile: string) => {
        switch(profile) {
            case 'conservative': return { t: 0.6, s: 0.4 };
            case 'aggressive': return { t: 0.4, s: 0.6 };
            case 'balanced': default: return { t: 0.5, s: 0.5 };
        }
    };

    const { t, s } = getAllocation(riskProfile);
    const treasuryRate = RATES.treasury;
    const startupRate = RATES.startups[riskProfile];

    // ... calculation ...
    let currentTreasury = amount * t;
    let currentStartups = amount * s;

    const result = [];
    for (let i = 0; i <= years; i++) {
      result.push({
        year: `Año ${i}`,
        treasury: Math.round(currentTreasury),
        startups: Math.round(currentStartups),
        total: Math.round(currentTreasury + currentStartups)
      });
      currentTreasury *= (1 + treasuryRate);
      currentStartups *= (1 + startupRate);
    }
    return result;
  }, [amount, years, riskProfile]);

  const finalResult = data[data.length - 1];
  const initialTotal = amount;
  const growth = ((finalResult.total - initialTotal) / initialTotal) * 100;

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  const getCurrentAllocation = () => {
      switch(riskProfile) {
          case 'conservative': return { t: 0.6, s: 0.4 };
          case 'aggressive': return { t: 0.4, s: 0.6 };
          case 'balanced': default: return { t: 0.5, s: 0.5 };
      }
  };
  
  const currentAllocation = getCurrentAllocation();

  return (
    <section style={{ backgroundColor: 'var(--color-navy-deep)', padding: '6rem 2rem', color: 'var(--color-white)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-gold-imperial)', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 700 }}>SIMULADOR INTERACTIVO</span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', margin: '1rem 0' }}>Visualiza el Potencial de Tu Inversión</h2>
          <p style={{ color: 'var(--color-gray-slate)', fontSize: '1.1rem' }}>Selecciona tu perfil, ajusta los parámetros y observa cómo crece tu capital.</p>
        </div>

        {/* Simulator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Col 1: Controls */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Configuración</h3>
            
            {/* Investor Type */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>TIPO DE INVERSOR</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { id: 'retail', icon: <Sprout size={16} />, label: 'Retail' },
                  { id: 'cbi', icon: <Landmark size={16} />, label: 'CBI' },
                  { id: 'institutional', icon: <Building2 size={16} />, label: 'Inst.' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeChange(type.id as 'retail' | 'cbi' | 'institutional')}
                    style={{
                      flex: 1,
                      padding: '0.8rem',
                      backgroundColor: investorType === type.id ? 'var(--color-gold-imperial)' : 'transparent',
                      color: investorType === type.id ? 'var(--color-navy-deep)' : 'var(--color-white)',
                      border: `1px solid ${investorType === type.id ? 'var(--color-gold-imperial)' : 'rgba(255,255,255,0.2)'}`,
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.85rem',
                      transition: 'all 0.2s'
                    }}
                  >
                    {type.icon}
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Inversión Inicial</span>
                <span style={{ color: 'var(--color-gold-imperial)', fontWeight: 600 }}>{formatCurrency(amount)}</span>
              </label>
              <input 
                type="range" 
                min={1000} 
                max={5000000} 
                step={1000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold-imperial)' }}
              />
            </div>

            {/* Time Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Horizonte Temporal</span>
                <span style={{ color: 'var(--color-gold-imperial)', fontWeight: 600 }}>{years} Años</span>
              </label>
              <input 
                type="range" 
                min={3} 
                max={10} 
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-gold-imperial)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.5, marginTop: '0.2rem' }}>
                <span>3</span><span>5</span><span>7</span><span>10</span>
              </div>
            </div>

             {/* Risk Profile */}
             <div>
              <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>PERFIL DE RIESGO</label>
              <div style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '4px' }}>
                {['conservative', 'balanced', 'aggressive'].map((profile) => (
                  <button
                    key={profile}
                    onClick={() => setRiskProfile(profile as 'conservative' | 'balanced' | 'aggressive')}
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      backgroundColor: riskProfile === profile ? 'rgba(255,255,255,0.1)' : 'transparent',
                      color: riskProfile === profile ? 'var(--color-white)' : 'rgba(255,255,255,0.5)',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      textTransform: 'capitalize'
                    }}
                  >
                    {profile === 'conservative' ? 'Conservador' : profile === 'balanced' ? 'Balanceado' : 'Agresivo'}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Col 2: Chart */}
          <div style={{ height: '400px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorStartups" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#B8860B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#B8860B" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTreasury" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4A5568" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4A5568" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickFormatter={(val) => `$${val/1000}k`} />
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A2744', borderColor: '#B8860B' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number | undefined) => formatCurrency(value || 0)}
                />
                <Area 
                  type="monotone" 
                  dataKey="startups" 
                  stackId="1" 
                  stroke="#B8860B" 
                  fill="url(#colorStartups)" 
                  name="Startups (VC)"
                />
                <Area 
                  type="monotone" 
                  dataKey="treasury" 
                  stackId="1" 
                  stroke="#4A5568" 
                  fill="url(#colorTreasury)" 
                  name="Tesorería"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Col 3: Results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', height: '100%' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>VALOR PROYECTADO ({data[data.length-1].year})</span>
                <motion.div
                  key={finalResult.total}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-gold-imperial)', fontFamily: 'var(--font-mono)' }}
                >
                  {formatCurrency(finalResult.total)}
                </motion.div>
                <span style={{ color: '#48BB78', fontWeight: 600 }}>+{growth.toFixed(1)}% vs inversión inicial</span>
              </div>

              <div style={{ margin: '1rem 0', padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:8, height:8, background:'#4A5568', borderRadius:'50%'}}/> Tesorería ({currentAllocation.t * 100}%)</span>
                  <span>{formatCurrency(finalResult.treasury)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{width:8, height:8, background:'#B8860B', borderRadius:'50%'}}/> Startups ({currentAllocation.s * 100}%)</span>
                  <span>{formatCurrency(finalResult.startups)}</span>
                </div>
              </div>

              <button style={{
                backgroundColor: 'var(--color-gold-imperial)',
                color: 'var(--color-navy-deep)',
                border: 'none',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}>
                SOLICITAR INFORMACIÓN DETALLADA
              </button>
              
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.4 }}>
                *Proyecciones basadas en rendimientos históricos: Tesorería 8% anual, Startups 15-25% anual. Los rendimientos pasados no garantizan futuros.
              </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentSimulator;
