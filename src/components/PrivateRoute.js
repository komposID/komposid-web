// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children, requiredRole }) {
  const { user, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // ⏳ Tunggu data user & role terbaca

  if (!user) return <Navigate to="/login" replace />;

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;
