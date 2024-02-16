const productsStorage = JSON.parse(localStorage.getItem("products")) || [];
const cardContainer = document.getElementById("products");
const form = document.querySelector("form");

//Vamos a aguardar el nuevo producto en el LocalStorage
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputId = document.getElementById("id").value;
  const inputTitle = document.getElementById("title").value;
  const inputDescription = document.getElementById("description").value;
  const inputPrice = document.getElementById("price").value;
  const inputStock = document.getElementById("stock").value;
  const inputColor = document.getElementById("color").value;
  const inputImg = document.getElementById("image").value;

  console.log(productsStorage);

  productsStorage.push({
    id: inputId,
    title: inputTitle,
    description: inputDescription,
    color: inputColor,
    price: inputPrice,
    stock: inputStock,
    imageUrl: inputImg,
  });
  localStorage.setItem("products", JSON.stringify(productsStorage));
  form.reset();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Se ha creado el producto exitosamente",
    showConfirmButton: false,
    timer: 1500,
  });
});

const url = '../json/products.json';

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
  for (let i = 0; i < 10; i++) {
    card += `<div class="card mb-2" style="width: 20rem;">
        <img src="${json[i].imageUrl}" class="card-img-top" alt="product" width="318px" height="318px">
        <div class="card-body">
            <h5 class="card-title">${json[i].title}</h5>
            <p>$${json[i].price.toLocaleString()}</p>
        </div>
    </div>
    `;
  }
  document.getElementById("products").innerHTML = card;
}

getProducts();
