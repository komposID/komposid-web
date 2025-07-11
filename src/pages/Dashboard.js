import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import './Dashboard.css';

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
      <p className="dashboard-note">Kelola peran dan data pengguna KomposID</p>

      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>👤 Nama</th>
              <th>📧 Email</th>
              <th>🎯 Role</th>
              <th>⚙️ Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty">Belum ada pengguna.</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name || "-"}</td>
                  <td>{user.email}</td>
                  <td>
                    <select
                      value={user.role || "pengguna"}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      disabled={updatingId === user.id}
                    >
                      <option value="pengguna">Pengguna</option>
                      <option value="mitra">Mitra</option>
                      <option value="investor">Investor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user.id)} className="delete-btn">Hapus</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
