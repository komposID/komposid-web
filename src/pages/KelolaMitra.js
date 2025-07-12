import React, { useEffect, useState, useCallback } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  where
} from 'firebase/firestore';
import './KelolaMitra.css';

function KelolaMitra() {
  const [mitraList, setMitraList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMitra = useCallback(async () => {
    try {
      const mitraQuery = query(collection(db, "users"), where("role", "==", "mitra"));
      const snapshot = await getDocs(mitraQuery);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMitraList(data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data mitra:", error);
      setLoading(false);
    }
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'aktif' ? 'nonaktif' : 'aktif';
    try {
      await updateDoc(doc(db, "users", id), {
        status: newStatus,
      });
      fetchMitra(); // refresh
    } catch (error) {
      console.error("Gagal mengubah status mitra:", error);
    }
  };

  useEffect(() => {
    fetchMitra();
  }, [fetchMitra]);

  return (
    <div className="mitra-container">
      <h2 className="mitra-title">👥 Manajemen Mitra Distribusi</h2>

      {loading ? (
        <p>Sedang memuat daftar mitra...</p>
      ) : (
        <table className="mitra-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Wilayah</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mitraList.map((mitra) => (
              <tr key={mitra.id}>
                <td>{mitra.name || '-'}</td>
                <td>{mitra.email}</td>
                <td>{mitra.wilayah || '-'}</td>
                <td>{mitra.status || 'aktif'}</td>
                <td>
                  <button
                    onClick={() => toggleStatus(mitra.id, mitra.status || 'aktif')}
                    className="toggle-btn"
                  >
                    {mitra.status === 'nonaktif' ? 'Aktifkan' : 'Nonaktifkan'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default KelolaMitra;
