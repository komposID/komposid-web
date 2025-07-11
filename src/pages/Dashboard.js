import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import './Dashboard.css'; // ✅ Import CSS

const db = getFirestore();

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, 'users'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (id, newRole) => {
    setUpdatingId(id);
    try {
      await updateDoc(doc(db, 'users', id), { role: newRole });
      setUsers(users.map(user => (user.id === id ? { ...user, role: newRole } : user)));
    } catch (error) {
      alert('Gagal memperbarui peran: ' + error.message);
    }
    setUpdatingId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus pengguna ini?')) {
      try {
        await deleteDoc(doc(db, 'users', id));
        setUsers(users.filter(user => user.id !== id));
      } catch (error) {
        alert('Gagal menghapus: ' + error.message);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📋 Daftar Pengguna</h2>
      <p className="dashboard-note">Kelola role dan data pengguna dari sistem KomposID</p>

      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name || '-'}</td>
                <td>{u.email}</td>
                <td>
                  <select
                    value={u.role || 'pengguna'}
                    onChange={(e) => handleRoleChange(u.id, e.target.value)}
                    disabled={updatingId === u.id}
                  >
                    <option value="pengguna">Pengguna</option>
                    <option value="mitra">Mitra</option>
                    <option value="investor">Investor</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="delete-btn"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>Tidak ada pengguna.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
