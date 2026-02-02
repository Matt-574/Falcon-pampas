import React, { useState, useEffect } from 'react';
import { Save, Link as LinkIcon, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDeckManager: React.FC = () => {
    const [deckUrl, setDeckUrl] = useState('');
    const [version, setVersion] = useState('');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        // Load existing config
        const storedConfig = localStorage.getItem('falcon_deck_config');
        if (storedConfig) {
            const config = JSON.parse(storedConfig);
            setDeckUrl(config.url || '');
            setVersion(config.version || '');
        } else {
            // Default initialization if empty
            setDeckUrl('/Falcon_Pampas_Deck.pdf');
            setVersion('v1.0');
        }
    }, []);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const config = { url: deckUrl, version, lastUpdated: new Date().toISOString() };
        localStorage.setItem('falcon_deck_config', JSON.stringify(config));
        
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(6, 182, 212, 0.1)', borderRadius: '8px', color: '#06B6D4' }}>
                    <FileText size={24} />
                </div>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B' }}>Gestión de Pitch Deck</h2>
                    <p style={{ color: '#64748B' }}>Actualiza el archivo que descargan los usuarios públicos.</p>
                </div>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
                
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#475569' }}>Enlace del Deck (PDF)</label>
                    <div style={{ position: 'relative' }}>
                        <LinkIcon size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                        <input 
                            type="text" 
                            value={deckUrl}
                            onChange={(e) => setDeckUrl(e.target.value)}
                            placeholder="https://ejemplo.com/deck.pdf o /assets/deck.pdf"
                            style={{ 
                                width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: '6px', 
                                border: '1px solid #CBD5E0', fontSize: '1rem', outline: 'none' 
                            }}
                        />
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.5rem' }}>
                        Este es el enlace que se abrirá cuando los usuarios hagan clic en "Descargar Deck".
                    </p>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#475569' }}>Versión / Nombre Interno</label>
                    <input 
                        type="text" 
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
                        placeholder="Ej: Q1 2026 - vFinal"
                        style={{ 
                            width: '100%', padding: '0.8rem 1rem', borderRadius: '6px', 
                            border: '1px solid #CBD5E0', fontSize: '1rem', outline: 'none' 
                        }}
                    />
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <button 
                        type="submit"
                        style={{ 
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            backgroundColor: 'var(--color-navy-deep)', color: 'white', 
                            border: 'none', padding: '1rem 2rem', borderRadius: '6px', 
                            fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <Save size={20} />
                        {saved ? 'GUARDADO' : 'GUARDAR CAMBIOS'}
                    </button>
                    {saved && (
                        <motion.span 
                            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                            style={{ marginLeft: '1rem', color: '#10B981', fontWeight: 600 }}
                        >
                            ¡Configuración actualizada correctamente!
                        </motion.span>
                    )}
                </div>

            </form>

            <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#F8FAFC', borderRadius: '8px', borderLeft: '4px solid #F59E0B' }}>
                <h4 style={{ color: '#92400E', fontWeight: 700, marginBottom: '0.5rem' }}>Vista Previa Simulado</h4>
                <p style={{ color: '#B45309', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Así funcionará el botón para los visitantes:
                </p>
                <a 
                    href={deckUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        backgroundColor: 'var(--color-gold-imperial)', color: 'var(--color-navy-deep)',
                        padding: '0.8rem 1.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none'
                    }}
                >
                    <FileText size={18} /> DESCARGAR DECK
                </a>
            </div>
        </div>
    );
};

export default AdminDeckManager;
