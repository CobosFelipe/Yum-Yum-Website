function agregarEventos() {
  let divProducto = document.getElementsByClassName("product");
  for (let i = 0; i < divProducto.length; i++) {
    let button = divProducto[i];
  }

  //Agregamos funcionalidad al botón de eliminar item
  let btnCerrar = document.getElementsByClassName("btn-close");
  for (let i = 0; i < btnCerrar.length; i++) {
    let button = btnCerrar[i];
    button.addEventListener('click', eliminar)
  }

  //Agregamos funcionalidad al botón de agregar item
  let btnMas = document.getElementsByClassName("btnMas");
  for (let i = 0; i < btnMas.length; i++) {
    let button = btnMas[i];
    button.addEventListener('click', agregar)
  }

  //Agregamos funcionalidad al botón de eliminar item
  let btnMenos = document.getElementsByClassName("btnMenos");
  for (let i = 0; i < btnMenos.length; i++) {
    let button = btnMenos[i];
    button.addEventListener('click', restar)
  }
}

// DOM elementos de información de la tarjeta

let cantidad = document.getElementsByClassName("product-cant-cart");

function restar(e) {
  let btnMenos = e.target;
  let selector = btnMenos.parentElement;
  let cantidadActual = selector.getElementsByClassName('product-cant-cart')[0].value;
  console.log(cantidadActual);
  cantidadActual--;
  selector.getElementsByClassName('product-cant-cart')[0].value = cantidadActual;
}

function agregar(e) {
  let btnMas = e.target;
  let selector = btnMas.parentElement;
  let cantidadActual = selector.getElementsByClassName('product-cant-cart')[0].value;
  console.log(cantidadActual);
  cantidadActual++;
  selector.getElementsByClassName('product-cant-cart')[0].value = cantidadActual;
}

function eliminar(e) {
  e.target.parentNode.remove();
}

agregarEventos();