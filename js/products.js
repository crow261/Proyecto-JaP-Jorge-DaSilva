const ORDER_ASC_BY_COST = "-+";
const ORDER_DESC_BY_COST = "+-";
const ORDER_BY_PROD_REL = "Rel.";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;
/*var ProductsArray = []; */



/*var filtrados = []

function filtroPreciosMin() {
    for (let j = 0; j < products.cost.value; j++) {
        if (j % 2 == 0) { filtrados.push(j); }
    }
    alert(filtrados);
}*/

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            let aCost = parseInt(a.cost);
            let bCost = parseInt(b.cost);
            if ( aCost < bCost ){ return -1; }
            if ( aCost > bCost ){ return 1; }
            return 0;
        });

    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            let aCost = parseInt(a.cost);
            let bCost = parseInt(b.cost);
            if ( aCost > bCost ){ return -1; }
            if ( aCost < bCost ){ return 1; }
            return 0;
        });

    }else if (criteria === ORDER_BY_PROD_REL){
        result = array.sort(function(a, b) {
            let asoldCount = parseInt(a.soldCount);
            let bsoldCount = parseInt(b.soldCount);

            if ( asoldCount > bsoldCount ){ return -1; }
            if ( asoldCount < bsoldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}







function showProductsList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductsArray.length; i++) {
        let products = currentProductsArray[i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(products.cost) >= minCost))&&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(products.cost) <= maxCost))){

            htmlContentToAppend += `
        <a href="category-info.html" class="list-group-item list-group-item-action">
            <div class= "row">
                <div class= "col-3">
                    <img src= ${products.imgSrc} + ${products.description} + class="img-thumbnail">
                </div>
                 <div class="col">
                         <div class="d-flex w-100 justify-content-between">
                          <h4 class= "mb-1">${products.name}</h4>
                         ${products.cost} ${products.currency}
                         </div>
                     <p class= "mb-1">${products.description}</p>
                </div>
            </div>
         </a>
        `
        }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }

}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    //Muestro las categorías ordenadas
    showProductsList();
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
           /* ProductsArray = resultObj.data;*/
           
           sortAndShowProducts(ORDER_ASC_BY_COST, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByRel").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_REL);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

         showProductsList();
          
    });




    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCost = document.getElementById("rangeFilterCostMin").value;
        maxCost = document.getElementById("rangeFilterCostMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        showProductsList();
    });









});

