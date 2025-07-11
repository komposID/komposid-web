import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Tutup menu saat navigasi
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
            <div style={styles.hamburger} onClick={toggleMenu}>
              <div style={styles.bar}></div>
              <div style={styles.bar}></div>
              <div style={styles.bar}></div>
            </div>

            {menuOpen && <div style={styles.overlay} onClick={closeMenu}></div>}

            <div
              style={{
                ...styles.mobileMenu,
                right: menuOpen ? '0' : '-100%',
              }}
            >
              <div style={styles.closeButton} onClick={closeMenu}>✕</div>
              <Link to="/" style={styles.mobileLink} onClick={closeMenu}>🏠 Home</Link>
              <Link to="/produk" style={styles.mobileLink} onClick={closeMenu}>🛒 Produk</Link>
              <Link to="/gabung" style={styles.mobileLink} onClick={closeMenu}>🤝 Gabung Mitra</Link>
              <Link to="/investor" style={styles.mobileLink} onClick={closeMenu}>💼 Investor</Link>
              <Link to="/login" style={styles.mobileLink} onClick={closeMenu}>🔐 Login Admin</Link>
            </div>
          </>
        ) : (
          <div style={styles.desktopLinks}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/produk" style={styles.link}>Produk</Link>
            <Link to="/gabung" style={styles.link}>Gabung Mitra</Link>
            <Link to="/investor" style={styles.link}>Investor</Link>
            <Link to="/login" style={styles.link}>Login Admin</Link>
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
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '8px 14px',
    borderRadius: '6px',
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
