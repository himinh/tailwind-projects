// Menu
const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');
const linkButton = document.querySelectorAll('.c-link');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('invisible');
  menuButton.classList.toggle('text-white');
});

linkButton.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.add('invisible');
    menuButton.classList.remove('text-white');
  });
});
