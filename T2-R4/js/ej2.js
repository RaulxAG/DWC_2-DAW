function infoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.write("La cadena " + cadena + " esta formada solo por mayusculas");
    } else if (cadena === cadena.toLowerCase()) {
        document.write("La cadena " + cadena + " esta formada solo por minusculas");
    } else {
        document.write("La cadena " + '"' + cadena + '"' + " esta formada por mayusculas y minusculas");
    }
}