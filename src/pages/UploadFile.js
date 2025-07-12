// src/pages/UploadFile.js
import React, { useState, useEffect } from 'react';
import './UploadFile.css';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iepgyqsprvhwibwibkhu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcGd5cXNwcnZod2lid2lia2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk1NDksImV4cCI6MjA2Nzg3NTU0OX0.1xEfdpkQKBPNHlzxJJJO6yntfQtXfvVGXVyBTzp3R68'; // Ganti dengan key anon kamu
const supabase = createClient(supabaseUrl, supabaseKey);

const bucketName = 'file-pelatihan';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from(bucketName).list('', { limit: 100 });
    if (error) {
      console.error('Gagal ambil file:', error.message);
    } else {
      setFiles(data);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert('Pilih file terlebih dahulu.');
    setLoading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from(bucketName).upload(fileName, file);

    setLoading(false);

    if (error) {
      alert('❌ Upload gagal: ' + error.message);
    } else {
      alert('✅ Upload berhasil!');
      setFile(null);
      fetchFiles();
    }
  };

  const handleDelete = async (name) => {
    const { error } = await supabase.storage.from(bucketName).remove([name]);
    if (error) {
      alert('❌ Gagal hapus file: ' + error.message);
    } else {
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
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Mengunggah...' : 'Upload'}
      </button>

      <hr />
      <h3>📄 Daftar File Tersimpan</h3>
      <table className="file-table">
        <thead>
          <tr>
            <th>Nama File</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {files.map((f) => (
            <tr key={f.name}>
              <td style={{ wordBreak: 'break-all' }}>
                <a href={getPublicUrl(f.name)} target="_blank" rel="noopener noreferrer">
                  {f.name}
                </a>
              </td>
              <td>
                <button onClick={() => handleDelete(f.name)} className="delete-btn">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UploadFile;
