function lanzarDados() {
    var frecuencias = [];

    for (let i = 0; i <= 12; i++) {
        frecuencias[i] = 0;
    }

    for (let i = 0; i < 36000; i++) {
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        var suma = dado1 + dado2;

        frecuencias[suma]++;
    }

    // Mostrar resultados
    for (let i = 2; i <= 12; i++) {
        document.write("Suma " + i + ": " + frecuencias[i] + " veces<br>");
    }
}