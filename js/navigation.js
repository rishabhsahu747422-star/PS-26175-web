/**
 * TRACEOIL — Navigation & Responsive Header Script
 * Vanilla JavaScript | Works on GitHub Pages and file:/// URLs
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeaderScroll();
});

function initNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close mobile menu on clicking any nav-link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight active link based on current file/path
  highlightActiveLink();
}

function highlightActiveLink() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const normalizedHref = href.toLowerCase();
    
    // Check if path matches or ends with href
    const isExactMatch = currentPath.endsWith(normalizedHref) || 
      (normalizedHref === 'index.html' && (currentPath === '' || currentPath.endsWith('/')));
    
    // Handle subfolder matches for documentation
    const isDocMatch = normalizedHref.includes('documentation') && currentPath.includes('documentation');
    const isContentProjectMatch = normalizedHref.includes('documentation') && currentPath.includes('content/project');

    if (isExactMatch || isDocMatch || isContentProjectMatch) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
