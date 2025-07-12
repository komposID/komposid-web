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
import './KelolaInvestor.css';

function KelolaInvestor() {
  const [investorList, setInvestorList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInvestor = useCallback(async () => {
    try {
      const investorQuery = query(collection(db, "users"), where("role", "==", "investor"));
      const snapshot = await getDocs(investorQuery);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInvestorList(data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data investor:", error);
      setLoading(false);
    }
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'aktif' ? 'nonaktif' : 'aktif';
    try {
      await updateDoc(doc(db, "users", id), {
        status: newStatus,
      });
      fetchInvestor(); // refresh
    } catch (error) {
      console.error("Gagal mengubah status investor:", error);
    }
  };

  useEffect(() => {
    fetchInvestor();
  }, [fetchInvestor]);

  return (
    <div className="investor-container">
      <h2 className="investor-title">💰 Manajemen Investor</h2>

      {loading ? (
        <p>Sedang memuat data investor...</p>
      ) : (
        <table className="investor-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Total Investasi</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {investorList.map((investor) => (
              <tr key={investor.id}>
                <td>{investor.name || '-'}</td>
                <td>{investor.email}</td>
                <td>Rp {investor.totalInvestasi?.toLocaleString('id-ID') || '0'}</td>
                <td>{investor.status || 'aktif'}</td>
                <td>
                  <button
                    onClick={() => toggleStatus(investor.id, investor.status || 'aktif')}
                    className="toggle-btn"
                  >
                    {investor.status === 'nonaktif' ? 'Aktifkan' : 'Nonaktifkan'}
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

export default KelolaInvestor;
