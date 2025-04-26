const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

// Add these variables for lightbox navigation
const images = Array.from(document.querySelectorAll('.tab-content img'));
let currentImageIndex = 0;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

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
document.querySelectorAll('.tab-content img').forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.setAttribute('aria-hidden', 'false');
    // Store the index of the clicked image
    currentImageIndex = index;
  });
});

// Close lightbox
closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
});

// Handle keyboard navigation
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('active')) {
    if (e.key === 'Escape') {
      // Close lightbox
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
    } else if (e.key === 'ArrowRight') {
      // Show next image
      currentImageIndex = (currentImageIndex + 1) % images.length;
      lightboxImg.src = images[currentImageIndex].src;
      lightboxImg.alt = images[currentImageIndex].alt;
      lightboxCaption.textContent = images[currentImageIndex].alt;
    } else if (e.key === 'ArrowLeft') {
      // Show previous image
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentImageIndex].src;
      lightboxImg.alt = images[currentImageIndex].alt;
      lightboxCaption.textContent = images[currentImageIndex].alt;
    }
  }
});