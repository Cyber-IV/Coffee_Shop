// querySelector - Selecciona 1 elemento
const heading = document.querySelector('.header__title')
    .textContent = 'Blog de Cafe - Cursos, consejos y recetas';

// querySelectorAll
const links = document.querySelectorAll('a');
links[0].title = 'Regresar a Homepage';
links[0].classList.add('home_icon-tooltip');
links[1].textContent = 'Sobre Nosotros';
// getElementById