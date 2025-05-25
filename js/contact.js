// Eventos click
const sendData_btn = document.querySelector('.contact-button');
sendData_btn.addEventListener('click', (e) => {
    console.log(e); //Muestra la informacion del evento
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página por defecto

    // Validar el formulario
});

const inputed_data = {
    name: '',
    email: '',
    message: '',
}
// Eventos de inputs y text areas
const name_input = document.querySelector('#name');
const email_input = document.querySelector('#email');
const message_input = document.querySelector('#message');
/* name_input.addEventListener('change', (e) => { // Change - Detecta cambios en el input cuando pierde el foco
    console.log('se escribio algo en nombre...');
}); */
/* name_input.addEventListener('input', (e) => { // Input - Detecta cambios en el input cuando se escribe algo
    console.log(e.target.value); // e - Es el evento que sucede / target - El objetivo del evento / value - El valor del input
}); */
name_input.addEventListener('change', saveDataInput);
email_input.addEventListener('change', saveDataInput);
message_input.addEventListener('change', saveDataInput);

function saveDataInput(e){
    // Es importante que los id de los inputs y las propiedades del objeto donde se guardaran
    inputed_data[e.target.id] = e.target.value;
    console.log(inputed_data);
}