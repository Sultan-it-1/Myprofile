// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // يمكنك إرسال البيانات إلى السيرفر هنا
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        
        alert('تم إرسال رسالتك بنجاح!');
    });
});

