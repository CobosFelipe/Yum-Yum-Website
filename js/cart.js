function agregarEventos() {
  let divProducto = document.getElementsByClassName("product");
  for (let i = 0; i < divProducto.length; i++) {
    let button = divProducto[i];
  }

  //Agregamos funcionalidad al botón de eliminar item
  let btnCerrar = document.getElementsByClassName("btn-close");
  for (let i = 0; i < btnCerrar.length; i++) {
    let button = btnCerrar[i];
    button.addEventListener("click", function () {
      eliminar(i);
    });
  }

  //Agregamos funcionalidad al botón de agregar item
  let btnMas = document.getElementsByClassName("btnMas");
  for (let i = 0; i < btnMas.length; i++) {
    let button = btnMas[i];
    button.addEventListener("click", function () {
      agregar(i);
    });
  }

  //Agregamos funcionalidad al botón de eliminar item
  let btnMenos = document.getElementsByClassName("btnMenos");
  for (let i = 0; i < btnMenos.length; i++) {
    let button = btnMenos[i];
    button.addEventListener("click", function () {
      restar(i);
    });
  }
}

// DOM elementos de información de la tarjeta
let cantidad = document.getElementsByClassName("product-cant-cart");
let valor;

function restar(i) {
  let cantidad = productos[i].cantidad;
  if (cantidad < 1) {
    eliminar(i);
  } else {
    let valor = productos[i].precio;
    cantidad--;
    let total = cantidad * valor;
    productos[i].cantidad = cantidad;
    productos[i].total = total;
    localStorage.setItem("Cart", JSON.stringify(productos));
    mostrarProductos();
  }
}

function agregar(i) {
  let cantidad = productos[i].cantidad;
  let valor = productos[i].precio;
  cantidad++;
  let total = cantidad * valor;
  productos[i].cantidad = cantidad;
  productos[i].total = total;
  localStorage.setItem("Cart", JSON.stringify(productos));
  mostrarProductos();
}

function eliminar(e) {
  productos.splice(e, 1);
  localStorage.setItem("Cart", JSON.stringify(productos));
  mostrarProductos();
  console.log(productos);
}

function productoNegativo(e) {
  e.parentNode.remove();
}

// LocalStorage de los productos agregados
const productos = JSON.parse(localStorage.getItem("Cart")) || [];

//Mostrar los productos del localStorage
function mostrarProductos() {
  if (productos.length != 0) {
    let card = "";
    for (let i = 0; i < productos.length; i++) {
      card += `
    <div class="product">
      <img class="imgProduct" src="${productos[i].imagen}" />
      <p class="productName">${productos[i].nombre}</p>
      <p class="valor">$${productos[i].total.toLocaleString()}</p>
      <div class="cantidad d-flex mt-1">
        <button class="btnMenos">-</button>
        <input class="product-cant-cart" type="text" value="${productos[i].cantidad}" disabled>
        <button class="btnMas">+</button>
      </div>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    `;
    }
    document.getElementById("cartContainer").innerHTML = card;
  } else {
    let img = `
    <div class="cartEmpty">
      <img src="/img/Aqui pondría tus productos.jpg" />
    </div>
    `;
    document.getElementById("cartContainer").innerHTML = img;
  }
  // Llamar a btnAddCart después de un par de segundos
  setTimeout(agregarEventos, 200);
}

mostrarProductos();

// Capturar elementos en DOM
const buyButton1 = document.getElementsByClassName("buyButton1")[0];

function redireccion() {
  location.href = "/html/products.html";
}

buyButton1.addEventListener("click", redireccion);

// Funcion para la activacion de la animacion
const container = document.getElementById("container");
const btn = document.getElementsByClassName("buyButton2")[0];

btn.addEventListener("click", function () {
  setTimeout(activate, 1000);
});

function activate() {
  container.classList.add("active");

  // Después de x segundos, ejecuta la función deactivate y redireccion
  setTimeout(function () {
    deactivate();
  }, 3000);
  setTimeout(function () {
    redireccion();
  }, 2500);
}

function deactivate() {
  container.classList.remove("active");
}
