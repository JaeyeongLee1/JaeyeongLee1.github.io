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
  label.style.fontSize = '14px';
  const group = label.closest('.publication-group');
  const title = group && group.querySelector('.publication-group-title');
  const groupName = title ? title.textContent.trim() : '';

  if (groupName === 'Journal Articles') {
    label.style.color = '#6b3f4a';
    label.style.borderColor = '#cdbbc0';
  } else if (groupName === 'Conference Proceedings') {
    label.style.color = '#29475d';
    label.style.borderColor = '#afbdc8';
  }
});

const publicationLabelRows = document.querySelectorAll('.publication-label');
publicationLabelRows.forEach((labelRow) => {
  labelRow.style.transform = 'translateY(-2px)';
});

const mobilePublicationQuery = window.matchMedia('(max-width: 620px)');

const syncPublicationLabels = () => {
  publicationLabelRows.forEach((labelRow) => {
    labelRow.hidden = mobilePublicationQuery.matches;
  });
};

syncPublicationLabels();
mobilePublicationQuery.addEventListener('change', syncPublicationLabels);
