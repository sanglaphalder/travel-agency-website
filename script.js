document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navLinkItems = document.querySelectorAll(".nav-links a");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // HAMBURGER MENU TOGGLE

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // CLOSE MENU WHEN LINK CLICKED

    navLinkItems.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });

    // CLOSE MENU WHILE CLICKING OUTSIDE

    document.addEventListener("click", function (event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickHamburger) {
            navLinks.classList.remove("active");
        }
    });

    // CLOSE MENU ON RESIZE

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
        }
    });

    // THEME TOGGLE

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

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
