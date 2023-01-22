import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Registros from  './components/pages/Registros';
import ViolenciaDomestica from './components/pages/ViolenciaDomestica';
import RouboFurto from './components/pages/RouboFurto';
import Acidente from './components/pages/Acidente';
import MeusRegistros from './components/pages/MeusRegistros';

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/registros" element={<Registros />} />
          <Route path="/violenciaDomestica" element={<ViolenciaDomestica />} />
          <Route path="/furtoRoubo" element={<RouboFurto />} />
          <Route path="/acidente" element={<Acidente />} />
          <Route path="/meusregistros" element={<MeusRegistros />} />
          
        </Routes>
      </Router>
    </>



  );
}

export default App;