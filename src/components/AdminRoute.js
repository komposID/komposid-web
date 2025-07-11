// src/components/AdminRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
  const { user, role, loading } = useAuth();

  // Saat data auth masih dimuat
  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Memuat akses...</div>;

  // Jika belum login
  if (!user) return <Navigate to="/login" replace />;

  // Jika bukan admin
  if (role !== 'admin') return <Navigate to="/unauthorized" replace />;

  // Jika admin, izinkan akses ke halaman dalam
  return <Outlet />;
};

export default AdminRoute;
