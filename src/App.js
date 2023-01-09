import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </>



  );
}

export default App;