// src/pages/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>👨‍💼 Admin Dashboard</h2>
      <p>Selamat datang di panel admin. Silakan kelola data menggunakan menu di bawah:</p>

      <ul className="admin-menu">
        <li><Link to="/admin/produk">📦 Kelola Produk</Link></li>
        <li><Link to="/admin/mitra">🤝 Kelola Mitra</Link></li>
        <li><Link to="/admin/investor">💰 Kelola Investor</Link></li>
        <li><Link to="/admin/upload">📁 Upload File</Link></li>
        <li><Link to="/admin/pengguna">👥 Kelola Pengguna</Link></li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
