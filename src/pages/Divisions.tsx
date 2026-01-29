import React from 'react';
import DivisionsHero from '../components/divisions/DivisionsHero';
import DivisionsIntro from '../components/divisions/DivisionsIntro';
import DivisionCapitalMarkets from '../components/divisions/DivisionCapitalMarkets';
import DivisionPrivateEquity from '../components/divisions/DivisionPrivateEquity';
import DivisionPublicEquity from '../components/divisions/DivisionPublicEquity';
import DivisionVentures from '../components/divisions/DivisionVentures';
import DivisionsSynergy from '../components/divisions/DivisionsSynergy';
import DivisionsCTA from '../components/divisions/DivisionsCTA';

const Divisions: React.FC = () => {
  return (
    <div>
      <DivisionsHero />
      <DivisionsIntro />
      <DivisionCapitalMarkets />
      <DivisionPrivateEquity />
      <DivisionPublicEquity />
      <DivisionVentures />
      <DivisionsSynergy />
      <DivisionsCTA />
    </div>
  );
};

export default Divisions;
