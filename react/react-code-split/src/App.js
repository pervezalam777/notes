import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Package = lazy(() => import('./packageOne'));
const PackageTwo = lazy(() => import('./packageTwo'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Package />} />
        <Route path="/about" element={<PackageTwo />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
