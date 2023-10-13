function aparicionesSubstr(cadena, subcadena) {
    const apariciones = [];
    let indice = cadena.indexOf(subcadena);
  
    while (indice !== -1) {
        apariciones.push(indice);
        indice = cadena.indexOf(subcadena, indice + 1);
      }
  
    document.write("La subcadena " + '"' + subcadena + '"' + " aparece en los indices " + apariciones);
  }