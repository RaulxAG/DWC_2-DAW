window.onload = function () {
    let a = ['Lunes','Martes',2,4,6];
    document.write(a[17]);
    a[17] = "Juan"


    document.write("<br><br>for each:");
    a.forEach(element => {
        document.write("<br>" + element);
    });

    document.write("<br><br>for:");
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        document.write("<br>" + element)
        
    }

    let listaCompra = ['Peras','Manzanas','Kiwis','Plátanos','Mandarinas'];

    let borrado = [];

    borrado = listaCompra.splice(1,1);
    
    //console.log(listaCompra);

    listaCompra.splice(3, 0, "Naranjas", "Sandía");

    //console.log(listaCompra);

    listaCompra.splice(1, 1, "Cerezas","Nísperos");

    //console.log(listaCompra);


    var array = [1,2,3];
    var funcion = "doble";

    modificaArray(array,funcion);

    var notas = [8,3,1,5];

    ordenarNotas(notas);

    document.write("<br><br>");
    var arrayFiltrado = notas.filter(function (nota) {
        document.write("<br>");
        document.write(nota >= 5);
    })

    var personas = ['paco','juan','fran'];
    const encuentraIndex = (personas, condicion) => {
        const length = personas.length;
        for (let i = 0; i < length; i++) {
            if (condicion(personas[i])) {
                return i; // Devuelve el índice del primer elemento que cumple la condición
            }
        }
        return -1; // Si no se encuentra ningún elemento que cumpla la condición
    };

    document.write("<br><br>" + personas.valueAt(encuentraIndex(personas, nombre => nombre === 'juan')));
}

function modificaArray(array, funcion) {
    switch (funcion) {
        case "doble":
            arrayDoble(array);
            break;
    
        default:
            break;
    }
}

function arrayDoble(array) {
    document.write("<br><br>Array original: " + array + "<br>");
    var length = array.length;
    for (let i = 0; i < length; i++) {
        array[i] = array[i]*2;
    }
    document.write("El doble del array es: " + array);
}

function ordenarNotas(array) {
    document.write("<br><br>Notas ordenadas: " + array.sort())
}
