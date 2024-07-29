document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    const pickupMethod = urlParams.get('pickupMethod');
    const pickupDate = urlParams.get('pickupDate');
    const returnDate = urlParams.get('returnDate');
    const totalPrice = urlParams.get('totalPrice');
    const rentalDetails = document.getElementById('rentalDetails');

    const cars = [
        { id: 1, name: 'تويوتا كورولا', price: 100, details: 'سيارة اقتصادية ومريحة.' },
        { id: 2, name: 'نيسان صني', price: 90, details: 'سيارة اقتصادية وموفرة للوقود.' },
        { id: 3, name: 'هيونداي إلنترا', price: 120, details: 'سيارة عائلية بامتياز.' },
        // يمكنك إضافة المزيد من السيارات هنا
    ];

    const car = cars.find(c => c.id == carId);
    const rentalDays = Math.ceil((new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24));

    if (car) {
        rentalDetails.innerHTML = `
            <h3>${car.name}</h3>
            <p>السعر: ${car.price} ريال/اليوم</p>
            <p>طريقة الاستلام: ${pickupMethod === 'branch' ? 'استلام من الفرع' : 'توصيل للمنزل'}</p>
            <p>وقت الاستلام: ${new Date(pickupDate).toLocaleString()}</p>
            <p>وقت التسليم: ${new Date(returnDate).toLocaleString()}</p>
            <p>عدد الأيام: ${rentalDays}</p>
            <p>السعر الكلي: ${totalPrice} ريال</p>
        `;
    } else {
        rentalDetails.innerHTML = `<p>لم يتم العثور على السيارة.</p>`;
    }

    const paymentForm = document.getElementById('paymentForm');
    
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const creditCard = document.getElementById('creditCard').value;
        
        // يمكنك إرسال البيانات إلى السيرفر هنا
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Credit Card:', creditCard);
        
        alert('تم الدفع بنجاح!');
    });
});
