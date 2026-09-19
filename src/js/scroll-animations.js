// Scroll Animations with Intersection Observer
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple elements
        const delay = index * 100;
        setTimeout(() => {
          entry.target.classList.remove(
            'scroll-fade-in',
            'scroll-slide-left',
            'scroll-slide-right',
            'scroll-scale-in'
          );
          entry.target.style.animation = 'none';
          
          // Trigger reflow to restart animation
          void entry.target.offsetWidth;
          
          // Add appropriate animation class
          const animationType = entry.target.dataset.animation || 'scroll-fade-in';
          entry.target.classList.add(animationType);
        }, delay);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  document.querySelectorAll('[data-animation]').forEach((el) => {
    observer.observe(el);
  });
}

// Section Transitions
export function initSectionTransitions() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          section.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
          section.style.opacity = '1';
        }, index * 50);
      }
    }, { threshold: 0.1 });
    
    observer.observe(section);
  });
}

// Stagger animation for child elements
export function initStaggerAnimations() {
  const containers = document.querySelectorAll('[data-stagger]');
  
  containers.forEach((container) => {
    const children = container.querySelectorAll('[data-stagger-item]');
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.animation = `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
          }, index * 80);
        });
        observer.unobserve(container);
      }
    }, { threshold: 0.1 });
    
    observer.observe(container);
  });
}

// Hero animation on load
export function initHeroAnimation() {
  const hero = document.querySelector('section#home');
  
  if (hero) {
    window.addEventListener('load', () => {
      const elements = hero.querySelectorAll('[data-hero-item]');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.animation = `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
        }, index * 120);
      });
    });
  }
}
