import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '40px' }}>🔄 Memuat...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />; // atau redirect ke halaman khusus jika ingin
  }

  return children;
};

export default PrivateRoute;
