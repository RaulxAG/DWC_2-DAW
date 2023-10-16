function paresImpares() {
    var array = [];

    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 1000) + 1);
    }

    document.write("Array creado: " + array);

    var pares = array.filter(numero => numero % 2 === 0);
    var impares = array.filter(numero => numero % 2 !== 0);

    var arrayOrganizado = pares.concat(impares);

    document.write("<br><br>Array ordenado por pares e impares: " + arrayOrganizado);
}
