import React from 'react';
import SchoolHero from '../components/school/SchoolHero';
import SchoolPurpose from '../components/school/SchoolPurpose';
import SchoolCurriculum from '../components/school/SchoolCurriculum';
import FalconIndex from '../components/school/FalconIndex';
import ScholarshipProgram from '../components/school/ScholarshipProgram';
import SchoolCommunity from '../components/school/SchoolCommunity';
import SchoolNewsletter from '../components/school/SchoolNewsletter';

const School: React.FC = () => {
  return (
    <div>
      <SchoolHero />
      <SchoolPurpose />
      <SchoolCurriculum />
      <FalconIndex />
      <ScholarshipProgram />
      <SchoolCommunity />
      <SchoolNewsletter />
    </div>
  );
};

export default School;
