import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Daftar:', name, identifier, password);
    alert('Pendaftaran berhasil! Silakan login.');
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">📝 Daftar Akun</h2>
        <p className="signup-subtitle">
          Formulir ini digunakan untuk semua jenis pendaftaran akun. Harap isi data dengan benar sesuai kebutuhan login Anda.
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
            <label htmlFor="identifier">📧 Email / No HP</label>
            <input
              type="text"
              id="identifier"
              placeholder="Contoh: email@domain.com atau 08xxxx"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">🔑 Buat Password</label>
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

        <p className="signup-footer-note">
          Sudah punya akun?{' '}
          <a href="/login" className="signup-link">Login di sini</a>
        </p>

        <div className="signup-info-box">
          <p><strong>🔒 Keamanan:</strong> Data Anda hanya digunakan untuk keperluan sistem internal KomposID.</p>
          <p><strong>📌 Catatan:</strong> Tim kami akan memverifikasi pendaftaran sebelum akses penuh diberikan.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
