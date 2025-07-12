import React from 'react';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">KOMP<span>OSID</span></h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">🏠 Beranda</Link></li>
            <li><Link to="/dashboard/produk">📦 Kelola Produk</Link></li>
            <li><Link to="/admin/mitra">🤝 Kelola Mitra</Link></li>
            <li><Link to="/admin/investor">💼 Kelola Investor</Link></li>
            <li><Link to="/admin/upload">📁 Upload File</Link></li>
            <li><Link to="/admin/pengguna">👥 Pengguna</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet /> {/* Untuk tampilkan konten halaman */}
      </main>
    </div>
  );
}

export default Dashboard;
