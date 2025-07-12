// src/pages/UploadFile.js
import React, { useState, useEffect } from 'react';
import './UploadFile.css';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iepgyqsprvhwibwibkhu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcGd5cXNwcnZod2lid2lia2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk1NDksImV4cCI6MjA2Nzg3NTU0OX0.1xEfdpkQKBPNHlzxJJJO6yntfQtXfvVGXVyBTzp3R68'; // Ganti ini
const supabase = createClient(supabaseUrl, supabaseKey);

function UploadFile() {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const bucketName = 'dokumen';

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from(bucketName).list('', { limit: 100 });
    if (error) {
      console.error('Gagal ambil file:', error.message);
    } else {
      setUploadedFiles(data);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert('Pilih file dulu');

    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from(bucketName).upload(fileName, file);
    if (error) {
      alert('Gagal upload: ' + error.message);
    } else {
      alert('File berhasil diupload');
      setFile(null);
      fetchFiles();
    }
  };

  const handleDelete = async (name) => {
    const { error } = await supabase.storage.from(bucketName).remove([name]);
    if (error) {
      alert('Gagal hapus file: ' + error.message);
    } else {
      alert('File dihapus');
      fetchFiles();
    }
  };

  const getPublicUrl = (fileName) => {
    const { publicURL } = supabase.storage.from(bucketName).getPublicUrl(fileName);
    return publicURL;
  };

  return (
    <div className="upload-container">
      <h2>📁 Upload File Pelatihan</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <hr />
      <h3>📄 Daftar File</h3>
      <ul>
        {uploadedFiles.map((f) => (
          <li key={f.name}>
            <a href={getPublicUrl(f.name)} target="_blank" rel="noopener noreferrer">{f.name}</a>
            <button onClick={() => handleDelete(f.name)} className="delete-btn">Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UploadFile;
