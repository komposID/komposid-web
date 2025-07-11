// src/firebase.js

// === Import Firebase core & service ===
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

// === Konfigurasi Firebase ===
const firebaseConfig = {
  apiKey: "AIzaSyBzCXUqa8LT8J3dsgrTFhufQ7us4ksT1gI",
  authDomain: "komposid-3fc5b.firebaseapp.com",
  projectId: "komposid-3fc5b",
  storageBucket: "komposid-3fc5b.appspot.com",
  messagingSenderId: "299033658119",
  appId: "1:299033658119:web:ac8b3d720a7f5e6497bba2"
};

// === Inisialisasi Firebase ===
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// === Fungsi Login dengan Google + Sinkronisasi Firestore ===
export const signInWithGoogleAndSync = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    // Tambahkan ke Firestore jika belum ada
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        name: user.displayName || "Tanpa Nama",
        email: user.email,
        role: "pengguna", // default role
        createdAt: serverTimestamp(),
        photoURL: user.photoURL || "",
      });
    }

    return user;
  } catch (error) {
    console.error("Gagal login dengan Google:", error.message);
    throw error;
  }
};
