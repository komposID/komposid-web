// src/pages/Signup.js
import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, identifier, password);
      alert('Pendaftaran berhasil! Silakan login.');
      navigate('/login');
    } catch (error) {
      alert('Gagal daftar: ' + error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      alert('Berhasil daftar/login dengan Google.');
      navigate('/');
    } catch (error) {
      alert('Gagal Google Signup: ' + error.message);
    }
  };


  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">📝 Daftar Akun</h2>
        <p className="signup-subtitle">
          Formulir ini digunakan untuk semua jenis pendaftaran akun.
        </p>

        <form className="signup-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">👤 Nama Lengkap</label>
            <input
              type="text"
              id="name"
              placeholder="Masukkan nama lengkap Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="identifier">📧 Email</label>
            <input
              type="email"
              id="identifier"
              placeholder="Contoh: email@domain.com"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">🔑 Password</label>
            <input
              type="password"
              id="password"
              placeholder="Minimal 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Daftar Sekarang</button>
        </form>

        <div style={{ margin: '16px 0' }}>
          <button onClick={handleGoogleSignup} style={styles.socialBtn}>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              style={styles.icon}
            />
            Daftar mudah dengan Google
          </button>
        </div>

        <p className="signup-footer-note">
          Sudah punya akun? <a href="/login" className="signup-link">Login di sini</a>
        </p>
        <div className="signup-info-box">
          <p><strong>🔒 Keamanan:</strong> Data Anda hanya digunakan untuk sistem internal KomposID.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  socialBtn: {
    width: '100%',
    padding: '10px 14px',
    marginBottom: '12px',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#fff',
    color: '#333',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
};

export default Signup;
