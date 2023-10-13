/*
* Utilizando el método random del objeto Math carga con valores aleatorios un array de 20 
* elementos con valores enteros entre el 0 y el 100. Ten en cuenta que random devuelve un 
* número flotante entre 0 y 1. Una vez cargado muestra los datos del array por pantalla. 
*
* Tras ello muestra la información del ejercicio anterior sobre los valores de dicho array, es decir: 
*   - Valor mínimo 
*   - Valor máximo 
*   - Valor medio. 
*/

function maxminmed() {
    var numeros = [];
    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor(Math.random()*100));
    }

    document.write("Array Generado: " + numeros);

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

    document.write("<br>Maximo: " + max +
    "<br>Minimo: " + min +
    "<br>Media: " + med/20);
    
}