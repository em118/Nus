// Smooth scroll for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: simple alert when form is submitted
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    alert('Thank you for contacting us!');
});
