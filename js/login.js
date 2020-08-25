var usuarios = window.sessionStorage;
var usuario = document.getElementById("user").value;
usuarios.setItem("keyUser", usuario);

function validar() {
    var i = document.getElementById("user").value;
    var contenido = "";

    if (i == "" || i == null ) {
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

}
    

function enviar() {
    if (validar() == false) {
        return validar();
    } else {
        return link()
    }
}

function link() {
    if (!validar()) {
        return location.href ="index2.html"
    }
}








//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});