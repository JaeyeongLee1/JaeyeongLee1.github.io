const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const profilePhoto = document.getElementById('profile-photo');
const photoFallback = document.getElementById('photo-fallback');

if (profilePhoto && photoFallback) {
  profilePhoto.addEventListener('error', () => {
    profilePhoto.style.display = 'none';
    photoFallback.classList.add('visible');
  });
}

const prepLabel = document.querySelector(
  '.publications-section > .publication-group:last-of-type .publication-label span'
);

if (prepLabel) {
  prepLabel.style.border = 'none';
}
