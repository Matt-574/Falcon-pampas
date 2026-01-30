import React from 'react';
import StartupsHero from '../components/startups/StartupsHero';
import StartupCriteria from '../components/startups/StartupCriteria';
import EcosystemMap from '../components/startups/EcosystemMap';
import TermComparison from '../components/startups/TermComparison';
import ApplicationForm from '../components/startups/ApplicationForm';
import FinalCTA from '../components/home/FinalCTA';

const Startups: React.FC = () => {
  return (
    <div style={{ paddingTop: '140px' }}>
      <StartupsHero />
      <StartupCriteria />
      <EcosystemMap />
      <TermComparison />
      <ApplicationForm />
      <FinalCTA />
    </div>
  );
};

export default Startups;
