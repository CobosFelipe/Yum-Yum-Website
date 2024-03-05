const url = "http://localhost:8080/api/v1/categories";

function getCategories() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      fillCategoriesSection(data);
    })
    .catch((error) => {
      console.log("Error consumiendo la api: " + error);
    });
}

function fillCategoriesSection(array) {
  let card = "";
  for (let i = 0; i < array.length; i++) {
    card += `
    <div class="card mb-4 me-2" style="width: 20rem;">
      <img src="${array[i].url_img}" class="card-img-top card_category" id="card_category_${array[i].idcategories}" alt="categoria" width="318px" height="318px">
      <div class="card-body">
        <h5 class="card-title fs-4 fw-bold text-center">${array[i].name}</h5>
      </div>
    </div>
    `;
  }
  document.getElementById("categories").innerHTML = card;

  getCategoriesByClass();

}

function getCategoriesByClass() {
  const cardsCategories = document.getElementsByClassName("card_category")
  for (let i = 0; i < cardsCategories.length; i++) {
    cardsCategories[i].addEventListener('click' , (e) =>{
      console.log('Clicked on:', e.currentTarget);
      let cardId = e.target.id
      let idCategory = cardId.split("_")[2]
      redirectToProducts(idCategory)
    })
  }
}

getCategories();


function redirectToProducts(categoryId) {
  console.log("Redirecting to products with categoryId:", categoryId);
  // Almacenar el ID de la categoría en localStorage
  localStorage.setItem('selectedCategoryId', categoryId);

  setTimeout(()=>{
     window.location.href = '/html/products.html';
  },1000)
}