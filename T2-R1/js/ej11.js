function invertirCadena() {
    const frase = prompt("Introduce una frase:");

    if (frase) {
        let cadenaInvertida = "";

        for (let i = frase.length - 1; i >= 0; i--) {
            cadenaInvertida += frase[i];
        }

        document.write("La frase invertida es: " + cadenaInvertida);
    } else {
        console.log("No ingresaste una frase.");
    }
}