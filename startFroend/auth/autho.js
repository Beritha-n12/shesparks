document.addEventListener("DOMContentLoaded", function() {
    // Get form elements
    const loginForm = document.getElementById("investor-login-form");
    const signupForm = document.getElementById("investor-signup-form");
  
    // Add event listener for login form submission
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      const email = loginForm.querySelector("input[type='email']").value;
      const password = loginForm.querySelector("#password-input").value;
  
      // Save login data to local storage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  
      // You can redirect user or perform any other action here after login
    });
  
    // Add event listener for signup form submission
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      const orgName = signupForm.querySelector("input:nth-of-type(1)").value;
      const username = signupForm.querySelector("input:nth-of-type(2)").value;
      const email = signupForm.querySelector("input:nth-of-type(3)").value;
      const password = signupForm.querySelector("#password-input-signup").value;
  
      // Save signup data to local storage
      localStorage.setItem("orgName", orgName);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
  
      // You can redirect user or perform any other action here after signup
    });
  
    // Show/hide password on eye icon click
    const passwordFields = document.querySelectorAll(".password-field");
    passwordFields.forEach(function(field) {
      const eyeIcon = field.querySelector(".eye");
      const passwordInput = field.querySelector("input[type='password']");
      eyeIcon.addEventListener("click", function() {
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          eyeIcon.querySelector("i").classList.remove("fa-eye");
          eyeIcon.querySelector("i").classList.add("fa-eye-slash");
        } else {
          passwordInput.type = "password";
          eyeIcon.querySelector("i").classList.remove("fa-eye-slash");
          eyeIcon.querySelector("i").classList.add("fa-eye");
        }
      });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const passwordFields = document.querySelectorAll(".password-field");

    passwordFields.forEach(function(field) {
        const eyeIcon = field.querySelector(".eye");
        const passwordInput = field.querySelector("input[type='password']");
        
        eyeIcon.addEventListener("click", function() {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeIcon.classList.add("active");
            } else {
                passwordInput.type = "password";
                eyeIcon.classList.remove("active");
            }
        });
    });

    const loginForm = document.getElementById("user-login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            const email = loginForm.querySelector("input[type='email']").value;
            const password = loginForm.querySelector("#password-input").value;

            // Here you can implement your login logic
            console.log("Login attempt with email:", email, "and password:", password);
        });
    }

    const signupForm = document.getElementById("user-signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            const username = signupForm.querySelector("input[type='text']").value;
            const email = signupForm.querySelector("input[type='email']").value;
            const password = signupForm.querySelector("input[type='password']").value;

            // Here you can implement your signup logic
            console.log("Signup attempt with username:", username, "email:", email, "and password:", password);
        });
    }
});
