// 🎉 Part 1: Event Handling
// Example: Button click displays a message
document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("clickMsg").textContent = "Button was clicked! 🚀";
});

// 🎮 Part 2: Interactive Elements

// 1) Light/Dark Mode Toggle
document.getElementById("toggleModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2) Counter Game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counterValue").textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  document.getElementById("counterValue").textContent = count;
});

// 📋 Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form submission until validation passes
  const errors = [];

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validate Name
  if (name === "") {
    errors.push("⚠️ Name cannot be empty");
  }

  // Validate Email with Regex
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    errors.push("⚠️ Please enter a valid email address");
  }

  // Validate Password (at least 6 characters, one number)
  const passRegex = /^(?=.*[0-9]).{6,}$/;
  if (!passRegex.test(password)) {
    errors.push("⚠️ Password must be at least 6 characters and contain a number");
  }

  // Show Errors or Success
  const errorDiv = document.getElementById("formErrors");
  errorDiv.innerHTML = "";
  if (errors.length > 0) {
    errorDiv.style.color = "red";
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.style.color = "green";
    errorDiv.textContent = "✅ Form submitted successfully!";
    // Here you could send the data to a server with fetch()
  }
});
