// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorFollower.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        section.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.content > *');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Dynamic copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Typewriter effect for the subtitle
const typeWriter = (element, text, speed) => {
    let i = 0;
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};

window.addEventListener('load', () => {
    const subtitle = document.querySelector('.subtitle');
    typeWriter(subtitle, subtitle.textContent, 50);
    subtitle.textContent = '';
});

// Testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

testimonialSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - testimonialSlider.offsetLeft;
    scrollLeft = testimonialSlider.scrollLeft;
});

testimonialSlider.addEventListener('mouseleave', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mouseup', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialSlider.offsetLeft;
    const walk = (x - startX) * 3;
    testimonialSlider.scrollLeft = scrollLeft - walk;
});

// Showcase item hover effect
const showcaseItems = document.querySelectorAll('.showcase-item');
showcaseItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('img').style.transform = 'scale(1.1)';
        item.querySelector('.overlay').style.transform = 'translateY(0)';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('img').style.transform = 'scale(1)';
        item.querySelector('.overlay').style.transform = 'translateY(100%)';
    });
});

// Skills animation
const skillBars = document.querySelectorAll('.skill-bar');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-skill');
        bar.querySelector('.skill-level').style.width = `${level}%`;
    });
};

// Trigger skills animation when the skills section is in view
const skillsSection = document.getElementById('skills');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(skillsSection);

// Glitch effect for the main title
const glitchElement = document.querySelector('.glitch');
setInterval(() => {
    glitchElement.style.animation = 'none';
    void glitchElement.offsetWidth;
    glitchElement.style.animation = null;
}, 5000);

// Scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

// Form label animation
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.classList.add('active');
    });
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.previousElementSibling.classList.remove('active');
        }
    });
});