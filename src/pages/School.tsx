import React from 'react';
import SchoolHero from '../components/school/SchoolHero';
import SchoolPurpose from '../components/school/SchoolPurpose';
import SchoolCurriculum from '../components/school/SchoolCurriculum';
import FalconIndex from '../components/school/FalconIndex';
import SchoolMasterclass from '../components/school/SchoolMasterclass';
import FinalCTA from '../components/home/FinalCTA';

const School: React.FC = () => {
  return (
    <div style={{ paddingTop: '140px' }}>
      <SchoolHero />
      <SchoolPurpose />
      <FalconIndex />
      <SchoolMasterclass />
      <SchoolCurriculum />
      <FinalCTA />
    </div>
  );
};

export default School;
