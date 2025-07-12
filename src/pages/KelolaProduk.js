import React, { useEffect, useState, useCallback } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import './KelolaProduk.css';

function KelolaProduk() {
  const [produkList, setProdukList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduk = useCallback(async () => {
    try {
      const snapshot = await getDocs(collection(db, "produk"));
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setProdukList(list);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProduk();
  }, [fetchProduk]);

  return (
    <div className="produk-container">
      <h2 className="produk-title">📦 Daftar Produk</h2>

      {loading ? (
        <p>Memuat data produk...</p>
      ) : (
        <ul className="produk-list">
          {produkList.map((produk) => (
            <li key={produk.id} className="produk-item">
              <strong>{produk.nama}</strong><br />
              <span>Harga: Rp{produk.harga}</span><br />
              <span>Stok: {produk.stok}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KelolaProduk;
