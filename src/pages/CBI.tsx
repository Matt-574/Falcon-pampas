import React from 'react';
import CBIHero from '../components/cbi/CBIHero';
import CBIBenefits from '../components/cbi/CBIBenefits';
import CBITimeline from '../components/cbi/CBITimeline';
import CBICalculator from '../components/cbi/CBICalculator';
import CBIFAQ from '../components/cbi/CBIFAQ';
import CBIPartners from '../components/cbi/CBIPartners';
import FinalCTA from '../components/home/FinalCTA'; // Reusing Home CTA for consistency

const CBI: React.FC = () => {
  return (
    <div style={{ paddingTop: '140px' }}> {/* Padding for sticky nav */}
      <CBIHero />
      <CBIBenefits />
      <CBITimeline />
      <CBICalculator />
      <CBIFAQ />
      <CBIPartners />
      <FinalCTA />
    </div>
  );
};

export default CBI;
