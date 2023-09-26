/*
Crea un programa que muestre el número de días que quedan desde hoy 
hasta las vacaciones de Navidad 

(19 de diciembre)
*/

function diasRestantesNavidad() {
    const hoy = new Date();
    const navidad = new Date(hoy.getFullYear(), 11, 19); // 11 representa diciembre (Empiezan en 0)

    document.write("<br>Ejercicio 1<br>");

    var diferenciaDias = 0;

    while (hoy < navidad) {
        hoy.setDate(hoy.getDate() + 1);
        diferenciaDias++;
    }

    return diferenciaDias;
}

/* 
Crea un programa que pida por parámetro tu cumpleaños en este formato YYYY-MM-DD, 
y muestre usando la consola de depuración del navegador todos los años 
en los que tu cumpleaños cae en domingo, hasta el año 2100.
*/

function cumpleDomingo(anio, mes, dia) {
    const anio2100 = new Date(2100,mes,dia);
    const cumple = new Date(anio,mes,dia);

    document.write("<br><br>Ejercicio 2<br>");

    while (cumple < anio2100) {
        cumple.setFullYear(cumple.getFullYear()+1);

        var diaSemana = cumple.getDay();
        console.log(cumple.getDay());
        
        if (diaSemana===0) {
            document.write("En el año "+cumple.getFullYear()+" cumples en Domingo<br>");
        }
        
    }

}

/*
Crea un programa que muestre la hora actual en los formatos siguientes: 
    1. 14:35:07 (hora detallada con minutos y segundos)
    2. Son las 14h y 35m
*/

function horaFormateada() {
    var hora = new Date();
    document.write("<br><br>Ejercicio 3<br>"+hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds());
}