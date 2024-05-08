document.addEventListener("DOMContentLoaded", function() {
  const submitBtn = document.getElementById("submit");
  const etaTime = document.getElementById("eta-time");
  const notificationCheckbox = document.getElementById("notification");
  const errorMessage = document.getElementById("error-message");

  // Function to calculate and display ETA
  const calculateETA = () => {
    // Perform ETA calculation logic here
    const pickupTime = new Date(document.getElementById("pickup-time").value);
    const now = new Date();
    if (pickupTime <= now) {
      errorMessage.textContent = "Please select a future pickup time.";
      return;
    }
    // Example: Add 2 hours to pickup time for ETA
    const eta = new Date(pickupTime.getTime() + 2 * 60 * 60 * 1000);
    etaTime.textContent = eta.toLocaleTimeString();
    errorMessage.textContent = "";
  };

  // Listen for changes in pickup time or transportation type
  document.getElementById("pickup-time").addEventListener("change", calculateETA);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if required fields are filled
    const transportation = document.getElementById("transportation").value;
    const pickupTime = document.getElementById("pickup-time").value;
    if (!transportation || !pickupTime) {
      errorMessage.textContent = "Please fill out all required fields.";
      return;
    }
    // Check if pickup time is in the future
    const now = new Date();
    const selectedPickupTime = new Date(pickupTime);
    if (selectedPickupTime <= now + 2 * 60 * 60 * 1000 ) {
      errorMessage.textContent = "Please select a pickup time at least 2 hours in the future.";
      return;
    }
    // Submit form data to server or perform other actions here
    // Example: Show notification option
    if (notificationCheckbox.checked) {
      alert("Scheduled successfully. You will receive a notification when the driver arrives.");
    }
    // Clear error message
    errorMessage.textContent = "";
  };

  // Listen for form submission
  submitBtn.addEventListener("click", handleSubmit);

  // Function to handle back button click
  const handleBack = () => {
    // Navigate back to previous page or perform other actions
    // For demonstration, we'll just go back in the browser history
    window.history.back();
  };

  // Listen for back button click
  document.getElementById("back").addEventListener("click", handleBack);
});
