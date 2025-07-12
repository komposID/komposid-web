import React, { useEffect, useState } from 'react';
import './LoginAdmin.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, signInWithGoogleAndSync } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

function LoginAdmin() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();

  // 🔄 Redirect otomatis jika sudah login
  useEffect(() => {
    if (!loading && user) {
      if (role === "admin") navigate("/dashboard");
      else if (role === "mitra") navigate("/mitra-panel");
      else if (role === "investor") navigate("/investor-panel");
      else navigate("/");
    }
  }, [user, role, loading, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const userCred = await signInWithEmailAndPassword(auth, identifier, password);
      const userDoc = await getDoc(doc(db, "users", userCred.user.uid));
      const role = userDoc.data()?.role;

      if (role === "admin") navigate("/dashboard");
      else if (role === "mitra") navigate("/mitra-panel");
      else if (role === "investor") navigate("/investor-panel");
      else navigate("/");
    } catch (error) {
      setErrorMsg('Login gagal. Periksa kembali email & password Anda.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogleAndSync();
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const role = userDoc.data()?.role;

      if (role === "admin") navigate("/dashboard");
      else if (role === "mitra") navigate("/mitra-panel");
      else if (role === "investor") navigate("/investor-panel");
      else navigate("/");
    } catch (error) {
      alert('Login Google gagal: ' + error.message);
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

          {errorMsg && (
            <p style={{ color: 'red', fontSize: '0.85rem' }}>{errorMsg}</p>
          )}

          <button type="submit">Masuk Sekarang</button>
        </form>

        <div style={{ marginTop: '12px' }}>
          <button onClick={handleGoogleLogin} style={styles.googleBtn}>
            <img
              src="/assets/google-icon.png"
              alt="Google"
              style={styles.icon}
            />
            Login dengan Google
          </button>
        </div>

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

const styles = {
  googleBtn: {
    width: '100%',
    padding: '10px 14px',
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

export default LoginAdmin;
