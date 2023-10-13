function contarPalabras(cadena) {
    var cadenaFormateada = cadena.trim();

    var palabras = cadenaFormateada.split(/\s+/); // Esto permite cualquier cantidad de espacios

    var numeroPalabras = palabras.length;

    document.write("La cadena: " + cadena + " tiene " + numeroPalabras + " palabras");
}