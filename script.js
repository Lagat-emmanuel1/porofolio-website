function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}
// Select the burger menu and nav links
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle menu visibility when the burger menu is clicked
burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click event from bubbling up to document
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
      navLinks.classList.remove('active');
  }
});
// Close menu when a link inside the menu is clicked
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
      navLinks.classList.remove('active');
  });
});
