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
    const getStartedBtn = document.getElementById('getStartedBtn');
    const contactBtn = document.getElementById('contactBtn');
    const ctaBanner = document.querySelector('.cta-banner');
    const servicesSection = document.querySelector('.services-grid');
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (ctaBanner) {
          smoothScroll(ctaBanner, 80);
          ctaBanner.style.transition = 'box-shadow 0.3s';
          ctaBanner.style.boxShadow = '0 0 0 3px #60a5fa';
          setTimeout(() => {
            ctaBanner.style.boxShadow = '';
          }, 800);
        }
        alert('Free Consultation: Share your website and goals, and our SEO expert will contact you within 24 hours.');
      });
    }
    if (contactBtn) {
      contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Request received! Our digital marketing team will prepare a customized strategy proposal for your brand.');
        console.log('SEO & Digital Marketing inquiry triggered');
      });
    }
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const title = card.querySelector('h3')?.innerText || 'service';
        alert(`${title} service: Our experts will help you dominate this channel. Request a quote!`);
      });
    });
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