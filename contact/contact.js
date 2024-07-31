// contact.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm('service_kbcg0i1', '8M2Q0XU-H2L2q14TE', this)
                .then(function() {
                    alert('تم إرسال الرسالة بنجاح!');
                }, function(error) {
                    alert('حدث خطأ أثناء إرسال الرسالة: ' + JSON.stringify(error));
                });
        });
