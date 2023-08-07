// Get references to the menu icon and popup container
const menuIcon = document.querySelector('.menu-icon');
const popupContainer = document.querySelector('.popup-container');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the visibility of the popup container
    popupContainer.classList.toggle('show');
});
