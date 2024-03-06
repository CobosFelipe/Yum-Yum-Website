const URL_BASE = "http://small-yak-production.up.railway.app/api/v1";

document.addEventListener("DOMContentLoaded", function () {
  
  const selectedCategoryId = localStorage.getItem('selectedCategoryId');

  if (selectedCategoryId) {
    getProducts(selectedCategoryId);
  }
  else{
    getProducts();
  } 
  localStorage.removeItem('selectedCategoryId');
});

function getProducts(categoryId = null) {
  let apiUrl = `${URL_BASE}/products`;
  if (categoryId) {
    apiUrl = `${URL_BASE}/categories/products/${categoryId}`;
  }
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      fillProductsDiv(json);
    })
    .catch((error) => {
      console.log("Error consumiendo la API: " + error);
    });
}

function getCategories() {
  fetch(`${URL_BASE}/categories`)
    .then((response) => response.json())
    .then((data) => {
      fillCategoriesNames(data);
    });
}

getCategories();

function getProductsByCategory(idCategory) {
  fetch(`${URL_BASE}/categories/products/${idCategory}`)
    .then((response) => response.json())
    .then((data) => {
      fillProductsDiv(data);
    });
}

function fillCategoriesNames(array) {
  let categories = `<li><a class="dropdown-item btn_id" href="#" id="btn_id_0">Todos los productos</a></li>`;

  for (let i = 0; i < array.length; i++) {
    categories += `
        <li><a class="dropdown-item btn_id" href="#" id="btn_id_${array[i].idcategories}" >${array[i].name}</a></li>
        `;
  }
  document.getElementById("categories-buttons").innerHTML = categories;

  const categoriesBtns = document.getElementsByClassName("btn_id");
  for (let i = 0; i < categoriesBtns.length; i++) {
    categoriesBtns[i].addEventListener("click", (e) => {
      let idBtn = e.target.id;
      let idCategory = idBtn.split("_")[2];
      getProductsByCategory(idCategory);
    });
  }
  document.getElementById("btn_id_0").addEventListener("click", (e) => {
    getProducts();
  });
}

function getProductsByPrice() {
  fetch(`${URL_BASE}/products/price`)
  .then((response) => response.json())
  .then((data) => {
    fillProductsDiv(data);
  });
}

function getProductsByPriceDesc() {
  fetch(`${URL_BASE}/products/price/desc`)
  .then((response) => response.json())
  .then((data)=>{
    fillProductsDiv(data)
  })
}

function filterByPrice() {
  const filters = document.getElementsByClassName("priceFilter");
  for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click' , (e)=>{
      if (e.target.id == "asc") {
        getProductsByPrice();
      }
      else if(e.target.id == "desc"){
        getProductsByPriceDesc();
      }
    })
    
  }
}

filterByPrice();

function fillProductsDiv(json) {
  let card = "";

  for (let i = 0; i < json.length; i++) {
    card += `
    <div class="card mb-2" style="width:20rem;" >
      <img src="${json[i].url_img}" class="card-img-top detail_product" id="detail_product_${json[i].idproducts}" alt="product" width="318px" height="318px" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div class="card-body">
          <h5 class="card-title">${json[i].name}</h5>
          <p>$${json[i].price.toLocaleString()}</p>
          <button class="CartBtn">
          <span class="IconContainer"> 
            <img src="/svg/button-cart.svg">
          </span>
          <p class="text">Lo quiero</p>
        </button>
      </div>
    </div>
    `;
  }
  document.getElementById("products").innerHTML = card;

  getProductsByClass();

  // Llamar a btnAddCart después de un par de segundos
  setTimeout(btnAddCart, 500);
}

function getProductsByClass() {
  
  const imageElements = document.getElementsByClassName("detail_product");

  for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener("click", (e) => {
      let imgId = e.target.id;
      let productId = imgId.split("_")[2];
      fillModal(productId);
    });
  }
}

function fillModal (id) {
  let modalContent = "";
    fetch(`${URL_BASE}/products/${id}`)
    .then((response) => response.json())
    .then((data)=>{
        modalContent += `
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex justify-content-evenly">
              <img src="${data.url_img}" alt="product" width="318px" height="318px">
              <div class="p-3">
                <h3 class="fs-3 fw-bold">${data.name}</h3>
                <p class="fs-6">${data.description}</p>
                <p class="fs-5">Precio: ${data.price.toLocaleString()}</p>
                <div class="mb-5">
                  <button type="button" class="btn btn-dark">Añadir al carrito</button>
                </div>
              </div>
            </div>
          `
      document.getElementById("modal").innerHTML = modalContent;
    })
    .catch((error) => {
      console.error("Error obteniendo detalles del producto:", error);
    })
}

function btnAddCart() {
  // Funcionalidad para consumir los datos de la tarjeta
  let btnLoquiero = document.querySelectorAll(".CartBtn");
  // Recorrer los elementos dentro del arreglo de objetos
  for (let i = 0; i < btnLoquiero.length; i++) {
    btnLoquiero[i].addEventListener('click', addToCart);
  }
}

function addToCart(e) {
  // Variable para almacenar el acceso a los elementos de la card
  let cardImage = e.target.parentNode.parentNode.parentNode;
  let cardInfo = e.target.parentElement.parentNode;

  // Asignar valores en variables para acceder a los datos de la card, mas fácil
  let urlImage = cardImage.childNodes[1].src
  
  let nombreProducto = cardInfo.childNodes[1].innerHTML;
  let precioProducto = cardInfo.childNodes[3].innerHTML;
  precioProducto = parseFloat(precioProducto.replace(/[^\d-]/g, ''));
  let cantidad = 1;

  // Inicializando un localStorage
  const productsCart = JSON.parse(localStorage.getItem("Cart")) || [];
  
  // Agregar datos en el localStorage
  productsCart.push({
    nombre: nombreProducto,
    imagen: urlImage,
    cantidad: cantidad,
    precio: precioProducto,
    total: precioProducto,
  });
  console.log(productsCart);
  // Setear esos datos en el localStorage
  localStorage.setItem("Cart", JSON.stringify(productsCart));
  // Alerta para notificar que se agregó
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Se ha agregado el producto exitosamente",
    showConfirmButton: false,
    timer: 1500,
  });
}
