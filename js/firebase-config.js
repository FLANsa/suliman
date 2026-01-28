// Firebase Configuration for Phone Store Demo
// إعدادات Firebase للمستودع الجديد

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-wt81KIvVCLgC2wBf7YiSfCFYPYJGYlc",
  authDomain: "suliman-18f0d.firebaseapp.com",
  projectId: "suliman-18f0d",
  storageBucket: "suliman-18f0d.firebasestorage.app",
  messagingSenderId: "526420501789",
  appId: "1:526420501789:web:e907e054c41e9ac5e8edf4",
  measurementId: "G-BZX4S1R6Z9"
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// تصدير الخدمات للاستخدام في الملفات الأخرى
window.firebaseApp = app;
window.firebaseDB = db;
window.firebaseAuth = auth;
window.firebaseStorage = storage;
window.firebaseAnalytics = analytics;

console.log('🔥 Firebase initialized successfully!');
console.log('📊 Firestore Database:', db);
console.log('🔐 Authentication:', auth);
console.log('📦 Storage:', storage);
console.log('📈 Analytics:', analytics);
