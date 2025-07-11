import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Belum login
  if (!user) return <Navigate to="/login" />;

  // Role tidak sesuai
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  // Akses diperbolehkan
  return children;
};

export default PrivateRoute;
