document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;
    const html = document.documentElement;
    const currentYearSpan = document.getElementById('current-year');
    const navbar = document.querySelector('.navbar');

    // --- Navbar Scroll Behavior ---
    let lastScrollTop = 0;
    const scrollThreshold = 50; // Minimum scroll amount to trigger hide/show

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navbar.classList.add('hidden');
            } else {
                // Scrolling up
                navbar.classList.remove('hidden');
            }
            lastScrollTop = scrollTop;
        }
    });

    // --- Theme (Dark/Light Mode) --- 
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        let newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // --- Language (AR/EN) --- 
    let typedAr, typedEn; // Store Typed instances
    const currentLang = localStorage.getItem('language') || 'ar';
    setLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        let newLang = html.lang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    });

    function setLanguage(lang) {
        html.lang = lang;
        html.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Toggle visibility based on lang attribute
        document.querySelectorAll('[lang="ar"]').forEach(el => {
            el.style.display = lang === 'ar' ? '' : 'none';
        });
        document.querySelectorAll('[lang="en"]').forEach(el => {
            el.style.display = lang === 'en' ? '' : 'none';
        });

        // Update lang toggle button text
        langToggle.querySelector('[lang="ar"]').style.display = lang === 'en' ? '' : 'none';
        langToggle.querySelector('[lang="en"]').style.display = lang === 'ar' ? '' : 'none';

        // Initialize or re-initialize typing animation for the current language
        initTypingAnimation(lang);

        // Update Meta Description if needed (Optional Advanced)
        // const metaDesc = document.querySelector('meta[name="description"]');
        // if (metaDesc) {
        //     metaDesc.content = lang === 'ar' ? "الوصف بالعربي" : "Description in English";
        // }
    }

    // --- Typing Animation --- 
    function initTypingAnimation(lang) {
        const stringsAr = ['متخصص في تكنولوجيا المعلومات','متحمس للحوسبة السحابية']; // Add more roles/skills
        const stringsEn = ['an IT Specialist','a Cloud Enthusiast'];

        // Destroy previous instances if they exist
        if (typedAr) typedAr.destroy();
        if (typedEn) typedEn.destroy();

        if (lang === 'ar') {
            typedAr = new Typed('.type-effect-ar', {
                strings: stringsAr,
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 1500,
                loop: true,
                smartBackspace: true
            });
        } else {
             typedEn = new Typed('.type-effect-en', {
                strings: stringsEn,
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 1500,
                loop: true,
                smartBackspace: true
            });
        }
    }

    // --- Smooth Scrolling --- 
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20; // Add a little extra offset

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Update Footer Year --- 
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Initialize AOS --- 
    AOS.init({
        duration: 800, 
        once: false, // Allow animation multiple times on scroll up/down
        offset: 80, // Adjust offset
        delay: 100,
        easing: 'ease-out-cubic' // Smoother easing
    });

    // --- Contact Form Placeholder Submission --- 
    // Removed the placeholder form submission logic as Formspree handles it now.
    /*
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted (placeholder)! Thank you for your message.');
            contactForm.reset(); 
        });
    }
    */

    // --- Hamburger Menu for Mobile ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

}); 
