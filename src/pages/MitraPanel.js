import React, { useEffect, useState } from 'react';
import './MitraPanel.css';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

function MitraPanel() {
  const [distribusiList, setDistribusiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, role } = useAuth();

  useEffect(() => {
    const fetchDistribusi = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'distribusi'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Filter: hanya distribusi milik mitra ini
        const filtered = data.filter((item) => item.mitra_uid === user.uid);
        setDistribusiList(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Gagal mengambil data distribusi:', error);
      }
    };

    if (user && role === 'mitra') {
      fetchDistribusi();
    }
  }, [user, role]);

  const updateStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'distribusi', id), { status_distribusi: newStatus });
      setDistribusiList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status_distribusi: newStatus } : item
        )
      );
    } catch (error) {
      alert('Gagal memperbarui status');
    }
  };

  if (loading) return <p>Memuat data distribusi...</p>;

  return (
    <div className="mitra-container">
      <h2>📦 Panel Mitra Distribusi</h2>
      {distribusiList.length === 0 ? (
        <p>Belum ada tugas distribusi.</p>
      ) : (
        distribusiList.map((item) => (
          <div key={item.id} className="mitra-card">
            <p><strong>Produk:</strong> {item.nama_produk}</p>
            <p><strong>Jumlah:</strong> {item.kuantitas}</p>
            <p><strong>Tujuan:</strong> {item.tujuan_pengiriman}</p>
            <p><strong>Status:</strong> {item.status_distribusi}</p>
            <select
              value={item.status_distribusi}
              onChange={(e) => updateStatus(item.id, e.target.value)}
            >
              <option value="menunggu">Menunggu</option>
              <option value="diproses">Diproses</option>
              <option value="dikirim">Dikirim</option>
              <option value="selesai">Selesai</option>
            </select>
          </div>
        ))
      )}
    </div>
  );
}

export default MitraPanel;
