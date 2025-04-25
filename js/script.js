const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// tabButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     tabButtons.forEach(btn => btn.classList.remove('active'));
//     tabContents.forEach(content => content.classList.remove('active'));
//     button.classList.add('active');
//     document.getElementById(button.dataset.tab).classList.add('active');
//   });
// });
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to the clicked button and corresponding content
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Image click to lightbox
document.querySelectorAll('.tab-content img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

// Close lightbox
closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});

