# مهند للاتصالات - Environment Variables
# متغيرات البيئة لنظام إدارة متجر الجوالات

# Firebase Configuration
FIREBASE_API_KEY=AIzaSyB-wt81KIvVCLgC2wBf7YiSfCFYPYJGYlc
FIREBASE_AUTH_DOMAIN=suliman-18f0d.firebaseapp.com
FIREBASE_PROJECT_ID=suliman-18f0d
FIREBASE_STORAGE_BUCKET=suliman-18f0d.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=526420501789
FIREBASE_APP_ID=1:526420501789:web:e907e054c41e9ac5e8edf4
FIREBASE_MEASUREMENT_ID=G-BZX4S1R6Z9

# Application Settings
NODE_ENV=production
APP_NAME=Mohannad Communications
APP_VERSION=2.0.0
APP_DESCRIPTION=نظام إدارة متجر الجوالات

# Company Information
COMPANY_NAME=مهند للاتصالات
COMPANY_NAME_EN=Mohannad Communications
COMPANY_ADDRESS=الرياض، المملكة العربية السعودية
COMPANY_PHONE=0557457612
COMPANY_EMAIL=support@mohannad-communications.com

# Database Settings
DATABASE_TYPE=firestore
DATABASE_COLLECTION_PHONES=phones
DATABASE_COLLECTION_ACCESSORIES=accessories
DATABASE_COLLECTION_SALES=sales
DATABASE_COLLECTION_PHONE_TYPES=phone_types

# Security Settings
JWT_SECRET=aldhahbi-secret-key-2025
SESSION_SECRET=aldhahbi-session-secret
ENCRYPTION_KEY=aldhahbi-encryption-key


# File Upload Settings
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=jpg,jpeg,png,gif,pdf
UPLOAD_PATH=uploads/

# Email Settings (if needed)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Logging Settings
LOG_LEVEL=info
LOG_FILE=logs/app.log

# Cache Settings
CACHE_TTL=3600
CACHE_MAX_SIZE=100

# Rate Limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX_REQUESTS=100

# Development Settings
DEBUG=false
HOT_RELOAD=false
