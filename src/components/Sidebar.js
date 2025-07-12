// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>⚙️ Admin Panel</h2>
      <ul>
        <li><Link to="/admin">📊 Ringkasan</Link></li>
        <li><Link to="/admin/produk">📦 Kelola Produk</Link></li>
        <li><Link to="/admin/mitra">🤝 Kelola Mitra</Link></li>
        <li><Link to="/admin/investor">💼 Kelola Investor</Link></li>
        <li><Link to="/admin/pengguna">👥 Kelola Pengguna</Link></li>
        <li><Link to="/admin/upload">📁 Upload File</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
