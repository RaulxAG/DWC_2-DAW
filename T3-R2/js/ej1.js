/**
 * Realiza un script que solicite 5 numeros al usuario
 * almacenaremos estos numeros en un array y posteriormente ofreceremos
 * la siguiente informacion:
 *  - Valor minimo
 *  - Valor maximo
 *  - Valor medio
 */

function maxminmed() {
    var numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(prompt("Introduce el " + (i+1) + " valor"));
    }

    var max = numeros[0];
    var min = numeros[0];
    var med = 0;

    numeros.forEach(element => {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
        med += parseInt(element);
    });

    document.write("Numeros introducidos: " + numeros + 
    "<br>Maximo: " + max +
    "<br>Minimo: " + min +
    "<br>Media: " + med/5);
}