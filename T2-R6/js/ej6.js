function mostrarMarcador() {
    alert("Marcador: " + window.location.hash.substring(1));
}

function mostrarNombreHost() {
    alert("Nombre del host: " + window.location.hostname);
}

function mostrarURLCompleta() {
    alert("URL Completa: " + window.location.href);
}

function abrirNuevaDireccion() {
    var nuevaDireccion = prompt("Ingresa una nueva dirección:");
    if (nuevaDireccion) {
        window.location.href = nuevaDireccion;
    }
}

function mostrarProtocolo() {
    alert("Protocolo: " + window.location.protocol);
}

function recargarPagina() {
    window.location.reload();
}
