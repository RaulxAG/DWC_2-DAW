window.onload = function geolocalizar() {
    geolocaliza();
}

function muestraposicion(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const mapLink = document.querySelector("#map-link");

    var map = L.map('map').setView([latitud, longitud], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
/*
    console.log(latitud);
    document.write("Latitud : " + latitud);
    document.write("<br>");
    document.write("<br><a href='"+ `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}` +"'>" + `Latitude: ${latitud} º, Longitude: ${longitud} º` + "</a>");*/
}

function geolocaliza() {
    navigator.geolocation.getCurrentPosition(muestraposicion);
}

function generaMapa() {
    navigator.geolocation.getCurrentPosition(creaMapa)
}

function creaMapa() {
    
}

/*navigator.geolocation.getCurrentPosition(function (position) {
        var coords = position.coords;

        document.write("Latitud: " + coords.latitude + "<br>Longitud: " + coords.longitude);
});*/