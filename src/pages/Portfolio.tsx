import React from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioStats from '../components/portfolio/PortfolioStats';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import FinalCTA from '../components/home/FinalCTA';

const Portfolio: React.FC = () => {
  return (
    <div style={{ paddingTop: '140px' }}>
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGrid />
      <FinalCTA />
    </div>
  );
};

export default Portfolio;
