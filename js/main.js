/**
 * TRACEOIL — Main Site Utilities & Documentation Enhancements
 * Vanilla JavaScript | Accessible & Fast
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initBackToTop();
  initDocTableOfContents();
  initHeadingAnchorLinks();
});

/* --------------------------------------------------------------------------
   Reading Progress Bar
   -------------------------------------------------------------------------- */
function initReadingProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   Back to Top Floating Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top of page');
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   Auto Table of Contents for Documentation Articles
   -------------------------------------------------------------------------- */
function initDocTableOfContents() {
  const tocContainer = document.querySelector('[data-doc-toc]');
  const article = document.querySelector('.doc-article');

  if (!tocContainer || !article) return;

  const headings = article.querySelectorAll('h2[id], h3[id]');
  if (headings.length === 0) return;

  const list = document.createElement('ul');
  list.className = 'doc-toc-list';

  headings.forEach(heading => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'doc-toc-link';
    a.href = `#${heading.id}`;
    
    // Indent h3
    if (heading.tagName === 'H3') {
      li.style.paddingLeft = '1rem';
      a.style.fontSize = '0.825rem';
    }

    a.innerHTML = `<span>#</span> ${heading.textContent.replace('🔗', '').trim()}`;
    li.appendChild(a);
    list.appendChild(li);
  });

  tocContainer.innerHTML = '';
  const title = document.createElement('div');
  title.className = 'doc-toc-title';
  title.textContent = 'Table of Contents';
  tocContainer.appendChild(title);
  tocContainer.appendChild(list);
}

/* --------------------------------------------------------------------------
   Copyable Heading Anchor Links
   -------------------------------------------------------------------------- */
function initHeadingAnchorLinks() {
  const headings = document.querySelectorAll('.doc-article h2[id], .doc-article h3[id], .section h2[id]');
  
  headings.forEach(heading => {
    heading.classList.add('heading-anchor');
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-anchor-btn';
    copyBtn.setAttribute('title', 'Copy link to this section');
    copyBtn.setAttribute('aria-label', `Copy link to ${heading.textContent}`);
    copyBtn.innerHTML = `🔗`;

    copyBtn.addEventListener('click', () => {
      const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
      navigator.clipboard.writeText(url).then(() => {
        copyBtn.innerHTML = `✓`;
        setTimeout(() => { copyBtn.innerHTML = `🔗`; }, 1500);
      }).catch(() => {
        // Fallback
        const tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        copyBtn.innerHTML = `✓`;
        setTimeout(() => { copyBtn.innerHTML = `🔗`; }, 1500);
      });
    });

    heading.appendChild(copyBtn);
  });
}
