// Scroll behavior for reviews bar and navbar
let lastScrollTop = 0;
let scrolledPastHero = false;

const reviewsBar = document.getElementById('reviewsBar');
const navbar = document.getElementById('navbar');
const scrollingText = document.getElementById('scrollingText');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

    // Animate scrolling text based on scroll position
    const scrollPercent = scrollTop * 0.5; // Adjust speed
    scrollingText.style.transform = `translateX(-${scrollPercent}px)`;

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
