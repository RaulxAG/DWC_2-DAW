function consonantesInicio(cadena) {
    const consonantes = [];
    const vocales = [];

    // Eliminar espacios y separar consonantes de vocales
    cadena = cadena.replace(/\s/g, '');
    for (let char of cadena) {
        if ('aeiouAEIOU'.includes(char)) {
            vocales.push(char);
        } else {
            consonantes.push(char);
        }
    }

    // Unir consonantes y vocales
    const resultado = consonantes.join('') + vocales.join('');
    document.write(resultado);
}