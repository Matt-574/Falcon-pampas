import React, { useState } from 'react';
import InvestorVault from '../components/investors/InvestorVault';
import InvestorDashboard from '../components/investors/InvestorDashboard';
import FinalCTA from '../components/home/FinalCTA';

const InvestorRelations: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Mock login logic
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <InvestorDashboard onLogout={handleLogout} />;
  }

  return (
    <>
      <InvestorVault onLogin={handleLogin} />
      <FinalCTA />
    </>
  );
};

export default InvestorRelations;
