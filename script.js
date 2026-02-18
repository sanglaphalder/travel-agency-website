document.addEventListener("DOMContentLoaded", function () {

    // Select required elements
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navLinkItems = document.querySelectorAll(".nav-links a");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Toggle hamburger menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinkItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickHamburger) {
            navLinks.classList.remove("active");
        }
    });

    // Close menu on window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
        }
    });

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });

});