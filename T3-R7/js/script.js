// Ejercicio 1 -----------------------------------------------------------
let Persona = {
    nombre : "",
    edad : "",
    mayorEdad : function () {
        if (this.edad<18) {
            document.write(this.nombre + " es menor de edad<br><br>");
        } else {
            document.write(this.nombre + " es mayor de edad<br><br>");
        }
    }
}

function crearPersona(dni,nombre,edad){
    this.dni=dni;
    this.nombre=nombre;
    this.edad=edad;

    this.mayorEdad = function () {
        if (this.edad<18) {
            document.write(this.nombre + " es menor de edad<br><br>");
        } else {
            document.write(this.nombre + " es mayor de edad<br><br>");
        }
    }
}

function edadMedia(arrayPersonas) {
    var numPer = 0;
    var sumEdades = 0;
    arrayPersonas.forEach(element => {
        numPer++;
        sumEdades+=element.edad;
    });
    document.write("La edad media de estas " + numPer + " personas es: " + sumEdades/numPer + "<br><br>");
}

// Ejercicio 2 -----------------------------------------------------------
function Telefono(numTlfn) {
    this.numTlfn = numTlfn;
    this.llamadas = 0;

    this.llamar = () => {this.llamadas++;}
}

// Ejercicio 3 -----------------------------------------------------------
function Punto(x,y) {
    this.x=x;
    this.y=y;
}

// Ejercicio 4 -----------------------------------------------------------
function Casa(calle,num,cp) {
    this.calle=calle;
    this.num=num;
    this.cp=cp;

    this.setNumero = (num) => {this.num=num};
    this.setCalle = (calle) => {this.calle=calle};
    this.setCodigoPostal = (cp) => {this.cp=cp};

    this.imprimeCalle = () => this.calle;
    this.imprimeNumero = () => this.num;
    this.imprimeCodigoPostal = () => this.cp;

    document.write("Nueva casa en calle: " + this.calle + ", nº: " + this.num + ", CP: " + this.cp + "<br><br>");
}

// Ejercicio 5 -----------------------------------------------------------
function Alumno(id, nombre) {
    this.id = id;
    this.nombre = nombre;
    this.notaMedia = 5.00;
}

function Colegio(nombre, numAulas) {
    this.nombre = nombre;
    this.numAulas = numAulas;
    this.datosAlumnos = [new Alumno(0,"alumno1"), new Alumno(1,"alumno2"), new Alumno(2,"alumno3")];
    this.numAlumnos = this.datosAlumnos.length;
    

    this.consultarNotaMedia = (id) => {
        this.datosAlumnos.forEach(element => {
            if (element.id==id) {
                document.write("Alumno: " + element.nombre + " Nota media: " + element.notaMedia + "<br><br>");
            }
        }
    )};

    this.modificarNotaMedia = (id, notaMedia) => {
        this.datosAlumnos.forEach(element => {
            if (element.id==id) {
                element.notaMedia = notaMedia;
                document.write("Alumno: " + element.nombre + " Nueva nota media: " + element.notaMedia + "<br><br>");
            }
        }
    )};

    this.verNumAlum = () => this.datosAlumnos.length;
    this.verNumAulas = () => this.numAulas;
}