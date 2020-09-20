var product = [];
<<<<<<< HEAD
var productList = [];
var relatedNumber= [];
=======

>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1

//1

function showProductImages(array) {

   let htmlContentToAppend = "";
   htmlContentToAppend += `

<<<<<<< HEAD
<div>
<div id="carouselExampleControls" class="carousel slide d-flex justify-content-center" data-ride="carousel" >
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="`+product.images[0]+`" alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="`+product.images[1]+`" alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="`+product.images[2]+`" alt="Third slide">
  </div>
  <div class="carousel-item ">
    <img class="d-block w-100" src="`+product.images[3]+`" alt="Third slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="`+product.images[4]+`" alt="Third slide">
=======

<div id="carouselExampleControls" class="carousel slide d-flex justify-content-center" data-ride="carousel" >
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-50 center" src="`+product.images[0]+`" alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-50 " src="`+product.images[1]+`" alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-50" src="`+product.images[2]+`" alt="Third slide">
  </div>
  <div class="carousel-item ">
    <img class="d-block w-50" src="`+product.images[3]+`" alt="Third slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-50" src="`+product.images[4]+`" alt="Third slide">
>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1
  </div>
  
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
<<<<<<< HEAD
</div>

</div>

=======
>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }


<<<<<<< HEAD









=======
>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1
//2

function showProductComments(array) {
    let htmlContentToAppend = ""; 

    for (let j = 0; j < array.length; j++) {
        let comments = array[j];
        //estrellas
        let puntos = comments.score;
        estrellas = (`<span class="fa fa-star checked"></span>`).repeat(puntos);
        estrellasnegras = (`<span class="fa fa-star"></span>`).repeat(5 - puntos);

        htmlContentToAppend += `
         <div class="container">    
    <hr>
    <div class="row comment">
        <div class="head">
            <small><strong class='user'>` + comments.user + `</strong>` + "  " + comments.dateTime + ` </small>
        </div>   
        <div class="row comment">
        <div>   
        `+ estrellas + `` + estrellasnegras + `
        <div>
        `+ comments.description + `
        </div>
        </div>
        </div>
    </div>
    <hr>
  </div>
  `

        document.getElementById("productComments").innerHTML = htmlContentToAppend;
    }

}




//parte grupal
function Comentario() {
    //clear div error
    document.getElementById("errorDiv").innerHTML = "";
    let nuevoArreglo = [];
    let comentario = "";
    let puntuacion = "";
    var today = new Date;
    comentario = document.getElementById("nuevoComentario").value;
    puntuacion = document.getElementById("punt").value;
    //validacion
    var error = "";
    if (puntuacion == "0" || comentario == "") {
        error += `<p style="color: red">Debe ingresa un comentario y una puntuación </p>
            `
        document.getElementById("errorDiv").innerHTML = error;
        //probar comentario en un alert         
    } else { alert(comentario + " " + puntuacion + " " + today); }
}



<<<<<<< HEAD
//productos relacionados

function relatedProducts(array){  
htmlContentToAppend="";
/*for (let k = 0; k < array; k++) {
  let relatedNumber = array[k];*/
for(k in array){
  let relatedNumber = array[k];
 let prodPosition = productList[relatedNumber]

htmlContentToAppend +=`
<div class="col">`+prodPosition.name+`<img src="`+prodPosition.imgSrc+`" alt="..." class="img-thumbnail rounded" ></div> 
`

document.getElementById("related").innerHTML = htmlContentToAppend;
}

}




=======
>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {


            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCosttHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
<<<<<<< HEAD
          
=======

>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCosttHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
<<<<<<< HEAD
            //numero de posición
            relatedNumber = product.relatedProducts;
=======
>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1


            //Muestro las imagenes en forma de galería
           showProductImages(product.images);
<<<<<<< HEAD
           
=======
            

>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1


        }


    });



    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {
            comments = result.data;

            let commentsHTML = document.getElementById("commentsLength");
            commentsHTML.innerHTML = comments.length;


            //Muestro los comentarios
            showProductComments(comments);
        }



    });
<<<<<<< HEAD
    
  

   getJSONData(PRODUCTS_URL).then(function(response){
        if(response.status === "ok"){
          productList = response.data;
          relatedProducts(product.relatedProducts);

          
        }

        });




    
=======



>>>>>>> 911312ce4433ea3fc6e5e245d16ce91ce39116b1

});