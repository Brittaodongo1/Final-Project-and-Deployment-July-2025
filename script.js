document.addEventListener('DOMContentLoaded', () => {
    // Basic form validation for the contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const statusMessage = document.getElementById('form-status');

            if (name === '' || email === '' || message === '') {
                statusMessage.textContent = 'Please fill out all fields.';
                statusMessage.style.color = 'red';
            } else {
                statusMessage.textContent = 'Message sent successfully! We will get back to you soon.';
                statusMessage.style.color = 'green';
                contactForm.reset(); // Clear the form
            }
        });
    }

    // Optional: Add an "active" class to the current page link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});
