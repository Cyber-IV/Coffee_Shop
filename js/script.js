// querySelector - Selecciona 1 elemento
const heading = document.querySelector('.header__title')
    .textContent = 'Blog de Cafe - Cursos, consejos y recetas';

// querySelectorAll
const links = document.querySelectorAll('a');
links[0].title = 'Regresar a Homepage';
links[0].classList.add('home_icon-tooltip');
links[1].textContent = 'Sobre Nosotros';

// createElement
const newLink = document.createElement('A');
// setting attribuites
newLink.href = 'advices.html';
newLink.textContent = 'Consejos';
newLink.classList.add('nav__link');
// adding the link to navigation
const navigation = document.querySelector('.navigation');
navigation.appendChild(newLink);


// Events
console.log('Comienzo');
// Evento 'load' espera a cargar todos los archivos que requiere el HTML (JS, CSS, IMG)
window.addEventListener('load', () => { console.log('Evento Load'); });
window.onload = (() => { console.log('Evento OnLoad'); });
// Evento DOMContentLoaded espera a cargar SOLAMENTE el HTML
window.addEventListener('DOMContentLoaded', () => { console.log('Evento DOMContentLoaded'); });
console.log('Final');