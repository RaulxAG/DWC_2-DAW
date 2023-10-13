function buscarPalabra() {
    var palabraBuscada = prompt("Introduce una palabra: ");

    var contenido = document.body.innerText.toLowerCase();

    if (contenido.includes(palabraBuscada.toLowerCase())) {
        alert("Existe");
    } else {
        alert("No existe");
    }
}