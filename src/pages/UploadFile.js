import React, { useState, useEffect, useRef } from 'react';
import './UploadFile.css';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iepgyqsprvhwibwibkhu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcGd5cXNwcnZod2lid2lia2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk1NDksImV4cCI6MjA2Nzg3NTU0OX0.1xEfdpkQKBPNHlzxJJJO6yntfQtXfvVGXVyBTzp3R68'; // jangan pakai secret key
const supabase = createClient(supabaseUrl, supabaseKey);

const kategoriList = ['Modul', 'Ebook', 'Formulir', 'Panduan', 'Gambar'];

function UploadFile() {
  const [file, setFile] = useState(null);
  const [kategori, setKategori] = useState(kategoriList[0]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const bucketName = 'file-pelatihan';

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from(bucketName).list('', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'created_at', order: 'desc' },
    });

    if (!error) {
      setFiles(data || []);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert('⚠️ Silakan pilih file terlebih dahulu.');

    setLoading(true);

    const filePath = `${kategori}/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from(bucketName).upload(filePath, file);

    setLoading(false);

    if (error) {
      alert('❌ Upload gagal: ' + error.message);
    } else {
      alert('✅ File berhasil diupload.');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchFiles();
    }
  };

  const handleDelete = async (fileName) => {
    const { error } = await supabase.storage.from(bucketName).remove([fileName]);
    if (error) {
      alert('❌ Gagal menghapus: ' + error.message);
    } else {
      alert('🗑️ File dihapus.');
      fetchFiles();
    }
  };

  const getPublicUrl = (fileName) => {
    const { data } = supabase.storage.from(bucketName).getPublicUrl(fileName);
    return data.publicUrl;
  };

  return (
    <div className="upload-container">
      <h2>📁 Upload File Pelatihan</h2>

      <div className="upload-form">
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          {kategoriList.map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>

        <input type="file" ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

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
            let kategori = '-';
            let namaFile = f.name;

            if (f.name.includes('/')) {
              const parts = f.name.split('/');
              kategori = parts[0];
              namaFile = parts.slice(1).join('/');
            }

            return (
              <tr key={f.name}>
                <td>{kategori}</td>
                <td style={{ wordBreak: 'break-word' }}>
                  <a href={getPublicUrl(f.name)} target="_blank" rel="noopener noreferrer">
                    {namaFile.length > 50 ? namaFile.slice(0, 50) + '...' : namaFile}
                  </a>
                </td>
                <td>
                  <button onClick={() => handleDelete(f.name)} className="delete-btn">Hapus</button>
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
