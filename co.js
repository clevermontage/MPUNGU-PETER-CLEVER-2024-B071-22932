// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
