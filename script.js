// Scroll behavior for reviews bar and navbar
let lastScrollTop = 0;
let scrolledPastHero = false;

const reviewsBar = document.getElementById('reviewsBar');
const navbar = document.getElementById('navbar');
const scrollingText = document.getElementById('scrollingText');
const logoImg = document.getElementById('logoImg');

// Mobile menu functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const logo = document.querySelector('.logo');

let scrollPosition = 0;
let menuIsOpen = false;

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
}

function updateMenuPosition() {
    // Check if page is in scrolled state (navbar has scrolled class)
    const isScrolled = navbar.classList.contains('scrolled');

    if (isScrolled) {
        mobileMenu.classList.add('scrolled');
    } else {
        mobileMenu.classList.remove('scrolled');
    }
}

function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    const isActive = mobileMenu.classList.contains('active');

    if (isActive) {
        menuIsOpen = true;

        // Save scroll position first
        scrollPosition = window.pageYOffset;

        // Update menu position based on scroll state
        updateMenuPosition();

        // Lock body scroll using modern approach
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';

        // Keep navbar and reviews bar states frozen
        if (scrollPosition > 10) {
            reviewsBar.classList.add('frozen');
            navbar.classList.add('frozen');
        }

        // Prevent scroll on overlay
        menuOverlay.addEventListener('touchmove', preventScroll, { passive: false });
        menuOverlay.addEventListener('wheel', preventScroll, { passive: false });
    } else {
        // Restore body scroll
        document.body.style.overflow = '';
        document.body.style.touchAction = '';

        // Remove frozen classes
        reviewsBar.classList.remove('frozen');
        navbar.classList.remove('frozen');

        // Remove event listeners
        menuOverlay.removeEventListener('touchmove', preventScroll);
        menuOverlay.removeEventListener('wheel', preventScroll);

        // Mark menu as closed after all operations complete
        setTimeout(() => {
            menuIsOpen = false;
        }, 50);
    }
}

hamburger.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking on a menu item
document.querySelectorAll('.mobile-menu-item a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

window.addEventListener('scroll', () => {
    // Ignore scroll events when menu is open or closing
    if (menuIsOpen) {
        return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isMassagesPage = document.body.classList.contains('massages-page');

    if (isMassagesPage) {
        // === MASSAGES PAGE BEHAVIOR ===

        // Hide reviews bar on any scroll down from top
        if (scrollTop > 10) {
            reviewsBar.classList.add('hidden');
        } else {
            reviewsBar.classList.remove('hidden');
        }

        // Add background to navbar when scrolled past initial position
        if (scrollTop > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 150) {
            // Scrolling down - hide navbar
            navbar.classList.add('hidden');
        } else {
            // Scrolling up - show navbar immediately
            navbar.classList.remove('hidden');
        }
    } else {
        // === HOME PAGE BEHAVIOR (original) ===

        // Hide reviews bar on any scroll down from top
        if (scrollTop > 10) {
            reviewsBar.classList.add('hidden');
        } else {
            reviewsBar.classList.remove('hidden');
        }

        // Add background to navbar when scrolled past initial position
        if (scrollTop > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 150) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }
    }

    // Animate scrolling text based on scroll position (only on home page)
    if (scrollingText) {
        const scrollPercent = scrollTop * 0.5; // Adjust speed
        scrollingText.style.transform = `translateX(-${scrollPercent}px)`;
    }

    lastScrollTop = scrollTop;
});

// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add button click handlers (placeholder functionality)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        // Placeholder for booking/contact functionality
        console.log('Button clicked:', this.textContent);
    });
});

// Footer accordion functionality (mobile only)
document.querySelectorAll('.footer-accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        // Only activate on mobile (screen width <= 980px)
        if (window.innerWidth <= 980) {
            const accordion = this.parentElement;
            const isActive = accordion.classList.contains('active');

            // Close all accordions
            document.querySelectorAll('.footer-accordion').forEach(acc => {
                acc.classList.remove('active');
            });

            // Toggle current accordion
            if (!isActive) {
                accordion.classList.add('active');
            }
        }
    });
});

// Instagram Carousel functionality
const carouselTrack = document.querySelector('.instagram-track');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const totalSlides = 2;

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.style.opacity = '1';
        } else {
            indicator.style.opacity = '0.5';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Button navigation
if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

// Indicator navigation
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Touch/swipe navigation
const carouselContainer = document.querySelector('.instagram-carousel');
if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next slide
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - previous slide
            prevSlide();
        }
    }
}

// Initialize carousel
updateCarousel();
