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

        // Lock body scroll
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';

        // Keep navbar and reviews bar states frozen
        if (scrollPosition > 10) {
            reviewsBar.classList.add('frozen');
            navbar.classList.add('frozen');
        }

        // Prevent scroll on overlay
        menuOverlay.addEventListener('touchmove', preventScroll, { passive: false });
        menuOverlay.addEventListener('wheel', preventScroll, { passive: false });
    } else {
        // Remove frozen states but preserve current scroll state
        const currentScrollBeforeRestore = scrollPosition;

        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';

        // Restore scroll position without triggering scroll events
        window.scrollTo(0, currentScrollBeforeRestore);

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
