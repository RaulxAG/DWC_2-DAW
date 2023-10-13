function validateCreditCard(tarjeta) {
    document.write("Tarjeta introducida: " + tarjeta + "<br>");
    if (isNaN(tarjeta)) {
        document.write("ERROR : no es un numero valido");
    } else {
        if (tarjeta.length < 16 || tarjeta.length > 16) {
            document.write("debe haber 16 digitos");
        } else {
            var digitosUnicos = new Set(tarjeta);

            if (digitosUnicos.size < 2) {
                document.write("La tarjeta debe tener al menos dos dígitos diferentes.");
            } else {
                var ultimoDigito = tarjeta.charAt(tarjeta.length - 1);
                if (ultimoDigito = ultimoDigito % 2 === 1) {
                    document.write("El ultimo número debe ser par");
                } else {
                    var sumaTotal = 0;
                    for (let i = 0; i < tarjeta.length; i++) {
                        var digito = tarjeta.charAt(i);
                        sumaTotal += parseInt(digito);
                    }
                    if (sumaTotal < 16) {
                        document.write("La suma total de los dígitos debe superior a 16");
                    } else {
                        document.write(true);
                    }
                }
            }
        }
    }
}