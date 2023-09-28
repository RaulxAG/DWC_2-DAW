function vecesA() {
    const frase = prompt("Introduce una frase:");

    if (frase) {
        const letraA = 'a';
        const fraseMinusculas = frase.toLowerCase();

        let contador = 0;

        for (let i = 0; i < fraseMinusculas.length; i++) {
            if (fraseMinusculas[i] === letraA) {
                contador++;
            }
        }

        document.write("La letra " + letraA + " aparece " + contador + " veces en la frase.");
    } else {
        console.log("No ingresaste una frase.");
    }
}