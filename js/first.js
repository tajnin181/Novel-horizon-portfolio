// Hamburger menu toggle
const dotMenu = document.getElementById('dot');
const navLinks = document.getElementById('nav-links');


function toggleMobileSearch() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('show-mobile-search');
}


dotMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the "active" class
});


