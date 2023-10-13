function eliminarRepetidos(cadena) {
    let caracteresUnicos = new Set();
    
    let resultado = [];
    
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        
        if (caracter !== ' ') {
            if (!caracteresUnicos.has(caracter)) {
                resultado.push(caracter);
                caracteresUnicos.add(caracter);
            }
        }
    }
    
    let cadenaResultante = resultado.join('');
    
    document.write(cadenaResultante);
}