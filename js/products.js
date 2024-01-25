const PRODUCTS = [ {
    id: 1,
    title : "Aretes rosa",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 20.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 2,
    title : "manillas neon",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 30.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 3,
    title : "Earcuff chunky",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 10.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 4,
    title : "Llavero de dados",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 5.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 5,
    title : "Anillo de osito",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 20.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 6,
    title : "Collar heart",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 30.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 7,
    title : "Chocker personalizado",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 25.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 8,
    title : "Porta carnet Harry Potter",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 10.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 9,
    title : "Aretes chupeta de corazón",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 20.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
},
{
    id: 10,
    title : "Candongas personalizadas",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at harum odit enim aliquam. Harum error at quos libero consectetur porro labore, illum, doloremque iusto, placeat maiores nostrum ab voluptatum",
    color : "rosa",
    price : 25.000,
    stock : 500,
    imageUrl : "https://res.cloudinary.com/dvun7eeq1/image/upload/v1706200502/aretes_z5dcwj.jpg"
}
]
const productsStorage = JSON.parse(localStorage.getItem('products')) || PRODUCTS
const cardContainer = document.getElementById("products");
const form = document.querySelector("form")


//Renderizacion de productos en página
PRODUCTS.forEach(element =>{
    cardContainer.innerHTML += `
    <div class="card mb-2" style="width: 18rem;">
        <img src="${element.imageUrl}" class="card-img-top" alt="product">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p>${element.price}</p>
        </div>
    </div>
    `
})

//Vamos a aguardar el nuevo producto en el LocalStorage
form.addEventListener('submit', (e)=>{
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
        title : inputTitle,
        description : inputDescription,
        color : inputColor,
        price : inputPrice,
        stock : inputStock,
        imageUrl : inputImg
    })
    localStorage.setItem('products', JSON.stringify(productsStorage))
})


