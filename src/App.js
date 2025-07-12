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
import InvestorPanel from './pages/InvestorPanel';
import MitraPanel from './pages/MitraPanel';
import KelolaProduk from './pages/KelolaProduk';
import KelolaMitra from './pages/KelolaMitra';
import KelolaInvestor from './pages/KelolaInvestor';
import KelolaPengguna from './pages/KelolaPengguna';
import UploadFile from './pages/UploadFile';
import Unauthorized from './pages/Unauthorized';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import AdminLayout from './components/AdminLayout';
import DashboardHome from './pages/DashboardHome';

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

          {/* ❌ Halaman jika akses ditolak */}
          <Route path="/unauthorized" element={<Unauthorized />} />

<Route element={<PrivateRoute requiredRole="admin"><AdminLayout /></PrivateRoute>}>
  <Route path="/dashboard" element={<DashboardHome />} />
  <Route path="/dashboard/produk" element={<KelolaProduk />} />
  <Route path="/admin/mitra" element={<KelolaMitra />} />
  <Route path="/admin/investor" element={<KelolaInvestor />} />
  <Route path="/admin/upload" element={<UploadFile />} />
</Route>

          {/* 🔐 Role Investor */}
          <Route
            path="/investor-panel"
            element={
              <PrivateRoute requiredRole="investor">
                <InvestorPanel />
              </PrivateRoute>
            }
          />

          {/* 🔐 Role Mitra */}
          <Route
            path="/mitra-panel"
            element={
              <PrivateRoute requiredRole="mitra">
                <MitraPanel />
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
