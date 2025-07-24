// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBMXoS49GWquF7u5nmoT_sZQ_x_m2Ziq9o",
    authDomain: "my-blog-b3d4b.firebaseapp.com",
    projectId: "my-blog-b3d4b",
    storageBucket: "my-blog-b3d4b.firebasestorage.app",
    messagingSenderId: "468906766766",
    appId: "1:468906766766:web:98378d087d1d7a1ce6d83f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);