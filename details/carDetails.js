// carDetails.js

document.addEventListener('DOMContentLoaded', function() {
    const carId = new URLSearchParams(window.location.search).get('id');
    const carDetails = document.getElementById('carDetails');

    const cars = [
        { id: 1, name: 'تويوتا كورولا', price: 100, details: 'سيارة اقتصادية ومريحة.', img: 'toyota_corolla.jpg' },
        { id: 2, name: 'نيسان صني', price: 90, details: 'سيارة اقتصادية وموفرة للوقود.', img: 'nissan_sunny.jpg' },
        { id: 3, name: 'هيونداي إلنترا', price: 120, details: 'سيارة عائلية بامتياز.', img: 'hyundai_elantra.jpg' },
        // يمكنك إضافة المزيد من السيارات هنا
    ];

    const car = cars.find(c => c.id == carId);

    if (car) {
        carDetails.innerHTML = `
            <h2>${car.name}</h2>
            <img src="${car.img}" alt="${car.name}" style="width: 100%; max-width: 300px;">
            <p>السعر: ${car.price} ريال/اليوم</p>
            <p>${car.details}</p>
        `;
    } else {
        carDetails.innerHTML = `<p>لم يتم العثور على السيارة.</p>`;
    }
});

function proceedToRent() {
    const carId = new URLSearchParams(window.location.search).get('id');
    window.location.href = `rent.html?id=${carId}`;
}
