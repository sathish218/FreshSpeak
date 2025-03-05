import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3-XMIrI8psQvO0GGbZr2naW23ZDkZg98",
  authDomain: "fresh-speak.firebaseapp.com",
  projectId: "fresh-speak",
  storageBucket: "fresh-speak.firebasestorage.app",
  messagingSenderId: "1020146312756",
  appId: "1:1020146312756:web:255890a29c218162610c61",
  measurementId: "G-71Y1G103FB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// ✅ Email/Password Signup Function (UPDATED: Now stores user name)
export const signUpWithEmail = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Set display name for the user
    await updateProfile(user, { displayName: name });

    console.log("User Signed Up:", user);
    return user;
  } catch (error) {
    console.error("Signup Error:", error);
  }
};

// ✅ Email/Password Sign-In Function
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User Signed In:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Sign-In Error:", error);
  }
};

// ✅ Logout Function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { auth };
