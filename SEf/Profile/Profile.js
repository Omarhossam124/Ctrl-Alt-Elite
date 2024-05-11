
// Add event listener for the logout button
document.getElementById('logout-btn').addEventListener('click', function() {
    // Show the logout confirmation modal
    $('#logoutModal').modal('show');
});

// Add event listener for the confirm logout button inside the modal
document.getElementById('confirm-logout-btn').addEventListener('click', function() {
    // Redirect to the login page
    window.location.href = '../Login/Login.html';
});

// Add event listener for the deactivate button
document.getElementById('deactivate-btn').addEventListener('click', function() {
    // Show the deactivate confirmation modal
    $('#deactivateModal').modal('show');
});

// Add event listener for the confirm deactivate button
document.getElementById('confirm-deactivate-btn').addEventListener('click', function() {
    // Redirect to the login page or perform any other necessary action
    window.location.href = '../Login/Login.html';
});

// Add event listener for the edit name button
document.querySelector('.edit-name-btn').addEventListener('click', function() {
    // Get the span element containing the user's name
    const userNameSpan = document.getElementById('user-name');

    // Create an input element
    const input = document.createElement('input');
    input.type = 'text';
    input.value = userNameSpan.textContent;

    // Replace the span with the input
    userNameSpan.parentNode.replaceChild(input, userNameSpan);

    // Focus on the input field
    input.focus();

    // Add event listener to the input field to update the name
    input.addEventListener('blur', function() {
        // Replace the input with a new span containing the updated name
        const newSpan = document.createElement('span');
        newSpan.textContent = input.value;
        input.parentNode.replaceChild(newSpan, input);
    });
});

// Add event listener for the edit picture button
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgSrc = e.target.result;
            document.getElementById('profile-picture').setAttribute('src', imgSrc);
        };
        reader.readAsDataURL(file);
    }
});

// Add event listener for the edit password button
document.querySelector('.edit-password-btn').addEventListener('click', function() {
    // Get the span element containing the user's password
    const userPasswordSpan = document.getElementById('user-password');

    // Create an input element
    const input = document.createElement('input');
    input.type = 'password';
    input.value = userPasswordSpan.textContent;

    // Replace the span with the input
    userPasswordSpan.parentNode.replaceChild(input, userPasswordSpan);

    // Focus on the input field
    input.focus();

    // Add event listener to the input field to update the password
    input.addEventListener('blur', function() {
        // Replace the input with a new span containing the updated password
        const newSpan = document.createElement('span');
        newSpan.textContent = input.value.replace(/./g, '*'); // Masking the password for security
        input.parentNode.replaceChild(newSpan, input);
    });
});

// Add event listener for the edit address button
document.querySelector('.edit-address-btn').addEventListener('click', function() {
    // Get the span element containing the user's address
    const userAddressSpan = document.getElementById('user-address');

    // Create an input element
    const input = document.createElement('input');
    input.type = 'text';
    input.value = userAddressSpan.textContent;

    // Replace the span with the input
    userAddressSpan.parentNode.replaceChild(input, userAddressSpan);

    // Focus on the input field
    input.focus();

    // Add event listener to the input field to update the address
    input.addEventListener('blur', function() {
        // Replace the input with a new span containing the updated address
        const newSpan = document.createElement('span');
        newSpan.textContent = input.value;
        input.parentNode.replaceChild(newSpan, input);
    });
});

// Similar implementation for governorate and contact number edit buttons
// Add event listener for the edit governorate button
document.querySelector('.edit-governorate-btn').addEventListener('click', function() {
    const userGovernorateSpan = document.getElementById('user-governorate');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = userGovernorateSpan.textContent;
    userGovernorateSpan.parentNode.replaceChild(input, userGovernorateSpan);
    input.focus();
    input.addEventListener('blur', function() {
        const newSpan = document.createElement('span');
        newSpan.textContent = input.value;
        input.parentNode.replaceChild(newSpan, input);
    });
});

// Add event listener for the edit contact button
document.querySelector('.edit-contact-btn').addEventListener('click', function() {
    const userContactSpan = document.getElementById('user-contact');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = userContactSpan.textContent;
    userContactSpan.parentNode.replaceChild(input, userContactSpan);
    input.focus();
    input.addEventListener('blur', function() {
        const newSpan = document.createElement('span');
        newSpan.textContent = input.value;
        input.parentNode.replaceChild(newSpan, input);
    });
});


// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user's email and password from the login session (assuming they are stored in sessionStorage)
    const userEmail = sessionStorage.getItem('userEmail');
    const userPassword = sessionStorage.getItem('userPassword');

    // Retrieve user data from local storage based on email and password
    const userData = getUserData(userEmail, userPassword);

    // Populate profile page fields with retrieved user data
    populateProfileFields(userData);
});

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user's email and password from sessionStorage
    const userEmail = sessionStorage.getItem('userEmail');
    const userPassword = sessionStorage.getItem('userPassword');

    // Check if userEmail and userPassword are retrieved correctly
    console.log('User Email:', userEmail);
    console.log('User Password:', userPassword);

    // Continue with other operations like retrieving user data from localStorage and populating profile fields
});

// Function to populate profile page fields with user data
function populateProfileFields(userData) {
    if (userData) {
        // Populate profile fields with user data
        document.getElementById('user-email').textContent = userData.email;
        // Display other user information as needed
    } else {
        // Handle case where no user data is found
        console.error('User data not found');
    }
}