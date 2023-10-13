var duracion = 60;

function contador() {
  document.write(duracion+"<br>");

  duracion--;

  if (duracion < 0) {
    document.write("¡Tiempo terminado!");
    window.location.href = 'https://www.google.es/';
  } else {
    setTimeout(contador, 1000);
  }
}