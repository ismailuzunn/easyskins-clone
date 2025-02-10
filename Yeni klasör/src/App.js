import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Market from './components/Market';
import Inventory from './components/Inventory';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Login from './components/Login';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App; 