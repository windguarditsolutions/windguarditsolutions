(function() {
  function smoothScroll(targetElement, offset = 80) {
    if (!targetElement) return;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  const exploreBtn = document.getElementById('exploreOptionsBtn');
  const optionsSection = document.getElementById('optionsSection');
  const desktopBtn = document.getElementById('desktopBtn');
  const erpBtn = document.getElementById('erpBtn');
  const contactBtn = document.getElementById('contactNowBtn');
  const ctaBanner = document.querySelector('.cta-banner');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (optionsSection) {
        smoothScroll(optionsSection, 80);
        optionsSection.style.transition = 'all 0.3s';
        optionsSection.style.boxShadow = '0 0 0 3px #2563eb';
        setTimeout(() => {
          optionsSection.style.boxShadow = '';
        }, 800);
      }
    });
  }
  if (desktopBtn) {
    desktopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Custom Desktop Application inquiry: Our software engineers will get back to you within 24 hours to detail your architecture and map local processing needs.');
      if (ctaBanner) smoothScroll(ctaBanner, 80);
    });
  }
  if (erpBtn) {
    erpBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('ERP System Discovery: Request received! We will coordinate a tailored virtual demo highlighting inventory modules, multi-tenant dashboards, and accounting structures.');
      if (ctaBanner) smoothScroll(ctaBanner, 80);
    });
  }
  const copyrightPara = document.querySelector('.footer-copyright p');
  if (copyrightPara) {
    const currentYear = new Date().getFullYear();
    copyrightPara.innerText = copyrightPara.innerText.replace('2025', currentYear);
  }
  const heroImg = document.querySelector('.hero-image img');
  if (heroImg) {
    heroImg.style.opacity = '0';
    heroImg.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      heroImg.style.opacity = '1';
    }, 100);
  }
})();