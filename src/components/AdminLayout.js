// src/components/AdminLayout.js
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminLayout.css';

function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: '🏠 Dashboard' },
    { path: '/admin/mitra', label: '👥 Kelola Mitra' },
    { path: '/admin/investor', label: '💼 Kelola Investor' },
    { path: '/dashboard/produk', label: '📦 Kelola Produk' },
    { path: '/admin/upload', label: '📁 Upload File' },
    { path: '/admin/pengguna', label: '👤 Kelola Pengguna' },
  ];

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="brand">KomposID</h2>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
