import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Register from './Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;
