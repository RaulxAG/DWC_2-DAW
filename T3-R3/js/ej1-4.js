/**
 * Diseña una web que cree un Array llamado clase que contenga información de una clase. 
 * Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer 
 * trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas). Por 
 * ejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10”
*/
window.onload = function() { 
   var clase = ['Angel Garcia,20,6,7,10','Sergio Perez,20,5,9,7'];


    function agregarAlumno() {
        var nombre = prompt("Introduce un nombre");
        var edad = prompt("Introduce la edad");
        var nota1t = prompt("Introduce la nota del primer trimestre");
        var nota2t = prompt("Introduce la nota del segundo trimestre");
        var nota3t = prompt("Introduce la nota del tercer trimestre");

        var alumno = nombre + "," + edad + "," + nota1t + "," + nota2t + "," + nota3t;

        clase.push(alumno);
    }

    function mostrarAlumnos() {
        var infoDiv = document.getElementById("infoDiv");
        
        // Utiliza join para unir los elementos con <br> entre ellos
        var alumnosTexto = clase.join("<br>");
    
        infoDiv.innerHTML = "Alumnos de la clase: <br>" + alumnosTexto;
    }

    function buscarEstudiante() {
        var nombreEstudiante = prompt("Nombre del alumno");
        var notaT = parseInt(prompt("Trimestre a buscar"));
    
        clase.forEach(element => {
            var alumno = element.split(",");

            if (alumno[0].toLowerCase() === nombreEstudiante.toLowerCase()) {
                if (notaT === 1) {
                    alert("Alumno: " + alumno[0] + " Nota: " + alumno[2]);
                } else if (notaT === 2) {
                    alert("Alumno: " + alumno[0] + " Nota: " + alumno[3]);
                } else if (notaT === 3) {
                    alert("Alumno: " + alumno[0] + " Nota: " + alumno[4]);
                }
            }
        });
    }

    function edadMedia() {
        var suma = 0;
        
        clase.forEach(element => {
            var alumno = element.split(",");
            suma+=parseInt(alumno[1]);
        });

        suma=suma/clase.length;

        alert("Edad media de los alumnos: " + suma);
    }

    function alumnoAleatorio() {
        var numero = Math.floor(Math.random()*clase.length);
        var alumnoSeleccionado = clase[numero].split(",")[0];

        alert("Seleccionado: " + alumnoSeleccionado);
    }

    window.agregarAlumno = agregarAlumno;
    window.mostrarAlumnos = mostrarAlumnos;
    window.buscarEstudiante = buscarEstudiante;
    window.edadMedia = edadMedia;
    window.alumnoAleatorio = alumnoAleatorio;
};