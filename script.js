document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get form elements
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation logic
            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return;
            }

            // A simple regex for email validation
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // If validation passes, you can "submit" the form
            // In a real-world scenario, you would send this data to a server.
            // For this assignment, we'll just show a success message.
            alert('Thank you for your message! We will get back to you soon.');

            // Clear the form fields
            this.reset();
        });
    }
});
