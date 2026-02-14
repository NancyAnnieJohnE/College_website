// Smooth scroll for navigation links
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

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Accordion functionality for Facilities section
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const isActive = accordionItem.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.maxHeight = null;
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            accordionItem.classList.add('active');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
    });
});

// Login Modal functionality
const modal = document.getElementById('loginModal');
const loginBtns = document.querySelectorAll('.login-btn');
const closeBtn = document.querySelector('.close');

loginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Login form submission
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (userType && username && password) {
        alert(`Login functionality will be implemented soon.\n\nUser Type: ${userType}\nUsername: ${username}`);
        modal.style.display = 'none';
        loginForm.reset();
    } else {
        alert('Please fill in all fields');
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.news-card, .committee-card, .dept-card, .achievement-card, .leadership-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (for smaller screens)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                display: block;
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 1.5rem;
                cursor: pointer;
                margin: 10px auto;
                border-radius: 5px;
            `;
            
            navbar.querySelector('.container').insertBefore(menuToggle, navMenu);
            
            menuToggle.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }
};

// Handle window resize
window.addEventListener('resize', createMobileMenu);
window.addEventListener('load', createMobileMenu);

// Add entrance animation to hero section
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
});

console.log('Christ College of Engineering and Technology - Website Loaded Successfully');