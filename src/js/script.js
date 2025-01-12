const hamburgerOpen = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.close');
const hamburgerMenu = document.querySelector('.menu');

hamburgerOpen.addEventListener('click', () => {
    hamburgerMenu.classList.add('menu_active')
});

hamburgerClose.addEventListener('click', () => {
    hamburgerMenu.classList.remove('menu_active')
});

