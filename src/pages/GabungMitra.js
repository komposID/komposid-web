import React from 'react';
import { Link } from 'react-router-dom';

function GabungMitra() {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Gabung Jadi Mitra KomposID</h1>
        <p style={styles.subtitle}>
          Platform distribusi kompos terintegrasi yang membuka peluang cuan dari sampah organik.
        </p>
      </header>

      {/* Benefit Section */}
      <section style={styles.benefitSection}>
        <h2 style={styles.sectionTitle}>🌿 Keuntungan Menjadi Mitra</h2>
        <ul style={styles.list}>
          <li>✅ Akses ke produk kompos unggulan langsung dari produsen</li>
          <li>✅ Dukungan pemasaran dan promosi dari KomposID</li>
          <li>✅ Sistem distribusi terintegrasi dan transparan</li>
          <li>✅ Potensi profit jangka panjang dengan sistem berkelanjutan</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <p style={styles.ctaText}>
          Siap menjadi bagian dari revolusi hijau? Hubungi admin untuk dapatkan akses mitra.
        </p>
        <Link to="/login" style={styles.button}>Login Mitra</Link>
        <p style={styles.note}>Belum punya akun? Hubungi admin KomposID untuk aktivasi.</p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#2e7d32', // Hijau gelap
    color: '#fff',
    padding: '50px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  benefitSection: {
    backgroundColor: '#ffffff', // Putih
    padding: '40px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'left',
    fontSize: '1rem',
    lineHeight: '1.8',
  },
  ctaSection: {
    backgroundColor: '#fff8e1', // Kuning pastel lembut
    padding: '40px 20px',
    textAlign: 'center',
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#2e7d32',
    color: 'white',
    padding: '12px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  note: {
    marginTop: 20,
    fontSize: '0.95rem',
    color: '#333',
  },
};

export default GabungMitra;
