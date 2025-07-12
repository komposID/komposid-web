// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        <h2>Selamat datang, Admin!</h2>
        {/* Konten dashboard di sini */}
      </div>
    </div>
  );
}

export default Dashboard;
