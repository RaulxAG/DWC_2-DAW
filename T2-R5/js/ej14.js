function mostrarVentanas() {
    for (let i = 1; i <= 5; i++) {
        const nuevaVentana = window.open("", "", 'width=350,height=350');
        nuevaVentana.document.write("<p>Ventana " + i + "</p>");
        const cerrar = nuevaVentana.document.createElement("button");
        cerrar.innerHTML = "Cerrar";
        cerrar.onclick = function () {
            nuevaVentana.close();
        };
        nuevaVentana.document.body.appendChild(cerrar);
    }
}