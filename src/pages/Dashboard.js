// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '220px', padding: '1rem', width: '100%' }}>
        <h1>Selamat datang di Dashboard Admin</h1>
        <p>Pilih menu di sebelah kiri untuk mulai mengelola.</p>
      </main>
    </div>
  );
}

export default Dashboard;
