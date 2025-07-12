import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardAdmin.css';

function DashboardAdmin() {
  return (
    <div className="dashboard-admin">
      <h1>Dashboard Admin</h1>
      <div className="menu-grid">
        <Link to="/admin/produk">Kelola Produk</Link>
        <Link to="/admin/mitra">Kelola Mitra</Link>
        <Link to="/admin/investor">Kelola Investor</Link>
        <Link to="/admin/pengguna">Kelola Pengguna</Link>
        <Link to="/admin/upload">Upload File</Link>
      </div>
    </div>
  );
}

export default DashboardAdmin;
