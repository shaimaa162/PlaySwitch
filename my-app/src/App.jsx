import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './Cover/Cover';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
      </Routes>
    </Router>
  );
}

export default App;
