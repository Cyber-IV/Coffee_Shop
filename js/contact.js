// Eventos click
/* const sendData_btn = document.querySelector('.contact-button');
sendData_btn.addEventListener('click', (e) => {
    console.log(e); //Muestra la informacion del evento
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página por defecto
}); */

// Eventos de inputs y text areas - Variables en 1ra posicion
const data = {
    name: '',
    email: '',
    message: '',
}
const name_input = document.querySelector('#name');
const email_input = document.querySelector('#email');
const message_input = document.querySelector('#message');
const form = document.querySelector('.contact-form');
/* name_input.addEventListener('change', (e) => { // Change - Detecta cambios en el input cuando pierde el foco
    console.log('se escribio algo en nombre...');
}); */
/* name_input.addEventListener('input', (e) => { // Input - Detecta cambios en el input cuando se escribe algo
    console.log(e.target.value); // e - Es el evento que sucede / target - El objetivo del evento / value - El valor del input
}); */
// Event listeners en 2da posicion
name_input.addEventListener('input', saveDataInput);
email_input.addEventListener('input', saveDataInput);
message_input.addEventListener('input', saveDataInput);
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar formulario
    const { name, email, message } = data;
    if(name === '' || email === '' || message === ''){
        showNotification(
            {notifyType:'contactError', notifyText:'TODOS LOS CAMPOS SON REQUERIDOS', seconds:5000}
        );
        return;
    }
    // Enviar formulario
    showNotification(
        {notifyType:'contactSuccesed', notifyText:'MENSAJE HA SIDO ENVIADO', seconds:3000}
    );
});

// Funciones que se necesiten en 3ra posicion
function saveDataInput(e){
    // Es importante que los id de los inputs y las propiedades del objeto donde se guardaran
    data[e.target.id] = e.target.value;
}

function showNotification({notifyType, notifyText, seconds}){
    let notification = document.createElement('P');
    notification.textContent = notifyText;
    notification.classList.add(notifyType);
    notification.id = 'contactNotification';
    
    form.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, seconds);
}