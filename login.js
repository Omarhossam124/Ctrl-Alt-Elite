document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    console.log('Login button clicked');
});

document.getElementById('register-btn').addEventListener('click', function() {
    window.location.href = 'register.html';
});
