// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation (additional validation can be added)
  if (name && email && message) {
    document.getElementById("formMessage").textContent =
      "Thank you for reaching out, I'll get back to you soon!";
    // Reset form
    this.reset();
  } else {
    document.getElementById("formMessage").textContent =
      "Please fill in all fields.";
    document.getElementById("formMessage").style.color = "red";
  }
});
