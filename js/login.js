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
const ConfirmPasswordinput = document.querySelector("#ConfirmPassword");
const input1 = document.querySelector(".input-password1")
const input2 = document.querySelector(".input-password2")

const validation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

const invalidFeed = document.querySelector('.invalid-feedback')

  newPassword.addEventListener('change', (e) => {
   validPassword(input1)
  })

ConfirmPasswordinput.addEventListener('blur', (e) => {
  validateConfirm(input1, input2)
  })

function validPassword (input) {
  if(!validation.test(input.value)){
    input.classList.add("is-invalid")
    input.classList.remove("is-valid")
  }
  else{
    input.classList.add("is-valid")
    input.classList.remove("is-invalid")
  }
}
function validateConfirm (password, password2) {
  if (password.value !== password2.value) {
    password2.classList.add("is-invalid")
    password2.classList.remove("is-valid")
  }
  else{
    password2.classList.add("is-valid")
    password2.classList.remove("is-invalid")
  }
}



