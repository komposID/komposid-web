// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaHome, FaBox, FaUsers, FaUserTie, FaUpload, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
    { name: 'Produk', path: '/admin/produk', icon: <FaBox /> },
    { name: 'Mitra', path: '/admin/mitra', icon: <FaUsers /> },
    { name: 'Investor', path: '/admin/investor', icon: <FaUserTie /> },
    { name: 'Pengguna', path: '/admin/pengguna', icon: <FaUsers /> },
    { name: 'Upload', path: '/admin/upload', icon: <FaUpload /> },
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="top">
        <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
          <FaBars />
        </button>
      </div>
      <ul>
        {menuItems.map(item => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path}>
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/logout">
            <FaSignOutAlt />
            {!collapsed && <span>Logout</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
