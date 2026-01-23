// Firebase Database Manager for ياسر للاتصالات - CDN Version
// مرتبط مع قاعدة البيانات Firebase: alsaab-9a1aa
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy,
  onSnapshot,
  serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

class FirebaseDatabase {
  constructor() {
    // استخدام قاعدة البيانات المربوطة من firebase-config-cdn.js
    // قاعدة البيانات: alsaab-9a1aa
    this.db = window.firebaseDB;
    this.auth = window.firebaseAuth;
    
    if (!this.db) {
      console.error('❌ Firebase Database not initialized! Make sure firebase-config-cdn.js is loaded first.');
    } else {
      console.log('✅ Firebase Database Manager connected to: alsaab-9a1aa');
    }
  }

  // ===== إدارة الهواتف =====
  async addPhone(phoneData) {
    try {
      const docRef = await addDoc(collection(this.db, 'phones'), {
        ...phoneData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Phone added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding phone:', error);
      throw error;
    }
  }

  async getPhones() {
    try {
      const phonesSnapshot = await getDocs(collection(this.db, 'phones'));
      const phones = [];
      phonesSnapshot.forEach((doc) => {
        phones.push({ id: doc.id, ...doc.data() });
      });
      console.log('📱 Retrieved phones:', phones.length);
      return phones;
    } catch (error) {
      console.error('❌ Error getting phones:', error);
      throw error;
    }
  }

  async updatePhone(phoneId, phoneData) {
    try {
      await updateDoc(doc(this.db, 'phones', phoneId), {
        ...phoneData,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Phone updated:', phoneId);
    } catch (error) {
      console.error('❌ Error updating phone:', error);
      throw error;
    }
  }

  async deletePhone(phoneId) {
    try {
      await deleteDoc(doc(this.db, 'phones', phoneId));
      console.log('✅ Phone deleted:', phoneId);
    } catch (error) {
      console.error('❌ Error deleting phone:', error);
      throw error;
    }
  }

  // ===== إدارة الأكسسوارات =====
  async addAccessory(accessoryData) {
    try {
      console.log('🔥 Firebase: محاولة إضافة أكسسوار:', accessoryData);
      
      const docRef = await addDoc(collection(this.db, 'accessories'), {
        ...accessoryData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      console.log('✅ Firebase: تم إضافة الأكسسوار بنجاح! ID:', docRef.id);
      console.log('📂 Firebase: الفئة المحفوظة:', accessoryData.category);
      return docRef.id;
    } catch (error) {
      console.error('❌ Firebase: خطأ في إضافة الأكسسوار:', error);
      throw error;
    }
  }

  async getAccessories() {
    try {
      const accessoriesSnapshot = await getDocs(collection(this.db, 'accessories'));
      const accessories = [];
      accessoriesSnapshot.forEach((doc) => {
        accessories.push({ id: doc.id, ...doc.data() });
      });
      console.log('🛍️ Retrieved accessories:', accessories.length);
      return accessories;
    } catch (error) {
      console.error('❌ Error getting accessories:', error);
      throw error;
    }
  }

  async updateAccessory(accessoryId, accessoryData) {
    try {
      await updateDoc(doc(this.db, 'accessories', accessoryId), {
        ...accessoryData,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Accessory updated:', accessoryId);
    } catch (error) {
      console.error('❌ Error updating accessory:', error);
      throw error;
    }
  }

  async deleteAccessory(accessoryId) {
    try {
      await deleteDoc(doc(this.db, 'accessories', accessoryId));
      console.log('✅ Accessory deleted:', accessoryId);
    } catch (error) {
      console.error('❌ Error deleting accessory:', error);
      throw error;
    }
  }

  // ===== إدارة المبيعات =====
  async addSale(saleData) {
    try {
      const docRef = await addDoc(collection(this.db, 'sales'), {
        ...saleData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Sale added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding sale:', error);
      throw error;
    }
  }

  async getSales() {
    try {
      const salesSnapshot = await getDocs(
        query(collection(this.db, 'sales'), orderBy('createdAt', 'desc'))
      );
      const sales = [];
      salesSnapshot.forEach((doc) => {
        sales.push({ id: doc.id, ...doc.data() });
      });
      console.log('💰 Retrieved sales:', sales.length);
      return sales;
    } catch (error) {
      console.error('❌ Error getting sales:', error);
      throw error;
    }
  }

  async getSale(saleId) {
    try {
      const saleDoc = await getDoc(doc(this.db, 'sales', saleId));
      if (saleDoc.exists()) {
        return { id: saleDoc.id, ...saleDoc.data() };
      }
      return null;
    } catch (error) {
      console.error('❌ Error getting sale:', error);
      throw error;
    }
  }

  async updateSale(saleId, saleData) {
    try {
      await updateDoc(doc(this.db, 'sales', saleId), {
        ...saleData,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Sale updated:', saleId);
    } catch (error) {
      console.error('❌ Error updating sale:', error);
      throw error;
    }
  }

  async deleteSale(saleId) {
    try {
      await deleteDoc(doc(this.db, 'sales', saleId));
      console.log('✅ Sale deleted:', saleId);
    } catch (error) {
      console.error('❌ Error deleting sale:', error);
      throw error;
    }
  }

  // ===== إدارة فئات الأكسسوارات =====
  async addAccessoryCategory(categoryData) {
    try {
      const docRef = await addDoc(collection(this.db, 'accessory_categories'), {
        ...categoryData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Category added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding category:', error);
      throw error;
    }
  }

  async getAccessoryCategories() {
    try {
      const categoriesSnapshot = await getDocs(collection(this.db, 'accessory_categories'));
      const categories = [];
      categoriesSnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() });
      });
      console.log('📂 Retrieved categories:', categories.length);
      return categories;
    } catch (error) {
      console.error('❌ Error getting categories:', error);
      throw error;
    }
  }

  async deleteAccessoryCategory(categoryName) {
    try {
      const categoriesSnapshot = await getDocs(
        query(collection(this.db, 'accessory_categories'), 
              where('arabic_name', '==', categoryName))
      );
      
      const deletePromises = [];
      categoriesSnapshot.forEach((doc) => {
        deletePromises.push(deleteDoc(doc.ref));
      });
      
      await Promise.all(deletePromises);
      console.log('✅ Accessory category deleted:', categoryName);
      return true;
    } catch (error) {
      console.error('❌ Error deleting accessory category:', error);
      throw error;
    }
  }

  // ===== إدارة أنواع الهواتف =====
  async addPhoneType(phoneTypeData) {
    try {
      const docRef = await addDoc(collection(this.db, 'phone_types'), {
        ...phoneTypeData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Phone type added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding phone type:', error);
      throw error;
    }
  }

  async getPhoneTypes() {
    try {
      const phoneTypesSnapshot = await getDocs(collection(this.db, 'phone_types'));
      const phoneTypes = [];
      phoneTypesSnapshot.forEach((doc) => {
        phoneTypes.push({ id: doc.id, ...doc.data() });
      });
      console.log('📱 Retrieved phone types:', phoneTypes.length);
      return phoneTypes;
    } catch (error) {
      console.error('❌ Error getting phone types:', error);
      throw error;
    }
  }

  async deletePhoneType(brand, model) {
    try {
      const phoneTypesSnapshot = await getDocs(
        query(collection(this.db, 'phone_types'), 
              where('brand', '==', brand), 
              where('model', '==', model))
      );
      
      const deletePromises = [];
      phoneTypesSnapshot.forEach((doc) => {
        deletePromises.push(deleteDoc(doc.ref));
      });
      
      await Promise.all(deletePromises);
      console.log('✅ Phone type deleted:', brand, model);
      return true;
    } catch (error) {
      console.error('❌ Error deleting phone type:', error);
      throw error;
    }
  }

  // ===== البحث =====
  async searchPhones(searchTerm) {
    try {
      const phones = await this.getPhones();
      const filteredPhones = phones.filter(phone => {
        const searchFields = [
          phone.phone_number,
          phone.serial_number,
          phone.brand,
          phone.model,
          phone.phone_color,
          phone.phone_memory,
          phone.description,
          phone.customer_name,
          phone.customer_id
        ];
        
        return searchFields.some(field => 
          field && field.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      console.log('🔍 Search results for phones:', filteredPhones.length);
      return filteredPhones;
    } catch (error) {
      console.error('❌ Error searching phones:', error);
      throw error;
    }
  }

  async searchAccessories(searchTerm) {
    try {
      const accessories = await this.getAccessories();
      const filteredAccessories = accessories.filter(accessory => {
        const searchFields = [
          accessory.name,
          accessory.category,
          accessory.description,
          accessory.supplier,
          accessory.notes
        ];
        
        return searchFields.some(field => 
          field && field.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      console.log('🔍 Search results for accessories:', filteredAccessories.length);
      return filteredAccessories;
    } catch (error) {
      console.error('❌ Error searching accessories:', error);
      throw error;
    }
  }

  // ===== الاستماع للتغييرات في الوقت الفعلي =====
  onPhonesChange(callback) {
    return onSnapshot(collection(this.db, 'phones'), (snapshot) => {
      const phones = [];
      snapshot.forEach((doc) => {
        phones.push({ id: doc.id, ...doc.data() });
      });
      callback(phones);
    });
  }

  onAccessoriesChange(callback) {
    return onSnapshot(collection(this.db, 'accessories'), (snapshot) => {
      const accessories = [];
      snapshot.forEach((doc) => {
        accessories.push({ id: doc.id, ...doc.data() });
      });
      callback(accessories);
    });
  }

  onSalesChange(callback) {
    return onSnapshot(
      query(collection(this.db, 'sales'), orderBy('createdAt', 'desc')), 
      (snapshot) => {
        const sales = [];
        snapshot.forEach((doc) => {
          sales.push({ id: doc.id, ...doc.data() });
        });
        callback(sales);
      }
    );
  }

  // ===== نظام الصيانة =====
  
  // ===== إدارة المندوبين =====
  async addRep(repData) {
    try {
      const docRef = await addDoc(collection(this.db, 'reps'), {
        ...repData,
        active: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Rep added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding rep:', error);
      throw error;
    }
  }

  async getReps() {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'reps'));
      const reps = [];
      querySnapshot.forEach(doc => {
        reps.push({ id: doc.id, ...doc.data() });
      });
      console.log('✅ Reps loaded:', reps.length);
      return reps;
    } catch (error) {
      console.error('❌ Error getting reps:', error);
      throw error;
    }
  }

  async updateRep(repId, repData) {
    try {
      const repRef = doc(this.db, 'reps', repId);
      await updateDoc(repRef, {
        ...repData,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Rep updated:', repId);
    } catch (error) {
      console.error('❌ Error updating rep:', error);
      throw error;
    }
  }

  async deleteRep(repId) {
    try {
      const repRef = doc(this.db, 'reps', repId);
      await deleteDoc(repRef);
      console.log('✅ Rep deleted:', repId);
    } catch (error) {
      console.error('❌ Error deleting rep:', error);
      throw error;
    }
  }

  // ===== إدارة الفنيين =====
  async addTechnician(techData) {
    try {
      const docRef = await addDoc(collection(this.db, 'technicians'), {
        ...techData,
        active: true,
        defaultCommissionPercent: techData.defaultCommissionPercent || 0.5,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Technician added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding technician:', error);
      throw error;
    }
  }

  async getTechnicians() {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'technicians'));
      const technicians = [];
      querySnapshot.forEach(doc => {
        technicians.push({ id: doc.id, ...doc.data() });
      });
      console.log('✅ Technicians loaded:', technicians.length);
      return technicians;
    } catch (error) {
      console.error('❌ Error getting technicians:', error);
      throw error;
    }
  }

  async updateTechnician(techId, techData) {
    try {
      const techRef = doc(this.db, 'technicians', techId);
      await updateDoc(techRef, {
        ...techData,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Technician updated:', techId);
    } catch (error) {
      console.error('❌ Error updating technician:', error);
      throw error;
    }
  }

  async deleteTechnician(techId) {
    try {
      const techRef = doc(this.db, 'technicians', techId);
      await deleteDoc(techRef);
      console.log('✅ Technician deleted:', techId);
    } catch (error) {
      console.error('❌ Error deleting technician:', error);
      throw error;
    }
  }

  // ===== أعمال الصيانة =====
  async addMaintenanceJob(jobData) {
    try {
      // ✅ حساب الأرباح باستخدام الدالة الموحدة
      const { profit, techCommission, shopProfit } = this.computeDerived(
        jobData.partCost, 
        jobData.amountCharged, 
        jobData.techPercent !== undefined ? jobData.techPercent : 0
      );

      const docRef = await addDoc(collection(this.db, 'maintenanceJobs'), {
        ...jobData,
        profit,
        techCommission,
        shopProfit,
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Maintenance job added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding maintenance job:', error);
      throw error;
    }
  }

  async getMaintenanceJobs(filters = {}) {
    try {
      let q = collection(this.db, 'maintenanceJobs');
      
      // إذا كان هناك status و date range معاً، نحاول الاستعلام معاً أولاً
      // وإذا فشل بسبب عدم وجود فهرس، نستخدم حل بديل
      const hasStatusAndDateRange = filters.status && (filters.dateFrom || filters.dateTo);
      
      if (hasStatusAndDateRange) {
        try {
          // محاولة الاستعلام الكامل مع الفهرس
          // ملاحظة: لا نستخدم repId في Firebase query لأن البحث يجب أن يشمل parts[]
          if (filters.status) {
            q = query(q, where('status', '==', filters.status));
          }
          
          if (filters.techId) {
            q = query(q, where('techId', '==', filters.techId));
          }
          
          if (filters.dateFrom) {
            q = query(q, where('visitDate', '>=', filters.dateFrom));
          }
          
          if (filters.dateTo) {
            q = query(q, where('visitDate', '<=', filters.dateTo));
          }

          const querySnapshot = await getDocs(q);
          let jobs = [];
          querySnapshot.forEach(doc => {
            jobs.push({ id: doc.id, ...doc.data() });
          });
          
          // فلترة المندوب يدوياً (للبحث في parts[] أيضاً)
          if (filters.repId) {
            jobs = jobs.filter(job => {
              if (job.repId === filters.repId) return true;
              if (job.parts && Array.isArray(job.parts)) {
                return job.parts.some(part => part.repId === filters.repId);
              }
              return false;
            });
          }
          
          // ترتيب النتائج يدوياً دائماً
          jobs.sort((a, b) => {
            const dateA = a.visitDate?.seconds ? new Date(a.visitDate.seconds * 1000) : new Date(a.visitDate);
            const dateB = b.visitDate?.seconds ? new Date(b.visitDate.seconds * 1000) : new Date(b.visitDate);
            return dateB - dateA; // ترتيب تنازلي
          });
          
          console.log('✅ Maintenance jobs loaded:', jobs.length);
          return jobs;
        } catch (indexError) {
          // إذا فشل بسبب عدم وجود فهرس، نستخدم حل بديل
          if (indexError.code === 'failed-precondition' || indexError.message.includes('index')) {
            console.warn('⚠️ Index not ready, using fallback query method');
            
            // الحل البديل: جلب جميع الوظائف بالحالة المطلوبة ثم تصفية يدوياً
            let fallbackQuery = collection(this.db, 'maintenanceJobs');
            if (filters.status) {
              fallbackQuery = query(fallbackQuery, where('status', '==', filters.status));
            }
            
            const fallbackSnapshot = await getDocs(fallbackQuery);
            const allJobs = [];
            fallbackSnapshot.forEach(doc => {
              allJobs.push({ id: doc.id, ...doc.data() });
            });
            
            // تصفية يدوياً حسب النطاق الزمني
            let filteredJobs = allJobs;
            
            if (filters.dateFrom) {
              const dateFrom = filters.dateFrom instanceof Date ? filters.dateFrom : new Date(filters.dateFrom);
              filteredJobs = filteredJobs.filter(job => {
                const jobDate = job.visitDate?.seconds ? new Date(job.visitDate.seconds * 1000) : new Date(job.visitDate);
                return jobDate >= dateFrom;
              });
            }
            
            if (filters.dateTo) {
              const dateTo = filters.dateTo instanceof Date ? filters.dateTo : new Date(filters.dateTo);
              filteredJobs = filteredJobs.filter(job => {
                const jobDate = job.visitDate?.seconds ? new Date(job.visitDate.seconds * 1000) : new Date(job.visitDate);
                return jobDate <= dateTo;
              });
            }
            
            if (filters.repId) {
              filteredJobs = filteredJobs.filter(job => {
                // البحث في الهيكل القديم (repId)
                if (job.repId === filters.repId) return true;
                // البحث في الهيكل الجديد (parts[].repId)
                if (job.parts && Array.isArray(job.parts)) {
                  return job.parts.some(part => part.repId === filters.repId);
                }
                return false;
              });
            }
            
            if (filters.techId) {
              filteredJobs = filteredJobs.filter(job => job.techId === filters.techId);
            }
            
            // ترتيب النتائج يدوياً
            filteredJobs.sort((a, b) => {
              const dateA = a.visitDate?.seconds ? new Date(a.visitDate.seconds * 1000) : new Date(a.visitDate);
              const dateB = b.visitDate?.seconds ? new Date(b.visitDate.seconds * 1000) : new Date(b.visitDate);
              return dateB - dateA; // ترتيب تنازلي
            });
            
            console.log('✅ Maintenance jobs loaded (fallback method):', filteredJobs.length);
            return filteredJobs;
          }
          throw indexError;
        }
      } else {
        // استعلام عادي بدون فهرس معقد
        // ملاحظة: لا نستخدم repId في Firebase query لأن البحث يجب أن يشمل parts[]
        if (filters.status) {
          q = query(q, where('status', '==', filters.status));
        }
        
        if (filters.techId) {
          q = query(q, where('techId', '==', filters.techId));
        }
        
        if (filters.dateFrom) {
          q = query(q, where('visitDate', '>=', filters.dateFrom));
        }
        
        if (filters.dateTo) {
          q = query(q, where('visitDate', '<=', filters.dateTo));
        }

        const querySnapshot = await getDocs(q);
        let jobs = [];
        querySnapshot.forEach(doc => {
          jobs.push({ id: doc.id, ...doc.data() });
        });
        
        // فلترة المندوب يدوياً (للبحث في parts[] أيضاً)
        if (filters.repId) {
          jobs = jobs.filter(job => {
            if (job.repId === filters.repId) return true;
            if (job.parts && Array.isArray(job.parts)) {
              return job.parts.some(part => part.repId === filters.repId);
            }
            return false;
          });
        }
        
        // ترتيب النتائج يدوياً دائماً
        jobs.sort((a, b) => {
          const dateA = a.visitDate?.seconds ? new Date(a.visitDate.seconds * 1000) : new Date(a.visitDate);
          const dateB = b.visitDate?.seconds ? new Date(b.visitDate.seconds * 1000) : new Date(b.visitDate);
          return dateB - dateA; // ترتيب تنازلي
        });
        
        console.log('✅ Maintenance jobs loaded:', jobs.length);
        return jobs;
      }
    } catch (error) {
      console.error('❌ Error getting maintenance jobs:', error);
      throw error;
    }
  }

  async updateMaintenanceJob(jobId, jobData) {
    try {
      // ✅ إعادة حساب الأرباح إذا تغيرت القيم باستخدام الدالة الموحدة
      if (jobData.partCost !== undefined || jobData.amountCharged !== undefined || jobData.techPercent !== undefined) {
        const currentJob = await this.getMaintenanceJob(jobId);
        const partCost = jobData.partCost !== undefined ? jobData.partCost : currentJob.partCost;
        const amountCharged = jobData.amountCharged !== undefined ? jobData.amountCharged : currentJob.amountCharged;
        const techPercent = jobData.techPercent !== undefined ? jobData.techPercent : currentJob.techPercent;
        
        const { profit, techCommission, shopProfit } = this.computeDerived(partCost, amountCharged, techPercent);
        
        jobData.profit = profit;
        jobData.techCommission = techCommission;
        jobData.shopProfit = shopProfit;
      }

      const jobRef = doc(this.db, 'maintenanceJobs', jobId);
      await updateDoc(jobRef, {
        ...jobData,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Maintenance job updated:', jobId);
    } catch (error) {
      console.error('❌ Error updating maintenance job:', error);
      throw error;
    }
  }

  async getMaintenanceJob(jobId) {
    try {
      const jobRef = doc(this.db, 'maintenanceJobs', jobId);
      const jobSnap = await getDoc(jobRef);
      if (jobSnap.exists()) {
        return { id: jobSnap.id, ...jobSnap.data() };
      } else {
        throw new Error('Job not found');
      }
    } catch (error) {
      console.error('❌ Error getting maintenance job:', error);
      throw error;
    }
  }

  async deleteMaintenanceJob(jobId) {
    try {
      const jobRef = doc(this.db, 'maintenanceJobs', jobId);
      await deleteDoc(jobRef);
      console.log('✅ Maintenance job deleted:', jobId);
    } catch (error) {
      console.error('❌ Error deleting maintenance job:', error);
      throw error;
    }
  }

  // ===== التسويات =====
  async createSettlement(settlementData) {
    try {
      const docRef = await addDoc(collection(this.db, 'settlements'), {
        ...settlementData,
        status: 'open',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Settlement created with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error creating settlement:', error);
      throw error;
    }
  }

  async getSettlements(filters = {}) {
    try {
      let query = collection(this.db, 'settlements');
      
      if (filters.type) {
        query = query(query, where('type', '==', filters.type));
      }
      
      if (filters.status) {
        query = query(query, where('status', '==', filters.status));
      }

      const querySnapshot = await getDocs(query);
      const settlements = [];
      querySnapshot.forEach(doc => {
        settlements.push({ id: doc.id, ...doc.data() });
      });
      
      console.log('✅ Settlements loaded:', settlements.length);
      return settlements;
    } catch (error) {
      console.error('❌ Error getting settlements:', error);
      throw error;
    }
  }

  async markSettlementPaid(settlementId, notes = '') {
    try {
      const settlementRef = doc(this.db, 'settlements', settlementId);
      await updateDoc(settlementRef, {
        status: 'paid',
        paidAt: serverTimestamp(),
        notes,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Settlement marked as paid:', settlementId);
    } catch (error) {
      console.error('❌ Error marking settlement as paid:', error);
      throw error;
    }
  }

  // ===== دوال الحساب =====
  // ✅ دالة موحّدة لحساب القيم المشتقة
  computeDerived(partCost, amountCharged, techPercent) {
    const pc = Number(partCost) || 0;
    const ac = Number(amountCharged) || 0;
    const tp = (typeof techPercent === 'number' && !isNaN(techPercent)) ? techPercent : 0; // افتراضي 0%
    const profit = ac - pc;                                // الربح الإجمالي
    const techCommission = Math.max(0, profit * tp);       // عمولة الفني
    const shopProfit = profit - techCommission;            // أرباح المحل
    return { profit, techCommission, shopProfit };
  }

  // دوال منفصلة للتوافق مع الكود القديم
  calcProfit(partCost, amountCharged) {
    return Math.max(0, Number((amountCharged - partCost).toFixed(2)));
  }

  calcTechCommission(profit, percent) {
    return Number((profit * percent).toFixed(2));
  }

  calcShopProfit(profit, techCommission) {
    return Number((profit - techCommission).toFixed(2));
  }

  // ===== إدارة المدفوعات =====
  async addPayment(paymentData) {
    try {
      const docRef = await addDoc(collection(this.db, 'payments'), {
        ...paymentData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      console.log('✅ Payment added with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error adding payment:', error);
      throw error;
    }
  }

  async getPayments(filters = {}) {
    try {
      let q = collection(this.db, 'payments');
      
      if (filters.dateFrom) {
        q = query(q, where('paymentDate', '>=', filters.dateFrom));
      }
      
      if (filters.dateTo) {
        q = query(q, where('paymentDate', '<=', filters.dateTo));
      }
      
      if (filters.entityType) {
        q = query(q, where('entityType', '==', filters.entityType));
      }
      
      if (filters.entityId) {
        q = query(q, where('entityId', '==', filters.entityId));
      }
      
      q = query(q, orderBy('paymentDate', 'desc'));

      const querySnapshot = await getDocs(q);
      const payments = [];
      querySnapshot.forEach(doc => {
        payments.push({ id: doc.id, ...doc.data() });
      });
      
      console.log('✅ Payments loaded:', payments.length);
      return payments;
    } catch (error) {
      console.error('❌ Error getting payments:', error);
      throw error;
    }
  }

  async updatePayment(paymentId, paymentData) {
    try {
      const paymentRef = doc(this.db, 'payments', paymentId);
      await updateDoc(paymentRef, {
        ...paymentData,
        updatedAt: serverTimestamp()
      });
      console.log('✅ Payment updated:', paymentId);
    } catch (error) {
      console.error('❌ Error updating payment:', error);
      throw error;
    }
  }

  async deletePayment(paymentId) {
    try {
      const paymentRef = doc(this.db, 'payments', paymentId);
      await deleteDoc(paymentRef);
      console.log('✅ Payment deleted:', paymentId);
    } catch (error) {
      console.error('❌ Error deleting payment:', error);
      throw error;
    }
  }

  // ===== تقارير التسويات =====
  async getRepSettlements(dateFrom, dateTo, statusFilter = null) {
    try {
      console.log('🔍 Getting rep settlements from', dateFrom, 'to', dateTo, 'status:', statusFilter);
      
      // إذا لم يتم تحديد فلتر الحالة، جلب جميع العمليات المكتملة
      const filters = {
        dateFrom,
        dateTo
      };
      if (statusFilter) {
        filters.status = statusFilter;
      }
      
      const jobs = await this.getMaintenanceJobs(filters);

      console.log('📊 Found jobs for rep settlements:', jobs.length);

      const repTotals = {};
      
      jobs.forEach(job => {
        // التعامل مع الهيكل الجديد (parts[]) - كل قطعة لها مندوب
        if (job.parts && Array.isArray(job.parts) && job.parts.length > 0) {
          job.parts.forEach(part => {
            if (!part.repId) return; // تجاهل القطع بدون مندوب
            
            if (!repTotals[part.repId]) {
              repTotals[part.repId] = {
                repId: part.repId,
                repName: part.repName || 'غير محدد',
                jobsCount: 0,
                partsCount: 0,
                partCostSum: 0,
                profitSum: 0,
                techCommissionSum: 0,
                shopProfitSum: 0,
                revenueSum: 0,
                jobs: [] // لتتبع الأعمال التفصيلية
              };
            }
            
            // إضافة تفاصيل القطعة
            repTotals[part.repId].partsCount++;
            repTotals[part.repId].partCostSum += (Number(part.partCost) || 0);
            
            // إضافة تفاصيل العمل لكل قطعة
            repTotals[part.repId].jobs.push({
              jobId: job.id,
              jobDate: job.dateCreated || job.createdAt,
              customerName: job.customerName,
              deviceModel: job.deviceModel,
              partName: part.partName,
              partCost: Number(part.partCost) || 0
            });
          });
          
          // عد العمل مرة واحدة لكل مندوب فريد في هذه العملية
          const uniqueReps = [...new Set(job.parts.map(p => p.repId).filter(id => id))];
          uniqueReps.forEach(repId => {
            if (repTotals[repId]) {
              repTotals[repId].jobsCount++;
        }
          });
        } 
        // التعامل مع الهيكل القديم (repId واحد)
        else if (job.repId) {
        if (!repTotals[job.repId]) {
          repTotals[job.repId] = {
            repId: job.repId,
            repName: job.repName || 'غير محدد',
            jobsCount: 0,
              partsCount: 0,
            partCostSum: 0,
            profitSum: 0,
            techCommissionSum: 0,
            shopProfitSum: 0,
              revenueSum: 0,
              jobs: []
          };
        }
        
        repTotals[job.repId].jobsCount++;
          repTotals[job.repId].partsCount++;
          repTotals[job.repId].partCostSum += (Number(job.partCost) || Number(job.totalPartCost) || 0);
        repTotals[job.repId].profitSum += (job.profit || 0);
        repTotals[job.repId].techCommissionSum += (job.techCommission || 0);
        repTotals[job.repId].shopProfitSum += (job.shopProfit || 0);
        repTotals[job.repId].revenueSum += (job.amountCharged || 0);
          
          repTotals[job.repId].jobs.push({
            jobId: job.id,
            jobDate: job.dateCreated || job.createdAt,
            customerName: job.customerName,
            deviceModel: job.deviceModel,
            partName: job.partName || 'قطعة',
            partCost: Number(job.partCost) || 0
          });
        }
      });

      const result = Object.values(repTotals);
      console.log('✅ Rep settlements calculated:', result);
      return result;
    } catch (error) {
      console.error('❌ Error getting rep settlements:', error);
      throw error;
    }
  }

  async getTechSettlements(dateFrom, dateTo, statusFilter = null) {
    try {
      console.log('🔍 Getting tech settlements from', dateFrom, 'to', dateTo, 'status:', statusFilter);
      
      // إذا لم يتم تحديد فلتر الحالة، جلب جميع العمليات
      const filters = {
        dateFrom,
        dateTo
      };
      if (statusFilter) {
        filters.status = statusFilter;
      }
      
      const jobs = await this.getMaintenanceJobs(filters);
      
      // جلب بيانات الفنيين للحصول على رقم الهاتف
      const technicians = await this.getTechnicians();
      const techMap = {};
      technicians.forEach(tech => {
        techMap[tech.id] = tech;
      });

      console.log('📊 Found jobs for tech settlements:', jobs.length);

      const techTotals = {};
      jobs.forEach(job => {
        if (!job.techId) {
          console.warn('⚠️ Job missing techId:', job);
          return;
        }
        
        const techInfo = techMap[job.techId];
        
        if (!techTotals[job.techId]) {
          techTotals[job.techId] = {
            techId: job.techId,
            techName: job.techName || techInfo?.name || 'غير محدد',
            phone: techInfo?.phone || job.techPhone || 'N/A',
            jobsCount: 0,
            partCostSum: 0,
            profitSum: 0,
            techCommissionSum: 0,
            shopProfitSum: 0,
            revenueSum: 0
          };
        }
        
        // حساب إجمالي تكلفة القطع
        let totalPartCost = 0;
        if (job.parts && Array.isArray(job.parts) && job.parts.length > 0) {
          totalPartCost = job.parts.reduce((sum, part) => sum + (Number(part.partCost) || 0), 0);
        } else if (job.partCost !== undefined) {
          totalPartCost = Number(job.partCost) || 0;
        } else if (job.totalPartCost !== undefined) {
          totalPartCost = Number(job.totalPartCost) || 0;
        }
        
        const amountCharged = Number(job.amountCharged) || 0;
        const profit = amountCharged - totalPartCost;
        
        // حساب عمولة الفني - استخدم القيمة المحفوظة أو احسبها
        let techCommission = 0;
        if (job.techCommission !== undefined && job.techCommission !== null && job.techCommission > 0) {
          // استخدم القيمة المحفوظة إذا كانت موجودة وصحيحة
          techCommission = Number(job.techCommission) || 0;
        } else {
          // احسب من techPercent و profit إذا لم تكن القيمة محفوظة
          const techPercent = job.techPercent !== undefined ? Number(job.techPercent) : 
                             (techInfo?.defaultCommissionPercent !== undefined ? techInfo.defaultCommissionPercent : 0);
          techCommission = Math.max(0, profit * techPercent);
        }
        
        const shopProfit = profit - techCommission;
        
        techTotals[job.techId].jobsCount++;
        techTotals[job.techId].partCostSum += totalPartCost;
        techTotals[job.techId].profitSum += profit;
        techTotals[job.techId].techCommissionSum += techCommission;
        techTotals[job.techId].shopProfitSum += shopProfit;
        techTotals[job.techId].revenueSum += amountCharged;
      });

      const result = Object.values(techTotals);
      console.log('✅ Tech settlements calculated:', result);
      return result;
    } catch (error) {
      console.error('❌ Error getting tech settlements:', error);
      throw error;
    }
  }

  // ===== تهيئة البيانات الافتراضية =====
  async initializeDefaultData() {
    try {
      // تهيئة فئات الأكسسوارات
      const defaultCategories = [
        { name: 'accessory', arabic_name: 'إكسسوار', description: 'إكسسوارات عامة' },
        { name: 'charger', arabic_name: 'شاحن', description: 'شواحن الهواتف' },
        { name: 'case', arabic_name: 'غلاف', description: 'أغلفة الهواتف' },
        { name: 'screen_protector', arabic_name: 'حماية الشاشة', description: 'حماية شاشة الهاتف' },
        { name: 'cable', arabic_name: 'كابل', description: 'كابلات البيانات والشحن' },
        { name: 'headphone', arabic_name: 'سماعات', description: 'سماعات الهواتف' },
        { name: 'other', arabic_name: 'أخرى', description: 'فئات أخرى' }
      ];

      // التحقق من وجود فئات الأكسسوارات
      const existingCategories = await this.getAccessoryCategories();
      if (existingCategories.length === 0) {
        for (const category of defaultCategories) {
          await this.addAccessoryCategory(category);
        }
        console.log('✅ تم إضافة فئات الأكسسوارات الافتراضية');
      }

      console.log('✅ Default data initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing default data:', error);
    }
  }
}

// إنشاء instance واحد للاستخدام في جميع أنحاء التطبيق
window.firebaseDatabase = new FirebaseDatabase();

// تهيئة البيانات الافتراضية عند تحميل Firebase
window.firebaseDatabase.initializeDefaultData()
  .then(() => {
    console.log('🔥 Firebase Database Manager initialized successfully!');
  })
  .catch(error => {
    console.error('❌ Error initializing Firebase Database:', error);
  });
