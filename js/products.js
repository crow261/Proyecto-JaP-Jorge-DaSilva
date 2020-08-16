


var categoriesArray = [];

function showProductList(obj) {

let htmlContentToAppend = "";
for( let i = 0; i < obj.length; i++) {
    let products = obj[i];

    htmlContentToAppend += `
    <div class= "card">
    <div class "card-details">
        <h2 class= "card-head"> ${products.cost} ${products.currency} </h2>
        <h1> ${products.name}</h1>
        <p> ${products.description}
        </br>
        Cantidad de unidades Vendidas ${products.soldCount}
        </p>
        <img src= "${products.imgSrc}">
            </div>
    </div>
    `
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}



}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if(resultObj.status === "ok")
        {
        categoriesArray = resultObj.data;
        
        showProductList(categoriesArray);
        }   
    });

});
