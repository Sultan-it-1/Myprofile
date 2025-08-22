document.addEventListener('DOMContentLoaded', function () {
  // AOS (Animate on Scroll) Initialization
  AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
    offset: 50, // offset (in px) from the original trigger point
  });

  // Typed.js Initialization for the hero section typing effect
  if (document.getElementById('typing-effect')) {
    new Typed('#typing-effect', {
      strings: [
        'an IT Specialist.',
        'a Network Security enthusiast.',
        'a System Administrator.',
        'a Cloud Computing practitioner.'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
    });
  }

  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      const isExpanded = mainNav.classList.toggle('is-active');
      mobileNavToggle.classList.toggle('is-active');
      mobileNavToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

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

  // Hide header on scroll down, show on scroll up
  let lastScrollTop = 0;
  const header = document.getElementById('header');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      header.classList.add('hidden'); // Scroll Down
    } else {
      header.classList.remove('hidden'); // Scroll Up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);
});
