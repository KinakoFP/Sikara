// Sélectionne le bouton et les liens
const toggleButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

// Ajoute un gestionnaire d'événements au clic
toggleButton.addEventListener('click', () => {
  menuLinks.classList.toggle('active'); // Montre ou cache les liens
});
