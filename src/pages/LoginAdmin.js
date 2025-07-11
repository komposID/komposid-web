import React, { useState } from 'react';
import './LoginAdmin.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginAdmin() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      await signInWithEmailAndPassword(auth, identifier, password);
      navigate('/'); // Arahkan ke home setelah login
    } catch (error) {
      setErrorMsg('Login gagal. Periksa kembali email & password Anda.');
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">🔐 Login Akun KomposID</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="identifier">📧 Email</label>
            <input
              id="identifier"
              type="email"
              placeholder="Masukkan email aktif"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">🔑 Password</label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMsg && <p style={{ color: 'red', fontSize: '0.85rem' }}>{errorMsg}</p>}

          <button type="submit">Masuk Sekarang</button>
        </form>

        <div style={{ marginTop: '16px', fontSize: '0.9rem', textAlign: 'center' }}>
          Belum punya akun?{' '}
          <Link to="/signup" style={{ color: '#1b5e20', fontWeight: 'bold' }}>
            Daftar di sini
          </Link>
        </div>

        <p style={{ marginTop: '24px', fontSize: '0.85rem', color: '#555', textAlign: 'center' }}>
          Akun login ini hanya diperuntukkan bagi mitra, investor, dan admin distribusi resmi.
        </p>
      </div>
    </div>
  );
}

export default LoginAdmin;
