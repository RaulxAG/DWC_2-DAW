/**
 * Utilizando el método random del objeto Math carga con valores aleatorios un array de 20 
 * elementos con valores enteros entre el 0 y el 100. Muestra los valores sin ordenar y ordenados 
 * (eliminando duplicados), para ello deberás implementar alguno de los algoritmos de ordenación, 
 * se recomienda el burbuja por su fácil implementación. 
*/
function ordenarArray() {
    var numeros = [];
    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor(Math.random()*100));
    }

    document.write("Array generado: " + numeros);

    var sinDuplicados = [];
    for (let i = 0; i < numeros.length; i++) {
        if (!sinDuplicados.includes(numeros[i])) {
            sinDuplicados.push(numeros[i]);
        }
    }

    document.write("<br><br>Sin duplicados: " + sinDuplicados);

    //algoritmo burbuja para ordenar
    for (let i = 0; i < sinDuplicados.length - 1; i++) { // hace una pasada completa al array
        for (let j = 0; j < sinDuplicados.length - i - 1; j++) { // va haciendo una segunda pasada completa por cada elemento
            if (sinDuplicados[j] > sinDuplicados[j + 1]) { // comparando si es mayor al numero de su derecha
                var temp = sinDuplicados[j];
                sinDuplicados[j] = sinDuplicados[j + 1]; // Intercambiar elementos si están en el orden incorrecto
                sinDuplicados[j + 1] = temp;
            }
        }
    }

    document.write("<br>Array ordenado: " + sinDuplicados);
}