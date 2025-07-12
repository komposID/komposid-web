// src/layouts/AdminLayout.js
import React from 'react';
import Sidebar from '../components/Sidebar'; // Pastikan Sidebar.js sudah ada
import '../styles/admin-layout.css'; // Tambahkan jika ingin gaya khusus

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
