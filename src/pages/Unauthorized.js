// src/pages/Unauthorized.js
import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚫 Akses Ditolak</h1>
      <p style={styles.message}>Kamu tidak memiliki izin untuk mengakses halaman ini.</p>
      <Link to="/" style={styles.button}>Kembali ke Beranda</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#1b5e20',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1b5e20',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
  },
};

export default Unauthorized;
