import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

function Signup() {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, identifier, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: name,
        email: identifier,
        role: 'pengguna',
        createdAt: serverTimestamp(),
      });

      alert('Pendaftaran berhasil! Silakan login.');
      navigate('/login');
    } catch (error) {
      alert('Gagal daftar: ' + error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        role: 'pengguna',
        createdAt: serverTimestamp(),
      });

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

        <div style={{ margin: '16px 0' }}>
          <button onClick={handleGoogleSignup} style={styles.socialBtn}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              style={styles.icon}
            />
            Daftar / Login dengan Google
          </button>
        </div>

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
    width: '18px',
    height: '18px',
    marginRight: '8px',
  },
};

export default Signup;
