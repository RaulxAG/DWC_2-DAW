/* 
Realiza un script que pida un nombre y dos apellidos e 
indique el tiempo que se tardó en introducir los datos. 
La salida sería algo así como: En introducir Juan Torres Lago has tardado 25 segundos.
*/
function tiempoTranscurrido() {
    // Registra el tiempo inicial
    const tiempoInicial = new Date();

    // Solicita el nombre y apellidos al usuario
    const nombre = prompt("Por favor, introduce tu nombre:");
    const apellidos = prompt("Ahora, introduce tus apellidos:");

    // Registra el tiempo final
    const tiempoFinal = new Date();

    transcurrido = tiempoFinal-tiempoInicial;

    document.write("En introducir " + nombre + " " + apellidos + " has tardado " + transcurrido / 1000 + " segundos");
}