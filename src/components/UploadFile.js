// src/components/UploadFile.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const bucketName = 'dokumen';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from(bucketName).list('', {
      limit: 100,
      offset: 0,
    });
    if (!error) setUploadedFiles(data);
  };

  const handleUpload = async () => {
    if (!file) return alert('Pilih file terlebih dahulu');

    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from(bucketName).upload(fileName, file);

    if (error) {
      alert('Gagal upload: ' + error.message);
    } else {
      alert('Berhasil upload');
      setFile(null);
      fetchFiles();
    }
  };

  const handleDelete = async (fileName) => {
    const { error } = await supabase.storage.from(bucketName).remove([fileName]);

    if (error) {
      alert('Gagal hapus: ' + error.message);
    } else {
      alert('Berhasil dihapus');
      fetchFiles();
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📤 Upload Dokumen</h2>
      <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: '1rem' }}>Upload</button>

      <h3 style={{ marginTop: '2rem' }}>📁 Daftar File:</h3>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>
            <a
              href={`https://iepgyqsprvhwibwibkhu.supabase.co/storage/v1/object/public/${bucketName}/${file.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </a>
            <button
              onClick={() => handleDelete(file.name)}
              style={{ marginLeft: '1rem', color: 'red' }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UploadFile;
