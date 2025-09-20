// This script handles the mobile hamburger menu and the menu filtering functionality.

document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------
    // Mobile Hamburger Menu
    // ---------------------------------------------

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ---------------------------------------------
    // Menu Filtering (for menu.html)
    // ---------------------------------------------

    const menuButtons = document.querySelectorAll('.menu-tab-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    if (menuButtons.length > 0 && menuItems.length > 0) {
        menuButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons
                menuButtons.forEach(btn => btn.classList.remove('active'));
                // Add 'active' class to the clicked button
                button.classList.add('active');

                const category = button.dataset.category;

                menuItems.forEach(item => {
                    const itemCategory = item.dataset.category;
                    if (category === 'all' || itemCategory === category) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ---------------------------------------------
    // Form Submission and Validation (for contact.html)
    // ---------------------------------------------

    const form = document.getElementById('reservation-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Clear any previous messages
            formMessage.textContent = '';
            formMessage.classList.remove('success', 'error');

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const date = document.getElementById('date').value.trim();
            const time = document.getElementById('time').value.trim();
            const guests = document.getElementById('guests').value.trim();

            // Basic validation check
            if (name === '' || email === '' || date === '' || time === '' || guests === '') {
                formMessage.textContent = 'Please fill out all required fields.';
                formMessage.classList.add('error');
                return;
            }

            // Simple email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.classList.add('error');
                return;
            }
            
            // Simple check for a valid number of guests
            if (parseInt(guests, 10) <= 0) {
                formMessage.textContent = 'Number of guests must be at least 1.';
                formMessage.classList.add('error');
                return;
            }

            // If all checks pass, simulate a successful submission
            formMessage.textContent = 'Thank you! Your reservation has been submitted.';
            formMessage.classList.add('success');
            form.reset(); // Clear the form fields
        });
    }
});