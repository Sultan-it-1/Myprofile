// rental.js

document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('carList');

    const cars = [
        { id: 1, name: 'تويوتا كورولا', price: 100, details: 'سيارة اقتصادية ومريحة.' },
        { id: 2, name: 'نيسان صني', price: 90, details: 'سيارة اقتصادية وموفرة للوقود.' },
        { id: 3, name: 'هيونداي إلنترا', price: 120, details: 'سيارة عائلية بامتياز.' },
        // يمكنك إضافة المزيد من السيارات هنا
    ];

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');
        carItem.innerHTML = `
            <h3>${car.name}</h3>
            <p>السعر: ${car.price} ريال/اليوم</p>
            <p>${car.details}</p>
            <button onclick="rentCar(${car.id})">استأجر الآن</button>
        `;
        carList.appendChild(carItem);
    });
});

function rentCar(carId) {
    alert('تم اختيار السيارة رقم ' + carId);
}

