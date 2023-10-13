var rango = 30;

function crearTabla() {
    for (let i = 1; i <= rango; i++) {
        var fila = document.createElement("tr");
        var num = document.createElement("td");
        var seno = document.createElement("td");

        num.innerHTML = i;
        seno.innerHTML = Math.sin(i);

        fila.style.border = "1px solid black";
        fila.appendChild(num);
        fila.appendChild(seno);

        document.getElementById("tabla").appendChild(fila);
    }
}