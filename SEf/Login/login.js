document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve user input
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists and if input matches
    if (userData && email === userData.email && password === userData.password) {
        // Redirect to profile page
        window.location.href = 'profile.html';
    } else {
        // Display error message (you can customize this part)
        alert('Invalid email or password. Please try again.');
    }
});

document.getElementById('register-btn').addEventListener('click', function() {
    window.location.href = "../Register/register.html";
});