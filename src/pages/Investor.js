import React from 'react';

function Investor() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💼 Untuk Calon Investor</h1>
      <p style={styles.text}>
        KomposID membuka peluang kerja sama strategis bagi para investor yang ingin berkontribusi
        dalam revolusi distribusi kompos berbasis teknologi.
      </p>
      <ul style={styles.list}>
        <li>📈 Akses laporan keuangan dan perkembangan bisnis secara berkala.</li>
        <li>🔐 Dashboard eksklusif untuk memantau ROI, distribusi, dan performa mitra.</li>
        <li>📝 Kontrak digital dan sistem keamanan data yang transparan.</li>
        <li>🤝 Bergabung dalam jaringan hijau untuk masa depan pertanian berkelanjutan.</li>
      </ul>
      <p style={styles.text}>
        Tertarik? Silakan hubungi tim kami atau daftar untuk sesi presentasi investor secara daring.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#1b5e20',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '20px',
  },
  list: {
    paddingLeft: '20px',
    fontSize: '1.1rem',
    marginBottom: '20px',
  },
};

export default Investor;
