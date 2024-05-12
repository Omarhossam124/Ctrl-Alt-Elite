// Function to redirect to the registration page
function redirectToRegisterPage() {
    window.location.href = "../Register/register.html"; // Adjust path as needed
}

// Event listener for the register button
document.getElementById('register-btn').addEventListener('click', function() {
    // Call the function to redirect to the registration page
    redirectToRegisterPage();
});

// Function to retrieve user data from localStorage
function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

// Function to retrieve user type from localStorage
function getUserType() {
    return localStorage.getItem('userType');
}

// Event listener for the login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve user input
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const userData = getUserData();

    // Check if user data exists and if input matches
    if (userData && email === userData.email && password === userData.password) {
        // Retrieve user type from localStorage
        const userType = getUserType();

        // Check if user type exists
        if (userType) {
            // Redirect based on user type
            if (userType === 'donor') {
                window.location.href = "../donor/index.html"; // Adjust path as needed
            } else if (userType === 'organization') {
                window.location.href = "../organization/index.html"; // Adjust path as needed
            }
        } else {
            // Display error message
            alert('User type not found. Please register again.');
        }
    } else {
        // Display error message
        alert('Invalid email or password. Please try again.');
    }
});
