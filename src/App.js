import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produk from './pages/Produk';
import GabungMitra from './pages/GabungMitra';
import LoginAdmin from './pages/LoginAdmin';
import Investor from './pages/Investor'; // ✅ Tambahan halaman Investor
import Signup from './pages/Signup'; // Tambahkan import ini

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/gabung" element={<GabungMitra />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/investor" element={<Investor />} /> {/* ✅ Routing baru */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
