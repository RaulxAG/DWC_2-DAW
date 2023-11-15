// Crea un formulario típico de registro para tu web. Debe contener al menos 
// campos para introducir nombre, apellidos, DNI, Teléfono, email y nombre de 
// usuario. Todos los campos son obligatorios, y debes validar el mayor número 
// posible de ellos haciendo uso de expresiones regulares. El nombre de usuario 
// debe estar formado por al menos 8 caracteres, entre los cuales debe aparecer 
// obligatoriamente algún número y algún signo de puntuación.

var inputs = document.getElementsByTagName("input");

console.log(inputs);

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', () => {
        switch (inputs[i].name) {
            case "nombre":
                alert(validarNombre(inputs[i].value));
                break;
            case "apellidos":
                alert(validarApellidos(inputs[i].value));
                break;
            case "dni":
                alert(validarDNI(inputs[i].value));
                break;
            case "telefono":
                alert(validarTelefono(inputs[i].value));
                break;
            case "email":
                alert(validarEmail(inputs[i].value));
                break;
            case "nombreUsuario":
                alert(validarNombreUsuario(inputs[i].value));
                break;
            default:
                break;
        }
    });
    
}

function validarNombre(scadena) {
    const expR = /^[A-Za-z]+$/;
    return expR.test(scadena) || "Por favor, introduce un nombre válido.";
}

function validarApellidos(scadena) {
    const expR = /^[A-Za-z]+$/;
    return expR.test(scadena) || "Por favor, introduce apellidos válidos.";
}

function validarDNI(scadena) {
    const expR = /^[0-9]{8}[A-Za-z]$/;
    return expR.test(scadena) || "Por favor, introduce un DNI válido.";
}

function validarTelefono(scadena) {
    const expR = /^[0-9]{9}$/;
    return expR.test(scadena) || "Por favor, introduce un número de teléfono válido.";
}

function validarEmail(scadena) {
    const expR = /^\S+@\S+\.\S+$/;
    return expR.test(scadena) || "Por favor, introduce una dirección de correo válida.";
}

function validarNombreUsuario(scadena) {
    const expR = /^[A-Za-z0-9_]+$/;
    return expR.test(scadena) || "Por favor, introduce un nombre de usuario válido.";
}