function ecuacion2Grado() {
    // Pedir coeficientes
    var a = parseFloat(prompt("Ingrese el coeficiente a:"));
    var b = parseFloat(prompt("Ingrese el coeficiente b:"));
    var c = parseFloat(prompt("Ingrese el coeficiente c:"));
  
    // Calcular el discriminante
    var discriminante = b * b - 4 * a * c;
  
    // Verificar si hay soluciones reales
    if (discriminante < 0) {
      document.write("La ecuación no tiene soluciones reales.");
    } else if (discriminante === 0) {
      var solucionUnica = -b / (2 * a);
      document.write("La ecuación tiene una solución única: " + solucionUnica);
    } else {
      var raizDiscriminante = Math.sqrt(discriminante);
      var solucion1 = (-b + raizDiscriminante) / (2 * a);
      var solucion2 = (-b - raizDiscriminante) / (2 * a);
      document.write("Solución 1: " + solucion1);
      document.write("Solución 2: " + solucion2);
    }
}