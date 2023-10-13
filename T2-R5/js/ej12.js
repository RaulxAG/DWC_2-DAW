function abrirVentana() {
    var nombre = prompt("Escribe un nombre para la ventana");

    var ventana = window.open("" , nombre, "width=500,height=400");
    ventana.document.write("<html><head><title>"+nombre+"</title></head><body><h1>"+nombre+"</h1></body></html")

    var botonCerrar = document.createElement("button");
    botonCerrar.innerHTML = "Cerrar Ventana";
    botonCerrar.onclick = function () {
        ventana.close();
    };
    document.body.appendChild(botonCerrar);
}