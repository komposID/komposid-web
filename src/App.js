// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Produk from './pages/Produk';
import GabungMitra from './pages/GabungMitra';
import LoginAdmin from './pages/LoginAdmin';
import Signup from './pages/Signup';
import Investor from './pages/Investor';
import Unauthorized from './pages/Unauthorized';

import Dashboard from './pages/Dashboard';
import KelolaProduk from './pages/KelolaProduk';
import KelolaMitra from './pages/KelolaMitra';
import KelolaInvestor from './pages/KelolaInvestor';
import KelolaPengguna from './pages/KelolaPengguna';
import InvestorPanel from './pages/InvestorPanel';
import MitraPanel from './pages/MitraPanel';
import UploadFile from './pages/UploadFile';
import AdminLayout from './components/AdminLayout';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

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

          {/* 🔐 Hanya admin */}
         <Route element={<AdminRoute />}>
         <Route path="/dashboard" element={<Dashboard />}>
         <Route index element={<div>Selamat datang di Dashboard Admin</div>} />
         <Route path="produk" element={<KelolaProduk />} />
         <Route path="mitra" element={<KelolaMitra />} />
         <Route path="investor" element={<KelolaInvestor />} />
         <Route path="pengguna" element={<KelolaPengguna />} />
         <Route path="upload" element={<UploadFile />} />
         </AdminLayout>}/>
         </Route>
         </Route>

          {/* 👤 Role: Investor */}
          <Route
            path="/investor-panel"
            element={
              <PrivateRoute requiredRole="investor">
                <InvestorPanel />
              </PrivateRoute>
            }
          />

          {/* 👤 Role: Mitra */}
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
