import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InvestorRelations from './pages/InvestorRelations';
import Thesis from './pages/Thesis';
import Divisions from './pages/Divisions';
import School from './pages/School';

import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/tesis" element={<Thesis />} />
          <Route path="/divisiones" element={<Divisions />} />
          <Route path="/escuela" element={<School />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
