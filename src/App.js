import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TablePage from './components/TablePage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/table" element={<TablePage />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;
