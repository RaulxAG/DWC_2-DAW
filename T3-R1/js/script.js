/**
 * 1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
 * Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/

function maximo(n1, n2, n3, n4) {
    var max = n1;

    for (let i = 0; i < 4; i++) {
        if (arguments[i]>max) {
            max = arguments[i];
        }
    }

    document.write("El máximo de " + n1 + "," + n2 + "," + n3 + "," + n4 + " es: " + max);
}

/*
 * 2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.
 * Para ello define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. 
*/

function tirarDado() {
    var numero = Math.floor(Math.random()*6+1);

    document.write("<br><br>Dado tirado!<br>Has sacado: " + numero);
}

/**
 * 3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
 * modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
 * de ocurrencias de cada uno de los valores.
*/

function tirarDado6000() {
    var uno,dos,tres,cuatro,cinco,seis;

    uno = 0;
    dos = 0;
    tres = 0;
    cuatro = 0;
    cinco = 0;
    seis = 0;

    for (let i = 0; i < 6000; i++) {
        var numero = Math.floor(Math.random()*6+1);

        switch (numero) {
            case 1:
                uno++;
                break;
            case 2:
                dos++;
                break;
            case 3:
                tres++;
                break;
            case 4:
                cuatro++;
                break;
            case 5:
                cinco++;
                break;
            case 6:
                seis++;
                break;
            default:
                break;
        }
    }

    document.write(
        "<br><br>De 6.000 tiradas estos son los resultados:<br>" 
        + " 1: " + uno + " veces<br>" 
        + "2: " + dos + " veces<br>" 
        + "3: " + tres + " veces<br>" 
        + "4: " + cuatro + " veces<br>" 
        + "5: " + cinco + " veces<br>" 
        + "6: " + seis + " veces<br>"
    );
}

/**
 * 4. Crea una web para calcular el volumen de una esfera. 
 * Para ello diseña una función que dado el radio de ésta devuelva el volumen.
*/

function volumenEsfera(radio) {

    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, ingresa un radio válido.");
        return;
    }

    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    document.write("<br><br>El volumen de la esfera es: " + volumen.toFixed(2) + "<br>");

    /**
    * 5. Mejora el ejercicio anterior permitiendo calcular también 
    * el área de un circulo.
    */
    var area = Math.PI * Math.pow(radio, 2);
    document.write("El area de la esfera es: " + area.toFixed(2));
}

/**
 * 6. Crea una función para calcular potencias de un modo recursivo.
*/

function calcularPotencia(base, exponente) {
    document.write("<br><br>");
    if (exponente === 0) {
        return 1;
    }

    for (let i = exponente; i > 0; i--) {
        document.write(base + "elevado a " + i + " = " +  Math.pow(base,i) + "<br>");
    }
}

/**
 * 7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
 * diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10
*/

function factorial(n) {
    document.write("<br><br>Factorial de: " + n + "<br>");
    var numeros = [];
    var resultado = 1;
    for (let i = n; i > 0; i--) {
        numeros.push(i);
        resultado *= i;
    }

    numeros.forEach((element, i) => {
        document.write(element);
        if (i < numeros.length - 1) {
            document.write("x");
        } else {
            document.write(" = " + resultado);
        }
    });
}