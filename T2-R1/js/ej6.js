function nombreApellidos() {
    var nombreCompleto = prompt("Introduce tu nombre y apellidos:");

    var partes = nombreCompleto.split(" ");

    var nombre = partes[0];
    var apellido1 = partes[1];
    var apellido2 = partes.slice(2).join(" ");

    var tamanoNombreCompleto = nombreCompleto.length;
    console.log("Tamaño del nombre más los apellidos: " + tamanoNombreCompleto);

    console.log("Cadena en minúsculas: " + nombreCompleto.toLowerCase());
    console.log("Cadena en mayúsculas: " + nombreCompleto.toUpperCase());

    console.log("Nombre: " + nombre);
    console.log("Apellido 3: " + apellido1);
    console.log("Apellido 2: " + apellido2);
}