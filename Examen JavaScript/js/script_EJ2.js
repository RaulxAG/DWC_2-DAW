// EJERCICIO 2 *******************************************************************************
//console.log(objBDH);

// declaro el contador que se autoincrementa del id
var id = 0;

// declaro el array libros vacio
var Libros = [];

// funcion que retorna al array libros todos los objetos del objDBH
var devuelveLibros = () => {
    // bucle foreach que recorre cada objeto del array objBDH
    objBDH.forEach(objeto => {
        // por cada iteracion del array creo un objeto Libro con los siguientes atributos: id,titulo,editorial,descripcion,yearpublicacion,url,urlTexto
        var Libro = {
            id: id,
            titulo: objeto.título,
            editorial: objeto.editorial,
            
            // hago un array separando por el caracter //
            descripcion: objeto.descripcion_notas.split('//'),
            
            //yearpublicacion

            // en ambos reemplazo todos los espacios en blanco y * por nada
            url: objeto.version_digital.replaceAll(' ','').replaceAll('*',''),
            urlTexto: objeto.texto_OCR.replaceAll(' ','').replaceAll('*',''),
            
        };

        // añado al array Libros el objeto Libro creado en esta iteracion del bucle
        Libros.push(Libro);

        // incremento el contador para la siguiente iteracion
        id++;
        
        //console.log(Libro);
    });
} 

// funcion que muestra los objetos del array Libros en formato tabla en el html
var show = () => {

    // escribo el html para estructurar la tabla
    document.write("<table><tr>" + 
    "<th>ID</th>" +
    "<th>Titulo</th>" +
    "<th>Descripcion</th>" +
    "<th>Version Digital</th>" +
    "<th>Version Texto</th>" + 
    "</tr>");

    // por optimizacion y puesto que no siempre tendremos el mismo numero de libros, hago un foreach por cada libro
    Libros.forEach(element => {

        // por cada elemento (libro) del array (libros) hago una nueva fila de la tabla con su informacion
        document.write("<tr>" +
        "<td>" + element.id + "</td>" +
        "<td>" + element.titulo + "</td>" +
        "<td>" + element.descripcion + "</td>" +
        "<td>" + element.url + "</td>" +
        "<td>" + element.urlTexto + "</td>" +
        
        "</tr>");
    });
    //cierro la tabla
    document.write("</table>");
}

// funcion que recibe el array de objetos libro, tipo de filtrado y limite del filtrado
var filtraLibros = (arrayLibros, tipoFiltro, limite) => {
    if (tipoFiltro === 'y') {
        // si el usuario introduce "y" en el filtro ordena por año
        console.log("filtrando por año");

    } else if (tipoFiltro === 'i') {
        //console.log("Filtrando por id");
        // si el usuario introduce "i" en el filtro ordena por id
        // bucle de limite especificado por parametro
        for (let i = 0; i < limite; i++) {
            // creo un array de los libros ordenados por id
            var librosOrdenados = arrayLibros.sort();
            // muestro el numero de libros indicados, filtrados
            console.log(librosOrdenados[i]);
        }
    } else {
        // si el usuario mete mal el filtro se muestra error
        console.log("error: el tipo de filtro debe ser Y o I");
    }
}


// llamadas a las funciones
devuelveLibros();
show();

// paso array de los libros, filtro por id, limite 3 libros
filtraLibros(Libros,'i',3);