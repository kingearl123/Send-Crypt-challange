const menuIcon = document.querySelector('.menu-icon');
const navOverlay = document.querySelector('.nav-overlay');
const closeBtn = document.querySelector('.close-btn');

// Buka menu navigasi
menuIcon.addEventListener('click', () => {
    navOverlay.classList.add('open');
});

// Tutup menu navigasi
closeBtn.addEventListener('click', () => {
    navOverlay.classList.remove('open');
});