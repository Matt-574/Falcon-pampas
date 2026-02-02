import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';

const INFLATION_DATA = [
  { month: 'Dic 23', rate: 25.5 },
  { month: 'Mar 24', rate: 11.0 },
  { month: 'Jun 24', rate: 4.6 },
  { month: 'Sep 24', rate: 3.5 },
  { month: 'Dic 24', rate: 2.8 },
  { month: 'Mar 25', rate: 2.1 },
];

const RESERVES_DATA = [
  { year: '2023', amount: 21 },
  { year: '2024', amount: 29 },
  { year: '2025', amount: 35 },
];

const ArgentinaMacro: React.FC = () => {
  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '3rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '1.5rem' }}
                >
                    Argentina 2025: El Turnaround
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '1.25rem', color: '#4A5568', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}
                >
                    Los fundamentales macroeconómicos señalan un punto de inflexión histórico.
                    Estamos transformando la percepción de <span style={{ color: '#E53E3E', fontWeight: 600 }}>"Riesgo"</span> en <span style={{ color: '#38A169', fontWeight: 600 }}>"Oportunidad"</span>.
                </motion.p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                
                {/* COLUMN 1: CHARTS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    
                    {/* Inflation Chart */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ backgroundColor: '#F8FAFC', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '0.5rem' }}>Desinflación Acelerada</h3>
                        <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '2rem' }}>IPC Mensual (%) | Fuente: INDEC & Proyecciones REM</p>
                        
                        <div style={{ height: '250px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={INFLATION_DATA}>
                                    <defs>
                                        <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1A2744" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#1A2744" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                    <XAxis dataKey="month" stroke="#A0AEC0" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#A0AEC0" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#1A2744', border: 'none', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#B8860B' }}
                                        formatter={(value: any) => [`${value}%`, 'Tasa']}
                                    />
                                    <Area 
                                        type="monotone" 
                                        dataKey="rate" 
                                        stroke="#1A2744" 
                                        fillOpacity={1} 
                                        fill="url(#colorRate)" 
                                        strokeWidth={3}
                                        animationDuration={2000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Reserves Chart */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ backgroundColor: '#F8FAFC', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '0.5rem' }}>Reservas BCRA</h3>
                        <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '2rem' }}>En Billones USD | Proyección superávit comercial</p>
                        
                        <div style={{ height: '250px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={RESERVES_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                    <XAxis dataKey="year" stroke="#A0AEC0" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#A0AEC0" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip 
                                        cursor={{fill: 'rgba(0,0,0,0.05)'}}
                                        contentStyle={{ backgroundColor: '#1A2744', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    />
                                    <Bar 
                                        dataKey="amount" 
                                        fill="#2F855A" 
                                        radius={[8, 8, 0, 0]} 
                                        barSize={60}
                                        animationDuration={2000}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                </div>

                {/* COLUMN 2: FORCES */}
                <div style={{ paddingLeft: '2rem' }}>
                    <motion.h3 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ fontSize: '2.5rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '3rem' }}
                    >
                        Tres Fuerzas Convergentes
                    </motion.h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        
                        <ForceItem 
                            number="01" 
                            title="Estabilización Macroeconómica" 
                            desc="El superávit fiscal primario y la normalización monetaria han creado un ancla de expectativas real. La inflación ha caído de dígitos dobles a bajos simples en tiempo récord."
                            delay={0.2}
                        />
                        
                        <ForceItem 
                            number="02" 
                            title="Vaca Muerta & Energía" 
                            desc="Argentina pasa de déficit a superávit energético (USD 8B+ proyectado). La infraestructura de transporte desbloquea la exportación masiva al mundo."
                            delay={0.4}
                        />
                        
                        <ForceItem 
                            number="03" 
                            title="Talento Subvalorado" 
                            desc="Arbitraje puro: Científicos de clase mundial y desarrolladores creando deep tech a costos operativos un tercio de Silicon Valley."
                            delay={0.6}
                        />

                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#FAF8F5', borderLeft: '4px solid #B8860B', borderRadius: '0 8px 8px 0' }}
                    >
                        <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-primary)', fontStyle: 'italic', color: '#2D3748', marginBottom: '1rem' }}>
                            "Argentina ha demostrado que puede lograr disciplina fiscal sin sacrificar crecimiento. El momento de entrar es antes de la normalización completa de la curva."
                        </p>
                        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#718096', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            — Análisis de Mercado Institucional, Dic 2024
                        </p>
                    </motion.div>

                </div>

            </div>
        </div>
    </section>
  );
};

const ForceItem = ({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.6 }}
        style={{ display: 'flex', gap: '1.5rem' }}
    >
        <div style={{ flexShrink: 0, width: '60px', height: '60px', backgroundColor: '#1A2744', color: '#B8860B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-primary)' }}>
            {number}
        </div>
        <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A2744', marginBottom: '0.5rem' }}>{title}</h4>
            <p style={{ color: '#4A5568', lineHeight: 1.6 }}>{desc}</p>
        </div>
    </motion.div>
);

export default ArgentinaMacro;
