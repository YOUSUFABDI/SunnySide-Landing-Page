const menuOpen = document.querySelector('.menu-open');
const navbarDiv = document.querySelector('.navbar');
const creativeDiv = document.querySelector('.creative');

menuOpen.addEventListener('click', () => {
    openNav();
});

function openNav() {
    navbarDiv.classList.toggle('open');
    creativeDiv.classList.toggle('creative-active');
}