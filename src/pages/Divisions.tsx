import React from 'react';
import DivisionsTabs from '../components/divisions/DivisionsTabs';
import FinalCTA from '../components/home/FinalCTA';

const Divisions: React.FC = () => {
  return (
    <div style={{ paddingTop: '140px' }}>
      <DivisionsTabs />
      <FinalCTA />
    </div>
  );
};

export default Divisions;
