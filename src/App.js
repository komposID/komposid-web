// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Produk from './pages/Produk';
import GabungMitra from './pages/GabungMitra';
import LoginAdmin from './pages/LoginAdmin';
import Investor from './pages/Investor';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MitraPanel from './pages/MitraPanel';
import InvestorPanel from './pages/InvestorPanel';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* 🌐 Halaman Umum */}
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/gabung" element={<GabungMitra />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/investor" element={<Investor />} />

          {/* 🔒 Role-based Routing */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute requiredRole="admin">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/mitra-panel"
            element={
              <PrivateRoute requiredRole="mitra">
                <MitraPanel />
              </PrivateRoute>
            }
          />
          <Route
            path="/investor-panel"
            element={
              <PrivateRoute requiredRole="investor">
                <InvestorPanel />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
