// Firebase Configuration for ياسر للاتصالات - CDN Version
// إعدادات Firebase لمشروع ياسر للاتصالات - نسخة CDN
// مرتبط مع قاعدة البيانات: alsaab-9a1aa

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX6SGOZrP2Fs0bQug_H5mHdLwL2HLwxMg",
  authDomain: "alsaab-9a1aa.firebaseapp.com",
  projectId: "alsaab-9a1aa",
  storageBucket: "alsaab-9a1aa.firebasestorage.app",
  messagingSenderId: "287935376685",
  appId: "1:287935376685:web:c3b9d0d4cf93e85fff77a4",
  measurementId: "G-L2ZYLYZB2H"
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
console.log('✅ Connected to Firebase project: alsaab-9a1aa');
console.log('✅ Database ready for ياسر للاتصالات');
