/**
 * Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un 
 * color introducido por el usuario a través de un prompt se encuentra dentro del array o no
 */
function comprobarColor() {
    var colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

    var color = prompt("Introduce un color:");

    colores.forEach(element => {
        if (color == element) {
            document.write("El color es correcto");
        }
    });
}