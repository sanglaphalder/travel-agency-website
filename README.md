# 🌄 Rural Tours – Responsive Tourism Website

A fully responsive tourism website showcasing rural destinations with a clean UI, modern layout, and interactive features.  

---

## 📌 Project Overview

**Rural Tours** is a countryside tourism website designed to:

- Promote rural destinations
- Provide tour information
- Allow users to contact organizers
- Offer smooth navigation experience across devices
- Support light and dark themes

The website is optimized for **desktop, tablet, and mobile devices**.

---

## 🚀 Features Implemented

### ✅ 1. Fully Responsive Design
- Desktop-first layout
- Mobile responsive using media queries
- Hamburger menu for smaller screens
- Fixed navbar in mobile view
- Logo aligned to extreme left in mobile
- Navigation items centered on desktop

---

### ✅ 2. Navigation System
- Smooth scroll navigation
- Active mobile hamburger toggle
- Auto-close hamburger when:
  - Clicking a navigation link
  - Clicking outside the menu
- Scroll disabled when hamburger is open (mobile)
- Logo redirects to homepage (both desktop & mobile)

---

### ✅ 3. Dark / Light Theme Toggle
- Toggle button switches between:
  - 🌙 Light Mode
  - ☀️ Dark Mode
- Theme preference stored in `localStorage`
- Theme persists after page reload

---

### ✅ 4. Homepage Sections
- Hero section
- About section
- Tour highlights
- Contact section
- Footer

---

### ✅ 5. Contact Section
- Contact form placed before footer
- Fields:
  - Name
  - Email
  - Message
- Contact information box
- Paragraphs aligned centrally with form
- Responsive layout (stacked on mobile)

---

### ✅ 6. Footer Enhancements
- Social media links with logos:
  - Instagram
  - Facebook
  - Twitter
  - LinkedIn
- Styled hover effects
- Clean structured footer layout

---

### ✅ 7. JavaScript Functionalities

#### 🔹 Hamburger Menu Logic
- Toggles `.active` class
- Prevents background scroll when open
- Closes on outside click

#### 🔹 Smooth Scrolling
- Scrolls smoothly to internal sections using:
```js
scrollIntoView({ behavior: "smooth" });