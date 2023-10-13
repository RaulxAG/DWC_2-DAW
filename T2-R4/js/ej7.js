function palindromo(cadena) {
    
    var cadenaFormateada = cadena.toLowerCase().replace(/\s/g, '');

    if (cadenaFormateada === cadenaFormateada.split('').reverse().join('')) {
        document.write("es palindromo");
    }else{
        document.write("no es palindromo");
    }
}