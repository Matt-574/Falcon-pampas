import React from 'react';
import ThesisHero from '../components/thesis/ThesisHero';
import PremiseSection from '../components/thesis/PremiseSection';
import FalconModelSection from '../components/thesis/FalconModelSection';
import VectorsSection from '../components/thesis/VectorsSection';
import AdvantageSection from '../components/thesis/AdvantageSection';
import RiskSection from '../components/thesis/RiskSection';
import ThesisClosing from '../components/thesis/ThesisClosing';

const Thesis: React.FC = () => {
  return (
    <div>
      <ThesisHero />
      <PremiseSection />
      <FalconModelSection />
      <VectorsSection />
      <AdvantageSection />
      <RiskSection />
      <ThesisClosing />
    </div>
  );
};

export default Thesis;
