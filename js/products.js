const url = "../json/products.json";

function getProducts() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillProductsDiv(json.Products);
    })
    .catch((error) => {
      console.log("Error consumiendo la api: " + error);
    });
}

function fillProductsDiv(json) {
  let card = "";
  for (let i = 0; i < 12; i++) {
    card += `
    <div class="card mb-2" style="width: 20rem;">
      <img src="${json[i].imageUrl}" class="card-img-top" alt="product" width="318px" height="318px">
      <div class="card-body">
          <h5 class="card-title">${json[i].title}</h5>
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

  // Llamar a btnAddCart después de un par de segundos
  setTimeout(btnAddCart, 500);
}

getProducts();

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
