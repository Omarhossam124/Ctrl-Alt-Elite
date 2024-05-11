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
        window.location.href = '../Login/login.html';
    });

    // Add event listener to login button for redirection
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../Login/login.html';
    });

    // Append error text to container
    form.appendChild(errorText);
});

document.addEventListener("DOMContentLoaded", function() {
    var donorRadioButton = document.getElementById("donor");
    var organizationRadioButton = document.getElementById("organization");
    var donorTypeDropdown = document.getElementById("donorTypeDropdown");

    // Initially hide the dropdown
    donorTypeDropdown.style.display = "none";

    donorRadioButton.addEventListener("click", function() {
        // Toggle the visibility of the dropdown
        donorTypeDropdown.style.display = donorRadioButton.checked ? "block" : "none";
    });

    organizationRadioButton.addEventListener("click", function() {
        // Hide the dropdown when the organization radio button is clicked
        donorTypeDropdown.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var donorRadioButton = document.getElementById("donor");
    var organizationRadioButton = document.getElementById("organization");
    var donorTypeDropdown = document.getElementById("donorType");
    var documentUpload = document.getElementById("document").closest('.form-group');

    // Initially hide the document upload component
    documentUpload.style.display = "none";

    function updateDocumentVisibility() {
        if (organizationRadioButton.checked || (donorRadioButton.checked && (donorTypeDropdown.value === "teacher" || donorTypeDropdown.value === "doctor"))) {
            documentUpload.style.display = "block";
        } else {
            documentUpload.style.display = "none";
        }
    }

    donorRadioButton.addEventListener("click", updateDocumentVisibility);
    organizationRadioButton.addEventListener("click", updateDocumentVisibility);
    donorTypeDropdown.addEventListener("change", updateDocumentVisibility);
});

document.addEventListener("DOMContentLoaded", function() {
    var organizationRadioButton = document.getElementById("organization");
    var mapContainer = document.getElementById("map");
    var map;
    var marker;

    organizationRadioButton.addEventListener("change", function() {
        if (organizationRadioButton.checked) {
            // Initialize the map
            map = new google.maps.Map(mapContainer, {
                center: {lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE}, // Set the initial center of the map
                zoom: 15 // Set the initial zoom level
            });

            // Set the marker at the organization location
            marker = new google.maps.Marker({
                position: {lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE}, // Set the location of the marker
                map: map, // Set the map to display the marker
                title: 'Organization Location' // Set the title of the marker
            });
        } else {
            // Remove the map and marker when the organization radio button is deselected
            map = null;
            marker = null;
            mapContainer.innerHTML = ''; // Remove the map container content
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var donorRadioButton = document.getElementById("donor");
    var organizationRadioButton = document.getElementById("organization");
    var donorTypeDropdown = document.getElementById("donorType");
    var clinicAddressField = document.getElementById("clinicAddress");
    var clinicAreaField = document.getElementById("clinicArea");
    var clinicGovernorateField = document.getElementById("clinicGovernorate");
    var addressFormGroup = document.getElementById("addressFormGroup");
    var governorateFormGroup = document.getElementById("governorateFormGroup");

    // Initially hide the clinic fields
    var doctorFields = document.getElementById("doctorFields");
    doctorFields.style.display = "none";

    // Event listener for changes in the dropdown selection
    donorTypeDropdown.addEventListener("change", function() {
        if (donorTypeDropdown.value === "doctor") {
            doctorFields.style.display = "block"; // Show the doctor fields
            // Remove the address and governorate sections from the DOM
            addressFormGroup.remove();
            governorateFormGroup.remove();
        } else {
            doctorFields.style.display = "none"; // Hide the doctor fields
            // Add the address and governorate sections back to the DOM
            document.getElementById("registration-form").appendChild(addressFormGroup);
            document.getElementById("registration-form").appendChild(governorateFormGroup);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var donorRadioButton = document.getElementById("donor");
    var donorTypeDropdown = document.getElementById("donorType");
    var specialityField = document.getElementById("speciality");
    var probonoField = document.getElementById("probono");

    // Initially hide the donor fields
    var donorFields = document.getElementById("donorFields");
    donorFields.style.display = "none";

    // Event listener for changes in the dropdown selection
    donorTypeDropdown.addEventListener("change", function() {
        if (donorRadioButton.checked && donorTypeDropdown.value === "doctor") {
            donorFields.style.display = "block"; // Show the donor fields if donor option is selected and doctor is chosen
        } else {
            donorFields.style.display = "none"; // Hide the donor fields for other options
        }
    });

    // Event listener for changes in the radio button selection
    donorRadioButton.addEventListener("change", function() {
        if (donorRadioButton.checked) {
            if (donorTypeDropdown.value === "doctor") {
                donorFields.style.display = "block"; // Show the donor fields if donor option is selected and doctor is chosen
            } else {
                donorFields.style.display = "none"; // Hide the donor fields if not doctor
            }
        }
    });
});
