import React, { useState } from 'react';
import InvestorVault from '../components/investors/InvestorVault';
import InvestorDashboard from '../components/investors/InvestorDashboard';
import FinalCTA from '../components/home/FinalCTA';

const InvestorRelations: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'investor'>('investor');

  const handleLogin = (role: 'admin' | 'investor' = 'investor') => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('investor');
  };

  if (isAuthenticated) {
    return <InvestorDashboard onLogout={handleLogout} userRole={userRole} />;
  }

  return (
    <>
      <InvestorVault onLogin={handleLogin} />
      <FinalCTA />
    </>
  );
};

export default InvestorRelations;
