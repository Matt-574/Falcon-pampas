import React from 'react';
import { motion } from 'framer-motion';

const LiveTicker: React.FC = () => {
  const data = [
    { label: "Riesgo País", value: "1,450", change: "-3.2%", positive: true },
    { label: "Merval USD", value: "$1,245", change: "+1.8%", positive: true },
    { label: "AL30", value: "$72.5", change: "+0.5%", positive: true },
    { label: "Soja", value: "$385/tn", change: "-0.2%", positive: false },
    { label: "Gas Henry Hub", value: "$2.85", change: "+1.1%", positive: true },
    // Duplicate for seamless loop
     { label: "Riesgo País", value: "1,450", change: "-3.2%", positive: true },
    { label: "Merval USD", value: "$1,245", change: "+1.8%", positive: true },
    { label: "AL30", value: "$72.5", change: "+0.5%", positive: true },
    { label: "Soja", value: "$385/tn", change: "-0.2%", positive: false },
    { label: "Gas Henry Hub", value: "$2.85", change: "+1.1%", positive: true },
  ];

  return (
    <div style={{ backgroundColor: '#1A2744', color: 'white', padding: '1rem 0', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap' }}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ display: 'inline-flex', gap: '4rem' }}
      >
        {data.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontWeight: 600, color: '#A0AEC0' }}>{item.label}</span>
                <span style={{ fontWeight: 700 }}>{item.value}</span>
                <span style={{ 
                    color: item.positive ? '#48BB78' : '#F56565', 
                    fontSize: '0.9rem', display: 'flex', alignItems: 'center' 
                }}>
                    {item.change} {item.positive ? '▲' : '▼'}
                </span>
            </div>
        ))}
        {/* Duplicate again if needed for wider screens to ensure no gaps */}
      </motion.div>
    </div>
  );
};

export default LiveTicker;
