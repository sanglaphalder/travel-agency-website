# 👑 Ruler Tours — Frontend

Budget-friendly travel agency website for **North Bengal, West Bengal, India**.

**Tagline:** *"We Burn Fuel, You Make Memories"*

---

## 📂 Project Structure

```
/
├── index.html          ← Home page
├── tours.html          ← Tour packages (dynamically rendered)
├── rentals.html        ← Vehicle rentals (dynamically rendered)
├── about.html          ← About the agency
├── contact.html        ← Contact & enquiry form
├── login.html          ← Login page
├── signup.html         ← Sign up page
│
├── css/
│   ├── global.css      ← Shared styles: reset, navbar, footer, utilities, buttons
│   ├── home.css        ← Home page specific styles (hero, destinations, etc.)
│   ├── tours.css       ← Tours page styles (filter bar, tour cards, modal)
│   └── pages.css       ← Rentals, auth (login/signup), contact page styles
│
├── javascript/
│   └── script.js       ← All shared JS: navbar injection, footer injection,
│                          theme toggle, mobile menu, scroll reveal,
│                          toast notifications, auth forms, contact form
│
├── db/
│   ├── tour-data.js            ← Array of North Bengal tour packages
│   └── rental-vehicle-data.js  ← Arrays of car & bike rental data
│
└── assets/
    ├── logo.png        ← Navbar logo (place your logo here)
    └── favicon.png     ← Browser tab icon
```

---

## 🔌 How it Works

### Navbar & Footer
Both are injected dynamically by `javascript/script.js` on every page — so you only maintain them in **one place**.

---

## 🎨 Customisation

All colors are CSS variables in `css/global.css`:
```css
--green:       #2E7D32   /* Primary brand green */
--orange:      #FF8F00   /* Accent orange */
--green-pale:  #E8F5E9   /* Light green backgrounds */
--orange-pale: #FFF8E1   /* Light orange backgrounds */
```

Change any of these to rebrand the entire site instantly.

---

## 🌙 Dark Mode
Users can toggle dark mode via the moon/sun button in the navbar. Preference is saved to `localStorage`.