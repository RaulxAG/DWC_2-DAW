function fotoAleatoria() {
    var imagen = document.createElement("img");

    var num = Math.floor(Math.random() * 3) + 1;

    imagen.src = "img/" + num + ".jpg";
    
    imagen.style.width = "50%";
    document.getElementById("imagen").appendChild(imagen);
}