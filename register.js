document.addEventListener('DOMContentLoaded', function() {
    const organizationRadio = document.getElementById('organization');
    const orgFields = document.getElementById('org-fields');

    organizationRadio.addEventListener('change', function() {
        if (this.checked) {
            orgFields.style.display = 'block';
        } else {
            orgFields.style.display = 'none';
        }
    });

    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your registration logic here
        console.log('Registration form submitted');
    });
});
