window.onload = () => {
    var Name = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var phone = document.getElementById("Phone");
    var mail = document.getElementById("Email");
    var password = document.getElementById("Password");
    var confirmPassword = document.getElementById("confirmPassword");
    
    var submitButton = document.getElementById("submit");
    
    submitButton.addEventListener('click', () => {
        if (!validarNombre(Name.value)) {
            Name.style.backgroundColor = "lightcoral";
            Name.style.border = "1px solid red";
            Name.value = "";
            Name.placeholder = "El nombre solo puede tener letras";
        } else {
            Name.style.backgroundColor = "";
            Name.style.border = "";
        }

        if (!validarNombre(lastName.value)) {
            lastName.style.backgroundColor = "lightcoral";
            lastName.style.border = "1px solid red";
            lastName.value = "";
            lastName.placeholder = "El apellido solo puede tener letras";
        } else {
            lastName.style.backgroundColor = "";
            lastName.style.border = "";
        }

        if (!validarTelefono(phone.value)) {
            phone.style.backgroundColor = "lightcoral";
            phone.style.border = "1px solid red";
            phone.value = "";
            phone.placeholder = "El formato debe ser: 000-000-000";
        } else {
            phone.style.backgroundColor = "";
            phone.style.border = "";
        }

        if (!validarEmail(mail.value)) {
            mail.style.backgroundColor = "lightcoral";
            mail.style.border = "1px solid red";
            mail.value = "";
            mail.placeholder = "el mail debe ser @crowdrise.com";
        } else {
            mail.style.backgroundColor = "";
            mail.style.border = "";
        }

        if (!(password.value===confirmPassword.value)) {
            password.style.backgroundColor = "lightcoral";
            password.style.border = "1px solid red";
            password.value = "";
            password.placeholder = "las contraseñas no coinciden";

            confirmPassword.style.backgroundColor = "lightcoral";
            confirmPassword.style.border = "1px solid red";
            confirmPassword.value = "";
            confirmPassword.placeholder = "las contraseñas no coinciden";
        } else {
            password.style.backgroundColor = "";
            password.style.border = "";

            confirmPassword.style.backgroundColor = "";
            confirmPassword.style.border = "";
        }
    });
};

function validarNombre(scadena) {
    const expR=new RegExp("^[A-Za-z]+$");
    return  expR.test(scadena);
}

function validarTelefono(scadena) {
    const expR=new RegExp("^[0-9]{3,}[-]{1,}[0-9]{3,}[-]{1,}[0-9]{3,}$");
    return  expR.test(scadena);
}


function validarEmail(scadena) {
    const expR=new RegExp("^[A-Za-z0-9]+@crowdrise.com$");
    return  expR.test(scadena);
}