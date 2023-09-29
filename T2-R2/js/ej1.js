var duracion = 60;

function contador() {
  document.write(duracion+"<br>");

  duracion--;

  if (duracion < 0) {
    document.write("¡Tiempo terminado!");
  } else {
    setTimeout(contador, 1000);
  }
}