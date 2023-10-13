/**
 * Existen dos arrays, cada uno con 5 palabras, generar los siguientes array:
 * - Intersección
 * - Unión
 * - Diferencia
 */
function metodosArray(array1,array2) {
    var intersección = [];
    
    for (let i = 0; i < array1.length; i++) {
        intersección.push(array1.slice(i,i+1));
        intersección.push(array2.slice(i,i+1));
    }
    
    document.write("Array 1: " + array1 +
    "<br>Array 2: " + array2 + 
    "<br><br>Intersección: " + intersección);

    document.write("<br>Unión: " + array1.concat(array2));

    var palabrasDiferentes = [];

    array1.forEach(element => {
        if (!array2.includes(element)) {
            palabrasDiferentes.push(element);
        }
    });

    array2.forEach(element => {
        if (!array1.includes(element)) {
            palabrasDiferentes.push(element);
        }
    });

    document.write("<br>Diferencia: " + palabrasDiferentes);
}