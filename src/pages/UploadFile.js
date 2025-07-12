import React, { useState, useEffect, useRef } from 'react';
import './UploadFile.css';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iepgyqsprvhwibwibkhu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcGd5cXNwcnZod2lid2lia2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk1NDksImV4cCI6MjA2Nzg3NTU0OX0.1xEfdpkQKBPNHlzxJJJO6yntfQtXfvVGXVyBTzp3R68';
const supabase = createClient(supabaseUrl, supabaseKey);

const kategoriList = ['Modul', 'Ebook', 'Panduan', 'Formulir', 'Gambar'];

function UploadFile() {
  const [file, setFile] = useState(null);
  const [kategori, setKategori] = useState(kategoriList[0]);
  const [dataFile, setDataFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('file_metadata')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setDataFile(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = async () => {
    if (!file) return alert('Pilih file terlebih dahulu.');

    setLoading(true);

    const filename = `${Date.now()}-${file.name}`;
    const path = `${kategori}/${filename}`;

    const { error: uploadError } = await supabase.storage
      .from('file-pelatihan')
      .upload(path, file);

    if (uploadError) {
      setLoading(false);
      return alert('❌ Upload gagal: ' + uploadError.message);
    }

    const { data: urlData } = supabase
      .storage
      .from('file-pelatihan')
      .getPublicUrl(path);

    const { error: insertError } = await supabase
      .from('file_metadata')
      .insert({
        nama_file: file.name,
        kategori,
        path,
        url: urlData.publicUrl,
      });

    setLoading(false);

    if (insertError) {
      return alert('Gagal menyimpan metadata.');
    }

    alert('✅ File berhasil diupload!');
    setFile(null);
    fileRef.current.value = '';
    fetchData();
  };

  const handleDelete = async (id, path) => {
    const { error: deleteFileError } = await supabase
      .storage
      .from('file-pelatihan')
      .remove([path]);

    if (deleteFileError) {
      return alert('Gagal menghapus file dari storage.');
    }

    const { error: deleteMetaError } = await supabase
      .from('file_metadata')
      .delete()
      .eq('id', id);

    if (deleteMetaError) {
      return alert('File dihapus dari storage, tapi gagal dari metadata.');
    }

    alert('🗑️ File berhasil dihapus.');
    fetchData();
  };

  return (
    <div className="upload-container">
      <h2>📁 Upload File Pelatihan</h2>

      <div className="upload-form">
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          {kategoriList.map(k => <option key={k}>{k}</option>)}
        </select>

        <input type="file" ref={fileRef} onChange={(e) => setFile(e.target.files[0])} />

        <button onClick={handleUpload} disabled={loading}>
          {loading ? 'Mengunggah...' : 'Upload'}
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
          {dataFile.map((f) => (
            <tr key={f.id}>
              <td>{f.kategori}</td>
              <td style={{ wordBreak: 'break-word' }}>
                <a href={f.url} target="_blank" rel="noopener noreferrer">
                  {f.nama_file.length > 40 ? f.nama_file.slice(0, 40) + '...' : f.nama_file}
                </a>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(f.id, f.path)}>
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
