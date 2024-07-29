document.addEventListener('DOMContentLoaded', function() {
    const carList = document.getElementById('carList');
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
            <p>السعر: ${car.price} ريال/اليوم</p>
            <p>${car.details}</p>
            <button type="button" onclick="rentCar(${car.id}, ${car.price})">استأجر الآن</button>
        `;
        carList.appendChild(carItem);
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
        alert('انتبه');
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
