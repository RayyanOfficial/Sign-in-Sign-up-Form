function toggleForms() {
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
  
    signinForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
  }
  
  // Optional: Handle form submissions
  document.getElementById("signin-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Signed In as: " + document.getElementById("signin-email").value);
  });
  
  document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Signed Up as: " + document.getElementById("signup-email").value);
  });
  