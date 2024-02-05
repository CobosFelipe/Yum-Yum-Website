// Example starter JavaScript for disabling form submissions if there are invalid fields
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

btnChangeForm.addEventListener('click', (e) => {
  // Agregar un pequeño retraso para permitir que las clases se eliminen antes de aplicar la transición
  setTimeout(() => {
    formLoginChange.classList.toggle("d-none");
    registerFormChange.classList.toggle("d-none");
  }, 1000);
});