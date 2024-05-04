document.addEventListener('DOMContentLoaded', function() {
    const donorRadio = document.getElementById('donor');
    const orgRadio = document.getElementById('organization');
    const orgFields = document.getElementById('org-fields');
    const registerButton = document.querySelector('button[type="submit"]');
    const loginButton = document.getElementById('login-btn');
    const form = document.getElementById('registration-form');
    const errorText = document.createElement('p');
    errorText.textContent = 'You must fill in all credentials before proceeding';
    errorText.style.color = 'red';
    errorText.style.display = 'none';

    // Function to toggle visibility of additional organization fields
    function toggleOrgFields() {
        orgFields.style.display = orgRadio.checked ? 'block' : 'none';
    }

    // Initially hide additional organization fields
    toggleOrgFields();

    // Add event listeners to radio buttons to toggle organization fields
    donorRadio.addEventListener('change', toggleOrgFields);
    orgRadio.addEventListener('change', toggleOrgFields);

    // Add event listener to register button for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Check if all required fields are filled
        const requiredFields = form.querySelectorAll('input[required], select[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
            }
        });

        // Display error message if any required field is empty
        if (!isValid) {
            errorText.style.display = 'block';
            return;
        }

        // Proceed with registration
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userData = { email, password };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to login page
        window.location.href = 'login.html';
    });

    // Add event listener to login button for redirection
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'login.html';
    });

    // Append error text to container
    form.appendChild(errorText);
});