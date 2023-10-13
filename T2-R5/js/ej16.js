function abrirVentana() {

    var ventana = window.open("" , "", "width=500,height=400");
    ventana.document.write("<html><head><title>Ventana</title></head><body><button onclick=window.close()>Cerrar Ventana</button></body></html")


    var botonCerrar = document.createElement("button");
    botonCerrar.innerHTML = "Cerrar Ventana";
    botonCerrar.onclick = function () {
        ventana.close();
    };
    document.body.appendChild(botonCerrar);

    // añado un boton que enviará el texto
    var botonMensaje = document.createElement("button");
    botonMensaje.innerHTML = "Enviar un mensaje a la ventana secundaria";
    botonMensaje.onclick = function () {
        ventana.document.write(texto)
    };
    document.body.appendChild(botonMensaje);
}