// src/pages/UploadFile.js
import React, { useState, useEffect } from 'react';
import './UploadFile.css';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://iepgyqsprvhwibwibkhu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcGd5cXNwcnZod2lid2lia2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk1NDksImV4cCI6MjA2Nzg3NTU0OX0.1xEfdpkQKBPNHlzxJJJO6yntfQtXfvVGXVyBTzp3R68');

const bucketName = 'file-pelatihan';
const maxSize = 5 * 1024 * 1024; // 5MB

const kategoriList = ['Modul', 'Ebook', 'Formulir', 'Panduan'];

function UploadFile() {
  const [file, setFile] = useState(null);
  const [kategori, setKategori] = useState(kategoriList[0]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from(bucketName).list('', { limit: 100 });
    if (!error) setFiles(data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert('📂 Pilih file terlebih dahulu.');
    if (!kategori) return alert('📁 Pilih kategori.');

    if (file.size > maxSize) {
      return alert('❌ Ukuran file melebihi 5 MB.');
    }

    setLoading(true);
    const fileName = `${kategori}/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from(bucketName).upload(fileName, file);
    setLoading(false);

    if (error) {
      alert('❌ Gagal upload: ' + error.message);
    } else {
      alert('✅ File berhasil diupload!');
      setFile(null);
      fetchFiles();
    }
  };

  const handleDelete = async (name) => {
    const { error } = await supabase.storage.from(bucketName).remove([name]);
    if (!error) {
      alert('🗑️ File dihapus');
      fetchFiles();
    }
  };

  const getPublicUrl = (name) => {
    return supabase.storage.from(bucketName).getPublicUrl(name).data.publicUrl;
  };

  return (
    <div className="upload-container">
      <h2>📁 Upload File Pelatihan</h2>

      <label>
        Kategori:
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          {kategoriList.map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
      </label>

      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Mengunggah...' : 'Upload'}
      </button>

      <hr />
      <h3>📄 Daftar File</h3>
      <table className="file-table">
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Nama File</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {files.map((f) => {
            const parts = f.name.split('/');
            const kategori = parts.length > 1 ? parts[0] : '-';
            const namaFile = parts.length > 1 ? parts.slice(1).join('/') : f.name;

            return (
              <tr key={f.name}>
                <td>{kategori}</td>
                <td style={{ wordBreak: 'break-all' }}>
                  <a href={getPublicUrl(f.name)} target="_blank" rel="noopener noreferrer">
                    {namaFile}
                  </a>
                </td>
                <td>
                  <button onClick={() => handleDelete(f.name)} className="delete-btn">
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UploadFile;
