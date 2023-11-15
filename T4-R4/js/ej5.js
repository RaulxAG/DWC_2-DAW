window.onload = () => {
    var num = document.getElementById('numero');
    num.addEventListener('input', mostrarDatos);

    var titular = document.getElementById('titular');
    titular.addEventListener('input', mostrarDatos);

    var mes = document.getElementById('mes');
    mes.addEventListener('input', mostrarDatos);
    var anio = document.getElementById('anio');
    anio.addEventListener('input', mostrarDatos);

    var cvv = document.getElementById('cvv');

    document.getElementById('submit').addEventListener('click', comprobarCampos);

    function mostrarDatos() {
        const numeroInput = document.getElementById('numero')
        const pNumero = document.getElementById('pNumero');
        pNumero.textContent = numeroInput.value;

        const titularInput = document.getElementById('titular');
        const pTitular = document.getElementById('pTitular');
        pTitular.textContent = titularInput.value;

        const mesSelect = document.getElementById('mes');
        const spanMes = document.getElementById('spanMes');        
        spanMes.textContent = mesSelect.value;

        const anioSelect = document.getElementById('anio');
        const spanAnio = document.getElementById('spanAnio');
        spanAnio.textContent = anioSelect.value;
    }

    function comprobarCampos() {
        if (!validarNumero(num.value)) {
            num.style.backgroundColor = "lightcoral";
            num.style.border = "1px solid red";
            num.value = "";
            num.placeholder = "Siga el siguiente formato: 0000-0000-0000-0000";
        } else {
            num.style.backgroundColor = "";
            num.style.border = "";
        }

        if (!validarNombre(titular.value)) {
            titular.style.backgroundColor = "lightcoral";
            titular.style.border = "1px solid red";
            titular.value = "";
            titular.placeholder = "Nombre y apellidos en mayuscula y sin numeros";
        } else {
            titular.style.backgroundColor = "";
            titular.style.border = "";
        }

        if (!validarCvv(cvv.value)) {
            cvv.style.backgroundColor = "lightcoral";
            cvv.style.border = "1px solid red";
            cvv.value = "";
            cvv.placeholder = "Formato: 000";
        } else {
            cvv.style.backgroundColor = "";
            cvv.style.border = "";
        }
    }
}


function validarNumero(scadena) {
    const expR=new RegExp("^[0-9]{4,}[-][0-9]{4,}[-][0-9]{4,}[-][0-9]{4,}$");
    return  expR.test(scadena);
}

function validarNombre(scadena) {
    const expR=new RegExp("^[A-Z]+ [A-Z]+ [A-Z]+$");
    return  expR.test(scadena);
}

function validarCvv(scadena) {
    const expR=new RegExp("[0-9]{3,}$");
    return  expR.test(scadena);
}