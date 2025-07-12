// src/pages/Dashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>⚙️ Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">📊 Ringkasan</Link></li>
            <li><Link to="/dashboard/produk">📦 Kelola Produk</Link></li>
            <li><Link to="/dashboard/mitra">🤝 Kelola Mitra</Link></li>
            <li><Link to="/dashboard/investor">💼 Kelola Investor</Link></li>
            <li><Link to="/dashboard/pengguna">👥 Kelola Pengguna</Link></li>
            <li><Link to="/dashboard/upload">📁 Upload File</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
