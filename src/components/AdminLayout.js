// src/components/AdminLayout.js
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminLayout.css';

function AdminLayout() {
//  const location = useLocation();

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>KomposID</h2>
        <nav>
          <ul>
            <li><Link to="/dashboard">🏠 Dashboard</Link></li>
            <li><Link to="/admin/mitra">👥 Kelola Mitra</Link></li>
            <li><Link to="/admin/investor">💼 Kelola Investor</Link></li>
            <li><Link to="/dashboard/produk">📦 Kelola Produk</Link></li>
            <li><Link to="/admin/upload">📁 Upload File</Link></li>
            <li><Link to="/admin/pengguna">👤 Kelola Pengguna</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
