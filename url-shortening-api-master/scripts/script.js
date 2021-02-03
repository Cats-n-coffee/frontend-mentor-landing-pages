// Toggle mobile menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const headerMenu = document.getElementsByClassName('header-menu')[0];
const container = document.getElementById('container');

hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    headerMenu.classList.toggle('show');
    // container.classList.toggle('stop-scroll');
    document.body.classList.toggle('stop-scroll');
}