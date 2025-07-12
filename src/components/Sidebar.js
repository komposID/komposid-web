// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {collapsed ? '➡️' : '⬅️'}
      </button>
      <ul>
        <li><Link to="/dashboard">🏠 <span className="label">Dashboard</span></Link></li>
        <li><Link to="/dashboard/produk">📦 <span className="label">Produk</span></Link></li>
        <li><Link to="/admin/mitra">🤝 <span className="label">Mitra</span></Link></li>
        <li><Link to="/admin/investor">💰 <span className="label">Investor</span></Link></li>
        <li><Link to="/admin/upload">📁 <span className="label">Upload</span></Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
