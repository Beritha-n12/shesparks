document.addEventListener("DOMContentLoaded", function() {
    // Responsive navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav-menu_visible');
      });
    }
  
    // Store data in local storage
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
  
        const name = contactForm.querySelector("input[type='text']").value;
        const email = contactForm.querySelector("input[type='email']").value;
        const message = contactForm.querySelector("textarea").value;
  
        // Store contact form data in local storage
        localStorage.setItem("contactName", name);
        localStorage.setItem("contactEmail", email);
        localStorage.setItem("contactMessage", message);
  
        // You can display a confirmation message or perform other actions here
        alert("Message submitted successfully!");
      });
    }
});
  