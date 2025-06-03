// Mobile navbar dropdown toggle with DOM add/remove
const toggleButton = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');
const nav = toggleButton ? toggleButton.parentElement : null;

function isMobile() {
  return window.innerWidth <= 600;
}

function showMenu() {
  if (nav && !document.getElementById('navbar-menu')) {
    // Re-create the menu
    const ul = document.createElement('ul');
    ul.id = 'navbar-menu';
    ul.className = 'navbar-menu active';
    ul.innerHTML = `
      <a href="#"><li>NEW & TRENDING</li></a>
      <a href="#"><li>COLOGNE</li></a>
      <a href="#"><li>HOME</li></a>
      <a href="#"><li>BODY</li></a>
      <a href="#"><li>SERVICES</li></a>
      <a href="#"><li>BRAND</li></a>
    `;
    nav.appendChild(ul);
  }
}

function hideMenu() {
  const menu = document.getElementById('navbar-menu');
  if (menu) menu.remove();
}

function handleToggle() {
  if (toggleButton.classList.contains('active')) {
    toggleButton.classList.remove('active');
    hideMenu();
  } else {
    toggleButton.classList.add('active');
    showMenu();
  }
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    if (isMobile()) {
      handleToggle();
    }
  });
}

// Ensure menu is present/absent on resize
function handleResize() {
  if (isMobile()) {
    toggleButton.classList.remove('active');
    hideMenu();
  } else {
    // On desktop, ensure menu is present and visible
    if (!document.getElementById('navbar-menu')) {
      const ul = document.createElement('ul');
      ul.id = 'navbar-menu';
      ul.className = 'navbar-menu';
      ul.innerHTML = `
        <a href="#"><li>NEW & TRENDING</li></a>
        <a href="#"><li>COLOGNE</li></a>
        <a href="#"><li>HOME</li></a>
        <a href="#"><li>BODY</li></a>
        <a href="#"><li>SERVICES</li></a>
        <a href="#"><li>BRAND</li></a>
      `;
      nav.appendChild(ul);
    }
  }
}
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
