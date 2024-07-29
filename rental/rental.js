document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('carList');
    const rentalForm = document.getElementById('rentalForm');
    const pickupMethod = document.getElementById('pickupMethod');
    const pickupDate = document.getElementById('pickupDate');
    const returnDate = document.getElementById('returnDate');

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
            <p>السعر: ${car.price} ريال/اليووووووم</p>
            <p>${car.details}</p>
            <button type="button" onclick="rentCar(${car.id}, ${car.price})">استأجر الآن</button>
        `;
        carList.appendChild(carItem);
    });

    rentalForm.addEventListener('submit', function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة عند تقديم النموذج

        const selectedCarId = rentalForm.getAttribute('data-selected-car-id');
        const selectedCarPrice = rentalForm.getAttribute('data-selected-car-price');
        if (!selectedCarId || !selectedCarPrice) {
            alert('يرجى اختيار سيارة للاستئجار.');
            return;
        }

        const pickupMethodValue = pickupMethod.value;
        const pickupDateValue = new Date(pickupDate.value);
        const returnDateValue = new Date(returnDate.value);

        if (!pickupDateValue || !returnDateValue || returnDateValue <= pickupDateValue) {
            alert('يرجى اختيار وقت الاستلام ووقت تسليم صحيح.');
            return;
        }

        const rentalDays = Math.ceil((returnDateValue - pickupDateValue) / (1000 * 60 * 60 * 24));
        const totalPrice = rentalDays * selectedCarPrice;

        const url = `https://sultan-it-1.github.io/project-405/payment/?id=${selectedCarId}&pickupMethod=${pickupMethodValue}&pickupDate=${encodeURIComponent(pickupDate.value)}&returnDate=${encodeURIComponent(returnDate.value)}&totalPrice=${totalPrice}`;
        window.location.href = url;
    });
});

function rentCar(carId, carPrice) {
    const rentalForm = document.getElementById('rentalForm');
    rentalForm.setAttribute('data-selected-car-id', carId);
    rentalForm.setAttribute('data-selected-car-price', carPrice);
    rentalForm.submit();
}
