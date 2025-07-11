import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <img
          src="https://res.cloudinary.com/komposid/image/upload/v1752160491/BackgroundEraser_20250519_230147344_hkqxla.png"
          alt="KomposID Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>KomposID</h1>
        <p style={styles.subtitle}>
          Jembatan Digital antara Produsen Kompos, Petani, & Investor
        </p>
        <p style={styles.tagline}>
          Dari Limbah Jadi Cuan, dari Kampung Menjadi Gerakan Nasional
        </p>
        <Link to="/gabung" style={styles.cta}>Gabung Sekarang 🔥</Link>
      </header>


     <section style={styles.sectionAlt}>
        <h2 style={styles.heading}>🌿 Apa Itu KomposID?</h2>
        <p style={styles.paragraph}>
          KomposID adalah ekosistem teknologi yang memudahkan distribusi kompos dari produsen kecil ke pembeli besar. 
          Kami menghubungkan petani organik, rumah tangga pengompos, komunitas hijau, dan investor melalui satu platform transparan dan terdesentralisasi.
        </p>
        <p style={styles.paragraph}>
          Dengan sistem berbasis data dan dashboard digital, seluruh proses—mulai dari produksi, pengemasan, pengiriman, hingga laporan hasil panen—
          bisa dipantau oleh semua pihak, termasuk mitra dan pemilik modal.
        </p>
      </section>


      <section style={styles.sectionAlt}>
        <h2 style={styles.heading}>🚀 Siapa Saja yang Bisa Bergabung?</h2>
        <ul style={styles.list}>
          <li>🧑‍🌾 <b>Produsen Kompos:</b> Perorangan, kelompok tani, dan komunitas lingkungan</li>
          <li>🏬 <b>Pembeli Kompos:</b> Petani, toko pertanian, pegiat hidroponik dan organik</li>
          <li>💰 <b>Investor Sosial:</b> Pemodal yang ingin hasilkan keuntungan dari bisnis hijau</li>
          <li>📦 <b>Distributor:</b> Kurir lokal dan pengepul yang ingin penghasilan tambahan</li>
        </ul>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.heading}>🛠️ Apa yang Bisa Dilakukan di KomposID?</h2>
        <ul style={styles.list}>
          <li>🛒 <Link to="/produk">Belanja Kompos Berkualitas</Link> langsung dari mitra</li>
          <li>📋 <Link to="/gabung">Daftar sebagai Mitra</Link> produksi atau distribusi</li>
          <li>📈 <Link to="/investor">Investasi Aman & Transparan</Link> di sektor pertanian hijau</li>
          <li>📊 <Link to="/login">Kelola Bisnis & Laporan</Link> lewat Dashboard Admin</li>
        </ul>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.heading}>🎯 Kenapa Harus KomposID?</h2>
        <ul style={styles.list}>
          <li>✅ Model bisnis terbuka, bisa diaudit, dan punya potensi tumbuh nasional</li>
          <li>✅ Mengurangi limbah organik jadi peluang ekonomi</li>
          <li>✅ Dibangun oleh komunitas dengan pengalaman lapangan</li>
          <li>✅ Teknologi ringan, efisien, dan bisa digunakan dari HP</li>
        </ul>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.heading}>📞 Siap Jadi Bagian dari Revolusi Kompos?</h2>
        <p style={styles.paragraph}>
          Tidak ada waktu yang lebih tepat dari sekarang. Jadilah bagian dari solusi lingkungan dan ekonomi.
        </p>
        <Link to="/gabung" style={styles.ctaLarge}>Daftar Mitra Sekarang 💪</Link>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '960px',
    margin: 'auto',
    fontFamily: 'sans-serif',
  },
  hero: {
    textAlign: 'center',
    backgroundColor: '#e8f5e9',
    padding: '50px 20px',
    borderRadius: '12px',
    marginBottom: '40px',
  },
  logo: {
    height: '80px',
    marginBottom: '12px',
  },
  title: {
    fontSize: '2.8rem',
    color: '#1b5e20',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#388e3c',
    marginBottom: '6px',
  },
  tagline: {
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#2e7d32',
    marginBottom: '20px',
  },
  cta: {
    display: 'inline-block',
    padding: '12px 20px',
    backgroundColor: '#1b5e20',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  section: {
    marginBottom: '50px',
  },
  sectionAlt: {
    marginBottom: '50px',
    backgroundColor: '#f1f8e9',
    padding: '20px',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#2e7d32',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: '1rem',
    lineHeight: '1.8',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#e0f2f1',
    borderRadius: '10px',
  },
  ctaLarge: {
    display: 'inline-block',
    padding: '14px 28px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '8px',
    marginTop: '20px',
  },




card: {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
  padding: '25px',
  maxWidth: '800px',
  margin: '0 auto 40px',
  textAlign: 'left',
},

cardTitle: {
  fontSize: '1.5rem',
  color: '#1b5e20',
  marginBottom: '15px',
  fontWeight: 'bold',
},

cardText: {
  fontSize: '1rem',
  color: '#444',
  lineHeight: '1.6',
  marginBottom: '12px',
},

};

export default Home;
