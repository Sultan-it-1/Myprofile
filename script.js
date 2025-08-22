document.addEventListener('DOMContentLoaded', function() {

  // 3. Hide/Show Navbar on Scroll
  let lastScrollTop = 0;
  const header = document.getElementById('header');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Make sure scroll is more than header height
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      // Scrolling Down
      header.classList.add('hidden');
    } else {
      // Scrolling Up
      header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);


  // 1. Typing Effect (Typed.js)
  const typingElement = document.getElementById('typing-effect');
  if (typingElement && typeof Typed !== 'undefined') {
    new Typed('#typing-effect', {
      strings: ['an IT Specialist.', 'a Cloud Enthusiast.'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
    });
  }

  // 2. Animate On Scroll (AOS.js)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 120, // Offset (in px) from the original trigger point
    });
  }

  // Bonus: Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = mainNav.querySelectorAll('a');

  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      mainNav.classList.toggle('is-active');
      mobileNavToggle.classList.toggle('is-active');
      // Update aria-expanded attribute for accessibility
      const isExpanded = mainNav.classList.contains('is-active');
      mobileNavToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('is-active')) {
          mainNav.classList.remove('is-active');
          mobileNavToggle.classList.remove('is-active');
          mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

});
