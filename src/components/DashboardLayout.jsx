// src/components/DashboardLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '220px', padding: '2rem', width: '100%' }}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
