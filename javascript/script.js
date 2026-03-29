/**
 * javascript/script.js
 * Ruler Tours — Shared JavaScript
 * Handles: Navbar injection, theme toggle, mobile menu,
 *          auth forms, contact form, scroll reveal, toast
 */

/* ============================================================
   NAVBAR INJECTION
   ============================================================ */

function buildNavbar() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // Determine relative prefix based on current file location
    // Pages in root: no prefix. Pages in sub-folder: '../'
    // All our pages are in root, so prefix = ''
    const prefix = '';

    const pages = [
        { href: 'index.html',   label: 'Home' },
        { href: 'tours.html',   label: 'Tours' },
        { href: 'rentals.html', label: 'Rentals' },
        { href: 'about.html',   label: 'About' },
        { href: 'contact.html', label: 'Contact' }
    ];

    const navLinksHTML = pages.map(p => {
        const active = currentFile === p.href ? 'active' : '';
        return `<li><a href="${prefix}${p.href}" class="${active}">${p.label}</a></li>`;
    }).join('');

    const mobileLinksHTML = pages.map(p => {
        const active = currentFile === p.href ? 'active' : '';
        return `<a href="${prefix}${p.href}" class="${active}">${p.label}</a>`;
    }).join('');

    const isAuthPage = ['login.html', 'signup.html'].includes(currentFile);

    const navbarHTML = `
    <nav class="navbar" id="main-navbar">
        <div class="container">
            <a href="${prefix}index.html" class="nav-brand">
                <img src="${prefix}assets/logo.png" alt="Ruler Tours Logo" 
                     onerror="this.style.display='none'">
                <div class="nav-brand-text">
                    <span class="nav-brand-name">Ruler Tours</span>
                    <span class="nav-brand-tagline">We Burn Fuel, You Make Memories</span>
                </div>
            </a>

            <ul class="nav-links">
                ${navLinksHTML}
            </ul>

            <div class="nav-right">
                <button class="theme-toggle" id="themeToggle" title="Toggle dark mode">
                    🌙
                </button>
                ${!isAuthPage ? `
                <a href="${prefix}login.html" class="btn-login">Login</a>
                <a href="${prefix}signup.html" class="btn-signup">Sign Up</a>
                ` : ''}
            </div>

            <button class="hamburger" id="hamburger" aria-label="Open menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <nav class="mobile-nav" id="mobileNav">
        ${mobileLinksHTML}
        ${!isAuthPage ? `
        <hr class="mobile-nav-divider">
        <div class="mobile-nav-btns">
            <a href="${prefix}login.html" class="btn-login">Login</a>
            <a href="${prefix}signup.html" class="btn-signup">Sign Up</a>
        </div>
        ` : ''}
    </nav>
    `;

    // Inject at top of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}


/* ============================================================
   FOOTER INJECTION
   ============================================================ */

function buildFooter() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const isAuthPage  = ['login.html', 'signup.html'].includes(currentFile);
    if (isAuthPage) return; // No footer on auth pages

    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Brand -->
                <div>
                    <div class="footer-brand-name">👑 Ruler Tours</div>
                    <div class="footer-tagline">"We Burn Fuel, You Make Memories"</div>
                    <p class="footer-desc">
                        Budget-friendly, curated travel experiences across North Bengal —
                        from misty Himalayan peaks to wild jungle safaris.
                    </p>
                    <div class="footer-socials">
                        <a class="footer-social-link" href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a class="footer-social-link" href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="footer-social-link" href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        <a class="footer-social-link" href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <div class="footer-col-title">Explore</div>
                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="tours.html">Tour Packages</a>
                        <a href="rentals.html">Vehicle Rentals</a>
                        <a href="about.html">About Us</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>

                <!-- Destinations -->
                <div>
                    <div class="footer-col-title">Destinations</div>
                    <div class="footer-links">
                        <a href="tours.html">Darjeeling</a>
                        <a href="tours.html">Kurseong</a>
                        <a href="tours.html">Lava & Loleygaon</a>
                        <a href="tours.html">Dooars & Jaldapara</a>
                        <a href="tours.html">Kalimpong</a>
                        <a href="tours.html">Sittong (Offbeat)</a>
                    </div>
                </div>

                <!-- Contact -->
                <div>
                    <div class="footer-col-title">Contact Us</div>
                    <div class="footer-contact-item">
                        <i class="fas fa-phone"></i>
                        +91 98765 43210
                    </div>
                    <div class="footer-contact-item">
                        <i class="fas fa-envelope"></i>
                        contact@rulertours.com
                    </div>
                    <div class="footer-contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        Siliguri, West Bengal, India
                    </div>
                    <div class="footer-contact-item">
                        <i class="far fa-clock"></i>
                        Mon–Sat: 9AM – 7PM
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">© 2026 Ruler Tours. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="contact.html">Support</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}


/* ============================================================
   THEME
   ============================================================ */

function initTheme() {
    const saved = localStorage.getItem('rt-theme') || 'light';
    if (saved === 'dark') document.body.classList.add('dark');
    updateThemeBtn();
}

function updateThemeBtn() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('rt-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateThemeBtn();
}


/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 70);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    els.forEach(el => obs.observe(el));
}


/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */

function showToast(message, type = 'success') {
    let toast = document.getElementById('rt-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'rt-toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    toast.classList.add('show');

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}


/* ============================================================
   PASSWORD TOGGLE
   ============================================================ */

function initPasswordToggles() {
    document.querySelectorAll('.auth-toggle-pw').forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.closest('.auth-input-wrap').querySelector('.auth-input');
            if (!input) return;
            const isText = input.type === 'text';
            input.type = isText ? 'password' : 'text';
            this.innerHTML = isText
                ? '<i class="fas fa-eye"></i>'
                : '<i class="fas fa-eye-slash"></i>';
        });
    });
}


/* ============================================================
   AUTH FORMS (Frontend only — no backend)
   ============================================================ */

function initAuthForms() {
    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            showToast('Welcome back! Redirecting…');
            setTimeout(() => { window.location.href = 'index.html'; }, 1200);
        });
    }

    // Signup
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', e => {
            e.preventDefault();
            const pw  = document.getElementById('signupPw')?.value || '';
            const cpw = document.getElementById('signupCpw')?.value || '';
            if (pw !== cpw) {
                showToast('Passwords do not match.', 'error');
                return;
            }
            showToast('Account created! Welcome to Ruler Tours.');
            setTimeout(() => { window.location.href = 'index.html'; }, 1400);
        });
    }
}


/* ============================================================
   CONTACT FORM
   ============================================================ */

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const success = document.getElementById('cfSuccess');
        if (success) success.classList.add('show');
        form.querySelector('[type="submit"]').style.display = 'none';
        showToast('Message sent! We\'ll reply within 24 hours.');
    });
}


/* ============================================================
   MODAL (Generic)
   ============================================================ */

function openModal(id) {
    const backdrop = document.getElementById(id);
    if (!backdrop) return;
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const backdrop = document.getElementById(id);
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
}

function initModals() {
    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', e => {
            if (e.target === backdrop) closeModal(backdrop.id);
        });
    });

    // Close button
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const backdrop = btn.closest('.modal-backdrop');
            if (backdrop) closeModal(backdrop.id);
        });
    });
}


/* ============================================================
   INIT — runs on every page
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Apply saved theme BEFORE building navbar (prevents flash)
    initTheme();

    // 2. Build navbar & footer
    buildNavbar();
    buildFooter();

    // 3. Wire up theme toggle (injected by buildNavbar)
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // 4. Mobile menu
    initMobileMenu();

    // 5. Scroll reveal
    initReveal();
    window.addEventListener('scroll', initReveal, { passive: true });

    // 6. Auth forms
    initAuthForms();
    initPasswordToggles();

    // 7. Contact form
    initContactForm();

    // 8. Modals
    initModals();
});