function mostrarActualizacion() {
    var fechaActualizacion = "08/10/2023";
    document.getElementById("fechaActualizacion").innerHTML = "Última Actualización: " + fechaActualizacion;
}

function mostrarNombreDocumento() {
    var nombreDocumento = document.title;
    document.getElementById("nombreDocumento").innerHTML = "Nombre del documento: " + nombreDocumento;
}

function mostrarURL() {
    var url = document.URL;
    document.getElementById("url").innerHTML = "URL Completa: " + url;
}

