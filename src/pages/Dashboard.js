// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>📊 Admin Dashboard</h2>
      <p>Selamat datang, Admin. Kelola semua data dari sini.</p>

      <div className="dashboard-grid">
        <Link to="/dashboard/produk" className="dashboard-card">📦 Kelola Produk</Link>
        <Link to="/admin/mitra" className="dashboard-card">🤝 Kelola Mitra</Link>
        <Link to="/admin/investor" className="dashboard-card">💰 Kelola Investor</Link>
        <Link to="/admin/pengguna" className="dashboard-card">👥 Kelola Pengguna</Link>
        <Link to="/admin/upload" className="dashboard-card">📁 Upload File</Link>
      </div>
    </div>
  );
}

export default Dashboard;
