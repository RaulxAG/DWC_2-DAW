function contarVocales() {
    const frase = prompt("Introduce una frase:");

    if (frase) {
        const fraseMinusculas = frase.toLowerCase();
        const vocales = ['a', 'e', 'i', 'o', 'u'];

        for (const vocal of vocales) {
            let contador = 0;

            for (let i = 0; i < fraseMinusculas.length; i++) {
                if (fraseMinusculas[i] === vocal) {
                    contador++;
                }
            }

            document.write(`La vocal ${vocal} aparece ${contador} veces en la frase.<br>`);
        }
    } else {
        console.log("No ingresaste una frase.");
    }
}