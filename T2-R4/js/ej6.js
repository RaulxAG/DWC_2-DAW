function subcadenaCadena(cadena1, cadena2) {
    if (cadena1.includes(cadena2)) {
        var posicion = cadena1.indexOf(cadena2);
        document.write("subcadena en el index: " + posicion);
    }
}