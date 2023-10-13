/**
 * Solicita al usuario el nombre de varias personas y luego muestra los nombres ordenados. Los 
 * nombres serán introducidos en una sola cadena separado cada nombre por coma. Utiliza el 
 * método split
*/
function ordenaNombres() {
    var nomIntroducidos = prompt("Introduce nombres separados por \',\'");
    var nombres = nomIntroducidos.split(","); 

    console.log(nombres);

    document.write(nombres.sort());
}