const hamIcon = document.getElementsByClassName('ham-icon')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];
const overlayDiv = document.querySelector('.overlay');
hamIcon.addEventListener('click', () => {
  openHamMenu();
});
closeBtn.addEventListener('click', () => {
  closeHamMenu();
});
overlayDiv.addEventListener('click', () => {
  closeHamMenu();
});
function openHamMenu() {
  document.querySelector('.ham-menu').classList.add('ham-menu-show');
  overlayDiv.style.display = 'block';
};

function closeHamMenu() {
  document.querySelector('.ham-menu').classList.remove('ham-menu-show');
  overlayDiv.style.display = 'none';
};