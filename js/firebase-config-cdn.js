// Firebase Configuration for سليمان للاتصالات - CDN Version
// إعدادات Firebase لمشروع سليمان للاتصالات - نسخة CDN
// مرتبط مع قاعدة البيانات: alsaab-9a1aa

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
console.log('✅ Connected to Firebase project: suliman-18f0d');
console.log('✅ Database ready for سليمان للاتصالات');
