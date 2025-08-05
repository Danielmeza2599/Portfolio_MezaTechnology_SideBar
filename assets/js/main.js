// Main JavaScript functionality for SPACE landing page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initNavigation();
    initToggleButton();
    initSmoothScrolling();
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Optional: Add navigation logic here
            handleNavigation(this);
        });
    });
}

/**
 * Handle navigation item clicks
 * @param {HTMLElement} navItem - The clicked navigation item
 */
function handleNavigation(navItem) {
    const navText = navItem.querySelector('span').textContent.toLowerCase();
    
    // Add specific navigation logic based on the clicked item
    switch(navText) {
        case 'home':
            console.log('Navigating to Home');
            // Add home navigation logic
            break;
        case 'security':
            console.log('Navigating to Security');
            // Add security navigation logic
            break;
        case 'build':
            console.log('Navigating to Build');
            // Add build navigation logic
            break;
        case 'cloud':
            console.log('Navigating to Cloud');
            // Add cloud navigation logic
            break;
        case 'mail':
            console.log('Navigating to Mail');
            // Add mail navigation logic
            break;
        case 'settings':
            console.log('Navigating to Settings');
            // Add settings navigation logic
            break;
        default:
            console.log('Unknown navigation item:', navText);
    }
}

/**
 * Initialize toggle button functionality
 */
function initToggleButton() {
    const toggleBtn = document.querySelector('.toggle-btn');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            console.log('Sidebar toggle clicked');
            
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                // Toggle minimized state
                sidebar.classList.toggle('minimized');
                
                // The icon rotation is handled by CSS transform
                // No need to change the icon class
                
                console.log('Sidebar toggled:', sidebar.classList.contains('minimized') ? 'minimized' : 'expanded');
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.log('Target element not found:', targetId);
            }
        });
    });
}

/**
 * Add scroll animations for elements
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.feature-card, .hero-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Add hover effects for interactive elements
 */
function initHoverEffects() {
    // Add hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        // Add mobile-specific functionality
        if (navMenu) {
            navMenu.addEventListener('scroll', function() {
                // Add scroll indicators or other mobile features
                console.log('Mobile menu scrolled');
            });
        }
    }
}

/**
 * Add keyboard navigation support
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key to toggle sidebar
        if (e.key === 'Escape') {
            const toggleBtn = document.querySelector('.toggle-btn');
            if (toggleBtn) {
                toggleBtn.click();
            }
        }
        
        // Arrow keys for navigation (optional)
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const activeItem = document.querySelector('.nav-item.active');
            if (activeItem) {
                e.preventDefault();
                // Add arrow key navigation logic
            }
        }
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initHoverEffects();
    initMobileMenu();
    initKeyboardNavigation();
}); 