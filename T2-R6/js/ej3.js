function mostrarConfirmacion(opcion) {
    var mensaje = "Has seleccionado la opción: " + opcion;
    window.open("", "_blank", "width=300,height=200").document.write("<p>" + mensaje + "</p>");
}

var miVentana;

function abrirVentana() {
    miVentana = window.open("", "_blank", "width=300,height=200");
}

function verificarCierreVentana() {
    if (miVentana && miVentana.closed) {
        alert("Cerrada.");
    } else {
        alert("Abierta.");
    }
}

function cambiarLineaEstado() {
    var nuevoEstado = "Nuevo estado";
    // Deprecated
    // window.status = nuevoEstado;
    
    window.open("", "_blank", "width=300,height=200").document.write("<p>" + nuevoEstado + "</p>");
}

function abrirVentana2() {
  // Solicitar al usuario un nuevo nombre para la ventana
  var nuevoNombre = prompt("Por favor, ingresa un nuevo nombre para la ventana:");

  // Verificar si el usuario ingresó un nombre
  if (nuevoNombre !== null && nuevoNombre !== "") {
    // Abrir una nueva ventana con el nombre proporcionado
    miVentana = window.open("", nuevoNombre, "width=300,height=200");
    miVentana.document.write("<html><head><title>"+nuevoNombre+"</title></head></html>");
  } else {
    alert("No ingresaste un nombre válido para la ventana.");
  }
}

var ventanaNueva;

function abrirVentana3() {
  ventanaNueva = window.open("", "_blank", "width=300,height=200");
  ventanaNueva.document.write("<p>Esta es la nueva ventana</p>");
}

function cerrarVentanaActual() {
  window.close();
}

function cerrarVentanaNueva() {
  if (ventanaNueva && !ventanaNueva.closed) {
    ventanaNueva.close();
  } else {
    alert("La ventana nueva ya está cerrada o no se ha abierto.");
  }
}

var ventanaCambiable;

function abrirVentana4() {
  ventanaCambiable = window.open("", "_blank", "width=300,height=100");
  ventanaCambiable.document.write("<p>Esta es una ventana cambiable</p>");
}

function cambiarTamanioVentana(ancho, alto) {
    ventanaCambiable.resizeTo(ancho, alto);
}

var ventanaMovible;

function abrirVentana5() {
  ventanaMovible = window.open("", "_blank", "width=300,height=100");
  ventanaMovible.document.write("<p>Esta es una ventana movible</p>");
}

function moverVentana() {
  // Mover la ventana 50 píxeles hacia abajo y hacia la derecha
  ventanaMovible.moveBy(50, 50);
}

var ventanaPosicionada;

function abrirVentana6() {
  ventanaPosicionada = window.open("", "_blank", "width=300,height=100");
  ventanaPosicionada.document.write("<p>Esta es una ventana posicionada</p>");
}

function situarVentana() {
  ventanaPosicionada.moveTo(100, 100);
}

function moverBarraDesplazamiento() {
  document.documentElement.scrollTop += 10;
}

function desplazarBarraDesplazamiento(posicion) {
  document.documentElement.scrollTop = posicion;
}