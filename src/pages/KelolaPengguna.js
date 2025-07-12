// src/pages/KelolaPengguna.js
import React, { useEffect, useState } from 'react';
import './KelolaPengguna.css';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function KelolaPengguna() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(usersList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus akun ini?')) {
      await deleteDoc(doc(db, 'users', id));
      fetchUsers();
    }
  };

  const handleRoleChange = async (id, newRole) => {
    await updateDoc(doc(db, 'users', id), { role: newRole });
    fetchUsers();
  };

  return (
    <div className="pengguna-container">
      <h2>📋 Kelola Semua Pengguna</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Daftar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.createdAt?.toDate().toLocaleDateString()}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="mitra">Mitra</option>
                  <option value="investor">Investor</option>
                  <option value="pengguna">Pengguna</option>
                </select>
                <button onClick={() => handleDelete(user.id)}>🗑 Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KelolaPengguna;
