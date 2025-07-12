// src/components/AdminLayout.js
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminLayout.css';

const menuItems = [
  { path: '/dashboard', label: '🏠 Beranda' },
  { path: '/dashboard/produk', label: '📦 Kelola Produk' },
  { path: '/admin/mitra', label: '👥 Kelola Mitra' },
  { path: '/admin/investor', label: '💼 Kelola Investor' },
  { path: '/admin/upload', label: '📁 Upload File' },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
