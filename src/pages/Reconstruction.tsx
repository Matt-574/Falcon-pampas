import React from 'react';
import FinalCTA from '../components/home/FinalCTA';

const Reconstruction: React.FC = () => {
  return (
    <div style={{ paddingTop: '140px' }}>
      <FinalCTA />
      
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', color: 'var(--color-navy-deep)' }}>
         <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-primary)', marginBottom: '1.5rem' }}>
           Argentina: Tierra de Oportunidades
         </h2>
         <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-gray-slate)' }}>
           Estamos convencidos de que Argentina está en el umbral de una transformación histórica. 
           Falcon Pampas es el vehículo para canalizar inversiones inteligentes hacia los sectores 
           que impulsarán este renacimiento: Energía, Agroindustria, Tecnología y Real Estate.
         </p>
         <p style={{ lineHeight: 1.8, color: 'var(--color-gray-slate)' }}>
           Únase a nuestra red exclusiva de inversores y sea protagonista del cambio.
         </p>
      </div>
    </div>
  );
};

export default Reconstruction;
