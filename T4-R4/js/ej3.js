var input = document.getElementById("username");

var lower = false;
var upper = false;
var minimum = false;

input.addEventListener('input' , () => {
    var valor = input.value;

    if (validarMinuscula(valor)) {
        lower = true;
    }else{
        lower = false;
    }


    if (lower===true) {
        document.getElementById("lowerCase").style.color = "lightgreen";
    }else{
        document.getElementById("lowerCase").style.color = "";
    }

    if (validarMayuscula(valor)) {
        upper = true;
    }else{
        upper = false;
    }


    if (upper===true) {
        document.getElementById("upperCase").style.color = "lightgreen";
    }else{
        document.getElementById("upperCase").style.color = "";
    }

    if (validarCaracteres(valor)) {
        minimum = true;
    }else{
        minimum = false;
    }


    if (minimum===true) {
        document.getElementById("minimumCharacters").style.color = "lightgreen";
    }else{
        document.getElementById("minimumCharacters").style.color = "";
    }

    if (lower === true && upper === true && minimum === true) {
        document.getElementById("boton").style.visibility = "visible";
    } else {
        document.getElementById("boton").style.visibility = "hidden";
    }
});

function validarMinuscula(scadena){
    const expR=new RegExp("[a-z]+");
    return  expR.test(scadena)
}

function validarMayuscula(scadena){
    const expR=new RegExp("[A-Z]+");
    return  expR.test(scadena)
}

function validarCaracteres(scadena){
    const expR=new RegExp("......");
    return  expR.test(scadena)
}