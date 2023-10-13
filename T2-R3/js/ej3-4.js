function hipotenusa(cat1,cat2) {
    return Math.sqrt(((cat1*2)+(cat2*2)));
}

function hipotenusaContinuar() {
    var cateto1 = parseFloat(prompt("Ingresa el valor del primer cateto:"));
    var cateto2 = parseFloat(prompt("Ingresa el valor del segundo cateto:"));
            
    if (isNaN(cateto1) || isNaN(cateto2)) {
        alert("Por favor, ingresa valores numéricos.");
        return;
    }

    // Calcular la hipotenusa
    var resultado = hipotenusa(cateto1, cateto2);

    // Mostrar el resultado
    document.write("Hipotenusa: " + resultado + "<br>");
        
    // Preguntar al usuario si desea continuar
     var continuar = confirm("¿Quieres realizar otro cálculo?");
            
    // Si el usuario elige continuar, llamar a la función nuevamente
    if (continuar) {
        hipotenusaContinuar();
    }
}