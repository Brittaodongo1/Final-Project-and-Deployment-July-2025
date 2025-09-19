document.addEventListener('DOMContentLoaded', () => {
    // Form validation and submission for the contact page
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents the page from reloading

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('form-message');

            if (name === '' || email === '' || date === '' || guests === '') {
                formMessage.textContent = 'Please fill out all required fields.';
                formMessage.style.color = 'red';
            } else {
                formMessage.textContent = `Thank you, ${name}! Your reservation for ${guests} guests on ${date} has been submitted. We will contact you at ${email} to confirm.`;
                formMessage.style.color = 'green';
                reservationForm.reset(); // Clear the form fields
            }
        });
    }
});
