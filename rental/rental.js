document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('carList');
    const pickupMethod = document.getElementById('pickupMethod');
    const pickupDate = document.getElementById('pickupDate');
    const returnDate = document.getElementById('returnDate');
    const searchInput = document.getElementById('search');

    const cars = [
        { id: 1, name: 'تويوتا كورولا', model: 2015, price: 100, details: 'سيارة اقتصادية ومريحة.', image: 'https://sultan-it-1.github.io/project-405/rental/2015.jpg' },
        { id: 2, name: 'نيسان صني', model: 2021, price: 90, details: 'سيارة اقتصادية وموفرة للوقود.', image: 'https://sultan-it-1.github.io/project-405/rental/2021.jpg' },
        { id: 3, name: 'هيونداي إلنترا', model: 2017, price: 120, details: 'سيارة عائلية بامتياز.', image: 'https://sultan-it-1.github.io/project-405/rental/2017.jpg' },
        // يمكنك إضافة المزيد من السيارات هنا
    ];

    function renderCars(filteredCars) {
        carList.innerHTML = '';
        filteredCars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');
            carItem.innerHTML = `
                <img src="${car.image}" alt="${car.name}" class="car-image">
                <div class="car-details">
                    <h3>${car.name} - ${car.model}</h3>
                    <p>السعر: ${car.price} ريال/اليوم</p>
                    <p>${car.details}</p>
                    <div class="car-actions">
                        <button type="button" onclick="rentCar(${car.id}, ${car.price})">استأجر الآن</button>
                    </div>
                </div>
            `;
            carList.appendChild(carItem);
        });
    }

    renderCars(cars);

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCars = cars.filter(car => 
            car.name.toLowerCase().includes(searchTerm) || 
            car.model.toString().includes(searchTerm)
        );
        renderCars(filteredCars);
    });
});

function rentCar(carId, carPrice) {
    const pickupMethodValue = document.getElementById('pickupMethod').value;
    const pickupDateElement = document.getElementById('pickupDate');
    const returnDateElement = document.getElementById('returnDate');
    
    const pickupDateValue = pickupDateElement.value;
    const returnDateValue = returnDateElement.value;

    if (!pickupDateValue || !returnDateValue) {
        alert('يرجى اختيار وقت الاستلام ووقت التسليم.');
        return;
    }

    const pickupDate = new Date(pickupDateValue);
    const returnDate = new Date(returnDateValue);

    if (returnDate <= pickupDate) {
        alert('يرجى اختيار وقت تسليم صحيح بحيث يكون بعد وقت الاستلام.');
        return;
    }

    const rentalDays = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
    const totalPrice = rentalDays * carPrice;

    const url = `https://sultan-it-1.github.io/project-405/payment/?id=${carId}&pickupMethod=${pickupMethodValue}&pickupDate=${encodeURIComponent(pickupDate.toISOString())}&returnDate=${encodeURIComponent(returnDate.toISOString())}&totalPrice=${totalPrice}`;
    window.location.href = url;
}
