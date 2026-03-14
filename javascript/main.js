/**
 * main.js - Ruler Tours Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    renderTours();
});

function renderTours() {
    const grid = document.getElementById('destinations-grid');
    if (!grid) return;

    grid.innerHTML = "";

    northBengalTours.forEach(tour => {
        const card = document.createElement('div');
        card.className = "card"; // Uses the CSS file for layout

        // HOOK: These inline styles are meant to be moved to destinations.css by contributors
        card.style.border = "1px solid #ddd";
        card.style.padding = "20px";
        card.style.borderRadius = "12px";
        card.style.backgroundColor = "#fff";

        card.innerHTML = `
            <h3 class="card-title">${tour.name}</h3>
            <p class="card-description">${tour.description}</p>
            <p><strong>Price:</strong> ${tour.price}</p>
            <div class="tags">
                ${tour.tags.map(tag => `<span class="badge-light">${tag}</span>`).join('')}
            </div>
            <a href="package.html?id=${tour.id}" class="card-link">Explore Package →</a>
        `;

        grid.appendChild(card);
    });
}

/**
 * HOOK: SEARCH/FILTER FUNCTIONALITY
 * Can a contributor write a function that filters 'northBengalTours' 
 * as the user types in a search box?
 */