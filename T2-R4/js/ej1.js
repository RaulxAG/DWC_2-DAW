function invierteCadena(cadena) {
    document.write(cadena.split('').reverse().join('') + "<br>");
}

function inviertePalabras(cadena) {
    document.write(cadena.split(' ').reverse().join(' ') + "<br>");
}

function encuentraPalabraMasLarga(cadena) {
    var palabras = cadena.split(' ');

    var longitudMaxima = 0;
  
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longitudMaxima) {
            longitudMaxima = palabras[i].length;
        }
    }
  
    document.write(longitudMaxima + "<br>");
}

function filtraPalabrasMasLargas(cadena, i) {
    var palabras = cadena.split(' ');

    var longitudMaxima = i;

    var palabrasLargas = 0;
  
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longitudMaxima) {
            palabrasLargas++;
        }
    }
  
    document.write("Hay " + palabrasLargas + " palabras con mas de " + longitudMaxima + " caracteres<br>");
}

function cadenaBienFormada(cadena) {
    var fraseMinusculas = cadena.toLowerCase();
    var primerCaracter = fraseMinusculas.charAt(0).toUpperCase();

    var cadenaFormateada = primerCaracter + fraseMinusculas.slice(1);

    document.write(cadenaFormateada);
}