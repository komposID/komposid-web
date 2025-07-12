// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // jika pakai CSS manual

function Dashboard() {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>📊 Admin Dashboard</h1>
        <p>Selamat datang di halaman admin. Silakan pilih menu pengelolaan:</p>
      </header>

      <div className="dashboard-grid">
        <Link to="/dashboard/produk" className="dashboard-card">
          <h3>🛒 Kelola Produk</h3>
          <p>Lihat, tambah, edit dan hapus produk</p>
        </Link>

        <Link to="/admin/mitra" className="dashboard-card">
          <h3>🤝 Kelola Mitra</h3>
          <p>Daftar dan status mitra</p>
        </Link>

        <Link to="/admin/investor" className="dashboard-card">
          <h3>💼 Kelola Investor</h3>
          <p>Data dan status investor</p>
        </Link>

        <Link to="/admin/upload" className="dashboard-card">
          <h3>📁 Upload File</h3>
          <p>Unggah modul atau dokumen lainnya</p>
        </Link>

        <Link to="/admin/pengguna" className="dashboard-card">
          <h3>👥 Kelola Pengguna</h3>
          <p>Manajemen user dan akses role</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
