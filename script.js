document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navLinkItems = document.querySelectorAll(".nav-links a");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Toggle hamburger menu + prevent background scroll
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        body.classList.toggle("no-scroll");
    });

    // Close menu when a link is clicked
    navLinkItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            body.classList.remove("no-scroll");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickHamburger) {
            navLinks.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });

    // Close menu on window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    // Toggle theme
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

    // --- AUTH INTEGRATION ---

    const API_URL = "http://localhost:3000/api/auth";

    // Helper for Toast Notifications
    function showToast(message, type = "success") {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: type === "success" ? "#2E7D32" : "#D32F2F",
            close: true
        }).showToast();
    }

    // Sign Up Logic
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("signupConfirmPassword").value;

            if (password !== confirmPassword) {
                showToast("Passwords do not match!", "error");
                return;
            }

            try {
                const response = await fetch(`${API_URL}/register`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await response.json();

                if (data.success) {
                    showToast(data.message);
                    setTimeout(() => {
                        window.location.href = "login.html";
                    }, 2000);
                } else {
                    showToast(data.message, "error");
                }
            } catch (error) {
                showToast("Something went wrong!", "error");
            }
        });
    }

    // Login Logic
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (data.success) {
                    showToast(data.message);
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.userData));
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 2000);
                } else {
                    showToast(data.message, "error");
                }
            } catch (error) {
                showToast("Something went wrong!", "error");
            }
        });
    }

});