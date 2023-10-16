var asientosDisponibles = ['first', 'first', 'first', 'first', 'first', 'turista', 'turista', 'turista', 'turista', 'turista'];

function reservarAsiento(tipo) {
    var ventana = window.open("", "_blank", "width=600,height=500");
    ventana.document.write('<h2>Tarjeta de Embarque</h2>');
    ventana.document.write('<p>Nombre: [Nombre de la Persona]</p>');
    ventana.document.write('<p>Clase: ' + tipo + '</p>');
}