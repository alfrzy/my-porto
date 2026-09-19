// Cursor System
export function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  
  let mx = 0, my = 0, rx = 0, ry = 0;
  
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });
  
  function animate() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // Cursor Active on Interactive Elements
  document.querySelectorAll('a, button, .shimmer, h1, h2').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-active'));
  });
}

// Magnetic Button Effect
export function initMagneticButtons() {
  document.querySelectorAll('.magnetic-elem').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// Mobile Menu Toggle
export function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('#mobileMenu a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Contact Form Handler
export function initContactForm() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih! Pesan Anda telah terkirim.');
      form.reset();
    });
  }
}
