document.addEventListener("DOMContentLoaded", function() {
    const addProjectForm = document.getElementById("add-project-form");
    const addProjectButton = document.getElementById("add-project-button");

    if (addProjectForm && addProjectButton) {
        addProjectButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form submission

            const projectName = document.getElementById("project-name").value;
            const ownerName = addProjectForm.querySelector("input:nth-of-type(2)").value;
            const email = addProjectForm.querySelector("input:nth-of-type(3)").value;
            const projectDescription = document.getElementById("project-description").value;
            const projectCategory = document.getElementById("project-category").value;

            // Store project data in local storage
            localStorage.setItem("projectName", projectName);
            localStorage.setItem("ownerName", ownerName);
            localStorage.setItem("email", email);
            localStorage.setItem("projectDescription", projectDescription);
            localStorage.setItem("projectCategory", projectCategory);

            // Display a confirmation message
            alert("Project added successfully!");
        });
    }
});
