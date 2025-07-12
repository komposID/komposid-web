// src/pages/KelolaProduk.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import './KelolaProduk.css';

function KelolaProduk() {
  const [produk, setProduk] = useState([]);
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState('');
  const [editId, setEditId] = useState(null);

  const produkRef = collection(db, 'produk');

  const fetchProduk = async () => {
    const data = await getDocs(produkRef);
    setProduk(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchProduk();
  }, []);
useEffect(() => {
  fetchProduk();
}, [fetchProduk]); // tambahkan ini agar lulus ESLint

  const handleSubmit = async (e) => {
    e.preventDefault();
    const produkData = {
      nama,
      harga: parseInt(harga),
      stok: parseInt(stok),
      deskripsi,
      gambar,
    };

    try {
      if (editId) {
        await updateDoc(doc(db, 'produk', editId), produkData);
        setEditId(null);
      } else {
        await addDoc(produkRef, produkData);
      }
      resetForm();
      fetchProduk();
    } catch (error) {
      alert('Gagal menyimpan produk: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Hapus produk ini?')) {
      await deleteDoc(doc(db, 'produk', id));
      fetchProduk();
    }
  };

  const handleEdit = (item) => {
    setNama(item.nama);
    setHarga(item.harga);
    setStok(item.stok);
    setDeskripsi(item.deskripsi);
    setGambar(item.gambar);
    setEditId(item.id);
  };

  const resetForm = () => {
    setNama('');
    setHarga('');
    setStok('');
    setDeskripsi('');
    setGambar('');
    setEditId(null);
  };

  return (
    <div className="produk-container">
      <h2>📦 Kelola Produk Kompos</h2>

      <form onSubmit={handleSubmit} className="produk-form">
        <input
          type="text"
          placeholder="Nama produk"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Harga"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stok"
          value={stok}
          onChange={(e) => setStok(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL Gambar"
          value={gambar}
          onChange={(e) => setGambar(e.target.value)}
        />
        <textarea
          placeholder="Deskripsi produk"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        />
        <button type="submit">{editId ? '💾 Update' : '➕ Tambah'}</button>
        {editId && <button onClick={resetForm}>❌ Batal</button>}
      </form>

      <ul className="produk-list">
        {produk.map((item) => (
          <li key={item.id} className="produk-item">
            <img src={item.gambar} alt={item.nama} />
            <div>
              <h4>{item.nama}</h4>
              <p>Rp {item.harga?.toLocaleString()}</p>
              <p>Stok: {item.stok}</p>
              <p>{item.deskripsi}</p>
              <div>
                <button onClick={() => handleEdit(item)}>✏️ Edit</button>
                <button onClick={() => handleDelete(item.id)}>🗑️ Hapus</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KelolaProduk;
