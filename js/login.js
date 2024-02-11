// Capturar los elementos inputs del form inicio de sesión
const loginEmailInput = document.getElementById("username");
const loginPasswordInput = document.getElementById("password");

// Capturar los elementos inputs del form registro
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const newPasswordInput = document.querySelector("#newPassword");
const confirmPasswordinput = document.querySelector("#ConfirmPassword");

//Expresion regular
const validationName = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
const validationPhone = /^\d{7,10}$/;
const validationEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validationPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

function validName(name) {
  if (!validationName.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  } else{
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
  }
}

function validPhone(phone) {
  if (!validationPhone.test(phone.value)) {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  } else{
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
  }
}

function validEmail(email) {
  if (!validationEmail.test(email.value)) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else{
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  }
}

function validPassword (password) {
  if(!validationPassword.test(password.value)){
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
  }
  else{
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  }
}

function validConfirm (password, password2) {
  if (!validationPassword.test(password2.value) || password.value !== password2.value) {
    password2.classList.add("is-invalid");
    password2.classList.remove("is-valid");
  }
  else{
    password2.classList.add("is-valid");
    password2.classList.remove("is-invalid")
  }
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        validName(nameInput);
        validPhone(phoneInput);
        validEmail(emailInput);
        validPassword(newPasswordInput);
        validConfirm(newPasswordInput, confirmPasswordinput);
      },
      false
    );
  });
  nameInput.addEventListener('input', () => {
    validName(nameInput);
  })

  phoneInput.addEventListener('input', () => {
    validPhone(phoneInput);
  })

  emailInput.addEventListener('input', () => {
    validEmail(emailInput);
  })

  newPasswordInput.addEventListener('input', () => {
    validPassword(newPasswordInput);
  })

  confirmPasswordinput.addEventListener('input', () => {
    validConfirm(newPasswordInput, confirmPasswordinput);
  })
})();

// Acá podría empezar la validacion del login

