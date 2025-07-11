// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userData, logout } = useAuth(); // Tambahan userData ✅

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
    <Link to={to} style={styles.link}>{label}</Link>
  );

  const renderMobileLink = (to, label) => (
    <Link to={to} style={styles.mobileLink} onClick={() => setMenuOpen(false)}>{label}</Link>
  );

  return (
    <>
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

            <div style={{
              ...styles.mobileMenu,
              right: menuOpen ? '0' : '-100%',
            }}>
              <div style={styles.closeButton} onClick={() => setMenuOpen(false)}>✕</div>
              {renderMobileLink("/", "🏠 Home")}
              {renderMobileLink("/produk", "🛒 Produk")}
              {renderMobileLink("/gabung", "🤝 Gabung Mitra")}
              {renderMobileLink("/investor", "💼 Investor")}
              {user ? (
                <>
                  <div style={styles.mobileUser}>👤 {userData?.name}</div>
                  <div onClick={() => { setMenuOpen(false); handleLogout(); }} style={styles.mobileLink}>🔓 Logout</div>
                </>
              ) : (
                renderMobileLink("/login", "🔐 Login Admin")
              )}
            </div>
          </>
        ) : (
          <div style={styles.desktopLinks}>
            {renderLink("/", "Home")}
            {renderLink("/produk", "Produk")}
            {renderLink("/gabung", "Gabung Mitra")}
            {renderLink("/investor", "Investor")}
            {user ? (
              <>
                <span style={styles.username}>👤 {userData?.name}</span>
                <div onClick={handleLogout} style={{ ...styles.link, cursor: 'pointer' }}>Logout</div>
              </>
            ) : (
              renderLink("/login", "Login Admin")
            )}
          </div>
        )}
      </nav>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#1b5e20',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 2000,
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  brandWrapper: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  desktopLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '8px 14px',
    borderRadius: '6px',
  },
  username: {
    fontWeight: 'bold',
    marginRight: '12px',
    color: '#f0f0f0',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    gap: '4px',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '75%',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 20px',
    gap: '20px',
    zIndex: 2001,
    boxShadow: '-3px 0 8px rgba(0,0,0,0.2)',
    transition: 'right 0.3s ease-in-out',
  },
  mobileLink: {
    fontSize: '1.2rem',
    padding: '12px 10px',
    textDecoration: 'none',
    borderBottom: '1px solid #ccc',
    color: '#1b5e20',
  },
  mobileUser: {
    fontSize: '1.1rem',
    padding: '10px',
    fontWeight: 'bold',
    color: '#1b5e20',
    borderBottom: '1px solid #ccc',
  },
  closeButton: {
    alignSelf: 'flex-end',
    fontSize: '1.5rem',
    cursor: 'pointer',
    marginBottom: '20px',
    color: '#1b5e20',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 2000,
  },
};

export default Navbar;
