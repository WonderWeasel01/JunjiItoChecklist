import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChecklistPage from './pages/CheckListPage';

function Approutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
      </Routes>
    </Router>
  );
}

export default Approutes;
