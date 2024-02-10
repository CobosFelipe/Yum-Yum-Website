const PRODUCTS = [
  {
    id: 1,
    title: "Aretes rosa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 20000,
    stock: 500,
    imageUrl: "https://tiendadivinamujer.com/wp-content/uploads/2022/12/download-all-images-download-main-image-do_main-4.jpg",
  },
  {
    id: 2,
    title: "manillas neon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 30000,
    stock: 500,
    imageUrl: "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Earcuff chunky",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 10000,
    stock: 500,
    imageUrl: "https://whimsofgirls.com/10329-large_default/earcuff-chunky-de-rodio-x-unidad-.jpg",
  },
  {
    id: 4,
    title: "Llavero de dados",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 15000,
    stock: 500,
    imageUrl: "https://images.pexels.com/photos/1194036/pexels-photo-1194036.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Anillo de osito",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 20000,
    stock: 500,
    imageUrl: "https://images.pexels.com/photos/68900/pexels-photo-68900.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "Collar heart",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 30000,
    stock: 500,
    imageUrl: "https://images.pexels.com/photos/860009/pexels-photo-860009.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    title: "Chocker personalizado",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 25000,
    stock: 500,
    imageUrl: "https://citrineaccesorios.com/cdn/shop/products/Chockerfrutal2.jpg?v=1668889123&width=1445",
  },
  {
    id: 8,
    title: "Porta carnet Harry Potter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 10000,
    stock: 500,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_980855-MCO49749313342_042022-O.webp",
  },
  {
    id: 9,
    title: "Aretes chupeta de corazón",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 20000,
    stock: 500,
    imageUrl:
      "https://media.istockphoto.com/id/1209614213/es/foto/pendientes-de-perno-de-oro-rosa-en-forma-de-corazones-sobre-fondo-rosa.jpg?s=612x612&w=0&k=20&c=XdVPafqsmYp2IVcuQxeNABHkue4CL574JfugQumTxy8=",
  },
  {
    id: 10,
    title: "Candongas personalizadas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color: "rosa",
    price: 25000,
    stock: 500,
    imageUrl: "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg",
  },
];
const productsStorage = JSON.parse(localStorage.getItem("products")) || [];
const cardContainer = document.getElementById("products");
const form = document.querySelector("form");

//Renderizacion de productos en página
PRODUCTS.forEach((element) => {
  cardContainer.innerHTML += `
    <div class="card mb-2" style="width: 20rem;">
        <img src="${element.imageUrl}" class="card-img-top" alt="product" width="318px" height="318px">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p>$${element.price.toLocaleString()}</p>
        </div>
    </div>
    `;
});

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

const url = "http://127.0.0.1:5500/json/products.json";

function getProducts() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillProductsDiv(json.Products);
    })
    .catch((error) => {
      console.log("Error consumiendo la api");
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
  document.getElementById("products1").innerHTML = card;
}

getProducts();
