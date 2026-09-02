document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderHero();
    renderFilters();
    renderPortfolioItems(portfolioDatabase);
    renderCTA();
    renderFooter();
    initializeFilterLogic();
});
function renderHeader() {
    const header = document.getElementById('dynamicHeader');
    if (!header) return;

    const navLinksHtml = navigationLinks.map(link => 
        `<li><a href="${link.url}" class="${link.class}">${link.text}</a></li>`
    ).join('');

    header.innerHTML = `
        <nav>
            <div class="logo">
                <a href="../../Frontend/index.html">
                    <img src="${companyConfig.logoImg}" alt="${companyConfig.name} ${companyConfig.suffix}" class="logo-img">
                    <span class="logo-text">${companyConfig.name} <span>${companyConfig.suffix}</span></span>
                </a>
            </div>
            <div class="menu-btn" onclick="toggleMenu()">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="nav-links" id="navLinks">
                ${navLinksHtml}
            </ul>
        </nav>
    `;
}
function renderHero() {
    const hero = document.getElementById('dynamicHero');
    if (!hero) return;

    hero.innerHTML = `
        <div class="page-hero-overlay"></div>
        <div class="page-hero-container">
            <h1>${heroContent.title}</h1>
            <p>${heroContent.subtitle}</p>
        </div>
    `;
}
function renderFilters() {
    const container = document.getElementById('dynamicFilters');
    if (!container) return;

    container.innerHTML = filterCategories.map((cat, index) => `
        <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${cat.filterId}">
            ${cat.text}
        </button>
    `).join('');
}
function renderPortfolioItems(projects) {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="portfolio-full-item" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="portfolio-overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="portfolio-tag">${project.tag}</span>
            </div>
        </div>
    `).join('');
}
function renderCTA() {
    const cta = document.getElementById('dynamicCTA');
    if (!cta) return;

    cta.innerHTML = `
        <div class="container">
            <div class="cta-content">
                <h2>${ctaContent.heading}</h2>
                <p>${ctaContent.subheading}</p>
                <a href="${ctaContent.btnUrl}" class="btn btn-primary">
                    ${ctaContent.btnText} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}
function renderFooter() {
    const footer = document.getElementById('dynamicFooter');
    if (!footer) return;

    const quickLinksHtml = navigationLinks.filter(l => l.text !== "Sign In").map(link => 
        `<a href="${link.url}">${link.text}</a>`
    ).join('');

    const legalLinksHtml = legalLinks.map(link => 
        `<a href="${link.url}">${link.text}</a>`
    ).join('');

    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-col">
                <h4>${companyConfig.name} <span>${companyConfig.suffix}</span></h4>
                <p>Professional IT solutions provider in Noida since ${companyConfig.established}.</p>
                <div class="footer-social">
                    <a href="${companyConfig.socials.linkedin}"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${companyConfig.socials.facebook}"><i class="fab fa-facebook-f"></i></a>
                    <a href="${companyConfig.socials.instagram}"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                ${quickLinksHtml}
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                ${legalLinksHtml}
            </div>
            <div class="footer-col">
                <h4>Contact Info</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${companyConfig.location}</p>
                <p><i class="fas fa-envelope"></i> ${companyConfig.email}</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 ${companyConfig.name} <span>${companyConfig.suffix}</span>. All rights reserved.</p>
        </div>
    `;
}
function initializeFilterLogic() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const selectedFilter = e.target.getAttribute('data-filter');

            if (selectedFilter === 'all') {
                renderPortfolioItems(portfolioDatabase);
            } else {
                const filtered = portfolioDatabase.filter(item => item.category === selectedFilter);
                renderPortfolioItems(filtered);
            }
        });
    });
}
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}