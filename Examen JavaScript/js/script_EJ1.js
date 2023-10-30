// EJERCICIO 1 *******************************************************************************
// almaceno en 2 variables los 2 parrafos de la pagina
var textoP1 = "Entendemos el concepto de informática como la ciencia que se ocupa de estudiar los métodos técnicos y los procesos con el fin de almacenar, procesar y transmitir los datos digitalmente. Actualmente, en la informática se unen diversos elementos como es el software, la electrónica, la computación y la programación. Hoy queremos hablarte de la evolución de la informática, de sus orígenes y del proceso de creación, usos y necesidades por el que ha ido pasando hasta llegar a lo que hoy conocemos"
var textoP2 = "El origen de la informática se sitúa en la segunda mitad del siglo XX, aunque la primera generación de computadoras se desarrolló entre 1951 y 1958, las cuales funcionaban con válvulas, cilindros magnéticos e instrucciones internas. Eran ordenadores que funcionaban muy lentamente, eran muy grandes y generaban mucho calor. Pero con el paso de los años la evolución de la informática no ha dejado de mejorar gracias a las nuevas tecnologías, sobre todo teniendo en cuenta el circuito integrado, el móvil e Internet"

// escribo en el index los 2 parrafos
document.write("<p>" + textoP1 + "</p>" + "<p>" + textoP2 + "</p>");

// funcion asignada al boton del index
function mostrarVentana() {

    // declaro la variable que abre una ventana emergente nueva
    var ventanaEmergente = window.open('','','new');
    
    // pregunto al usuario la palabra que quiere buscar
    var palabraBuscada = ventanaEmergente.prompt("Buscar palabra");
    
    // creo 2 variables donde convertire cada parrafo en un array
    var p1 = textoP1.split(' ');
    var p2 = textoP2.split(' ' );

    // sumamos la longitud de los 2 arrays nuevos
    var nCaracteres = p1.length+p2.length;
    
    // declaro la variable palabras como array
    var palabras = [];

    // a la variable palabras le introduzco los valores de los arrays que contienen los textos
    palabras.push(...p1,...p2);

    // declaro la variable vecesPalabra a 0 para posteriormente actualizar 
    // el numero de ocurrencias de la palabra introducida por el usuario
    var vecesPalabra = 0;

    // bucle foreach al array palabras para buscar las veces que aparece la palabra solicitada
    palabras.forEach(element => {
        // si el elemento actual coincide con la palabra buscada sumamos 1 coincidencia al contador
        if (element.toLowerCase() === palabraBuscada.toLowerCase()) {
            vecesPalabra++;
        }
    });

    // escribo en la ventana la informacion
    ventanaEmergente.document.write("número de caracteres: " + nCaracteres + "<br><br>" +
    "la palabra buscada aparece " + vecesPalabra + " veces<br><br>");
}