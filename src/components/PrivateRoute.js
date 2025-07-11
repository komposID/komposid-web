// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user, role, loading } = useAuth();

  // ⏳ Tunggu context selesai loading
  if (loading) return <div>Loading...</div>;

  // ❌ Kalau belum login
  if (!user) return <Navigate to="/login" replace />;

  // ❌ Kalau role tidak sesuai
  if (requiredRole && role !== requiredRole) return <Navigate to="/" replace />;

  // ✅ Akses diizinkan
  return children;
};

export default PrivateRoute;
