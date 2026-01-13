// components.js - Shared HTML components for all pages
// Performance: Zero network requests, synchronous rendering, browser-cacheable

/**
 * Get Footer Component
 * Returns the complete footer HTML
 * No parameters needed - footer is identical across all pages
 */
function getFooter() {
    return `
    <footer class="footer bg-base-gray py-[60px] md:py-16 xl:py-20 2xl:py-24 px-5 md:px-12 xl:px-16 2xl:px-20 border-t border-base-gold text-base-text">
        <div class="footer-content max-w-7xl xl:max-w-[90rem] 2xl:max-w-[110rem] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-20 xl:gap-24 2xl:gap-28">
            <div class="footer-main">
                <div class="flex items-start gap-4 md:block">
                    <a href="index.html" class="footer-logo mb-0 md:mb-2 xl:mb-3 2xl:mb-4 inline-block flex-shrink-0">
                        <img src="../assets/logo_base_new.png" alt="Base Comfort" class="h-16 md:h-20 xl:h-24 2xl:h-28 custom:h-32 w-auto cursor-pointer">
                    </a>
                    <div class="md:hidden flex flex-col items-start justify-start gap-1 pt-1">
                        <p class="footer-contact text-sm font-sans m-0">info@basecomfort.nl</p>
                        <p class="footer-contact text-sm font-sans m-0">+31 30 123 4567</p>
                    </div>
                </div>
                <p class="footer-contact hidden md:block text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans">info@basecomfort.nl</p>
                <p class="footer-contact hidden md:block text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans">+31 30 123 4567</p>
            </div>

            <div class="footer-columns grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 xl:gap-8 2xl:gap-10">
                <div class="footer-column footer-accordion">
                    <h4 class="footer-accordion-header text-lg xl:text-lg 2xl:text-xl mb-2 xl:mb-3 2xl:mb-4 cursor-pointer md:cursor-default flex justify-between items-center">
                        Location
                        <span class="footer-accordion-icon md:hidden">+</span>
                    </h4>
                    <div class="footer-accordion-content md:block">
                        <p class="text-sm xl:text-sm 2xl:text-base leading-relaxed font-sans">Oudegracht 123<br>3511 AB Utrecht<br>The Netherlands</p>
                    </div>
                </div>

                <div class="footer-column footer-accordion">
                    <h4 class="footer-accordion-header text-lg xl:text-lg 2xl:text-xl mb-2 xl:mb-3 2xl:mb-4 cursor-pointer md:cursor-default flex justify-between items-center">
                        Info
                        <span class="footer-accordion-icon md:hidden">+</span>
                    </h4>
                    <div class="footer-accordion-content md:block">
                        <a href="about-us.html" class="block text-base-text no-underline text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans transition-opacity duration-300 hover:opacity-60">About us</a>
                        <a href="terms-and-conditions.html" class="block text-base-text no-underline text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans transition-opacity duration-300 hover:opacity-60">Terms & Conditions</a>
                    </div>
                </div>

                <div class="footer-column footer-accordion">
                    <h4 class="footer-accordion-header text-lg xl:text-lg 2xl:text-xl mb-2 xl:mb-3 2xl:mb-4 cursor-pointer md:cursor-default flex justify-between items-center">
                        Follow us
                        <span class="footer-accordion-icon md:hidden">+</span>
                    </h4>
                    <div class="footer-accordion-content md:block">
                        <a href="https://www.instagram.com/basecomfortmassage/" target="_blank" class="block text-base-text no-underline text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans transition-opacity duration-300 hover:opacity-60">Instagram</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom border-t border-base-text/20 pt-5 xl:pt-6 2xl:pt-8 mt-7 xl:mt-9 2xl:mt-10 text-center">
            <p class="copyright text-sm xl:text-sm 2xl:text-base m-0 mb-2 xl:mb-3 2xl:mb-4 font-sans">All rights reserved - Base Comfort 2025</p>
            <div class="footer-legal flex justify-center gap-4 xl:gap-5 2xl:gap-6 m-0 p-0">
                <a href="terms-and-conditions.html#privacy" class="text-base-text no-underline text-sm xl:text-sm 2xl:text-base font-sans transition-opacity duration-300 hover:opacity-60">Privacy policy</a>
                <a href="terms-and-conditions.html" class="text-base-text no-underline text-sm xl:text-sm 2xl:text-base font-sans transition-opacity duration-300 hover:opacity-60">Terms & Conditions</a>
            </div>
        </div>
    </footer>`;
}

/**
 * Get Opening Hours Component
 * Returns the opening hours section HTML
 * @param {boolean} showButton - Whether to show the "Book your Massage" button (default: true)
 */
function getOpeningHours(showButton = true) {
    const buttonHtml = showButton ? '<a href="https://basecomfortmassage.setmore.com" target="_blank" class="btn-primary bg-base-olive border border-base-olive text-white py-3 md:py-4 px-8 md:px-11 rounded-full text-sm md:text-base xl:text-sm 2xl:text-base italic font-serif cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-base-gold hover:border-base-gold no-underline inline-block">Book your Massage</a>' : '';

    return `
    <section class="opening-hours bg-base-tan py-16 md:py-20 xl:py-24 2xl:py-28 px-5 md:px-12 xl:px-16 2xl:px-20 border-t border-base-gold">
        <div class="hours-card max-w-5xl mx-auto h-[280px] md:h-[350px] xl:h-[450px] 2xl:h-[500px] bg-cover bg-center rounded-t-[200px] md:rounded-t-[225px] xl:rounded-t-[250px] 2xl:rounded-t-[275px] border border-base-gold flex flex-col items-center justify-center text-center text-white p-12 md:p-16 xl:p-20 2xl:p-24" style="background-image: url('../files/outside/uit_01.jpg');">
            <p class="hours-subtitle text-xs md:text-sm xl:text-sm 2xl:text-base tracking-widest mb-4 md:mb-5 font-sans">MON – SUN</p>
            <h2 class="hours-title text-3xl md:text-4xl xl:text-[3.5rem] 2xl:text-6xl italic mb-8 md:mb-10">Open from Monday to Sunday</h2>
            ${buttonHtml}
        </div>
    </section>`;
}

/**
 * Get Mobile Menu Component
 * Returns the mobile menu HTML
 * @param {string} activePage - Current page identifier ('home' or 'massages')
 */
function getMobileMenu(activePage) {
    // Determine active states for each page
    const homeActive = activePage === 'home' ? 'active' : '';
    const massagesActive = activePage === 'massages' ? 'active' : '';
    const giftCardsActive = activePage === 'gift-cards' ? 'active' : '';
    const aboutUsActive = activePage === 'about-us' ? 'active' : '';

    // Determine link hrefs - all links now go to dedicated pages
    const giftHref = 'gift-cards.html';
    const aboutHref = 'about-us.html';

    return `
    <div class="mobile-menu fixed inset-0 z-[999] pointer-events-none opacity-0 transition-opacity duration-500" id="mobileMenu">
        <div class="mobile-menu-overlay absolute inset-0 bg-black/50" id="menuOverlay"></div>
        <div class="mobile-menu-content absolute top-0 left-0 w-4/5 max-w-sm h-full bg-base-cream transform -translate-x-full transition-transform duration-500 ease-in-out shadow-2xl overflow-y-auto">
            <ul class="mobile-menu-list pt-24 pb-8">
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="index.html" class="${homeActive} block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">Home</a></li>
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="massages.html" class="${massagesActive} block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">Massages</a></li>
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="${giftHref}" class="${giftCardsActive} block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">Gift cards</a></li>
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="${aboutHref}" class="${aboutUsActive} block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">About us</a></li>
                <li class="mobile-menu-item mobile-menu-cta"><a href="https://basecomfortmassage.setmore.com" target="_blank" class="btn-primary block mt-8 mx-6 py-5 text-center bg-base-olive border border-base-olive text-white no-underline text-base italic font-serif rounded-full hover:bg-base-gold hover:border-base-gold">Book Now</a></li>
                <li class="mobile-menu-item mobile-menu-cta"><a href="about-us.html#contact" class="btn-outlined block mt-4 mx-6 py-5 text-center bg-transparent border-2 border-base-tan text-base-tan no-underline text-base italic font-serif rounded-full hover:bg-base-tan hover:text-white hover:border-base-tan">Contact</a></li>
                <li class="mobile-menu-item mobile-menu-lang text-center mt-6 px-8">
                    <div class="flex items-center justify-center gap-2">
                        <a href="../nl/${activePage === 'home' ? 'index' : activePage}.html" class="text-base-text/60 no-underline text-sm font-sans transition-opacity duration-300 hover:text-base-text">🇳🇱 NL</a>
                        <span class="text-base-text/40 text-sm">|</span>
                        <a href="${activePage === 'home' ? 'index' : activePage}.html" class="text-base-text no-underline text-sm font-sans font-semibold">🇬🇧 EN</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>`;
}

/**
 * Get Navbar Component
 * Returns the complete navigation bar HTML
 * @param {string} activePage - Current page identifier ('home' or 'massages')
 */
function getNavbar(activePage) {
    // Determine active states for each page
    const homeActive = activePage === 'home' ? 'active' : '';
    const massagesActive = activePage === 'massages' ? 'active' : '';
    const giftCardsActive = activePage === 'gift-cards' ? 'active' : '';
    const aboutUsActive = activePage === 'about-us' ? 'active' : '';

    // Determine link hrefs - all links now go to dedicated pages
    const giftHref = 'gift-cards.html';
    const aboutHref = 'about-us.html';

    return `
    <nav class="navbar fixed top-0 left-0 right-0 z-[1001] py-3 px-5 md:px-12 xl:py-2 2xl:py-2.5 xl:px-16 2xl:px-20" id="navbar">
        <div class="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[110rem] mx-auto">
            <!-- Mobile Layout -->
            <div class="flex md:hidden justify-between items-center relative">
                <button class="hamburger flex flex-col justify-between w-7 h-[18px] bg-transparent border-0 cursor-pointer p-0 z-[1002] relative" id="hamburger">
                    <span class="hamburger-line w-full h-0.5 bg-base-tan transition-all duration-300"></span>
                    <span class="hamburger-line w-full h-0.5 bg-base-tan transition-all duration-300"></span>
                </button>
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <a href="index.html" class="pointer-events-auto">
                        <img src="../assets/logo_base_new_round.png" alt="Base Comfort" class="logo h-[60px] w-[60px] transition-opacity duration-300 object-contain bg-transparent mix-blend-multiply block align-middle">
                    </a>
                </div>
                <div class="flex items-center gap-3 ml-auto">
                    <a href="https://basecomfortmassage.setmore.com" target="_blank" class="btn-primary bg-base-olive border border-base-olive text-white py-3 px-5 text-[13px] leading-tight rounded-[40px] italic font-serif cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-base-gold hover:border-base-gold no-underline inline-flex items-center justify-center">Book Now</a>
                </div>
            </div>

            <!-- Desktop Layout: 3 columns grid -->
            <div class="hidden md:grid grid-cols-3 items-center">
                <!-- Left: Logo -->
                <div class="flex items-center justify-start">
                    <a href="index.html">
                        <img src="../assets/logo_base_new_round.png" alt="Base Comfort" class="logo h-[70px] xl:h-[85px] 2xl:h-[100px] custom:h-[110px] w-auto transition-opacity duration-300 object-contain bg-transparent mix-blend-multiply block align-middle" id="logoImg">
                    </a>
                </div>

                <!-- Center: Navigation links -->
                <div class="flex gap-7 xl:gap-9 2xl:gap-12 items-center justify-center">
                    <a href="index.html" class="desktop-nav ${homeActive} text-base-tan no-underline transition-all duration-300 relative pb-1.5 hover:opacity-70 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </a>
                    <a href="massages.html" class="desktop-nav ${massagesActive} text-base-tan no-underline text-sm xl:text-sm 2xl:text-base font-semibold transition-all duration-300 relative pb-1.5 font-sans hover:opacity-70">Massages</a>
                    <a href="${giftHref}" class="desktop-nav ${giftCardsActive} text-base-tan no-underline text-sm xl:text-sm 2xl:text-base font-semibold transition-all duration-300 relative pb-1.5 font-sans hover:opacity-70">Gift cards</a>
                    <a href="${aboutHref}" class="desktop-nav ${aboutUsActive} text-base-tan no-underline text-sm xl:text-sm 2xl:text-base font-semibold transition-all duration-300 relative pb-1.5 font-sans hover:opacity-70">About us</a>
                </div>

                <!-- Right: Language switcher + Book Now -->
                <div class="flex gap-7 xl:gap-9 2xl:gap-12 items-center justify-end">
                    <a href="../nl/${activePage === 'home' ? 'index' : activePage}.html" class="language-switcher flex gap-2 items-center text-base-tan hover:opacity-70 transition-opacity no-underline">
                        <span class="text-sm font-sans">🇳🇱 NL</span>
                    </a>
                    <a href="https://basecomfortmassage.setmore.com" target="_blank" class="btn-primary bg-base-olive border border-base-olive text-white py-3 px-7 md:rounded-full xl:py-4 xl:px-9 2xl:py-5 2xl:px-11 text-sm xl:text-sm 2xl:text-base italic font-serif cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-base-gold hover:border-base-gold no-underline inline-block">Book Now</a>
                </div>
            </div>
        </div>
    </nav>`;
}
