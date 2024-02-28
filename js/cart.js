const cantidad = document.getElementsByClassName("cant");
const menos = document.getElementsByClassName("menos");
const mas = document.getElementsByClassName("mas");
const divProducto = document.getElementsByClassName("product");


for (let i = 0; i < divProducto.length; i++) {
  menos[i].addEventListener("click", function() {
    restar(cantidad[i], divProducto[i]);
  });
  mas[i].addEventListener("click", function() {
    agregar(cantidad[i]);
  });
}

function restar(cantidad, div) {
  if (cantidad.value > 1 && cantidad.value <= 10) {
    cantidad.value--;
    cantidad.innerText = `${cantidad.value}`;
  } else if (cantidad.value = 1) {
    //Funcion para eliminar el div
    eliminar(div);
  }
}

function agregar(cantidad) {
  if (cantidad.value > 0 && cantidad.value < 10) {
    cantidad.value++;
    cantidad.innerText = `${cantidad.value}`;
  }
}

function eliminar(e) {
  e.remove();
}

//Funcion para borrar el div
const btnCerrar = document.getElementsByClassName("btn-close");
for (let i = 0; i < btnCerrar.length; i++) {
  btnCerrar[i].addEventListener("click", function (e) {
    e.target.parentNode.remove();
  });
}

