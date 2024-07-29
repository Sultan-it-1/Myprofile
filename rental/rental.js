// rental.js
function proceedToPayment(carModel, price) {
    // جمع البيانات من النموذج
    const pickupTime = document.getElementById('pickupTime').value;
    const returnTime = document.getElementById('returnTime').value;
    const pickupLocation = document.getElementById('pickupLocation').value;

    // التحقق من تعبئة جميع البيانات
    if (!pickupTime || !returnTime || !pickupLocation) {
        alert("يرجى تعبئة جميع الحقول قبل استئجار السيارة.");
        return;
    }

    // إنشاء نموذج مخفي وتمرير البيانات
    const form = document.createElement('form');
    form.method = 'post';
    form.action = 'payment.html';

    form.appendChild(createHiddenInput('pickupTime', pickupTime));
    form.appendChild(createHiddenInput('returnTime', returnTime));
    form.appendChild(createHiddenInput('pickupLocation', pickupLocation));
    form.appendChild(createHiddenInput('carModel', carModel));
    form.appendChild(createHiddenInput('price', price));

    document.body.appendChild(form);
    form.submit();
}

function createHiddenInput(name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
}
