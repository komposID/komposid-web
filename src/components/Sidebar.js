// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaBox, FaUsers, FaUserShield, FaUpload } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { label: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
    { label: 'Kelola Produk', path: '/dashboard/produk', icon: <FaBox /> },
    { label: 'Kelola Mitra', path: '/admin/mitra', icon: <FaUsers /> },
    { label: 'Kelola Investor', path: '/admin/investor', icon: <FaUserShield /> },
    { label: 'Upload File', path: '/admin/upload', icon: <FaUpload /> },
  ];

  return (
    <div className="sidebar">
      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          {item.icon}
          <span className="label">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
