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
    <div class="card mt-5 mb-2" style="width: 20rem;">
        <img src="${array[i].url_img}">
        <div class="card-body">
            <h5 class="card-title fw-bold text-center">${array[i].name}</h5>
        </div>
    </div>`;
  }
  document.getElementById("categories").innerHTML = card;
}

getCategories();
