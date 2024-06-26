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
    var donorTypeDropdown = document.getElementById("donorType");
    var clinicFields = document.getElementById("doctorFields");

    // Initially hide the clinic fields only
    clinicFields.style.display = "none";

    // Event listener for changes in the dropdown selection
    donorTypeDropdown.addEventListener("change", function() {
        if (donorTypeDropdown.value === "doctor") {
            clinicFields.style.display = "block"; // Show the doctor fields
        } else {
            clinicFields.style.display = "none"; // Hide the doctor fields
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

document.addEventListener("DOMContentLoaded", function() {
    var donorTypeDropdown = document.getElementById("donorType");
    var teacherFields = document.getElementById("teacherFields");
    var addressFormGroup = document.getElementById("addressFormGroup");
    var governorateFormGroup = document.getElementById("governorateFormGroup");

    // Initially hide the teacher fields
    teacherFields.style.display = "none";

    // Event listener for changes in the dropdown selection
    donorTypeDropdown.addEventListener("change", function() {
        if (donorTypeDropdown.value === "teacher") {
            teacherFields.style.display = "block"; // Show the teacher fields
            addressFormGroup.style.display = "none"; // Hide the address field
            governorateFormGroup.style.display = "none"; // Hide the governorate field
        } else {
            teacherFields.style.display = "none"; // Hide the teacher fields
            addressFormGroup.style.display = "block"; // Show the address field
            governorateFormGroup.style.display = "block"; // Show the governorate field
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var donorTypeDropdown = document.getElementById("donorType");
    var clinicFields = document.getElementById("doctorFields");
    var teacherFields = document.getElementById("teacherFields");
    var addressFormGroup = document.getElementById("addressFormGroup");
    var governorateFormGroup = document.getElementById("governorateFormGroup");

    // Initially hide the clinic and teacher fields
    clinicFields.style.display = "none";
    teacherFields.style.display = "none";
    
    // Event listener for changes in the dropdown selection
    donorTypeDropdown.addEventListener("change", function() {
        if (donorTypeDropdown.value === "doctor") {
            clinicFields.style.display = "block"; // Show the doctor fields
            teacherFields.style.display = "none"; // Hide the teacher fields
            addressFormGroup.style.display = "none"; // Hide the address field
            governorateFormGroup.style.display = "none"; // Hide the governorate field
        } else if (donorTypeDropdown.value === "teacher") {
            clinicFields.style.display = "none"; // Hide the doctor fields
            teacherFields.style.display = "block"; // Show the teacher fields
            addressFormGroup.style.display = "none"; // Hide the address field
            governorateFormGroup.style.display = "none"; // Hide the governorate field
        } else {
            clinicFields.style.display = "none"; // Hide the doctor fields
            teacherFields.style.display = "none"; // Hide the teacher fields
            addressFormGroup.style.display = "block"; // Show the address field
            governorateFormGroup.style.display = "block"; // Show the governorate field
        }
    });
});

// Function to save user type to localStorage
function saveUserType() {
    const userType = document.querySelector('input[name="usertype"]:checked').value;
    localStorage.setItem('userType', userType);
}

// Event listener for radio button change
document.querySelectorAll('input[name="usertype"]').forEach((radio) => {
    radio.addEventListener('change', saveUserType);
});

// Function to open the map modal
function openMapModal() {
    document.getElementById("mapModal").style.display = "block";
    initializeMap();
  }
  
  // Function to close the map modal
  function closeMapModal() {
    document.getElementById("mapModal").style.display = "none";
  }
  
  // Function to initialize the map with a draggable marker
  function initializeMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.7128, lng: -74.0060 }, // Initial map center
      zoom: 10, // Initial zoom level
    });
  
    // Add a draggable marker to the map
    const marker = new google.maps.Marker({
      position: { lat: 40.7128, lng: -74.0060 }, // Initial marker position
      map: map,
      draggable: true, // Allow the marker to be dragged
    });
  }
  