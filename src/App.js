import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Realisations from './components/Realisations';
import CurriculumVitae from './components/CurriculumVitae';
import Titre from './components/Titre';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
          <Route path="/titre" element={<Titre />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;