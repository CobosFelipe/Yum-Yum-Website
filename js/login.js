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

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//Validating password inputs
const newPassword = document.querySelector("#newPassword");
const validity = newPassword.validity;
console.log(validity);
const ConfirmPassword = document.querySelector("#ConfirmPassword");

const validation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

const invalidFeed = document.querySelector('.invalid-feedback')

  newPassword.addEventListener('blur', (e) => {
})

