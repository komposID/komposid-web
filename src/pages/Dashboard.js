// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getDocs, collection, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';
import { db, auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil semua user dari Firestore
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const userList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setUsers(userList);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Update role user
  const handleRoleChange = async (uid, newRole) => {
    await updateDoc(doc(db, 'users', uid), { role: newRole });
    fetchUsers();
  };

  // Hapus akun dari Firestore + Firebase Auth
  const handleDelete = async (uid) => {
    if (uid === user.uid) {
      alert("Kamu tidak bisa hapus akun sendiri.");
      return;
    }

    if (!window.confirm("Yakin ingin menghapus akun ini?")) return;

    try {
      // Hapus dari Firestore
      await deleteDoc(doc(db, 'users', uid));

      // Hapus dari Authentication
      const targetUser = await auth.getUser(uid); // hanya bisa di Firebase Admin SDK
      await deleteUser(targetUser); // ini gagal jika bukan pakai Admin SDK

      alert("Akun berhasil dihapus.");
      fetchUsers();
    } catch (error) {
      alert("Gagal hapus akun: " + error.message);
    }
  };

  if (loading) return <div>Loading pengguna...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Daftar Pengguna</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
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
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <select value={u.role} onChange={(e) => handleRoleChange(u.id, e.target.value)}>
                  <option value="pengguna">pengguna</option>
                  <option value="mitra">mitra</option>
                  <option value="investor">investor</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleDelete(u.id)} style={{ color: 'red' }}>🗑 Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
