// src/pages/UploadFile.js
import React from 'react';

const UploadFile = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upload File Pelatihan</h2>
      <p>Halaman ini akan digunakan untuk mengunggah file PDF atau dokumen pelatihan lainnya.</p>

      {/* Form upload nanti bisa dihubungkan ke Supabase, Firebase, atau server lokal */}
      <input type="file" />
      <button style={{ marginTop: '1rem' }}>Upload</button>
    </div>
  );
};

export default UploadFile;
