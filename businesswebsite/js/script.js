document.addEventListener("DOMContentLoaded", function () {
    // Dropdown Menu Functionality (Supports Multiple Dropdowns)
    let dropdownBtns = document.querySelectorAll(".dropbtn");

    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.stopPropagation();
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                dropdownContent.classList.toggle("show");
            }
        });
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", function (event) {
        document.querySelectorAll(".dropdown-content").forEach(dropdown => {
            if (!dropdown.previousElementSibling.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
            }
        });
    });

    // Floating Contact Button Functionality
    let floatingBtn = document.querySelector(".floating-btn");
    if (floatingBtn) {
        floatingBtn.addEventListener("click", function () {
            alert("Thank you for reaching out! Please visit our Contact page for more details.");
            window.location.href = "contact.html"; // Redirect to contact page
        });
    }

    // Smooth Scrolling for Internal Links (Only Applies to # Sections)
    let navLinks = document.querySelectorAll("nav a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            let targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Ensures dropdown closes on window resize
    window.addEventListener("resize", function () {
        document.querySelectorAll(".dropdown-content").forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    });
});

