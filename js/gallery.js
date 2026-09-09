/**
 * TRACEOIL — Research Figures Lightbox & Video Player Modal
 * Vanilla JavaScript | Accessible & Keyboard Friendly
 */

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initVideoModal();
});

function initLightbox() {
  // Check if modal container exists or create it
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-container" role="dialog" aria-modal="true" aria-label="Image Preview">
        <button class="modal-close" id="lightbox-close" aria-label="Close modal">&times;</button>
        <div class="modal-body">
          <img class="modal-img" id="lightbox-img" src="" alt="Research Figure">
          <div class="modal-caption" id="lightbox-caption"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  const openModal = (src, caption) => {
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Research Figure';
    lightboxCaption.textContent = caption || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach event listener to all elements with data-lightbox attribute
  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSrc = el.getAttribute('data-src') || el.querySelector('img')?.src;
      const targetCaption = el.getAttribute('data-caption') || el.querySelector('img')?.alt || '';
      if (targetSrc) {
        openModal(targetSrc, targetCaption);
      }
    });
  });
}

function initVideoModal() {
  let videoModal = document.getElementById('video-modal');
  if (!videoModal) {
    videoModal = document.createElement('div');
    videoModal.id = 'video-modal';
    videoModal.className = 'modal-backdrop';
    videoModal.innerHTML = `
      <div class="modal-container" style="max-width: 900px;" role="dialog" aria-modal="true" aria-label="Video Player">
        <button class="modal-close" id="video-close" aria-label="Close modal">&times;</button>
        <div class="modal-body" style="padding: 1rem; width: 100%;">
          <div id="video-embed-container" style="width: 100%; aspect-ratio: 16/9; background: var(--color-surface-soft, #f1f5f9); border-radius: var(--radius-sm); overflow: hidden; display: flex; align-items: center; justify-content: center;">
          </div>
          <div class="modal-caption" id="video-modal-caption" style="margin-top: 1rem;"></div>
        </div>
      </div>
    `;
    document.body.appendChild(videoModal);
  }

  const container = document.getElementById('video-embed-container');
  const captionEl = document.getElementById('video-modal-caption');
  const closeBtn = document.getElementById('video-close');

  const closeVideo = () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    container.innerHTML = '';
  };

  closeBtn.addEventListener('click', closeVideo);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closeVideo();
    }
  });

  // Handle video trigger clicks
  document.querySelectorAll('[data-video-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = btn.getAttribute('data-video-src');
      const youtubeUrl = btn.getAttribute('data-youtube-url');
      const title = btn.getAttribute('data-video-title') || 'Demonstration Video';
      const caption = btn.getAttribute('data-video-caption') || '';

      captionEl.innerHTML = `<strong>${title}</strong><p style="margin-top:0.3rem; font-size:0.9rem; color:var(--text-muted);">${caption}</p>`;

      if (youtubeUrl && youtubeUrl.trim() !== '') {
        // Embed YouTube video
        let videoId = '';
        if (youtubeUrl.includes('v=')) {
          videoId = youtubeUrl.split('v=')[1].split('&')[0];
        } else if (youtubeUrl.includes('youtu.be/')) {
          videoId = youtubeUrl.split('youtu.be/')[1];
        }
        container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else if (videoSrc && videoSrc.trim() !== '') {
        // Embed local MP4 with HTML5 video player
        container.innerHTML = `
          <video controls autoplay style="width: 100%; height: 100%; object-fit: contain;">
            <source src="${videoSrc}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        // Clean placeholder state
        container.innerHTML = `
          <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">🎥</div>
            <h4 style="color: var(--text-primary, #0f172a); margin-bottom: 0.5rem;">Demonstration Video Ready</h4>
            <p style="font-size: 0.9rem; max-width: 480px; margin: 0 auto 1rem auto;">
              Drop your video file into <code>assets/videos/demo-pipeline.mp4</code> or set a YouTube link in <code>js/project-data.js</code>.
            </p>
            <span class="placeholder-tag">[Add video file: assets/videos/demo-pipeline.mp4]</span>
          </div>
        `;
      }

      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}
