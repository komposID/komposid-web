import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

// Buat context
const AuthContext = createContext();

// Provider context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pantau perubahan status login user
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const docRef = doc(db, 'users', firebaseUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUser({ uid: firebaseUser.uid, ...docSnap.data() });
          } else {
            setUser(null); // Tidak ditemukan di Firestore
          }
        } catch (error) {
          console.error('Gagal mengambil data user dari Firestore:', error.message);
          setUser(null);
        }
      } else {
        setUser(null); // Tidak ada user yang login
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Bersihkan listener saat unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk akses data user dari context
export const useAuth = () => useContext(AuthContext);

// Export context secara eksplisit untuk kebutuhan lainnya
export { AuthContext };
