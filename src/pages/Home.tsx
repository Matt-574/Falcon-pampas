import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IdentitySection from '../components/home/IdentitySection';
import InvestmentSimulator from '../components/home/InvestmentSimulator';
import WhyArgentinaSection from '../components/home/WhyArgentinaSection';
import EcosystemSection from '../components/home/EcosystemSection';
import InvestorTypesSection from '../components/home/InvestorTypesSection';
import FalconEngineSection from '../components/home/FalconEngineSection';
import SchoolTeaserSection from '../components/home/SchoolTeaserSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinalCTA from '../components/home/FinalCTA';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <IdentitySection />
      <InvestmentSimulator />
      <WhyArgentinaSection />
      <EcosystemSection />
      <InvestorTypesSection />
      <FalconEngineSection />
      <SchoolTeaserSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
};

export default Home;
