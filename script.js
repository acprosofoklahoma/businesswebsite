document.addEventListener("DOMContentLoaded", function() {
    let dropdownBtn = document.querySelector(".dropbtn"); // Find the dropdown button
    let dropdownContent = document.querySelector(".dropdown-content"); // Find the dropdown menu

    dropdownBtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("show"); // Toggle visibility
    });

    // Close dropdown if clicking outside of it
    window.addEventListener("click", function(event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show"); // Hide menu
        }
    });
});
