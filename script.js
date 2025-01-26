// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav ul');

function toggleNav() {
    navMenu.classList.toggle('show');
}

navToggle.addEventListener('click', toggleNav);

function handleResize() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show');
    }
}

window.addEventListener('resize', handleResize);
