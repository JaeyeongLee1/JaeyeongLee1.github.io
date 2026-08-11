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

const publicationLabels = document.querySelectorAll('.publication-label span');
publicationLabels.forEach((label) => {
  label.style.border = 'none';
  if (label.textContent.trim() !== 'PREP.') {
    label.style.color = '#29475d';
  }
});

const publicationLabelRows = document.querySelectorAll('.publication-label');
const mobilePublicationQuery = window.matchMedia('(max-width: 620px)');

const syncPublicationLabels = () => {
  publicationLabelRows.forEach((labelRow) => {
    labelRow.hidden = mobilePublicationQuery.matches;
  });
};

syncPublicationLabels();
mobilePublicationQuery.addEventListener('change', syncPublicationLabels);
