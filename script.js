// ============================================
// WHISK & WONDER — shared interactivity
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---- Gallery filter ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        galleryItems.forEach(item => {
          const match = cat === 'all' || item.dataset.category === cat;
          item.classList.toggle('hidden', !match);
        });
      });
    });
  }

  /* ---- Lightbox ---- */
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('.lightbox-img');
    const lbTitle = lightbox.querySelector('.lightbox-title');
    const lbDesc = lightbox.querySelector('.lightbox-desc');
    const lbPrice = lightbox.querySelector('.lightbox-price');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        lbImg.src = item.dataset.image || '';
        lbImg.alt = item.dataset.title || '';
        lbTitle.textContent = item.dataset.title || '';
        lbDesc.textContent = item.dataset.desc || '';
        lbPrice.textContent = item.dataset.price || '';
        lightbox.classList.add('open');
      });
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- Chip selectors (flavor / size pickers) ---- */
  document.querySelectorAll('.chip-group').forEach(group => {
    const multi = group.dataset.multi === 'true';
    group.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        if (!multi) group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        chip.classList.toggle('selected');
        const input = chip.querySelector('input');
        if (input) input.checked = chip.classList.contains('selected');
      });
    });
  });

  /* ---- Confetti burst ---- */
  function launchConfetti() {
    const colors = ['#FFD93D', '#FF7A33', '#2EC4B6', '#8B5CF6', '#A0E7A0'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const size = 6 + Math.random() * 6;
      piece.style.width = size + 'px';
      piece.style.height = (size * 0.6) + 'px';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2.2 + Math.random() * 1.6) + 's';
      piece.style.animationDelay = (Math.random() * 0.4) + 's';
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4200);
    }
  }

  /* ---- Order form submit ---- */
  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = orderForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(f => { if (!f.value) valid = false; });
      if (!valid) { orderForm.reportValidity(); return; }
      orderForm.style.display = 'none';
      document.getElementById('order-success').classList.add('show');
      launchConfetti();
    });
  }

  /* ---- Contact form submit ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      document.getElementById('contact-success').classList.add('show');
      launchConfetti();
    });
  }

  /* ---- Newsletter form ---- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('newsletter-msg');
      if (msg) { msg.textContent = "🎉 You're on the list — sweet treats coming your way!"; msg.style.display = 'block'; }
      newsletterForm.reset();
    });
  }

});
