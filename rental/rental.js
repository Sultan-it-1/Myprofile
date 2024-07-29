document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('carList');
    const rentalForm = document.getElementById('rentalForm');
    const pickupMethod = document.getElementById('pickupMethod');
    const rentalDate = document.getElementById('rentalDate');

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

    rentalForm.addEventListener('submit', function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة عند تقديم النموذج

        const selectedCarId = rentalForm.getAttribute('data-selected-car-id');
        if (!selectedCarId) {
            alert('يرجى اختيار سيارة للاستئجار.');
            return;
        }

        const pickupMethodValue = pickupMethod.value;
        const rentalDateValue = rentalDate.value;

        if (!rentalDateValue) {
            alert('يرجى اختيار وقت الإيجار.');
            return;
        }

        const url = `https://sultan-it-1.github.io/project-405/payment/?id=${selectedCarId}&pickupMethod=${pickupMethodValue}&rentalDate=${encodeURIComponent(rentalDateValue)}`;
        window.location.href = url;
    });
});

function rentCar(carId) {
    const rentalForm = document.getElementById('rentalForm');
    rentalForm.setAttribute('data-selected-car-id', carId);
    rentalForm.submit();
}
