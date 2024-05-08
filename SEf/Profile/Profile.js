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
