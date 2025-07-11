import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📊 Halaman Dashboard Admin</h2>
      <p>Hanya user dengan role <strong>admin</strong> yang bisa melihat halaman ini.</p>
    </div>
  );
}

export default Dashboard;
