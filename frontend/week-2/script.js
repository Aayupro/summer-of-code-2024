// Define the API endpoint for authentication
const LOGIN_API_URL = "https://api-dsoc.vercel.app/api/login/";

// Utility function to display messages
function displayMessage(message, type = "success") {
  const messageContainer = document.createElement("div");
  messageContainer.className = `alert alert-${type}`;
  messageContainer.innerText = message;

  // Append message to body and auto-remove it after 3 seconds
  document.body.appendChild(messageContainer);
  setTimeout(() => {
    document.body.removeChild(messageContainer);
  }, 3000);
}

// Handle Signup Submission
document.getElementById("shop-signup").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-password-confirm").value;

  // Password confirmation check
  if (password !== confirmPassword) {
    displayMessage("Passwords do not match!", "danger");
    return;
  }

  try {
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Token:", data.token); // Save the token securely
      displayMessage("Signup successful! Redirecting...", "success");

      // Redirect to home page after signup
      setTimeout(() => {
        window.location.href = "home.html";
      }, 2000);
    } else {
      const errorData = await response.json();
      displayMessage(`Error: ${errorData.message}`, "danger");
    }
  } catch (error) {
    displayMessage("Network error. Please try again later.", "danger");
  }
});

// Handle Login Submission
document.getElementById("shop-login").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Token:", data.token); // Save the token securely
      displayMessage("Login successful! Redirecting...", "success");

      // Redirect to home page after login
      setTimeout(() => {
        window.location.href = "home.html";
      }, 2000);
    } else {
      const errorData = await response.json();
      displayMessage(`Error: ${errorData.message}`, "danger");
    }
  } catch (error) {
    displayMessage("Network error. Please try again later.", "danger");
  }
});
