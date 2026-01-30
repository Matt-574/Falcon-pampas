import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const DivisionsTabs: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('ventures');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tab = searchParams.get('tab');
        if (tab && divisions[tab as keyof typeof divisions]) {
            setActiveTab(tab);
        }
    }, [location]);

    const divisions = {
        ventures: {
            id: 'ventures',
            name: 'FP-VENTURES',
            color: '#06B6D4',
            heroVideo: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4', // Placeholder: Startup/Tech
            title: 'FALCON VENTURES',
            tagline: 'Capital Semilla para el Talento Argentino',
            metrics: [
                { value: '24+', label: 'Startups Activas' },
                { value: '$8.5M', label: 'Capital Desplegado' },
                { value: '340+', label: 'Empleos Creados' },
                { value: '87%', label: 'Tasa Supervivencia' }
            ],
            desc: "Falcon Ventures es el brazo de capital de riesgo de Falcon Pampas. Invertimos en startups argentinas en etapas tempranas (Pre-seed y Seed) que resuelven problemas reales en sectores de alto crecimiento: AgTech, FinTech, HealthTech, SaaS B2B. Nuestra diferencia: No solo damos capital, damos acceso a todo el ecosistema de servicios Falcon."
        },
        cap: {
            id: 'cap',
            name: 'FP-CAP',
            color: '#B8860B',
            heroVideo: 'https://videos.pexels.com/video-files/853789/853789-hd_1920_1080_25fps.mp4', // Placeholder: Finance/Trading
            title: 'FALCON CAPITAL',
            tagline: 'Tesorería y Estrategias Líquidas',
            metrics: [
                { value: '$120M', label: 'AUM' },
                { value: '8.2%', label: 'Yield Anual (USD)' },
                { value: 'AAA', label: 'Rating Crediticio' }
            ],
            desc: "Gestión activa de tesorería y arbitraje de bonos soberanos y corporativos. Utilizamos estrategias de bajo riesgo para generar un piso de rendimiento constante que proteja el capital de nuestros inversores."
        },
        real: {
            id: 'real',
            name: 'FP-REAL',
            color: '#ED8936',
            heroVideo: 'https://videos.pexels.com/video-files/1739010/1739010-hd_1920_1080_30fps.mp4', // Placeholder: Construction/Architecture
            title: 'FALCON REAL ESTATE',
            tagline: 'Desarrollos Estratégicos',
            metrics: [
                { value: '45k', label: 'm² Desarrollados' },
                { value: '12', label: 'Proyectos Activos' },
                { value: '18%', label: 'IRR Promedio' }
            ],
            desc: "Desarrollo de activos inmobiliarios premium en Mendoza y Buenos Aires. Foco en oficinas corporativas AAA y espacios de coworking para nuestro ecosistema tecnológico."
        },
        media: {
            id: 'media',
            name: 'FALCON MEDIA',
            color: '#9F7AEA',
            heroVideo: 'https://videos.pexels.com/video-files/2887463/2887463-uhd_2560_1440_25fps.mp4', // Placeholder: Creative/Studio
            title: 'FALCON MEDIA',
            tagline: 'Growth Marketing & Storytelling',
            metrics: [
                { value: '50M+', label: 'Alcance Mensual' },
                { value: '4', label: 'Golden Lions' },
                { value: '3x', label: 'Avg ROAS' }
            ],
            desc: "Agencia in-house de branding y performance. Ayudamos a nuestras startups a contar su historia y adquirir usuarios de forma eficiente desde el día uno."
        },
        tech: {
            id: 'tech',
            name: 'FALCON TECH',
            color: '#4299E1',
            heroVideo: 'https://videos.pexels.com/video-files/1181242/1181242-hd_1920_1080_30fps.mp4', // Placeholder: Code/Server
            title: 'FALCON TECH',
            tagline: 'Software Factory & DevOps',
            metrics: [
                { value: '100+', label: 'Ingenieros' },
                { value: '99.9%', label: 'Uptime' },
                { value: '2 Weeks', label: 'Avg Sprint' }
            ],
            desc: "Infraestructura tecnológica y desarrollo de producto. Aceleraramos el time-to-market de nuestras participadas proveyendo arquitecturas escalables y equipos de ingeniería on-demand."
        },
        sales: {
            id: 'sales',
            name: 'FALCON SALES',
            color: '#48BB78',
            heroVideo: 'https://videos.pexels.com/video-files/3189018/3189018-hd_1920_1080_25fps.mp4', // Placeholder: Handshake/Meeting
            title: 'FALCON SALES',
            tagline: 'Outbound & Expansion',
            metrics: [
                { value: '$15M', label: 'Pipeline Gen' },
                { value: '12', label: 'Países Operados' },
                { value: '25%', label: 'Close Rate' }
            ],
            desc: "Máquina de ventas B2B. Implementamos procesos comerciales rigurosos y equipos de SDRs para internacionalizar las soluciones de nuestro portafolio."
        }
    };

    const current = divisions[activeTab as keyof typeof divisions];

    return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Tabs */}
      <div style={{ 
          position: 'sticky', top: '140px', zIndex: 40, backgroundColor: 'white', 
          borderBottom: '1px solid #E2E8F0', padding: '0.5rem 0', overflowX: 'auto' 
      }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '1rem', padding: '0 1rem' }}>
              {Object.values(divisions).map(div => (
                  <button
                    key={div.id}
                    onClick={() => setActiveTab(div.id)}
                    style={{
                        padding: '0.75rem 1.5rem', borderRadius: '4px', border: 'none',
                        backgroundColor: activeTab === div.id ? 'var(--color-navy-deep)' : 'transparent',
                        color: activeTab === div.id ? 'var(--color-gold-imperial)' : '#718096',
                        fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap',
                        transition: 'all 0.2s',
                        borderBottom: activeTab === div.id ? '2px solid var(--color-gold-imperial)' : '2px solid transparent'
                    }}
                  >
                      {div.name}
                  </button>
              ))}
          </div>
      </div>

      {/* Content Area */}
      <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ flex: 1 }}
          >
              {/* Tab Hero */}
              <div style={{ height: '60vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                    <div style={{ position: 'absolute', inset: 0 }}>
                        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                            <source src={current.heroVideo} type="video/mp4" />
                        </video>
                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26,39,68,0.7)' }} />
                         <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${current.color}33 0%, rgba(26,39,68,0.8) 100%)` }} />
                    </div>

                    <div style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', color: 'white', width: '100%' }}>
                         <span style={{ color: current.color, fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
                             DIVISIÓN {current.name}
                         </span>
                         <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-primary)', marginBottom: '0.5rem', lineHeight: 1 }}>{current.title}</h2>
                         <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>{current.tagline}</p>
                    </div>
              </div>

              {/* Metrics & Desc */}
              <div style={{ padding: '6rem 2rem' }}>
                  <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                      
                      {/* Description */}
                      <div>
                          <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-primary)', color: '#1A2744', marginBottom: '1.5rem' }}>
                              Estrategia y Misión
                          </h3>
                          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#4A5568' }}>
                              {current.desc}
                          </p>
                          <button style={{ 
                              marginTop: '2rem', padding: '1rem 2rem', backgroundColor: current.color, color: 'white',
                              border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer',
                              display: 'flex', alignItems: 'center', gap: '0.5rem'
                          }}>
                              Contactar División <ArrowRight size={18} />
                          </button>
                      </div>

                      {/* Metrics */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                          {current.metrics.map((m, i) => (
                              <div key={i} style={{ backgroundColor: '#F7FAFC', padding: '2rem', borderRadius: '12px', borderLeft: `4px solid ${current.color}` }}>
                                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A2744' }}>{m.value}</div>
                                  <div style={{ fontSize: '0.9rem', color: '#718096', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.label}</div>
                              </div>
                          ))}
                      </div>

                  </div>
              </div>
          </motion.div>
      </AnimatePresence>

    </div>
    );
};

export default DivisionsTabs;
