/**
 * AAA Studio Portfolio System Engine
 * Natively manages UI/UX interaction patterns
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDynamicFooter();
    initReviewExpandables();
});

/**
 * 1. Navigation System Mechanics
 * Manages sticky transitions and mobile menu transforms
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Scroll Monitor
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.classList.contains('active');
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Close Mobile Menu on Link Navigation & Track Active View
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        });

        // Parse absolute path strings to evaluate active client states on GitHub Pages
        const currentPath = window.location.pathname;
        const linkPath = link.getAttribute('href');
        if (currentPath.endsWith(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

/**
 * 2. Footer Chronology System
 */
function initDynamicFooter() {
    const yearSpan = document.getElementById('dynamic-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * 3. Collapsible Review Card Engine (Page 5 Blueprint Match)
 */
function initReviewExpandables() {
    const toggleButtons = document.querySelectorAll('.btn-toggle-review');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                const isExpanded = targetContent.classList.contains('expanded');
                
                // Toggle expansion class
                targetContent.classList.toggle('expanded');
                
                // Track state transitions natively
                if (isExpanded) {
                    button.innerHTML = 'Read Full Review <i class="fas fa-chevron-down"></i>';
                    button.setAttribute('aria-expanded', 'false');
                } else {
                    button.innerHTML = 'Collapse Review <i class="fas fa-chevron-up"></i>';
                    button.setAttribute('aria-expanded', 'true');
                }
            }
        });
    });
}
