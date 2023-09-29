function reloj() {
    var fechaActual = new Date();
    
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
    
    // Formatear las horas, minutos y segundos para que tengan siempre 2 dígitos
    // si son menor que 10 se agrega un 0 delante
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    
    var relojElemento = document.getElementById("divReloj");
  
    relojElemento.textContent = horas + ":" + minutos + ":" + segundos;
    
    setTimeout(reloj, 1000);
}