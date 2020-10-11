let carrito;
const CARRITO_DESAFIATE= "https://japdevdep.github.io/ecommerce-api/cart/654.json";




//div con fila articulos, con for recorriendo el json de articulos, agregando fila del articulo y indice a las id
function itemsCarrito(array){

    let htmlContentToAppend = "";    

    for(let i = 0; i < array.articles.length; i++){
        let productos = array.articles[i];    
        
        htmlContentToAppend += 
        `<tr>
            <th scope="row" id="articulo">`+ productos.name +` </th>
            <td id="imagen"> <img class="img-fluid img-thumbnail" src="`+ productos.src +`" alt="" width="50"</td>
            <td id="moneda">`+ productos.currency +` </td>
            <td><span id="costo`+[i]+`">`+productos.unitCost+`</span></td>
            <td id="cantidad"><input type="number" class="form-control" id="selector`+[i]+`" onchange="actualizar()" min="0" value= `+ productos.count +`> </td>
            <td id="costoCant`+[i]+`">`+ 0 +`</td>
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
        costo1 = object[1].unitCost /40;
    }
   //summa y escritura en el html 
   let resultado0 = cantidad0 * costo0;
   let resultado1 = cantidad1 * costo1;
   let subtotal = resultado0 + resultado1;
   document.getElementById('costoCant0').innerHTML =   `USD ` + resultado0 ;
   document.getElementById('costoCant1').innerHTML =   `USD ` + resultado1 ;
   document.getElementById('subtotal').innerHTML =   `USD ` + subtotal;
   document.getElementById('subtotal0').innerHTML =   `USD ` + subtotal;
}


//funcion de onchange para actualizar al tocar el input selector

function actualizar() {
    result(carrito);
}






//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CARRITO_DESAFIATE).then(function(resultObj){
    if (resultObj.status === "ok")
    {
        carrito = resultObj.data;
        itemsCarrito(resultObj.data);
        result(carrito)
        

    }
});
});

