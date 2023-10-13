let segundos = 5;

function actualizarContador() {
    const contadorElemento = document.getElementById('contador');
    contadorElemento.textContent = segundos;

    if (segundos === 0) {
        window.location.href = "https://www.pccomponentes.com";
    } else {
        segundos--;
        setTimeout(actualizarContador, 1000);
    }
}

setTimeout(actualizarContador, 1000);