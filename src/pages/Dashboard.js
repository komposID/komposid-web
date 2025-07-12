// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Custom style opsional
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">🏠 Dashboard</Link></li>
            <li><Link to="/dashboard/produk">📦 Kelola Produk</Link></li>
            <li><Link to="/admin/mitra">🤝 Kelola Mitra</Link></li>
            <li><Link to="/admin/investor">💰 Kelola Investor</Link></li>
            <li><Link to="/admin/pengguna">👥 Kelola Pengguna</Link></li>
            <li><Link to="/admin/upload">📤 Upload File</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="content-header">
          <h1>Selamat Datang, Admin</h1>
          <p>Kelola semua data dari satu tempat.</p>
        </header>

        <section className="card-grid">
          <div className="card">
            <h3>📦 Produk</h3>
            <p>Kelola semua produk di sini</p>
            <Link to="/dashboard/produk">Lihat</Link>
          </div>
          <div className="card">
            <h3>🤝 Mitra</h3>
            <p>Kelola mitra aktif</p>
            <Link to="/admin/mitra">Lihat</Link>
          </div>
          <div className="card">
            <h3>💰 Investor</h3>
            <p>Manajemen data investor</p>
            <Link to="/admin/investor">Lihat</Link>
          </div>
          <div className="card">
            <h3>📤 Upload</h3>
            <p>Upload materi & dokumen</p>
            <Link to="/admin/upload">Lihat</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
