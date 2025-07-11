// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // data dari Firestore
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUserData(data);
        setRole(data.role || 'pengguna');
      } else {
        setUserData(null);
        setRole('pengguna');
      }
    } catch (err) {
      console.error("Gagal ambil data user:", err);
      setUserData(null);
      setRole('pengguna');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        await fetchUserData(firebaseUser.uid);
      } else {
        setUser(null);
        setUserData(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, userData, role, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
