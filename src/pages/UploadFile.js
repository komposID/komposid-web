// src/pages/UploadFile.js
import React, { useState, useEffect } from 'react';
import './UploadFile.css';
import { createClient } from '@supabase/supabase-js';

// Ganti dengan kredensial Supabase kamu
const supabaseUrl = 'https://iepgyqsprvhwibwibkhu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcGd5cXNwcnZod2lid2lia2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk1NDksImV4cCI6MjA2Nzg3NTU0OX0.1xEfdpkQKBPNHlzxJJJO6yntfQtXfvVGXVyBTzp3R68'; // ANON PUBLIC KEY
const supabase = createClient(supabaseUrl, supabaseKey);

function UploadFile() {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const bucketName = 'dokumen';

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const { data, error } = await supabase
      .storage
      .from(bucketName)
      .list('', { limit: 100 });

    if (error) {
      console.error('❌ Gagal ambil file:', error.message);
      alert('Gagal mengambil daftar file');
    } else {
      setUploadedFiles(data);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert('Pilih file terlebih dahulu.');

    const fileName = `${Date.now()}-${file.name}`;
    setLoading(true);
    const { error } = await supabase
      .storage
      .from(bucketName)
      .upload(fileName, file);

    setLoading(false);
    if (error) {
      alert('❌ Upload gagal: ' + error.message);
    } else {
      alert('✅ File berhasil diupload');
      setFile(null);
      fetchFiles();
    }
  };

  const handleDelete = async (fileName) => {
    if (!window.confirm(`Hapus file "${fileName}"?`)) return;

    const { error } = await supabase
      .storage
      .from(bucketName)
      .remove([fileName]);

    if (error) {
      alert('❌ Gagal hapus file: ' + error.message);
    } else {
      alert('🗑️ File berhasil dihapus');
      fetchFiles();
    }
  };

  const getPublicUrl = (fileName) => {
    const { publicURL } = supabase
      .storage
      .from(bucketName)
      .getPublicUrl(fileName);
    return publicURL;
  };

  return (
    <div className="upload-container">
      <h2>📁 Upload File Pelatihan</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={!file || loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>

      <hr />

      <h3>📄 Daftar File</h3>
      {uploadedFiles.length === 0 && <p>Belum ada file.</p>}
      <ul>
        {uploadedFiles.map((f) => (
          <li key={f.name}>
            <a
              href={getPublicUrl(f.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {f.name}
            </a>
            <button onClick={() => handleDelete(f.name)} className="delete-btn">
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UploadFile;
