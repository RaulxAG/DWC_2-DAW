function opciones() {
    var opcion = parseInt(prompt("Introduce una opción:\n1.Potencia\n2.Raíz\n3.Redondeo\n4.Trigonometría"));

    switch (opcion) {
        case 1:
            var base = prompt("Introduce una base: ");
            var exponente = prompt("Introduce un exponente: ");
            document.write("La potencia de " + base + " elevado a " + exponente + " es: " + potencia(base,exponente));
            break;
        case 2:
            var numero = parseInt(prompt("Introduce un numero: "));
            if (numero < 0) {
                alert("ERROR: El numero no puede ser negativo");
            } else {
                document.write("La raíz de " + numero + " es: " + raizCuadrada(numero));
            }
            break;
        case 3:
            var numeroDecimal = parseFloat(prompt("Introduce un número decimal: "));
            document.write(redondeo(numeroDecimal));
            break;
        case 4:
            var angulo = parseInt(prompt("Introduce un ángulo (0-360):"))
            if (angulo < 0 || angulo > 360) {
                alert("ERROR: El ángulo debe ser entre 0º y 360º")
            } else {
                document.write("Se han introducido " + angulo + " º<br>" + trigonometria(angulo));
            }
            break;
        default:
            break;
    }
}

function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

function raizCuadrada(numero) {
    return Math.sqrt(numero);
}

function redondeo(numeroDecimal) {
    return "Al alza: " + Math.ceil(numeroDecimal) + " a la baja: " + Math.floor(numeroDecimal);
}

function trigonometria(angulo) {
    const anguloRadianes = angulo * (Math.PI / 180);
    return "seno: " + Math.sin(anguloRadianes) + " coseno: " + Math.cos(anguloRadianes) + " tangente: " + Math.tan(anguloRadianes);
}