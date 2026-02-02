import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InvestorRelations from './pages/InvestorRelations';
import Thesis from './pages/Thesis';
import Divisions from './pages/Divisions';
import School from './pages/School';
import CBI from './pages/CBI';
import Portfolio from './pages/Portfolio';
import Startups from './pages/Startups';
import Reconstruction from './pages/Reconstruction';
import Apply from './pages/Apply';

import MainLayout from './layouts/MainLayout';

import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cbi" element={<CBI />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/tesis" element={<Thesis />} />
          <Route path="/divisiones" element={<Divisions />} />
          <Route path="/escuela" element={<School />} />
          <Route path="/escuela" element={<School />} />
          <Route path="/reconstruccion" element={<Reconstruction />} />
          <Route path="/aplicar" element={<Apply />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
