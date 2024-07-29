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
          <a href="https://sultan-it-1.github.io/project-405/payment/">
            <button onclick="rentCar(${car.id})">استأجر الآن</button>
        </a>
        `;
        carList.appendChild(carItem);
    });
});

function rentCar(carId) {
    const pickupMethod = document.getElementById('pickupMethod').value;
    const rentalDate = document.getElementById('rentalDate').value;

    if (!rentalDate) {
        alert('يرجى اختيار وقت الإيجار.');
        return;
    }

    const url = `https://sultan-it-1.github.io/project-405/payment/?id=${carId}&pickupMethod=${pickupMethod}&rentalDate=${encodeURIComponent(rentalDate)}`;
    window.location.href = url;
}
