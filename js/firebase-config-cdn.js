// Firebase Configuration for Phone Store Demo - CDN Version
// إعدادات Firebase للمستودع الجديد - نسخة CDN

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALjSQ2TqrwCMHEz8DLfhBohdbUgqR04Lk",
  authDomain: "ostora-aldhhabi.firebaseapp.com",
  projectId: "ostora-aldhhabi",
  storageBucket: "ostora-aldhhabi.firebasestorage.app",
  messagingSenderId: "943553442606",
  appId: "1:943553442606:web:250a0325b89b9f5b5600bf",
  measurementId: "G-04HHQ5JEJE"
};

// Import the functions you need from the SDKs you need (CDN version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

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
