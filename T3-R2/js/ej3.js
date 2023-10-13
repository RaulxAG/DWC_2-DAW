/**
 * Crear un array vacío, luego generar 20 números al azar (utiliza random del objeto Math ) y 
 * guardarlos en un array, N es introducido por el usuario.
 */
function adivinaNumero() {
    var numeros = [];

    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor(Math.random()*20+1));
    }

    var intento = prompt("Introduce un numero:");

    if (numeros.includes(parseInt(intento))) {
        alert("Correcto!");
    } else {
        alert("Incorrecto");
    }
    document.write("Numeros generados: " + numeros);
}