(function() {function smoothScroll(targetElement, offset = 80) {if (!targetElement) return;const elementPosition = targetElement.getBoundingClientRect().top;const offsetPosition = elementPosition + window.pageYOffset - offset;window.scrollTo({top: offsetPosition,behavior: 'smooth'});}const exploreBtn = document.getElementById('exploreOptionsBtn');
const optionsSection = document.getElementById('optionsSection');const androidBtn = document.getElementById('androidBtn');const webAppBtn = document.getElementById('webAppBtn');const contactBtn = document.getElementById('contactNowBtn');const ctaBanner = document.querySelector('.cta-banner');if (exploreBtn) {exploreBtn.addEventListener('click', function(e) {e.preventDefault();if (optionsSection) {
smoothScroll(optionsSection, 80);optionsSection.style.transition = 'all 0.3s';optionsSection.style.boxShadow = '0 0 0 3px #2563eb';setTimeout(() => {optionsSection.style.boxShadow = '';}, 800);}});}
    if (androidBtn) {
      androidBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Full Android App inquiry: Our team will get back to you within 24 hours with a custom quote based on your feature requirements.');
        // Also scroll to contact section as additional UX
        if (ctaBanner) smoothScroll(ctaBanner, 80);
      });
    }

    // "Convert Website" button (Web Based App)
    if (webAppBtn) {
      webAppBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Website to App Conversion: Share your website URL with us. We will convert it into a high-quality Android APK ready for Play Store.');
        if (ctaBanner) smoothScroll(ctaBanner, 80);
      });
    }

    // Contact Experts button (CTA)
    if (contactBtn) {
      contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Get in touch with our mobile app experts! We’ll help you choose between Native Android or Web-Based App solution.');
        // Also simulate a console message for demo
        console.log('Mobile App Development inquiry — Native / Web-App options available.');
      });
    }

    // Additional interactive effect for option cards on click (just demo)
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // prevent if click originated from a button or link
        if (e.target.tagName === 'A' || e.target.closest('a')) return;
        const title = card.querySelector('h3')?.innerText || 'option';
        console.log(`User interested in: ${title}`);
      });
    });

    // dynamic copyright year
    const copyrightPara = document.querySelector('.footer-copyright p');
    if (copyrightPara) {
      const currentYear = new Date().getFullYear();
      copyrightPara.innerText = copyrightPara.innerText.replace('2025', currentYear);
    }

    // minor animation on load: hero image fade
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
      heroImg.style.opacity = '0';
      heroImg.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        heroImg.style.opacity = '1';
      }, 100);
    }
  })();

