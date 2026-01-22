# تعليمات رفع المشروع إلى GitHub و Render

## الخطوة 1: إنشاء مستودع جديد على GitHub

### الطريقة الأولى: عبر GitHub Website

1. اذهب إلى: https://github.com/new
2. أدخل التفاصيل:
   - **Repository name**: `yasser-communications` (أو `ياسر-للإتصالات`)
   - **Description**: `ياسر للاتصالات - نظام إدارة متجر الجوالات`
   - **Visibility**: Public أو Private (حسب رغبتك)
   - **لا** تضع علامة على "Initialize this repository with a README"
3. اضغط "Create repository"

### الطريقة الثانية: عبر GitHub CLI (إذا كان مثبت)

```bash
gh repo create yasser-communications --public --description "ياسر للاتصالات - نظام إدارة متجر الجوالات"
```

## الخطوة 2: ربط المشروع بالمستودع الجديد

بعد إنشاء المستودع، قم بتنفيذ الأوامر التالية:

```bash
# تغيير remote إلى المستودع الجديد
git remote set-url origin https://github.com/YOUR_USERNAME/yasser-communications.git

# أو إذا كنت تستخدم SSH:
# git remote set-url origin git@github.com:YOUR_USERNAME/yasser-communications.git

# رفع الكود
git push -u origin main
```

**ملاحظة**: استبدل `YOUR_USERNAME` باسم المستخدم الخاص بك على GitHub

## الخطوة 3: رفع المشروع إلى Render

### 1. إنشاء Static Site على Render

1. اذهب إلى: https://dashboard.render.com
2. اضغط "New +" → "Static Site"
3. اختر "Build and deploy from a Git repository"
4. اختر المستودع: `yasser-communications`
5. أدخل الإعدادات:
   - **Name**: `yasser-communications`
   - **Branch**: `main`
   - **Root Directory**: `.` (فارغ)
   - **Build Command**: (اتركه فارغ)
   - **Publish Directory**: `.` (فارغ)

### 2. Environment Variables (اختياري)

إذا كنت تريد استخدام متغيرات البيئة:

```
NODE_ENV=production
APP_NAME=Yasser Communications
COMPANY_NAME=ياسر للاتصالات
```

### 3. Deploy

اضغط "Create Static Site" وانتظر حتى يكتمل النشر.

## ملاحظات مهمة

- تأكد من أن Firebase Storage مفعّل في مشروعك
- تأكد من أن قواعد Firestore و Storage منشورة
- بعد النشر، ستحصل على رابط مثل: `https://yasser-communications.onrender.com`

