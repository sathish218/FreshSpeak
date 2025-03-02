// fireBase.js (Only Firebase logic)
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3-XMIrI8psQvO0GGbZr2naW23ZDkZg98",
  authDomain: "fresh-speak.firebaseapp.com",
  projectId: "fresh-speak",
  storageBucket: "fresh-speak.firebasestorage.app",
  messagingSenderId: "1020146312756",
  appId: "1:1020146312756:web:255890a29c218162610c61",
  measurementId: "G-71Y1G103FB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { auth };
