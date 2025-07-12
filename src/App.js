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
import AdminRoute from './components/AdminRoute'; // ✅ Tambahkan import ini
import Unauthorized from './pages/Unauthorized';

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
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* ❌ Halaman jika role tidak diizinkan */}
          <Route path="/unauthorized" element={
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              ❌ Akses ditolak. Anda tidak memiliki izin untuk halaman ini.
            </div>
          } />

          {/* 🔐 Hanya admin bisa akses */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* 🔐 Role-based untuk mitra & investor */}
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
