# دليل إعداد Firebase لمشروع ياسر للاتصالات

## خطوات التحقق من إعدادات Firebase

### 1. التحقق من المشروع في Firebase Console

1. اذهب إلى: https://console.firebase.google.com
2. اختر مشروع "ياسر للاتصالات"
3. تأكد من أن Project ID يطابق: `alsaab-9a1aa`

### 2. تفعيل الخدمات المطلوبة

#### أ) Firestore Database
1. اذهب إلى: Firestore Database
2. إذا لم يكن مفعلاً، اضغط "Create database"
3. اختر "Start in production mode" أو "Start in test mode"
4. اختر الموقع (يفضل: us-central1 أو europe-west1)

#### ب) Firebase Authentication
1. اذهب إلى: Authentication
2. اضغط "Get started"
3. في تبويب "Sign-in method"، فعّل:
   - Email/Password
   - (اختياري) Google

#### ج) Firebase Storage
1. اذهب إلى: Storage
2. اضغط "Get started"
3. اختر "Start in production mode" أو "Start in test mode"
4. اختر نفس موقع Firestore

#### د) Firebase Analytics
- يتم تفعيله تلقائياً عند إنشاء المشروع

### 3. الحصول على إعدادات Firebase

1. اذهب إلى: Project Settings (⚙️) → General
2. انتقل إلى قسم "Your apps"
3. إذا لم يكن هناك تطبيق ويب:
   - اضغط "Add app" → Web (</>)
   - أدخل اسم التطبيق: "ياسر للاتصالات"
   - (اختياري) فعّل Firebase Hosting
   - اضغط "Register app"
4. انسخ إعدادات Firebase (firebaseConfig)

### 4. تحديث إعدادات المشروع

إذا كانت إعدادات Firebase مختلفة، قم بتحديث الملفات التالية:
- `js/firebase-config.js`
- `js/firebase-config-cdn.js`

### 5. قواعد الأمان (Security Rules)

#### Firestore Rules
تأكد من وجود القواعد التالية في `firestore.rules`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // الهواتف
    match /phones/{phoneId} {
      allow read, write: if true; // أو قواعد أكثر أماناً
    }
    
    // الأكسسوارات
    match /accessories/{accessoryId} {
      allow read, write: if true;
    }
    
    // المبيعات
    match /sales/{saleId} {
      allow read, write: if true;
    }
    
    // أنواع الهواتف
    match /phone_types/{typeId} {
      allow read, write: if true;
    }
    
    // فئات الأكسسوارات
    match /accessory_categories/{categoryId} {
      allow read, write: if true;
    }
  }
}
```

#### Storage Rules
تأكد من وجود القواعد التالية في `storage.rules`:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true; // أو قواعد أكثر أماناً
    }
  }
}
```

### 6. نشر القواعد

إذا كنت تستخدم Firebase CLI:

```bash
firebase deploy --only firestore:rules,storage
```

### 7. اختبار الاتصال

1. افتح المشروع محلياً: http://localhost:8000
2. افتح Developer Console (F12)
3. تحقق من رسائل Firebase:
   - يجب أن ترى: "🔥 Firebase initialized successfully!"
   - يجب أن ترى: "📊 Firestore Database"
   - يجب أن ترى: "🔐 Authentication"
   - يجب أن ترى: "📦 Storage"

### 8. إنشاء البيانات الأولية

بعد التأكد من الاتصال، يمكنك:
1. إضافة أنواع الهواتف
2. إضافة فئات الأكسسوارات
3. إضافة منتجات تجريبية

---

## ملاحظات مهمة

- تأكد من أن جميع الخدمات مفعلة في Firebase Console
- تأكد من أن قواعد الأمان تسمح بالقراءة والكتابة (للاختبار)
- في الإنتاج، استخدم قواعد أمان أكثر صرامة
- احتفظ بنسخة احتياطية من إعدادات Firebase

