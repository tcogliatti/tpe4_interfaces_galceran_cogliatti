"use strict";


let boton = document.querySelector("#validar");
boton.addEventListener("click", validar_login);

function validar_login(){
    console.log("dentro de valid_")
    let user = document.querySelector("#user").value;
    let psw  = document.querySelector("#password").value;



    if (user == "Jorge" && psw == "interfaz") {
        document.querySelector("#aviso_usuario").innerHTML = "Validado, puede registrarse";
    } else {
        document.querySelector("#aviso_usuario").innerHTML = "Usuario o contraseña incorrecta";

    }

}