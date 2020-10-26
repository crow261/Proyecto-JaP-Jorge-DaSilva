const CARRITO_DESAFIATE = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
let carrito;
//variable para mensaje final
var textoCortado;
//variables de calculos
var porcentaje = 0;
var cantidadsubtotal = 0;
var costodeporcentaje = 0;
var subtotal = 0;
var sumatotal = 0;
//variable para alternar validación de pagos
var formaPago = 0;
//por defecto en dólares
//var monedaActual = "USD";
//var monedas = 1;




//div con fila articulos, con for recorriendo el json de articulos, agregando fila del articulo y indice a las id
function itemsCarrito(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.articles.length; i++) {
        let productos = array.articles[i];

        htmlContentToAppend +=
            `<tr>
            <th scope="row" id="articulo">`+ productos.name + ` </th>
            <td id="imagen"> <img class="img-fluid img-thumbnail" src="`+ productos.src + `" alt="" width="50"</td>
            <td id="moneda">`+ productos.currency + ` </td>
            <td><span id="costo`+ [i] + `">` + productos.unitCost + `</span></td>
            <td id="cantidad"><input type="number" class="form-control" id="selector`+ [i] + `" onchange="actualizar()" min="0" value= ` + productos.count + `> </td>
            <td id="costoCant`+ [i] + `">` + 0 + `</td>
         </tr>
         `


        document.getElementById("articulos").innerHTML = htmlContentToAppend;
    }

}

//funcion calculo de subtotal a dolares(numericamente quedaba mejor que un número grande) y cantidad de articulos


function result(carrito) {
    let object = carrito.articles;
    let costo0 = document.getElementById('costo0').textContent;
    let costo1 = document.getElementById('costo1').textContent;
    let cantidad0 = document.getElementById('selector0').value;
    let cantidad1 = document.getElementById('selector1').value;
    //cambio de moneda a dol 
    if (object[0].currency == 'UYU') {
        costo0 = object[0].unitCost / 40;
    }
    if (object[1].currency == 'UYU') {
        costo1 = object[1].unitCost / 40;
    }
    //summa y escritura en el html 
    let resultado0 = cantidad0 * costo0;
    let resultado1 = cantidad1 * costo1;
    subtotal = resultado0 + resultado1;
    document.getElementById('costoCant0').innerHTML = `USD ` + resultado0;
    document.getElementById('costoCant1').innerHTML = `USD ` + resultado1;
    document.getElementById('subtotal').innerHTML = `USD ` + subtotal;
    //este valor se imprime en la tabla del total 
    document.getElementById('subtotal0').innerHTML = subtotal;

}




// PARTE GRUPAL: valida el campo de tipo de envio, en la tarea grupal fue con value 0,1,2. lo modifique para usarlo con un boleano, me costó bastante que quedara funcionando.
function validarEnvio() {

    var enviof = document.getElementsByName("envioform");
    var validar_envio = false;

    var i = 0;
    while (i < enviof.length) {
        if (enviof[i].checked) {
            validar_envio = true;

        }
        i++;
    }

    //desplega textos de validacion
    if (validar_envio == false) {
        document.getElementById("errorEnvio").innerHTML = "Debe seleccionar un tipo de envío";
        return validar_envio;
    } else {
        document.getElementById("errorEnvio").innerHTML = "";
        $('#modal').modal('show');
        return validar_envio;
    }
}
/* grupal 
while (validar_envio=false){
    if (enviof.checked){
        validar_envio=true;
     }
    
}*/

/*if (!validar_envio){
    document.getElementById("errorEnvio").innerHTML= "Debe seleccionar un tipo de envío";
    return validar_envio;
} else {
  document.getElementById("errorEnvio").innerHTML= "";
  $('#modal').modal('show');
    return validar_envio;
}*/







//calculo de costo de envio y escritura en la tabla

function costoEnvio(porcentajevar) {
    porcentaje = porcentajevar
    document.getElementsByName("envioform").value = porcentajevar;

    cantidadsubtotal = subtotal0.textContent;
    costodeporcentaje = cantidadsubtotal * porcentaje / 100;
    document.getElementById("envio").innerHTML = costodeporcentaje;
}

//suma del total
function Total() {

    sumatotal = parseFloat(cantidadsubtotal) + parseFloat(costodeporcentaje);
    document.getElementById("total").innerHTML = sumatotal;
}




//cambio moneda a pesos, por defecto imprime en USD.

function cambiodemoneda() {
    monedas = document.getElementById("monedass").value;
    if (monedas == 1) {
        monedaActual = "UYU";
        document.getElementById("cambio").innerHTML = monedaActual;
        cambioPesos = 40;
        costodeporcentajepesos = costodeporcentaje * cambioPesos;
        sumatotalpesos = sumatotal * cambioPesos;
        subtotalpesos = subtotal * cambioPesos;
        document.getElementById("envio").innerHTML = costodeporcentajepesos;
        document.getElementById("total").innerHTML = sumatotalpesos;
        document.getElementById("subtotal0").innerHTML = subtotalpesos;
    }
    if (monedas == 0) {
        monedaActual = "USD";
        document.getElementById("cambio").innerHTML = monedaActual;
        document.getElementById("envio").innerHTML = costodeporcentaje;
        document.getElementById("total").innerHTML = sumatotal;
        document.getElementById("subtotal0").innerHTML = subtotal;
    }
}








//funcion de onchange para actualizar al tocar el input selector
function actualizar() {
    result(carrito);
    costoEnvio(porcentaje);
    Total();
    cambiodemoneda();
}






//funciones para habilitar/desabilitar crédito/transferencia collapse
function desplegarCredito() {
    document.getElementById("tarjetas0").disabled = false;
    document.getElementById("nombre0").disabled = false;
    document.getElementById("numero0").disabled = false;
    document.getElementById("cod0").disabled = false;


    //transferencia
    document.getElementById("tarjetas1").disabled = true;
    document.getElementById("nombre1").disabled = true;
    document.getElementById("numero1").disabled = true;
    document.getElementById("cod1").disabled = true;
    formaPago = 1;
}

function desplegarTransferencia() {
    document.getElementById("tarjetas0").disabled = true;
    document.getElementById("nombre0").disabled = true;
    document.getElementById("numero0").disabled = true;
    document.getElementById("cod0").disabled = true;

    //transferencia
    document.getElementById("tarjetas1").disabled = false;
    document.getElementById("nombre1").disabled = false;
    document.getElementById("numero1").disabled = false;
    document.getElementById("cod1").disabled = false;
    formaPago = 2;
}




//validaciones

function validarMetodoPago() {
    if (formaPago == 1) {
        document.getElementById("errorPago").innerHTML = "";
        var error = "";
        tarjetas0 = document.getElementById("tarjetas0").value;
        nombre0 = document.getElementById("nombre0").value;
        numero0 = document.getElementById("numero0").value;
        cod0 = document.getElementById("cod0").value;
        if (tarjetas0 == "0" || nombre0 == "" || nombre0 == null || numero0 == "" || numero0 == null || cod0 == "" || cod0 == null) {
            error += `
            <h5>Debe llenar datos correctos de pago</h5>
            `
            document.getElementById("errorPago").innerHTML = error;
            return false;
        }

    }
    if (formaPago == 2) {
        document.getElementById("errorPago").innerHTML = "";
        var error = "";
        tarjetas1 = document.getElementById("tarjetas1").value;
        nombre1 = document.getElementById("nombre1").value;
        numero1 = document.getElementById("numero1").value;
        cod1 = document.getElementById("cod1").value;
        if (tarjetas1 == "0" || nombre1 == "" || nombre1 == null || numero1 == "" || numero1 == null || cod1 == "" || cod1 == null) {
            error += `
        <h5>Debe llenar datos correctos de pago</h5>
        `
            document.getElementById("errorPago").innerHTML = error;
            return false;
        }

    }
    if (formaPago == 0) {
        var error = "";
        error += `
        <h5>Debe seleccionar un método de pago</h5>
        `
        document.getElementById("errorPago").innerHTML = error;
        return false;
    }
    return true;
}



//funcion que valida los datos de envio, todos los campos a la vez. basado en el logín hecho previo
function validarDatosEnvio() {
    document.getElementById("errorEnv").innerHTML = "";
    var error = "";
    direccion = document.getElementById("direccion").value;
    pais = document.getElementById("pais").value;
    departamento = document.getElementById("departamento").value;
    localidad = document.getElementById("localidad").value;
    if (direccion == "" || direccion == null || pais == "" || pais == null || departamento == "" || departamento == null || localidad == "" || localidad == null) {
        error += `
            <h5>Debe llenar todos los datos de envío</h5>
            `
        document.getElementById("errorEnv").innerHTML = error;
        return false
    }

    return true;
}

//funcion que evalua los true/false de las validaciones y carga el texto del JSON
function completarCompra() {

    if (validarMetodoPago() == true && validarDatosEnvio() == true) {

        document.getElementById("completo").innerHTML = textoCortado;

    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARRITO_DESAFIATE).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data;
            itemsCarrito(resultObj.data);
            result(carrito)


        }
    });

    //llamar al JSON de compra exitosa
    getJSONData(CART_BUY_URL).then(function (response) {
        if (response.status === "ok") {
            exito = response.data;
            //pasar a texto el json y corto el inicio
            let textoCompleto = JSON.stringify(exito);
            textoCortado = textoCompleto.slice(8, 32);

        }

    });

    cambiodemoneda();

});