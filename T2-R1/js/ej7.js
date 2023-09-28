function mayor3() {
    var n1 = parseFloat(prompt("Introduce el primer numero:"));
    var n2 = parseFloat(prompt("Introduce el segundo numero:"));
    var n3 = parseFloat(prompt("Introduce el tercer numero:"));

    mayor = n1;
    
    var numeros = [n1,n2,n3];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
          mayor = numeros[i];
        }
    }
    return mayor;
}