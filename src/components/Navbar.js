// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userData, role, logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const renderLink = (to, label) => (
    <Link
      to={to}
      style={{
        ...styles.link,
        backgroundColor: isActive(to) ? '#2e7d32' : 'transparent',
      }}
    >
      {label}
    </Link>
  );

  const renderMobileLink = (to, label) => (
    <Link
      to={to}
      onClick={() => setMenuOpen(false)}
      style={{
        ...styles.mobileLink,
        fontWeight: isActive(to) ? 'bold' : 'normal',
        color: isActive(to) ? '#0d4d00' : '#1b5e20',
      }}
    >
      {label}
    </Link>
  );

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <Link to="/" style={styles.brandWrapper}>
          <img
            src="https://res.cloudinary.com/komposid/image/upload/v1752160491/BackgroundEraser_20250519_230147344_hkqxla.png"
            alt="KomposID"
            style={styles.logo}
          />
          <span style={styles.brand}>KomposID</span>
        </Link>
      </div>

      {isMobile ? (
        <>
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
          {menuOpen && <div style={styles.overlay} onClick={() => setMenuOpen(false)}></div>}
          <div style={{ ...styles.mobileMenu, right: menuOpen ? '0' : '-100%' }}>
            <div style={styles.mobileHeader}>
              {user && (
                <>
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${userData?.name || 'User'}`}
                    alt="User"
                    style={styles.avatar}
                  />
                  <div>
                    <div style={styles.mobileUser}>{userData?.name || "Pengguna"}</div>
                    <div style={styles.roleText}>{role || "pengguna"}</div>
                  </div>
                </>
              )}
            </div>
            <div style={styles.separator}></div>
            {role === 'admin' && renderMobileLink("/dashboard", "🛠️ Dashboard")}
            {renderMobileLink("/", "🏠 Home")}
            {renderMobileLink("/produk", "🛒 Produk")}
            {renderMobileLink("/gabung", "🤝 Gabung Mitra")}
            {renderMobileLink("/investor", "💼 Investor")}
            {user ? (
              <div onClick={() => { setMenuOpen(false); handleLogout(); }} style={styles.mobileLink}>🔓 Logout</div>
            ) : (
              renderMobileLink("/login", "🔐 Login Admin")
            )}
          </div>
        </>
      ) : (
        <div style={styles.desktopLinks}>
          {user && (
            <>
              <img
                src={user.photoURL || `https://ui-avatars.com/api/?name=${userData?.name || 'User'}`}
                alt="User"
                style={styles.avatarDesktop}
              />
              <div>
                <span style={styles.username}>{userData?.name || 'Pengguna'}</span><br />
                <span style={styles.roleTextDesktop}>{role || 'pengguna'}</span>
              </div>
            </>
          )}
          {role === 'admin' && renderLink("/dashboard", "🛠️ Dashboard")}
          {renderLink("/", "Home")}
          {renderLink("/produk", "Produk")}
          {renderLink("/gabung", "Gabung Mitra")}
          {renderLink("/investor", "Investor")}
          {user ? (
            <div onClick={handleLogout} style={{ ...styles.link, cursor: 'pointer' }}>Logout</div>
          ) : (
            renderLink("/login", "Login Admin")
          )}
        </div>
      )}
    </nav>
  );
}
