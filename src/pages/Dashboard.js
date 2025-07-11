import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, role } = useAuth();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || role !== 'admin') {
      navigate('/');
    } else {
      fetchUsers();
    }
  }, [user, role, navigate]);

  const fetchUsers = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    } catch (error) {
      console.error('Gagal mengambil data user:', error);
    }
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      await updateDoc(doc(db, 'users', id), {
        role: newRole,
      });
      fetchUsers();
    } catch (error) {
      console.error('Gagal mengubah role:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Yakin ingin menghapus akun ini? Ini hanya menghapus dari Firestore, bukan dari Authentication.');
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, 'users', id));
      fetchUsers();
    } catch (error) {
      console.error('Gagal menghapus user:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👤 Daftar Pengguna KomposID</h2>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
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
                    value={u.role}
                    onChange={(e) => handleRoleChange(u.id, e.target.value)}
                  >
                    <option value="pengguna">pengguna</option>
                    <option value="mitra">mitra</option>
                    <option value="investor">investor</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleDelete(u.id)} style={styles.deleteBtn}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '100%',
    overflowX: 'auto',
  },
  title: {
    fontSize: '1.4rem',
    marginBottom: '20px',
    color: '#1b5e20',
    fontWeight: 'bold',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  deleteBtn: {
    backgroundColor: '#c62828',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Dashboard;
