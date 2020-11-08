var miStoragePerfil = window.localStorage;
var nombrePerfil = null;
var apellidosPerfil = null;
var edadPerfil = null;
var emailPerfil= null;
var telefonoPerfil= null;
var user
var myUserObj ={
    "nombres": null,
    "apellidos": null,
    "edad": null,
    "email": null,
    "telefono": null   
}


//funcion que guarda el value del campo a una variable y al Obj //disable campos
function guardarPerfil() {
    nombrePerfil = document.getElementById("nombreperfil").value;
    myUserObj.nombres = nombrePerfil;
    apellidosPerfil = document.getElementById("apellidosperfil").value;
    myUserObj.apellidos = apellidosPerfil;
    edadPerfil = document.getElementById("edadperfil").value;
    myUserObj.edad = edadPerfil;
    emailPerfil = document.getElementById("emailperfil").value;
    myUserObj.email = emailPerfil;
    telefonoPerfil = document.getElementById("telefonoperfil").value;
    myUserObj.telefono = telefonoPerfil;

    localStorage.setItem('user', JSON.stringify(myUserObj));
    document.getElementById("mensajeconfirmacion").innerHTML ="Sus datos han sido modificados"

    document.getElementById("nombreperfil").disabled = true;
    document.getElementById("apellidosperfil").disabled = true;
    document.getElementById("edadperfil").disabled = true;
    document.getElementById("emailperfil").disabled = true;
    document.getElementById("telefonoperfil").disabled = true;   
}
//boton de prueba para borrar storage
function borrarPerfil() {
    window.localStorage.clear();
}

//funcion que carga datos del storage 
function cargarPerfil() {
    myUserObj = JSON.parse(localStorage.getItem('user'));
    document.getElementById("nombreperfil").value = myUserObj.nombres;
    document.getElementById("apellidosperfil").value = myUserObj.apellidos;
    document.getElementById("edadperfil").value = myUserObj.edad;
    document.getElementById("emailperfil").value = myUserObj.email;
    document.getElementById("telefonoperfil").value = myUserObj.telefono;

}

//funcion que valida algunos campos requeridos, como nombre-apellido-email, todos los campos a la vez. basado en el carrito hecho previo
function validardatos() {
    document.getElementById("errorcamposvacios").innerHTML = "";
    var error = "";
    name = document.getElementById("nombreperfil").value;
    lastname = document.getElementById("apellidosperfil").value;
    mail = document.getElementById("emailperfil").value;
    
    if (name == "" || name == null|| lastname == "" || lastname == null || mail == "" || mail == null) {
        error += `
            Debe llenar todos los datos requeridos
            `
        document.getElementById("errorcamposvacios").innerHTML = error;
        return false
    }

    return true;
}

//funcion para validar campos rellenos y abre modal
function completarMoficicacion() {    
        if (validardatos() == true) {
            $('#modal').modal('show');           
        }
            }
//funcion para habilitar campos 
function habilitarCambios(){
    document.getElementById("nombreperfil").disabled = false;
    document.getElementById("apellidosperfil").disabled = false;
    document.getElementById("edadperfil").disabled = false;
    document.getElementById("emailperfil").disabled = false;
    document.getElementById("telefonoperfil").disabled = false;    
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  //funcion que carga el storage solo si hay datos(length distinto de cero)
  if(window.localStorage.length!== 0){cargarPerfil();

};
   

});