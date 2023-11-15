// Haciendo uso de expresiones regulares crea funciones para validar los campos 
// que se indican a continuación. La función recibirá un parámetro de tipo string 
// con el valor a validar y debe devolver true o false según cumpla los requisitos 
// de validación: 
// – validarMayuscula: El parámetro debe contener al menos un carácter en 
// mayúscula 
// – validarCaracteresEspeciales: El parámetro debe contener al menos uno 
// de los siguientes caracteres: !@#$%^& 
// – validarCorreo: El parámetro debe tener el formato correcto de un email 
// – validarTarjetaCredito: El parámetro debe tener el formato correcto de 
// una tarjeta de crédito 
// – validarLongitud: El parámetro debe tener al menos 8 caracteres. 
// – validarNumero: El parámetro debe contener al menos un dígito.

function validarMayuscula(scadena){
    const expR=new RegExp("[A-Z]");
    return  expR.test(scadena)
}

function validarCaracteresEspeciales(scadena){
    const expR=new RegExp("[!@#$%^&]");
    return  expR.test(scadena)
}

function validarCorreo(scadena){
    const expR=new RegExp("^[a-zA-Z0-9]+[@][a-z][.com]");
    return  expR.test(scadena)
}

function validarTarjetaCredito(scadena){
    const expR=new RegExp("^[0-9]{4,}[-][0-9]{4,}[-][0-9]{4,}[-][0-9]{4,}$");
    return expR.test(scadena)
}

function validarLongitud(scadena){
    const expR=new RegExp("^........$");
    return expR.test(scadena)
}

function validarNumero(scadena){
    const expR=new RegExp("[0-9]{1,}");
    return expR.test(scadena)
}

document.write("Validando mayuscula: " + validarMayuscula("Hola") + "<br>");
document.write("Validando caracteres especiales: " + validarCaracteresEspeciales("Hol@ mundo!") + "<br>");
document.write("Validando correo : " + validarCorreo("correo@correo.com") + "<br>");
document.write("Validando tarjeta de credito: " + validarTarjetaCredito("1111-2222-3333-4444") + "<br>");
document.write("Validando longitud: " + validarLongitud("12345678") + "<br>");
document.write("Validando numero: " + validarNumero("h0la") + "<br>");