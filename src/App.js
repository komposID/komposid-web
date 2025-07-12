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
import InvestorPanel from './pages/InvestorPanel';
import MitraPanel from './pages/MitraPanel';
import UploadFile from './pages/UploadFile';
import KelolaProduk from './pages/KelolaProduk';
import KelolaMitra from './pages/KelolaMitra';
import KelolaInvestor from './pages/KelolaInvestor';
import KelolaPengguna from './pages/KelolaPengguna';

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

          {/* 🔒 Panel ADMIN */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<AdminLayout><Dashboard/></AdminLayout>} />
            <Route path="/admin/produk" element={<AdminLayout><KelolaProduk/></AdminLayout>} />
            <Route path="/admin/mitra" element={<AdminLayout><KelolaMitra/></AdminLayout>} />
            <Route path="/admin/investor" element={<AdminLayout><KelolaInvestor/></AdminLayout>} />
            <Route path="/admin/pengguna" element={<AdminLayout><KelolaPengguna/></AdminLayout>} />
            <Route path="/admin/upload" element={<AdminLayout><UploadFile /></AdminLayout>} />
          </Route>

          {/* 👤 Panel INVESTOR */}
          <Route
            path="/investor-panel"
            element={
              <PrivateRoute requiredRole="investor">
                <InvestorPanel />
              </PrivateRoute>
            }
          />

          {/* 🤝 Panel MITRA */}
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
