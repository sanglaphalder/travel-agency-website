const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// HAMBURGER MENU TOGGLE

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// CLOSE MENU WHEN LINK CLICKED (MOBILE)

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (e) => {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});


// DARK / LIGHT THEME TOGGLE

if (themeToggle) {

    // Load saved theme on page load
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// CONTACT FORM HANDLING

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector("input[type='text']");
        const email = contactForm.querySelector("input[type='email']");
        const message = contactForm.querySelector("textarea");

        // VALIDATION
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        // EMAIL VALIDATION
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // SUCCESS MESSAGE
        alert("Thank you for contacting Ruler Travels! We will get back to you soon.");

        // RESET FORM
        contactForm.reset();

        // CLOSE MOBILE MENU IF OPEN
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });

}