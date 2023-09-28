function vocales() {
    const frase = prompt("Introduce una frase:");

    if (frase) {
        const vocales = ['a','e','i','o','u'];
        const fraseMinusculas = frase.toLowerCase();

        let contador = 0;

        for (let i = 0; i < fraseMinusculas.length; i++) {
            if (vocales.includes(fraseMinusculas[i])) {
                contador++;
            }
        }

        document.write("La frase: " + frase + " tiene " + contador + " vocales.");
    } else {
        console.log("No ingresaste una frase.");
    }
}