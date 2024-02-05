(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          console.log("no entra");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const cardRegistro = document.querySelector(".card-registro");
const cardLogin = document.querySelector(".card-login");
const btnRegistro = document.querySelector("#btn-registro");
const btnInicio = document.querySelector("#btn-login");

function framesRegistro() {
  const animacion = cardRegistro.animate(
    [
      //KeyFrames
      { transform: "rotateY(90deg)" },
      { transform: "rotateY(180deg)" },
    ],
    {
      //Options
      easing: "linear",
      iterations: 1,
      duration: 300, //miliseconds
    }
  );

  setTimeout(() => {
    cardLogin.classList.remove("d-none");
    cardRegistro.classList.add("d-none");
  }, "250");

  return animacion.finished;
}

function framesLogin() {
  const animacion = cardLogin.animate(
    [
      //KeyFrames
      { transform: "rotateY(90deg)" },
      { transform: "rotateY(180deg)" },
    ],
    {
      //Options
      easing: "linear",
      iterations: 1,
      duration: 300, //miliseconds
    }
  );

  setTimeout(() => {
    cardLogin.classList.add("d-none");
    cardRegistro.classList.remove("d-none");
  }, "300");

  return animacion.finished;
}

btnInicio.onclick = function () {
  framesRegistro();
};

btnRegistro.onclick = function () {
  framesLogin();
};
// function displace() {
//   frames()
//   .then((res)=>{
//     console.log(res);

//   })
// }
