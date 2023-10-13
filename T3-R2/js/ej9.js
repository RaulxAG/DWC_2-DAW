/**
 * Leer una cadena de texto introducida por el usuario y posteriormente, mostrar la siguiente 
 * información en una nueva ventana:  
 *  • Número de palabras.  
 *  • Primera palabra.  
 *  • Última palabra.  
 *  • Las palabras colocadas en orden inverso. 
 *  • las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a. 
 * Nota: Se regenerar un array con la función split()
*/
function arrayTexto() {
    var textoUsuario = prompt("Introduce una cadena de texto:");

    var palabras = textoUsuario.split(/\s+/);
    var numeroPalabras = palabras.length;
    var primeraPalabra = palabras[0];
    var ultimaPalabra = palabras[palabras.length - 1];
    var palabrasInverso = palabras.slice().reverse();
    var palabrasOrdenadasAZ = palabras.slice().sort();
    var palabrasOrdenadasZA = palabras.slice().sort().reverse();

    document.write("Información:" +
    "<br>Número de palabras: " + numeroPalabras +
    "<br>Primera palabra: " + primeraPalabra +
    "<br>Última palabra: " + ultimaPalabra +
    "<br>Palabras en orden inverso: " + palabrasInverso.join(' ') + 
    "<br>Palabras ordenadas de la a la z: " + palabrasOrdenadasAZ.join(' ') +
    "<br>Palabras ordenadas de la z a la a: " + palabrasOrdenadasZA.join(' '));

}