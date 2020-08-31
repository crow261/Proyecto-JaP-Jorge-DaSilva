var miStorage = window.sessionStorage;
var usuario;


function validar() {
    document.getElementById("errorU").innerHTML = "";
    document.getElementById("errorP").innerHTML = "";
        var contenido = "";
        usuario = document.getElementById("user").value;
    if (usuario == "" || usuario == null ) {
        contenido += `
            <p>Debe ingresa un usuario </p>
            `
        document.getElementById("errorU").innerHTML = contenido;
        return false
    }
    var j = document.getElementById("pass").value;
    var contenido2 = "";
        if (j == "" || j == null ) {

        contenido2 += `
        <p>Debe ingresar una contraseña </p>
        `
        document.getElementById("errorP").innerHTML = contenido2;
        return false
    }
    return true;
}
    

function enviar() {
    var validado = validar();
    if ( validado==true){
        return link();
    }
}

function link() {
     miStorage.setItem("keyUser",usuario);
    return location.href ="index2.html";
}








//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});