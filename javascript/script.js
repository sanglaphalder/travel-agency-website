/**
 * javascript/script.js
 * Ruler Tours — All shared JS
 * Navbar injection · Footer · Theme (logo swap) · Mobile menu
 * Scroll effects · Reveal · Toast · Auth forms · Contact · Modals
 */

/* ============================================================
   NAVBAR INJECTION
   ============================================================ */
function buildNavbar() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const isAuthPage  = ['login.html', 'signup.html'].includes(currentFile);

    const pages = [
        { href: 'index.html',   label: 'Home' },
        { href: 'tours.html',   label: 'Tours' },
        { href: 'rentals.html', label: 'Rentals' },
        { href: 'about.html',   label: 'About' },
        { href: 'contact.html', label: 'Contact' }
    ];

    const navLinksHTML = pages.map(p => {
        const active = currentFile === p.href ? 'active' : '';
        return `<li><a href="${p.href}" class="${active}">${p.label}</a></li>`;
    }).join('');

    const mobileLinksHTML = pages.map(p => {
        const active = currentFile === p.href ? 'active' : '';
        return `<a href="${p.href}" class="${active}">${p.label}</a>`;
    }).join('');

    const navbarHTML = `
    <nav class="navbar" id="main-navbar">
        <div class="container">
            <a href="index.html" class="nav-brand">
                <img
                    src="assets/light_logo.png"
                    alt="Ruler Tours"
                    class="nav-logo nav-logo-light"
                    onerror="this.style.display='none'"
                >
                <img
                    src="assets/light_logo.png"
                    alt="Ruler Tours"
                    class="nav-logo nav-logo-dark"
                    onerror="this.style.display='none'"
                >
                <span class="nav-brand-name">Ruler Tours</span>
            </a>

            <ul class="nav-links">
                ${navLinksHTML}
            </ul>

            <div class="nav-right">
                <button class="theme-toggle" id="themeToggle" title="Toggle dark mode" aria-label="Toggle dark mode">
                    🌙
                </button>
                ${!isAuthPage ? `
                <a href="login.html"  class="btn-login">Login</a>
                <a href="signup.html" class="btn-signup">Sign Up</a>
                ` : ''}
            </div>

            <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <nav class="mobile-nav" id="mobileNav" aria-hidden="true">
        ${mobileLinksHTML}
        ${!isAuthPage ? `
        <hr class="mobile-nav-divider">
        <div class="mobile-nav-btns">
            <a href="login.html"  class="btn-login">Login</a>
            <a href="signup.html" class="btn-signup">Sign Up</a>
        </div>
        ` : ''}
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}


/* ============================================================
   FOOTER INJECTION
   ============================================================ */
function buildFooter() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    if (['login.html', 'signup.html'].includes(currentFile)) return;

    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <img src="assets/light_logo.png" alt="Ruler Tours" class="footer-logo footer-logo-light" onerror="this.style.display='none'">
                    <img src="assets/dark_logo.png"  alt="Ruler Tours" class="footer-logo footer-logo-dark"  onerror="this.style.display='none'">
                    <div class="footer-brand-name">Ruler Tours</div>
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
                <div>
                    <div class="footer-col-title">Destinations</div>
                    <div class="footer-links">
                        <a href="tours.html">Darjeeling</a>
                        <a href="tours.html">Kurseong</a>
                        <a href="tours.html">Lava &amp; Loleygaon</a>
                        <a href="tours.html">Dooars &amp; Jaldapara</a>
                        <a href="tours.html">Kalimpong</a>
                        <a href="tours.html">Sittong (Offbeat)</a>
                    </div>
                </div>
                <div>
                    <div class="footer-col-title">Contact Us</div>
                    <div class="footer-contact-item"><i class="fas fa-phone"></i>+91 98765 43210</div>
                    <div class="footer-contact-item"><i class="fas fa-envelope"></i>contact@rulertours.com</div>
                    <div class="footer-contact-item"><i class="fas fa-map-marker-alt"></i>Siliguri, West Bengal, India</div>
                    <div class="footer-contact-item"><i class="far fa-clock"></i>Mon–Sat: 9AM – 7PM</div>
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
   THEME  (light / dark + logo swap)
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
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('rt-theme', isDark ? 'dark' : 'light');
    updateThemeBtn();
}


/* ============================================================
   SCROLL — glassmorphism navbar on scroll
   ============================================================ */
function initScrollEffects() {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;

    function onScroll() {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
}


/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    if (!hamburger || !mobileNav) return;

    function setMenu(open) {
        hamburger.classList.toggle('open', open);
        mobileNav.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        mobileNav.setAttribute('aria-hidden', String(!open));
        document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        setMenu(!mobileNav.classList.contains('open'));
    });

    mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            setMenu(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 860) setMenu(false);
    });
}


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    els.forEach(el => obs.observe(el));
}


/* ============================================================
   TOAST
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
    toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3600);
}


/* ============================================================
   PASSWORD TOGGLE
   ============================================================ */
function initPasswordToggles() {
    document.querySelectorAll('.auth-toggle-pw').forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.closest('.auth-input-wrap')?.querySelector('.auth-input');
            if (!input) return;
            const show = input.type === 'password';
            input.type = show ? 'text' : 'password';
            this.innerHTML = show
                ? '<i class="fas fa-eye-slash"></i>'
                : '<i class="fas fa-eye"></i>';
        });
    });
}


/* ============================================================
   AUTH FORMS  (frontend only)
   ============================================================ */
function initAuthForms() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            showToast('Welcome back! Redirecting…');
            setTimeout(() => { window.location.href = 'index.html'; }, 1200);
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', e => {
            e.preventDefault();
            const pw  = document.getElementById('signupPw')?.value  || '';
            const cpw = document.getElementById('signupCpw')?.value || '';
            if (pw && cpw && pw !== cpw) {
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
        const btn = form.querySelector('[type="submit"]');
        if (btn) btn.style.display = 'none';
        showToast('Message sent! We\'ll reply within 4 hours.');
    });
}


/* ============================================================
   MODAL HELPERS
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
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', e => {
            if (e.target === backdrop) closeModal(backdrop.id);
        });
    });
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const b = btn.closest('.modal-backdrop');
            if (b) closeModal(b.id);
        });
    });
    // ESC key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-backdrop.open').forEach(b => closeModal(b.id));
        }
    });
}


/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme first (avoid flash)
    initTheme();

    // 2. Inject navbar + footer
    buildNavbar();
    buildFooter();

    // 3. Wire theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // 4. Scroll glassmorphism
    initScrollEffects();

    // 5. Mobile menu
    initMobileMenu();

    // 6. Scroll reveal
    initReveal();

    // 7. Auth
    initAuthForms();
    initPasswordToggles();

    // 8. Contact
    initContactForm();

    // 9. Modals
    initModals();
});
