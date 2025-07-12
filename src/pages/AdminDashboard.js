// src/pages/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>🎛️ Admin Panel</h1>
        <p>Selamat datang di pusat kendali sistem KomposID.</p>
      </header>

      <section className="admin-grid">
        <Link to="/dashboard/produk" className="admin-card">
          <h2>📦 Kelola Produk</h2>
          <p>Manajemen produk dan persediaan.</p>
        </Link>

        <Link to="/admin/mitra" className="admin-card">
          <h2>🤝 Kelola Mitra</h2>
          <p>Data mitra dan status kerja sama.</p>
        </Link>

        <Link to="/admin/investor" className="admin-card">
          <h2>💼 Kelola Investor</h2>
          <p>Daftar investor dan kontribusi modal.</p>
        </Link>

        <Link to="/admin/upload" className="admin-card">
          <h2>📁 Upload Dokumen</h2>
          <p>Unggah modul dan file pelatihan.</p>
        </Link>

        <Link to="/admin/pengguna" className="admin-card">
          <h2>👥 Kelola Pengguna</h2>
          <p>Data pengguna sistem dan hak akses.</p>
        </Link>

        <Link to="/mitra-panel" className="admin-card">
          <h2>🧰 Panel Mitra</h2>
          <p>Fitur untuk mitra kompos dan laporan.</p>
        </Link>
      </section>
    </div>
  );
}

export default AdminDashboard;
