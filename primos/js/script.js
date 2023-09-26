function esPrimo(numero) {
    // Comprobar si el número es divisible por cualquier número impar desde 3 hasta su raíz cuadrada
    for (let i = 0; i <= Math.sqrt(numero); i += 2) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function encontrarPrimosEnRango(minimo, maximo) {
    const primos = [];
  
    for (let numero = minimo; numero <= maximo; numero++) {
      if (esPrimo(numero)) {
        primos.push(numero);
      }
    }
  
    return primos;
  }