
	//home-cashier
document.addEventListener("DOMContentLoaded", () => {
		// Elements
	const openFormBtn = document.getElementById("open-form-btn");
	const customerForm = document.getElementById("customer-form");
	const logoutBtn = document.getElementById("logout-btn");
	  
		// Toggle Form Visibility
	openFormBtn.addEventListener("click", () => {
		if (customerForm.style.display === "none" || customerForm.style.display === "") {
		customerForm.style.display = "block"; // Show form
		} else {
		customerForm.style.display = "none"; // Hide form
		  }
		});
	  
		// Logout Functionality
	logoutBtn.addEventListener("click", () => {
		  alert("You have successfully logged out.");
		  window.location.href = "index.html"; // Redirect to homepage
		});
	  
		// Handle Form Submission
	const form = document.getElementById("details-form");
		form.addEventListener("submit", (e) => {
		  e.preventDefault();
		  alert("Form submitted successfully!");
		  form.reset();
		  customerForm.style.display = "none"; // Hide form after submission
		});
	  });
const profileBtn = document.getElementById("profile-btn");
const profileCard = document.getElementById("profile-card");
const closeProfileBtn = document.getElementById("close-profile-btn");
	  
profileBtn.addEventListener("click", () => {
profileCard.classList.toggle("hidden");
});
	  
closeProfileBtn.addEventListener("click", () => {
profileCard.classList.add("hidden");
});
// Vanta.js Cells Effect
// script.js
// script.js

// Set the duration of the shift in seconds (e.g., 2 hours = 2 * 60 * 60 seconds)
const shiftDuration = 2 * 60 * 60; // Change this as needed

// Reference to the countdown element
const countdownElement = document.getElementById("countdown");

// Function to format time as HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

// Function to update the timer every second
function startCountdown(duration) {
    let timeLeft = duration;

    const timerInterval = setInterval(() => {
        // Update the timer display
        countdownElement.textContent = formatTime(timeLeft);

        // Check if the timer has reached 0
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = "Shift Over!";
        } else {
            timeLeft--;
        }
    }, 1000);
}

// Start the countdown
startCountdown(shiftDuration);


const toggleCheckbox = document.getElementById('theme-toggle');

toggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
