import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { LogOut, LayoutDashboard, FileText, Settings, Download } from 'lucide-react';

interface Props {
    onLogout: () => void;
}

const InvestorDashboard: React.FC<Props> = ({ onLogout }) => {
    
    // Mock Data
    const allocation = [
        { name: 'Venture (Tech/Ag)', value: 40, color: '#06B6D4' },
        { name: 'Tesorería (Bonos)', value: 35, color: '#B8860B' },
        { name: 'Real Estate', value: 25, color: '#ED8936' },
    ];

    const performance = [
        { month: 'Ene', value: 100 }, { month: 'Feb', value: 102 }, { month: 'Mar', value: 105 },
        { month: 'Abr', value: 104 }, { month: 'May', value: 108 }, { month: 'Jun', value: 112 },
    ];

    return (
    <div style={{ backgroundColor: '#F1F5F9', minHeight: '100vh', display: 'flex', paddingTop: '140px' }}>
        
        {/* Sidebar */}
        <div style={{ width: '250px', backgroundColor: '#1A2744', color: 'white', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-primary)', color: 'var(--color-gold-imperial)', marginBottom: '3rem' }}>FALCON VAULT</div>
            
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <NavItem icon={<LayoutDashboard size={20} />} label="Resumen" active />
                <NavItem icon={<FileText size={20} />} label="Documentos" />
                <NavItem icon={<Settings size={20} />} label="Configuración" />
            </nav>

            <button onClick={onLogout} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', background: 'none', border: 'none', cursor: 'pointer', marginTop: 'auto' }}>
                <LogOut size={18} /> Cerrar Sesión
            </button>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
            
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '0.5rem' }}>Hola, Martín</h1>
                    <p style={{ color: '#64748B' }}>Tu portafolio ha crecido un <span style={{ color: '#10B981', fontWeight: 600 }}>+12.4%</span> este año.</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.9rem', color: '#64748B' }}>Valor Neto Total</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1E293B' }}>$1,240,500 <span style={{ fontSize: '1rem', color: '#94A3B8' }}>USD</span></div>
                </div>
            </header>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                
                {/* Chart Card */}
                <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <h3 style={cardTitleStyle}>Rendimiento Histórico</h3>
                        <select style={{ border: 'none', color: '#64748B', backgroundColor: '#F1F5F9', borderRadius: '4px', padding: '0.2rem' }}>
                            <option>YTD</option>
                            <option>1 Año</option>
                        </select>
                    </div>
                    <div style={{ height: '300px' }}>
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={performance}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#B8860B" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#B8860B" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94A3B8'}} />
                                <Tooltip />
                                <Area type="monotone" dataKey="value" stroke="#B8860B" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Allocation Card */}
                <div style={cardStyle}>
                    <h3 style={cardTitleStyle}>Asignación de Activos</h3>
                     <div style={{ height: '250px', position: 'relative' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={allocation} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                    {allocation.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B' }}>3</div>
                            <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Fondos</div>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        {allocation.map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '0.5rem 0', borderBottom: '1px solid #F1F5F9' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }} />
                                    {item.name}
                                </div>
                                <div style={{ fontWeight: 600 }}>{item.value}%</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Recent Docs */}
            <div style={cardStyle}>
                <h3 style={cardTitleStyle}>Documentos Recientes</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ color: '#94A3B8', fontSize: '0.9rem', textAlign: 'left' }}>
                            <th style={{ padding: '1rem 0' }}>Nombre</th>
                            <th style={{ padding: '1rem 0' }}>Tipo</th>
                            <th style={{ padding: '1rem 0' }}>Fecha</th>
                            <th style={{ padding: '1rem 0', textAlign: 'right' }}>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: "Reporte Q4 2025 - Falcon Ventures", type: "PDF", date: "15 Ene 2026" },
                            { name: "Distribución de Dividendos - Fiscal 25", type: "PDF", date: "02 Ene 2026" },
                            { name: "Deal Memo confidential: Proyecto 'Silo'", type: "PDF", date: "20 Dic 2025" }
                        ].map((doc, i) => (
                            <tr key={i} style={{ borderTop: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '1rem 0', color: '#1E293B', fontWeight: 500 }}>{doc.name}</td>
                                <td style={{ padding: '1rem 0', color: '#64748B' }}>
                                    <span style={{ backgroundColor: '#F1F5F9', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>{doc.type}</span>
                                </td>
                                <td style={{ padding: '1rem 0', color: '#94A3B8' }}>{doc.date}</td>
                                <td style={{ padding: '1rem 0', textAlign: 'right' }}>
                                    <Download size={18} color="#64748B" style={{ cursor: 'pointer' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    </div>
    );
};

const NavItem = ({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) => (
    <div style={{ 
        display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', borderRadius: '8px',
        backgroundColor: active ? 'rgba(184,134,11,0.1)' : 'transparent',
        color: active ? 'var(--color-gold-imperial)' : '#94A3B8',
        cursor: 'pointer', transition: 'all 0.2s'
    }}>
        {icon}
        <span style={{ fontWeight: 500 }}>{label}</span>
    </div>
);

const cardStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' };
const cardTitleStyle = { fontSize: '1.2rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem' };

export default InvestorDashboard;
