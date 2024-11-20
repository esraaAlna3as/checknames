function checkName(event) {
    // إخفاء الرسائل الحالية ومؤشر التحميل
  document.getElementById('name-available').style.display = 'none';
  document.getElementById('name-unavailable').style.display = 'none';
   // document.getElementById('loading-spinner').style.display = 'block';
   event.preventDefault();
    // التقاط قيمة المدخل
    const name = document.getElementById('name-input').value.trim();
 

    // التحقق إذا كان الحقل فارغًا
    if (!name) {
        alert('يرجى إدخال اسم للتحقق.');
       // document.getElementById('loading-spinner').style.display = 'none';
        return;
    }

    // محاكاة طلب الخادم (يمكنك استبداله باستعلام حقيقي)
   // setTimeout(() => {
     //   document.getElementById('loading-spinner').style.display = 'none';
        
        // هنا يتم التحقق من الاسم (قم بتعديل الشرط حسب الحاجة)
        const isAvailable = Math.random() > 0.5; // افتراض عشوائي لتوفر الاسم
        
        if (isAvailable) {
              document.getElementById('name-available').style.display = 'block';

               
        } else {
           
            document.getElementById('name-unavailable').style.display = 'block';
             
                
             
        }
        document.getElementById('name-input').value = '';
         // Hide the alert automatically after a few seconds if needed
         setTimeout(() => {
            document.getElementById('name-available').style.display = 'none';
            document.getElementById('name-unavailable').style.display = 'none';
        }, 6000); // Hide after 6 seconds

        

    } // زمن انتظار محاكاة للاستجابة

