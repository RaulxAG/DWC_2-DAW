function lanzarDados() {
    var frecuencias = [];
    
    for (let i = 0; i <= 6; i++) {
        frecuencias[i] = [];
        for (let j = 0; j <= 6; j++) {
            frecuencias[i][j] = 0;
        }
    }

    for (let i = 0; i < 36000; i++) {
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;

        frecuencias[dado1][dado2]++;
    }

    document.write("<table border='1'>");
    for (let i = 1; i <= 6; i++) {
        document.write("<tr>");
        for (let j = 1; j <= 6; j++) {
            document.write("<td>" + i + " + " + j + ": " + frecuencias[i][j] + " veces</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}